/* ==========================================================================
   LingoBloom — core: storage adapter, app state, curriculum registry, utils
   Everything that must be replaceable by a backend later lives here.
   ========================================================================== */
window.LB = window.LB || {};

/* ----------------------------- tiny DOM utils ---------------------------- */
LB.$ = (sel, root) => (root || document).querySelector(sel);
LB.$$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
LB.el = function (tag, attrs, html) {
  const n = document.createElement(tag);
  if (attrs) for (const k in attrs) {
    if (k === 'class') n.className = attrs[k];
    else if (k === 'style') n.setAttribute('style', attrs[k]);
    else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), attrs[k]);
    else n.setAttribute(k, attrs[k]);
  }
  if (html != null) n.innerHTML = html;
  return n;
};
LB.esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
LB.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
LB.uid = () => Math.random().toString(36).slice(2, 10);
LB.today = function () { const d = new Date(); return d.toISOString().slice(0, 10); };
LB.daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);
LB.shuffle = function (arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
  return a;
};
LB.pick = function (arr, n, exclude) {
  const pool = arr.filter(x => !(exclude || []).includes(x));
  return LB.shuffle(pool).slice(0, n);
};
LB.same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

/* --------------------------- icon set (inline svg) ----------------------- */
LB.ICONS = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
  book: '<path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z"/><path d="M20 4h-7a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h7z"/>',
  brain: '<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V15a3 3 0 0 0 4 2.8V21"/><path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V15a3 3 0 0 1-4 2.8V21"/><path d="M12 3v18"/>',
  chat: '<path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.5-5A8 8 0 1 1 21 12z"/>',
  cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v11"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/>',
  chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  play: '<path d="M6 4l14 8-14 8z"/>',
  pause: '<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
  volume: '<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 8.5a5 5 0 0 1 0 7"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>',
  check: '<path d="m4 12 5 5L20 6"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  arrowBack: '<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  flame: '<path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s.5 1.5 1.5 1.5S12 8 12 3z"/>',
  flower: '<circle cx="12" cy="12" r="2.5"/><path d="M12 9.5c0-2 .8-4 0-6-.8 2 0 4 0 6z"/><path d="M14.5 12c2 0 4 .8 6 0-2-.8-4 0-6 0z"/><path d="M12 14.5c0 2-.8 4 0 6 .8-2 0-4 0-6z"/><path d="M9.5 12c-2 0-4 .8-6 0 2-.8 4 0 6 0z"/>',
  moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
  puzzle: '<path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v6h-3a2 2 0 1 0 0 4h3v8h-6v-3a2 2 0 1 0-4 0v3H5v-8h3a2 2 0 1 0 0-4H5V3h5z"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 5H5a3 3 0 0 0 3 5"/><path d="M16 5h3a3 3 0 0 1-3 5"/><path d="M12 13v4"/><path d="M9 21h6"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  write: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  sparkle: '<path d="M12 3v6M12 15v6M3 12h6M15 12h6"/>',
  code: '<path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  dots: '<circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  gift: '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18"/><path d="M12 9v12"/><path d="M12 9S9 3 6.5 5.5 12 9 12 9z"/><path d="M12 9s3-6 5.5-3.5S12 9 12 9z"/>',
  trophy2: '<path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3"/><path d="M7 5H4v2a3 3 0 0 0 3 3"/><path d="M12 13v5"/><path d="M8 21h8"/>'
};
LB.icon = function (name, cls) {
  const path = LB.ICONS[name] || LB.ICONS.sparkle;
  return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + path + '</svg>';
};

