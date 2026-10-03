/* ==========================================================================
   LingoBloom — speech: native pronunciation (Web Speech) + speaking practice
   ========================================================================== */
window.LB = window.LB || {};

LB.speech = {
  voices: [],
  ready: false,
  supported: typeof window !== 'undefined' && 'speechSynthesis' in window,

  init() {
    if (!this.supported) return;
    const load = () => {
      try { this.voices = window.speechSynthesis.getVoices() || []; } catch (e) { this.voices = []; }
      this.ready = this.voices.length > 0;
    };
    load();
    if (typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
      window.speechSynthesis.onvoiceschanged = load;
    }
    setTimeout(load, 600);
  },

  /* pick the best voice for a BCP-47 tag like fr-FR */
  voiceFor(tag) {
    const list = this.voices.length ? this.voices : (function () { try { return window.speechSynthesis.getVoices() || []; } catch (e) { return []; } })();
    if (!list.length) return null;
    const base = String(tag || '').toLowerCase();
    const exact = list.filter(v => String(v.lang).toLowerCase().replace('_', '-') === base);
    if (exact.length) {
      const local = exact.filter(v => v.localService);
      return (local.length ? local : exact)[0];
    }
    const short = base.split('-')[0];
    const loose = list.filter(v => String(v.lang).toLowerCase().indexOf(short) === 0);
    return loose.length ? loose[0] : null;
  },

  /* speak text in a language; returns a promise-ish via callbacks */
  say(text, langTag, opts) {
    opts = opts || {};
    if (!this.supported || !text) { opts.onend && opts.onend(false); return null; }
    try { window.speechSynthesis.cancel(); } catch (e) { }
    if (LB.store.getSetting('sound') === false && !opts.force) { opts.onend && opts.onend(false); return null; }
    const u = new SpeechSynthesisUtterance(String(text));
    const v = this.voiceFor(langTag);
    if (v) u.voice = v;
    u.lang = langTag || 'en-US';
    u.rate = opts.rate || 0.85;      // a little slower for learners
    u.pitch = opts.pitch || 1;
    u.volume = 1;
    if (opts.onend) { u.onend = () => opts.onend(true); u.onerror = () => opts.onend(false); }
    try { window.speechSynthesis.speak(u); } catch (e) { opts.onend && opts.onend(false); return null; }
    return u;
  },

  saySequence(items, gapMs, onDone) {
    /* items: [{text, lang}] */
    if (!this.supported || !items.length) { onDone && onDone(); return; }
    try { window.speechSynthesis.cancel(); } catch (e) { }
    const gap = gapMs == null ? 550 : gapMs;
    let i = 0;
    const next = () => {
      if (i >= items.length) { onDone && onDone(); return; }
      const it = items[i++];
      this.say(it.text, it.lang, { onend: () => setTimeout(next, gap) });
    };
    next();
  },

  stop() { if (this.supported) { try { window.speechSynthesis.cancel(); } catch (e) { } } }
};

/* ------------------------- recognition (speaking) ------------------------ */
LB.recognition = {
  SR: typeof window !== 'undefined' ? (window.SpeechRecognition || window.webkitSpeechRecognition) : null,
  supported() { return !!this.SR; },
  once(langTag, onResult, onError) {
    if (!this.SR) { onError && onError('unsupported'); return null; }
    const r = new this.SR();
    r.lang = langTag || 'en-US';
    r.interimResults = false;
    r.maxAlternatives = 3;
    let done = false;
    r.onresult = e => {
      done = true;
      const alts = [];
      try {
        for (let i = 0; i < e.results[0].length; i++) alts.push(e.results[0][i].transcript);
      } catch (err) { }
      onResult && onResult(alts);
    };
    r.onerror = ev => { if (!done) onError && onError(ev.error || 'error'); };
    r.onend = () => { if (!done) onError && onError('noresult'); };
    try { r.start(); } catch (e) { onError && onError('start'); return null; }
    return r;
  },

  /* tolerance scoring: how much of the target the learner actually said */
  score(target, heard) {
    const norm = s => String(s || '').toLowerCase()
      .replace(/[.,!?¿¡;:"'’`\-–—]/g, ' ')
      .replace(/\s+/g, ' ').trim();
    const t = norm(target).split(' ').filter(Boolean);
    const h = norm(heard).split(' ').filter(Boolean);
    if (!t.length) return 0;
    let hit = 0;
    const pool = h.slice();
    t.forEach(w => {
      const i = pool.findIndex(x => x === w || (w.length > 4 && (x.indexOf(w) === 0 || w.indexOf(x) === 0)));
      if (i > -1) { hit++; pool.splice(i, 1); }
    });
    return Math.round((hit / t.length) * 100);
  }
};
