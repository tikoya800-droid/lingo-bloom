/* ==========================================================================
   LingoBloom — placement test UI (additive layer, loaded right after js/ux.js)
   A self-contained 15-question test drawn from the REAL curriculum of the
   chosen language: A0 letters → A1 vocabulary → listening → sentence building.
   It ends with a suggested level and two choices: accept it, or start at A0.
   Reuses the existing store, speech, engine helpers and the existing CSS
   classes (.option, .feedback, .bar, .card, .btn) — no new design language.
   ========================================================================== */
(function () {
  function t(k) { return LB.t ? LB.t(k) : k; }
  function esc(s) { return LB.esc == null ? String(s == null ? '' : s) : LB.esc(s); }

  function poolOf(code) { try { return LB.engine.meaningPool(code) || []; } catch (e) { return []; } }

  function firstLesson(code, level) {
    var units = [];
    try { units = LB.unitsOf(code, level) || []; } catch (e) { units = []; }
    for (var i = 0; i < units.length; i++) {
      var ls = units[i].lessons || [];
      if (ls.length) return ls[0].id;
    }
    var all = [];
    try { all = LB.allLessons(code) || []; } catch (e) { all = []; }
    for (var j = 0; j < all.length; j++) if (all[j].level === level) return all[j].id;
    return all.length ? all[0].id : null;
  }

  function build15(code) {
    var all = LB.allLessons(code) || [];
    var content = all.filter(function (L) { return !(L.alphabet && L.alphabet.length); });
    var alpha = all.filter(function (L) { return L.alphabet && L.alphabet.length; });
    var pool = poolOf(code);
    var qs = [];

    /* 1) A0 letters — the true entry point for a beginner / child */
    for (var i = 0; i < 3 && alpha.length; i++) {
      var A = alpha[i % alpha.length];
      var q = (i % 2 === 0) ? LB.engine.alphaWordChoice(A) : LB.engine.alphaListen(A);
      if (!q && LB.engine.alphaLetterChoice) q = LB.engine.alphaLetterChoice(A);
      if (q) { q.level = 'A0'; qs.push(q); }
    }

    /* 2) vocabulary → meaning, spread over every level that really exists */
    var levels = LB.levelsOf(code) || ['A0'];
    levels.forEach(function (lvl) {
      var ls = content.filter(function (L) { return L.level === lvl && L.vocab && L.vocab.length; });
      LB.shuffle(ls).slice(0, 3).forEach(function (L) {
        var v = L.vocab[Math.floor(Math.random() * L.vocab.length)];
        if (!v) return;
        var wrong = pool.filter(function (p) { return p.m !== v.m; }).map(function (p) { return p.m; });
        wrong = LB.shuffle(wrong).slice(0, 3);
        var labels = LB.shuffle(wrong.concat([v.m]));
        qs.push({
          type: 'choice', kind: 'vocab', level: lvl, say: v.t,
          prompt: v.t, promptSub: v.pron || '', promptAr: t('exercise.choose'),
          options: labels.map(function (x) { return { label: x }; }),
          answer: labels.indexOf(v.m), explain: v.t + ' = ' + v.m
        });
      });
    });

    /* 3) listening comprehension from real lesson audio data */
    var withL = content.filter(function (L) { return L.listening && L.listening.length; });
    LB.shuffle(withL).slice(0, 2).forEach(function (L) {
      var l = LB.shuffle(L.listening)[0];
      if (!l || !l.options) return;
      qs.push({
        type: 'listen', kind: 'listen', level: L.level, say: l.say,
        prompt: '🎧', promptSub: '', promptAr: t('exercise.listen'),
        options: l.options.map(function (o) { return { label: o }; }),
        answer: l.answer, explain: l.say, explainSub: l.sayAr || ''
      });
    });

    /* 4) sentence building from real examples */
    var withE = content.filter(function (L) { return L.examples && L.examples.length; });
    LB.shuffle(withE).slice(0, 4).forEach(function (L) {
      var ex = LB.shuffle(L.examples.filter(function (e) { return e && e.t; }))[0];
      if (!ex) return;
      var words = String(ex.t).split(/\s+/).filter(Boolean);
      if (words.length < 3 || words.length > 7) return;
      qs.push({
        type: 'order', kind: 'order', level: L.level, promptAr: t('exercise.order'),
        prompt: ex.ar || '', promptSub: '', answer: words.slice(),
        bank: LB.shuffle(words.slice()), say: ex.t
      });
    });

    /* de-duplicate, order easy → hard, and guarantee exactly 15 items */
    var seen = {}, out = [];
    qs.forEach(function (q) {
      var k = q.type + '|' + (q.prompt || '') + '|' + (q.say || '') + '|' + (q.answer || '');
      if (!seen[k]) { seen[k] = 1; out.push(q); }
    });
    var order = {}; (LB.PLANNED_LEVELS || ['A0', 'A1', 'A2', 'B1', 'B2', 'C1']).forEach(function (l, i) { order[l] = i; });
    out.sort(function (a, b) { return (order[a.level] || 0) - (order[b.level] || 0); });
    var k2 = 0;
    while (out.length < 15 && out.length && k2 < 80) {
      var src = out[k2 % out.length], clone = JSON.parse(JSON.stringify(src));
      clone.__rep = true; out.push(clone); k2++;
    }
    return out.slice(0, 15).map(function (q, i) { q.n = i + 1; return q; });
  }

  function suggest(code, answers) {
    var order = {}; (LB.PLANNED_LEVELS || ['A0', 'A1', 'A2', 'B1', 'B2', 'C1']).forEach(function (l, i) { order[l] = i; });
    var available = (LB.levelsOf(code) || ['A0']).slice();
    var score = answers.filter(function (a) { return a.ok; }).length;
    var byLevel = {}, highest = 'A0';
    answers.forEach(function (a) {
      var lvl = a.level || 'A0';
      byLevel[lvl] = byLevel[lvl] || { ok: 0, n: 0 };
      byLevel[lvl].n++; if (a.ok) byLevel[lvl].ok++;
    });
    Object.keys(byLevel).forEach(function (l) {
      var r = byLevel[l];
      if (r.n && r.ok / r.n >= 0.6 && (order[l] || 0) > (order[highest] || 0)) highest = l;
    });
    if (score >= 13) highest = available[available.length - 1] || 'A0';
    if (score <= 4) highest = 'A0';
    if (available.indexOf(highest) === -1) highest = available[available.length - 1] || 'A0';
    return { score: score, total: answers.length, level: highest, byLevel: byLevel, available: available };
  }

  function icon(n, c) { return LB.icon ? LB.icon(n, c) : ''; }

  LB.pages.placement.wire = function (root, r) {
    var code = r.lang || LB.state.targetLang;
    var lang = LB.getLang(code);
    var host = root.querySelector('#lb-runner');
    var out = root.querySelector('#lb-place-result');
    if (!host) return;
    var qs = build15(code);
    if (!qs.length) { host.innerHTML = '<p class="muted">' + esc(t('empty.soon')) + '</p>'; return; }

    var idx = 0, answers = [], answered = false;

    function bar(pct) {
      return '<div class="bar" style="margin-top:.8rem"><i style="width:' + pct + '%"></i></div>' +
        '<div class="row-between small muted" style="margin-top:.35rem"><span>' +
        idx + ' / ' + qs.length + '</span><span>' + pct + '%</span></div>';
    }

    function paint() {
      var q = qs[idx];
      answered = false;
      var opts = '';
      if (q.type === 'choice' || q.type === 'listen') {
        opts = '<div class="stack" data-options style="margin-top:.9rem">' + q.options.map(function (o, i) {
          return '<button class="option" data-i="' + i + '"><span class="opt-label">' + esc(o.label) + '</span></button>';
        }).join('') + '</div>';
      } else {
        opts = '<div class="stack" style="margin-top:.9rem">' +
          '<div class="chip-row" data-slot style="min-height:52px;border:2px dashed var(--border);border-radius:16px;padding:.5rem"></div>' +
          '<div class="chip-row" data-bank style="margin-top:.5rem">' + LB.shuffle(q.bank).map(function (w) {
            return '<button class="chip">' + esc(w) + '</button>';
          }).join('') + '</div>' +
          '<div class="btn-row" style="margin-top:.6rem"><button class="btn btn-ghost btn-sm" data-clearorder>' + esc(t('action.retry')) + '</button>' +
          '<button class="btn btn-sm" data-checkorder>' + esc(t('action.check')) + '</button></div></div>';
      }
      host.innerHTML =
        '<div class="ex-head"><span class="pill-tag">' + icon('trophy', 'ic-sm') + ' ' + esc(t('place.title')) + '</span>' +
        '<span class="tiny muted">' + esc(lang.flag + ' ' + lang.name) + '</span></div>' +
        bar(Math.round((idx / qs.length) * 100)) +
        '<div class="ex-prompt" style="margin-top:1rem;display:flex;align-items:center;gap:.6rem;flex-wrap:wrap">' +
          '<span style="font-size:1.5rem;font-weight:900">' + esc(q.prompt || '') + '</span>' +
          (q.promptSub ? '<span class="muted small">' + esc(q.promptSub) + '</span>' : '') +
          (q.say ? '<button class="btn btn-ghost btn-sm" data-say>' + icon('speaker', 'ic-sm') + ' ' + esc(t('action.listen')) + '</button>' : '') +
        '</div>' +
        (q.promptAr ? '<p class="muted small" style="margin-top:.2rem">' + esc(q.promptAr) + '</p>' : '') +
        opts +
        '<div class="feedback hide" data-fb style="margin-top:.9rem"></div>' +
        '<div class="btn-row hide" data-foot style="margin-top:.8rem"><button class="btn btn-lg" data-next>' +
          esc(idx === qs.length - 1 ? t('action.finish') : t('action.next')) + ' ' + icon('arrow', 'ic-sm') + '</button></div>';

      var say = host.querySelector('[data-say]');
      if (say && q.say) say.addEventListener('click', function () { LB.speech.say(q.say, lang.speech); });

      var fb = host.querySelector('[data-fb]'), foot = host.querySelector('[data-foot]');

      function settle(ok, msg) {
        answered = true;
        fb.className = 'feedback ' + (ok ? 'ok' : 'no');
        fb.innerHTML = msg;
        foot.classList.remove('hide');
        answers.push({ ok: ok, level: q.level || 'A0' });
        try { LB.store.addAnswer(ok); } catch (e) { }
        if (ok) { try { LB.sfx.play('ok'); LB.store.touchStreak(); } catch (e) { } }
      }

      if (q.type === 'choice' || q.type === 'listen') {
        LB.$$('[data-options] .option', host).forEach(function (b) {
          b.addEventListener('click', function () {
            if (answered) return;
            var i = +b.getAttribute('data-i');
            LB.$$('[data-options] .option', host).forEach(function (x, xi) { if (xi === q.answer) x.classList.add('correct'); x.disabled = true; });
            var ok = i === q.answer;
            if (!ok) b.classList.add('wrong');
            settle(ok, (ok ? '✓ ' + t('exercise.correct') : '↻ ' + t('exercise.almost') + ' <strong>' + esc(q.options[q.answer].label) + '</strong>') +
              (q.explain ? '<div class="small" style="font-weight:600">' + esc(q.explain) + (q.explainSub ? ' — ' + esc(q.explainSub) : '') + '</div>' : ''));
          });
        });
      } else {
        var picked = [], slot = host.querySelector('[data-slot]');
        function paintSlot() {
          slot.innerHTML = picked.map(function (w, i) { return '<button class="chip" data-remove="' + i + '">' + esc(w) + '</button>'; }).join('');
          LB.$$('[data-remove]', slot).forEach(function (bb) {
            bb.addEventListener('click', function () { if (answered) return; picked.splice(+bb.getAttribute('data-remove'), 1); paintSlot(); });
          });
          LB.$$('[data-bank] .chip', host).forEach(function (c) { c.classList.toggle('picked', picked.indexOf(c.textContent) > -1); });
        }
        LB.$$('[data-bank] .chip', host).forEach(function (c) {
          c.addEventListener('click', function () {
            if (answered || c.classList.contains('picked')) return;
            picked.push(c.textContent); paintSlot();
          });
        });
        var clr = host.querySelector('[data-clearorder]');
        if (clr) clr.addEventListener('click', function () { if (!answered) { picked = []; paintSlot(); } });
        host.querySelector('[data-checkorder]').addEventListener('click', function () {
          if (answered) return;
          var ok = LB.checkOrder(picked, q.answer);
          settle(ok, (ok ? '✓ ' + t('exercise.correct') : '↻ ' + t('exercise.almost') + ' <strong>' + esc(q.answer.join(' ')) + '</strong>'));
        });
      }

      host.querySelector('[data-next]').addEventListener('click', function () {
        if (idx < qs.length - 1) { idx++; paint(); host.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        else finish();
      });
    }

    function finish() {
      var res = suggest(code, answers);
      var pct = res.total ? Math.round((res.score / res.total) * 100) : 0;
      try {
        var set = LB.store.raw().settings;
        set.placement = { lang: code, score: res.score, total: res.total, level: res.level, at: Date.now() };
        LB.store.save();
      } catch (e) { }
      out.innerHTML = '<div class="card stack">' +
        '<div class="place-head"><div><strong>' + esc(t('place.result')) + '</strong>' +
        '<div class="ex-prompt">' + res.score + ' / ' + res.total + ' — ' + pct + '%</div></div>' +
        '<span class="level-badge">' + icon('trophy', 'ic-sm') + ' ' + esc(t('place.suggest')) + ': ' + res.level + '</span></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '<div class="grid grid-3">' + Object.keys(res.byLevel).map(function (l) {
          var rr = res.byLevel[l];
          return '<div class="stat"><span class="muted small">' + esc(l) + '</span><b>' + rr.ok + '/' + rr.n + '</b></div>';
        }).join('') + '</div>' +
        '<p class="small muted">' + esc(t('place.suggestNote') || '') + '</p>' +
        '<div class="btn-row">' +
        '<button class="btn btn-lg" id="lb-place-accept">' + icon('play', 'ic-sm') + ' ' + esc('ابدأ من ' + res.level) + '</button>' +
        '<button class="btn btn-outline btn-lg" id="lb-place-a0">' + esc(t('place.fromA0') || 'ابدأ من A0') + '</button>' +
        '<button class="btn btn-ghost" id="lb-place-again">' + icon('refresh', 'ic-sm') + ' ' + esc(t('place.again') || '') + '</button>' +
        '</div></div>';
      try { LB.sfx.play('done'); LB.confetti(); } catch (e) { }
      function go(level) {
        var id = firstLesson(code, level);
        try { LB.setTargetLang(code); } catch (e) { }
        location.hash = id ? ('#/lesson/' + code + '/' + id) : ('#/learn/' + code + '/' + level);
      }
      var acc = out.querySelector('#lb-place-accept');
      var a0 = out.querySelector('#lb-place-a0');
      var ag = out.querySelector('#lb-place-again');
      if (acc) acc.addEventListener('click', function () { go(res.level); });
      if (a0) a0.addEventListener('click', function () { go('A0'); });
      if (ag) ag.addEventListener('click', function () { answers = []; idx = 0; out.innerHTML = ''; qs = build15(code); paint(); });
      out.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    paint();
  };
})();