/* --------------------------- storage adapter ----------------------------- */
LB.store = {
  KEY: 'lingobloom.v1',
  cached: null,
  raw() {
    if (this.cached) return this.cached;
    let data = null;
    try { data = JSON.parse(localStorage.getItem(this.KEY) || 'null'); } catch (e) { data = null; }
    this.cached = data || this.defaults();
    return this.cached;
  },
  defaults() {
    return {
      version: 1,
      onboarded: false,
      settings: { uiLang: 'ar', targetLang: 'en', theme: 'light', sound: true, sfx: true, kidsMode: true, placement: null },
      progress: {},          // keyed by language code
      stats: { streak: 0, lastDay: '', stars: 0, reviews: 0, answers: 0, correct: 0, days: [] },
      tests: [],
      convDone: {},
      /* --- additive (v2): mistakes notebook + per-day activity counters --- */
      mistakes: {},          // { lang: { key: { n, w, r, at } } }
      daily: { day: '', speak: 0, review: 0, listen: 0, conv: 0 }
    };
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify(this.raw())); } catch (e) { /* private mode */ }
  },
  get(key) { return this.raw()[key]; },
  set(key, value) { this.raw()[key] = value; this.save(); },
  setSetting(k, v) { const s = this.raw().settings; s[k] = v; this.save(); },
  getSetting(k) { return this.raw().settings[k]; },
  wipe() {
    var keep = this.raw().settings || {};
    this.cached = this.defaults();
    this.cached.settings = Object.assign(this.defaults().settings, {
      uiLang: LB.i18n.lang, targetLang: LB.state.targetLang,
      theme: keep.theme || 'light', sfx: keep.sfx !== false, kidsMode: keep.kidsMode !== false
    });
    this.cached.onboarded = true;
    this.save();
  },

  /* --- per-language progress --- */
  lang(code) {
    const p = this.raw().progress;
    if (!p[code]) p[code] = { lessons: {}, srs: {}, words: {}, minutes: 0 };
    return p[code];
  },
  lessonState(code, lessonId) { return this.lang(code).lessons[lessonId] || null; },
  completeLesson(code, lessonId, score, total, vocabKeys) {
    const pg = this.lang(code);
    const prev = pg.lessons[lessonId];
    const stars = total ? Math.max(1, Math.round((score / total) * 3)) : 1;
    pg.lessons[lessonId] = {
      done: true, score: score, total: total,
      best: prev ? Math.max(prev.best || 0, score) : score,
      stars: prev ? Math.max(prev.stars || 0, stars) : stars,
      at: Date.now()
    };
    (vocabKeys || []).forEach(k => { pg.words[k] = pg.words[k] || { at: Date.now(), box: 0 }; this.srsAdd(code, k, true); });
    this.raw().stats.stars += stars;
    this.save();
    return pg.lessons[lessonId];
  },
  /* --- spaced repetition (Leitner boxes) --- */
  SRS_DAYS: [0, 1, 2, 4, 7, 15, 30],
  srsAdd(code, key, reset) {
    const pg = this.lang(code); const s = pg.srs[key] || { box: 0 };
    if (reset) s.box = 0;
    s.due = Date.now() + (this.SRS_DAYS[Math.min(s.box, this.SRS_DAYS.length - 1)] || 0) * 86400000 + 60000;
    s.added = s.added || Date.now();
    pg.srs[key] = s; this.save();
  },
  srsGrade(code, key, good) {
    const pg = this.lang(code); const s = pg.srs[key] || { box: 0 };
    s.box = good ? Math.min((s.box || 0) + 1, this.SRS_DAYS.length - 1) : 0;
    s.due = Date.now() + (this.SRS_DAYS[s.box] || 0) * 86400000 + 60000;
    s.reps = (s.reps || 0) + 1;
    if (!good) s.lapses = (s.lapses || 0) + 1;
    pg.srs[key] = s; this.save();
  },
  dueWords(code) {
    const pg = this.lang(code); const now = Date.now(); const out = [];
    for (const k in pg.srs) if ((pg.srs[k].due || 0) <= now) out.push(k);
    return out;
  },
  touchStreak() {
    const s = this.raw().stats; const today = LB.today();
    if (s.lastDay === today) return s.streak;
    s.streak = (s.lastDay && LB.daysBetween(s.lastDay, today) === 1) ? (s.streak || 0) + 1 : 1;
    s.lastDay = today;
    if (!s.days.includes(today)) s.days.push(today);
    this.save(); return s.streak;
  },
  addAnswer(ok) { const s = this.raw().stats; s.answers++; if (ok) s.correct++; this.save(); },
  addTest(rec) { this.raw().tests.push(rec); if (this.raw().tests.length > 60) this.raw().tests.shift(); this.save(); },
  addReview() { this.raw().stats.reviews++; this.bumpDaily('review'); this.save(); },

  /* --- additive v2 helpers: daily counters + mistakes notebook --- */
  dayKey() { return LB.today(); },
  daily() {
    var d = this.raw().daily;
    if (!d || d.day !== this.dayKey()) {
      this.raw().daily = d = { day: this.dayKey(), speak: 0, review: 0, listen: 0, conv: 0 };
      this.save();
    }
    return d;
  },
  bumpDaily(k, n) {
    var d = this.daily();
    d[k] = (d[k] || 0) + (n == null ? 1 : n);
    this.save();
    return d[k];
  },
  mistakesOf(code) {
    var m = this.raw().mistakes || (this.raw().mistakes = {});
    return m[code] || {};
  },
  mistakeAdd(code, key, wrong, right) {
    if (!key) return null;
    var m = this.raw().mistakes || (this.raw().mistakes = {});
    var bucket = m[code] || (m[code] = {});
    var row = bucket[key] || { n: 0, w: '', r: '', at: 0 };
    row.n++; row.w = wrong || row.w; row.r = right || row.r; row.at = Date.now();
    bucket[key] = row;
    this.save();
    return row;
  },
  mistakeClear(code, key) {
    var m = this.raw().mistakes || {};
    if (m[code] && m[code][key]) { delete m[code][key]; this.save(); }
  },
  weakKeys(code) {
    var pg = this.lang(code), out = [];
    for (var k in pg.srs) {
      var s = pg.srs[k] || {};
      if ((s.lapses || 0) > 0 && (s.box || 0) <= 1) out.push({ key: k, lapses: s.lapses || 0, box: s.box || 0 });
    }
    out.sort(function (a, b) { return b.lapses - a.lapses; });
    return out;
  }
};

/* ------------------------------ app state -------------------------------- */
LB.state = {
  targetLang: 'en',
  uiLang: 'ar',
  theme: 'light',
  route: { name: 'home', parts: [] }
};

/* --------------------- curriculum registry + normalizers ----------------- */
LB.LANGS = [];          // ordered list of language objects
LB.CURRICULUM = {};     // { code: { 'A0': {units:[...]}, ... } }
LB.PLANNED_LEVELS = ['A0', 'A1', 'A2', 'B1', 'B2', 'C1'];

LB.addLanguage = function (meta, levels) {
  const lang = Object.assign({
    code: meta.code, name: meta.name, native: meta.native, meaning: meta.meaning,
    flag: meta.flag, speech: meta.speech, dir: 'ltr', tone: meta.tone || 'blue',
    scene: meta.scene || '0%', rtl: !!meta.rtl
  }, meta);
  if (!LB.LANGS.some(l => l.code === lang.code)) LB.LANGS.push(lang);
  LB.CURRICULUM[lang.code] = LB.CURRICULUM[lang.code] || {};
  Object.keys(levels || {}).forEach(lvl => {
    const lv = levels[lvl];
    LB.CURRICULUM[lang.code][lvl] = {
      status: 'ready',
      label: lv.label || lvl,
      units: (lv.units || []).map((u, ui) => {
        u.id = u.id || (lang.code + '-' + lvl + '-u' + (ui + 1));
        u.lessons = (u.lessons || []).map((L, li) => LB.normLesson(L, lang, lvl, u, li));
        return u;
      })
    };
  });
  return lang;
};

/* A lesson is authored in a compact, readable shape and expanded here.
   Adding a lesson = adding one object to a data file. Nothing else. */
LB.normLesson = function (L, lang, level, unit, index) {
  const id = L.id || (lang.code + '-' + level + '-' + unit.id + '-l' + (index + 1));
  const V = (L.vocab || []).map((v, i) => LB.normVocab(v, id, i));
  const R = (L.related || []).map((v, i) => LB.normVocab(v, id + '-r', i));
  const E = (L.expressions || []).map((v, i) => LB.normVocab(v, id + '-e', i));
  const EX = (L.examples || []).map(e => LB.normEx(e));
  return {
    id: id, language: lang.code, level: level, unitId: unit.id, unitTitle: unit.title,
    topic: L.topic || unit.title, title: L.title, titleMeaning: L.titleMeaning || '',
    minutes: L.minutes || 12,
    goals: L.goals || { ar: [], en: [] },
    vocab: V, related: R, expressions: E, examples: EX,
    grammar: L.grammar || null,
    reading: L.reading || null,
    listening: (L.listening || []).map(x => ({ say: x[0], options: x[1], answer: x[2], sayAr: x[3] || '' })),
    speaking: (L.speaking || []).map(v => LB.normVocab(v, id + '-s', 0)),
    conversation: L.conversation ? LB.normConv(L.conversation) : null,
    alphabet: L.alphabet || null,
    exercises: L.exercises || [],
    writing: L.writing || null,
    order: index + 1,
    vocabKeys: function () { return V.concat(R).concat(E).map(v => v.key); }
  };
};
LB.normVocab = function (v, lessonId, i) {
  const arr = Array.isArray(v);
  const o = arr ? { t: v[0], m: v[1], pron: v[2], ex: v[3], exM: v[4], note: v[5] }
    : { t: v.t, m: v.m, pron: v.pron, ex: v.ex, exM: v.exM || v.exAr, note: v.note };
  o.id = lessonId + '#' + i;
  o.key = o.t;
  return o;
};
LB.normEx = function (e) {
  const arr = Array.isArray(e);
  const o = arr ? { t: e[0], m: e[1], pron: e[2], words: e[3] || null }
    : { t: e.t, m: e.m, pron: e.pron, words: e.words || null };
  return o;
};
LB.normConv = function (c) {
  return {
    setting: c.setting || '', settingMeaning: c.settingMeaning || '',
    lines: (c.lines || []).map(l => Array.isArray(l)
      ? { who: l[0], t: l[1], m: l[2], pron: l[3] || '' }
      : { who: l.who, t: l.t, m: l.m, pron: l.pron || '' }),
    vocab: (c.vocab || []).map(v => Array.isArray(v) ? { t: v[0], m: v[1] } : { t: v.t, m: v.m }),
    questions: (c.questions || []).map(q => Array.isArray(q)
      ? { q: q[0], qMeaning: q[1] || '', options: q[2], answer: q[3] }
      : { q: q.q, qMeaning: q.qMeaning || '', options: q.options, answer: q.answer })
  };
};

/* --------------------------- curriculum helpers -------------------------- */
LB.getLang = code => LB.LANGS.filter(l => l.code === code)[0] || LB.LANGS[0];
LB.levelsOf = function (code) { return Object.keys(LB.CURRICULUM[code] || {}); };
LB.unitsOf = function (code, level) {
  const l = (LB.CURRICULUM[code] || {})[level];
  return l ? l.units : [];
};
LB.allLessons = function (code) {
  const out = [];
  Object.keys(LB.CURRICULUM[code] || {}).forEach(lvl =>
    LB.unitsOf(code, lvl).forEach(u => u.lessons.forEach(L => out.push(L))));
  return out;
};
LB.findLesson = function (code, id) { return LB.allLessons(code).filter(L => L.id === id)[0] || null; };
LB.lessonIndex = function (code, id) {
  const all = LB.allLessons(code);
  for (let i = 0; i < all.length; i++) if (all[i].id === id) return i;
  return -1;
};
LB.nextLesson = function (code, id) {
  const all = LB.allLessons(code); const i = LB.lessonIndex(code, id);
  return (i >= 0 && i < all.length - 1) ? all[i + 1] : null;
};
LB.lessonCount = function (code) { return LB.allLessons(code).length; };
LB.plannedUnits = ['Foundations', 'Everyday Life', 'Real Life', 'Communication', 'Work & Study'];

/* real progress numbers only */
LB.progressOf = function (code) {
  const pg = LB.store.lang(code);
  const total = LB.lessonCount(code);
  let done = 0, scoreSum = 0, scoreCount = 0, stars = 0;
  for (const id in pg.lessons) {
    const r = pg.lessons[id];
    if (r.done) { done++; scoreSum += r.best || 0; scoreCount += r.total || 0; stars += r.stars || 0; }
  }
  return {
    done: done, total: total,
    percent: total ? Math.round((done / total) * 100) : 0,
    words: Object.keys(pg.words || {}).length,
    avg: scoreCount ? Math.round((scoreSum / scoreCount) * 100) : 0,
    stars: stars,
    srsCount: Object.keys(pg.srs || {}).length,
    due: LB.store.dueWords(code).length
  };
};
LB.unitProgress = function (code, unit) {
  const pg = LB.store.lang(code); let done = 0;
  unit.lessons.forEach(L => { if (pg.lessons[L.id] && pg.lessons[L.id].done) done++; });
  return { done: done, total: unit.lessons.length, percent: unit.lessons.length ? Math.round(done / unit.lessons.length * 100) : 0 };
};
LB.currentLessonId = function (code) {
  const all = LB.allLessons(code); const pg = LB.store.lang(code);
  if (!all.length) return null;
  for (let i = 0; i < all.length; i++) if (!pg.lessons[all[i].id] || !pg.lessons[all[i].id].done) return all[i].id;
  return all[all.length - 1].id;
};
LB.learnedWords = function (code) {
  const pg = LB.store.lang(code); const out = [];
  LB.allLessons(code).forEach(L => {
    L.vocab.concat(L.related).concat(L.expressions).forEach(v => {
      if (pg.words[v.key]) out.push({ v: v, lesson: L, srs: pg.srs[v.key] || null });
    });
  });
  return out;
};

/* ====== robustness layer (additive): legacy/partial stored state must never break a page ====== */
(function () {
  var origLang = LB.store.lang.bind(LB.store);
  LB.store.lang = function (code) {
    var pg = origLang(code);
    if (!pg || typeof pg !== 'object') return pg;
    if (!pg.lessons || typeof pg.lessons !== 'object') pg.lessons = {};
    if (!pg.words || typeof pg.words !== 'object') pg.words = {};
    if (!pg.srs || typeof pg.srs !== 'object') pg.srs = {};
    return pg;
  };
  var origGet = LB.store.get.bind(LB.store);
  LB.store.get = function (k, d) {
    var v = origGet(k);
    if (v === undefined || v === null) {
      var def = LB.store.defaults();
      if (def && Object.prototype.hasOwnProperty.call(def, k)) v = def[k];
    }
    return v;
  };
  var origLearned = LB.learnedWords;
  LB.learnedWords = function (code) {
    try { return origLearned(code) || []; } catch (e) { return []; }
  };
})();
