/* ==========================================================================
   LingoBloom — lesson player, exercise runner, review session and games
   ========================================================================== */
(function () {
  var t = LB.t, esc = LB.esc, I = LB.icon;
  var P = { code: null, lesson: null, parts: [], step: 0 };

  function sayBtn(text, langCode, cls) {
    return '<button class="btn btn-soft btn-icon ' + (cls || '') + '" data-say="' + esc(text) + '" data-lang="' + esc(langCode) + '" aria-label="' + t('action.listen') + '">' + I('volume') + '</button>';
  }

  /* ===================== lesson parts ===================== */
  function partList(lesson) {
    var list = [
      { key: 'alphabet', icon: 'sparkle', title: t('part.0') },
      { key: 'learn', icon: 'cards', title: t('part.1') },
      { key: 'related', icon: 'layers', title: t('part.2') },
      { key: 'expressions', icon: 'chat', title: t('part.3') },
      { key: 'grammar', icon: 'brain', title: t('part.4') },
      { key: 'examples', icon: 'sparkle', title: t('part.5') },
      { key: 'reading', icon: 'book', title: t('part.6') },
      { key: 'listening', icon: 'volume', title: t('part.7') },
      { key: 'speaking', icon: 'mic', title: t('part.8') },
      { key: 'conversation', icon: 'chat', title: t('part.9') },
      { key: 'practice', icon: 'puzzle', title: t('part.10') },
      { key: 'test', icon: 'trophy', title: t('exercise.test') },
      { key: 'writing', icon: 'write', title: t('part.11') }
    ];
    return list.filter(function (p) {
      if (p.key === 'alphabet') return !!(lesson.alphabet && lesson.alphabet.length);
      if (p.key === 'related') return lesson.related && lesson.related.length;
      if (p.key === 'expressions') return lesson.expressions && lesson.expressions.length;
      if (p.key === 'grammar') return !!lesson.grammar;
      if (p.key === 'reading') return !!lesson.reading;
      if (p.key === 'listening') return lesson.listening && lesson.listening.length;
      if (p.key === 'speaking') return lesson.speaking && lesson.speaking.length;
      if (p.key === 'conversation') return !!lesson.conversation;
      if (p.key === 'writing') return !!(lesson.writing && lesson.writing.tasks && lesson.writing.tasks.length);
      return true;
    });
  }

  function vocabRows(list, lang, opts) {
    opts = opts || {};
    if (!list || !list.length) return '';
    return '<div class="vocab-list">' + list.map(function (v) {
      return '<div class="vocab-row">' +
        '<div style="flex:1;min-width:0">' +
          '<div class="row" style="gap:.6rem"><span class="term">' + esc(v.t) + '</span>' +
            (v.pron ? '<span class="pron">' + esc(v.pron) + '</span>' : '') + '</div>' +
          '<div class="meaning">' + esc(v.m) + '</div>' +
          (opts.ex && v.ex ? '<div class="ex">' + esc(v.ex) + (v.exM ? ' — ' + esc(v.exM) : '') + '</div>' : '') +
        '</div>' +
        '<div class="actions">' + sayBtn(v.t, lang.speech) + '</div>' +
      '</div>';
    }).join('') + '</div>';
  }

  function renderPart(lesson, lang) {
    var key = P.parts[P.step].key;
    var L = lesson;
    var head = '<div class="stack" style="gap:.3rem"><h2 class="part-title">' + P.parts[P.step].title + '</h2>' +
      '<p class="part-sub">' + t('label.lesson') + ': ' + esc(L.title) + ' — ' + esc(L.titleMeaning) + '</p></div>';

    if (key === 'alphabet') {
      return head +
        '<div class="card card-tint-soft small">' + I('sparkle', 'ic-sm') + ' ' + t('alpha.hint') + '</div>' +
        '<div class="alpha-tools">' +
          '<button class="btn btn-soft btn-sm" data-alpha="all">' + I('play', 'ic-sm') + ' ' + t('alpha.playAll') + '</button>' +
          '<button class="btn btn-outline btn-sm" data-alpha="stop">' + I('pause', 'ic-sm') + ' ' + t('action.stop') + '</button>' +
          '<span class="pill-tag">' + L.alphabet.length + ' ' + t('alpha.count') + '</span>' +
        '</div>' +
        '<div class="alpha-grid" style="margin-top:1rem">' + L.alphabet.map(function (x) {
          return '<button class="alpha-cell" data-letter="' + esc(x.l) + '" data-lang="' + esc(lang.speech) + '" data-w="' + esc(x.w) + '" aria-label="' + esc(x.l + ' — ' + x.w) + '">' +
            '<span class="L">' + esc(x.l) + '</span><span class="spk">🔊</span>' +
            '<span class="nm">' + esc(x.name || '') + '</span>' +
            '<span class="wd">' + esc(x.w) + '</span><span class="wm">' + esc(x.wm || '') + '</span></button>';
        }).join('') + '</div>' +
        (L.vocab && L.vocab.length ? '<div class="hr"></div>' + vocabRows(L.vocab, lang, { ex: false }) : '');
    }
    if (key === 'learn') {
      return head + '<div class="card card-tint-soft small">' + I('target', 'ic-sm') + ' ' + (L.goals[LB.i18n.lang] || []).join(' • ') + '</div>' +
        vocabRows(L.vocab, lang, { ex: true });
    }
    if (key === 'related') return head + '<p class="muted">' + t('part.2') + '</p>' + vocabRows(L.related, lang, { ex: true });
    if (key === 'expressions') return head + '<p class="muted">' + t('part.3') + '</p>' + vocabRows(L.expressions, lang, { ex: true });
    if (key === 'grammar') {
      var g = L.grammar;
      return head + '<div class="card stack">' +
        '<strong>' + esc(g.title[LB.i18n.lang] || g.title.ar) + '</strong>' +
        '<ul class="stack" style="gap:.6rem">' + g.points.map(function (p) {
          return '<li class="row" style="align-items:flex-start;gap:.6rem"><span class="ic-badge" style="width:28px;height:28px;border-radius:9px">' + I('check', 'ic-sm') + '</span><span>' + esc(p[LB.i18n.lang] || p.ar) + '</span></li>';
        }).join('') + '</ul>' +
        (g.table && g.table.length ? '<div class="table-wrap"><table class="table"><tbody>' + g.table.map(function (r) {
          return '<tr><td><strong>' + esc(r.a) + '</strong></td><td class="muted">' + esc(r.b) + '</td>' +
            '<td>' + sayBtn(r.a, lang.speech, 'ic-sm') + '</td></tr>';
        }).join('') + '</tbody></table></div>' : '') +
        (g.note ? '<div class="ex-bubble"><span class="t">💡 ' + esc(g.note[LB.i18n.lang] || g.note.ar) + '</span></div>' : '') +
      '</div>';
    }
    if (key === 'examples') {
      return head + '<div class="stack">' + L.examples.map(function (e) {
        return '<div class="ex-bubble">' +
          '<div class="row-between" style="gap:.6rem"><span class="t">' + esc(e.t) + '</span>' + sayBtn(e.t, lang.speech, 'ic-sm') + '</div>' +
          '<div class="a">' + esc(e.m) + (e.pron ? ' <span class="tiny">(' + esc(e.pron) + ')</span>' : '') + '</div>' +
          (e.words ? '<div class="row tiny muted" style="gap:.4rem;flex-wrap:wrap;margin-top:.4rem">' + e.words.map(function (w) { return '<span class="pill-tag grey">' + esc(w) + '</span>'; }).join('') + '</div>' : '') +
        '</div>';
      }).join('') + '</div>';
    }
    if (key === 'reading') {
      var rd = L.reading;
      return head + '<div class="card stack">' +
        '<strong>' + esc(rd.title[LB.i18n.lang] || rd.title.ar) + '</strong>' +
        '<div class="stack" style="gap:.5rem">' + rd.linesEn.map(function (line, i) {
          return '<div class="row-between" style="gap:.6rem;align-items:flex-start">' +
            '<div><div class="strong">' + esc(line) + '</div><div class="small muted">' + esc(rd.linesAr[i] || '') + '</div></div>' +
            sayBtn(line, lang.speech, 'ic-sm') + '</div>';
        }).join('') + '</div>' +
        '<button class="btn btn-outline btn-sm" data-readall="1">' + I('play', 'ic-sm') + ' ' + t('action.playAll') + '</button>' +
        '</div>' +
        (rd.questions && rd.questions.length ? '<div class="stack">' + rd.questions.map(function (q) {
          return LB.qHTML({ type: 'choice', prompt: q.q, promptSub: q.qMeaning || '', answer: q.answer, staticQuiz: true, options: q.options.map(function (o) { return { label: o }; }) });
        }).join('') + '</div>' : '');
    }
    if (key === 'listening') {
      return head + '<div class="stack">' + L.listening.map(function (l, i) {
        return '<div class="card tight" data-listen="' + i + '">' +
          '<div class="row-between"><span class="pill-tag">' + t('exercise.listen') + '</span>' +
            '<button class="btn btn-soft btn-sm" data-say="' + esc(l.say) + '" data-lang="' + lang.speech + '">' + I('volume', 'ic-sm') + ' ' + t('action.listen') + '</button></div>' +
          '<div class="options" style="margin-top:.8rem">' + l.options.map(function (o, oi) {
            return '<button class="option" data-oi="' + oi + '" data-answer="' + l.answer + '">' + esc(o) + '</button>';
          }).join('') + '</div>' +
          '<div class="feedback hide" data-fb></div>' +
        '</div>';
      }).join('') + '</div>';
    }
    if (key === 'speaking') {
      return head + LB.speakingBlock(L.speaking, lang, L);
    }
    if (key === 'conversation') {
      var c = L.conversation;
      return head +
        (c.setting ? '<div class="pill-tag pink">' + t('conv.setting') + ': ' + esc(c.setting[LB.i18n.lang] || c.setting.ar || '') + '</div>' : '') +
        '<div class="btn-row"><button class="btn btn-sm" data-playconv="' + L.id + '" data-code="' + L.language + '">' + I('play', 'ic-sm') + ' ' + t('action.playAll') + '</button>' +
        '<button class="btn btn-outline btn-sm" data-toggletr="1">' + I('chat', 'ic-sm') + ' ' + t('action.translate') + '</button></div>' +
        LB.convHTML(L, L.language, { showTranslation: false, questions: true });
    }
    if (key === 'practice') {
      return head + '<p class="muted">' + t('exercise.practice') + '</p><div id="lb-runner"></div>';
    }
    if (key === 'test') {
      return head + '<div class="card card-tint-peach small">' + I('trophy', 'ic-sm') + ' ' + t('exercise.testNote') + '</div><div id="lb-runner"></div>';
    }
    if (key === 'writing') {
      return head + '<div class="card stack">' + L.writing.tasks.map(function (task, i) {
        return '<div class="row" style="align-items:flex-start;gap:.6rem"><span class="lesson-num">' + (i + 1) + '</span><span>' + esc(task[LB.i18n.lang] || task.ar) + '</span></div>';
      }).join('') + '<p class="small muted">' + t('writing.note') + '</p></div>';
    }
    return head;
  }

  /* ===================== speaking block ===================== */
  LB.speakingBlock = function (phrases, lang, lesson) {
    var supported = LB.recognition.supported();
    return '<div class="stack">' +
      '<div class="card ' + (supported ? 'card-tint-mint' : 'card-tint-blue') + ' small">' +
        I('mic', 'ic-sm') + ' ' + (supported ? t('speaking.available') : t('speaking.unsupported')) + '</div>' +
      phrases.map(function (ph, i) {
        return '<div class="card tight" data-speak="' + i + '">' +
          '<div class="row-between"><div><div class="strong">' + esc(ph.t) + '</div>' +
            '<div class="small muted">' + esc(ph.m) + (ph.pron ? ' • ' + esc(ph.pron) : '') + '</div></div>' +
            '<div class="row" style="gap:.4rem">' + sayBtn(ph.t, lang.speech) +
              '<button class="btn btn-soft btn-icon" data-rec="' + esc(ph.t) + '" data-lang="' + lang.speech + '" aria-label="' + t('action.speak') + '">' + I('mic') + '</button>' +
            '</div>' +
          '</div>' +
          '<div class="feedback hide" data-res></div>' +
        '</div>';
      }).join('') +
    '</div>';
  };

  LB.player = {};

  /* ===================== lesson page ===================== */
  LB.player.lesson = function (r) {
    var code = r.parts[1] || LB.state.targetLang;
    var id = r.parts[2];
    var lesson = LB.findLesson(code, id);
    if (!lesson) return { html: '<div class="wrap section"><p class="muted">' + t('search.none') + '</p></div>' };

    P.code = code; P.lesson = lesson; P.parts = partList(lesson);
    P.step = Math.min(P.step, P.parts.length - 1);
    if (P.step < 0) P.step = 0;
    var lang = LB.getLang(code);
    var p = LB.progressOf(code);
    var st = LB.store.lessonState(code, lesson.id);
    var idx = LB.lessonIndex(code, lesson.id);

    return {
      html: '<div class="wrap section lesson-shell">' +
        '<div class="row-between">' +
          '<a class="btn btn-ghost btn-sm" href="#/learn/' + code + '/' + lesson.level + '">' + I('arrowBack', 'ic-sm') + ' ' + t('action.back') + '</a>' +
          '<div class="row" style="gap:.4rem">' +
            '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + ' • ' + lesson.level + '</span>' +
            '<span class="pill-tag grey">' + esc(lesson.topic) + '</span>' +
            (st && st.done ? '<span class="pill-tag green">' + t('label.completed') + ' ' + (st.best || 0) + '/' + (st.total || 10) + '</span>' : '') +
          '</div>' +
        '</div>' +

        '<div class="card" style="margin-top:1rem">' +
          '<div class="row-between">' +
            '<div><h1 style="font-size:1.5rem">' + esc(lesson.title) + '</h1>' +
              '<div class="small muted">' + esc(lesson.titleMeaning) + ' • ' + esc(lesson.unitTitle) + ' • ' + lesson.minutes + ' ' + t('label.minutes') + '</div></div>' +
            '<div class="small muted">' + t('label.progress') + ': ' + (P.step + 1) + ' / ' + P.parts.length + '</div>' +
          '</div>' +
          '<div class="bar" style="margin-top:.8rem"><i style="width:' + Math.round(((P.step + 1) / P.parts.length) * 100) + '%"></i></div>' +
          '<div class="steps" style="margin-top:.8rem">' + P.parts.map(function (part, i) {
            return '<button class="step-dot' + (i === P.step ? ' active' : (i < P.step ? ' done' : '')) + '" data-step="' + i + '">' + I(part.icon, 'ic-sm') + ' ' + part.title + '</button>';
          }).join('') + '</div>' +
        '</div>' +

        '<div class="card" style="margin-top:1.2rem" id="lb-part">' + renderPart(lesson, lang) + '</div>' +

        '<div class="stepper" id="lb-stepper" role="region" aria-label="' + esc(t('label.progress')) + '">' +
          '<div class="stepper-inner">' +
            '<button class="btn btn-outline btn-sm" id="lb-prev"' + (P.step === 0 ? ' disabled' : '') + ' aria-label="' + esc(t('action.prev')) + '">' + I('arrowBack', 'ic-sm') + '<span class="txt">' + t('action.prev') + '</span></button>' +
            '<div class="stepper-progress">' +
              '<div class="stepper-label"><span>' + t('label.lesson') + ' ' + (idx + 1) + '/' + LB.lessonCount(code) + '</span>' +
                '<span>' + (P.step + 1) + ' / ' + P.parts.length + '</span></div>' +
              '<div class="bar"><i style="width:' + Math.round(((P.step + 1) / P.parts.length) * 100) + '%"></i></div>' +
            '</div>' +
            '<button class="btn primary-next" id="lb-next"><span class="txt">' + t('action.next') + '</span> ' + I('arrow', 'ic-sm ic-mirror') + '</button>' +
          '</div>' +
        '</div>' +
      '</div>',
      lang: code, lesson: lesson
    };
  };

  LB.player.wireLesson = function (root, code, lesson) {
    var lang = LB.getLang(code);
    LB.wireSpeech(root);
    LB.wireQuiz(root);

    /* step dots */
    LB.$$('[data-step]', root).forEach(function (b) {
      b.addEventListener('click', function () { P.step = +b.getAttribute('data-step'); repaint(); });
    });
    /* alphabet grid: tap a letter to hear it, play the whole alphabet */
    LB.$$('[data-letter]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        LB.speech.say(b.getAttribute('data-letter'), b.getAttribute('data-lang'), { force: true });
        b.classList.add('pop'); setTimeout(function () { b.classList.remove('pop'); }, 400);
      });
    });
    var alphaAll = root.querySelector('[data-alpha="all"]');
    var alphaStop = root.querySelector('[data-alpha="stop"]');
    if (alphaAll && lesson.alphabet) alphaAll.addEventListener('click', function () {
      LB.speech.saySequence(lesson.alphabet.map(function (x) { return { text: x.l, lang: lang.speech }; }), 280);
    });
    if (alphaStop) alphaStop.addEventListener('click', function () { LB.speech.stop(); });

    /* prev / next */
    var prev = document.getElementById('lb-prev'), next = document.getElementById('lb-next');
    if (prev) prev.addEventListener('click', function () { if (P.step > 0) { P.step--; repaint(); } });
    if (next) next.addEventListener('click', function () {
      var isTest = P.parts[P.step].key === 'test';
      if (isTest && !P.testDone) { LB.toast(t('exercise.test')); return; }
      if (P.step < P.parts.length - 1) { P.step++; repaint(); }
      else { location.hash = '#/learn/' + code + '/' + lesson.level; }
    });

    /* listening part */
    LB.$$('[data-listen]', root).forEach(function (card) {
      LB.$$('.option', card).forEach(function (o) {
        o.addEventListener('click', function () {
          if (card.__done) return;
          card.__done = true;
          var ans = +o.getAttribute('data-answer');
          var i = +o.getAttribute('data-oi');
          LB.$$('.option', card).forEach(function (x, xi) { if (xi === ans) x.classList.add('correct'); });
          if (i !== ans) o.classList.add('wrong');
          var fb = card.querySelector('[data-fb]');
          fb.className = 'feedback ' + (i === ans ? 'ok' : 'no');
          fb.textContent = i === ans ? t('exercise.correct') : t('exercise.wrong') + ' ' + LB.$$('.option', card)[ans].textContent;
          LB.store.addAnswer(i === ans);
        });
      });
    });

    /* reading: play all */
    var ra = root.querySelector('[data-readall]');
    if (ra && lesson.reading) {
      ra.addEventListener('click', function () {
        LB.speech.saySequence(lesson.reading.linesEn.map(function (l) { return { text: l, lang: lang.speech }; }), 350);
      });
    }

    /* conversation controls */
    root.addEventListener('click', function (e) {
      var pcb = e.target.closest && e.target.closest('[data-playconv]');
      if (pcb) { LB.playConversation(lesson.conversation, code, root, pcb); return; }
      var tr = e.target.closest && e.target.closest('[data-toggletr]');
      if (tr) {
        var hidden = root.querySelector('.dialogue .a').hasAttribute('hidden');
        LB.$$('.dialogue .a', root).forEach(function (a) { if (hidden) a.removeAttribute('hidden'); else a.setAttribute('hidden', ''); });
        tr.innerHTML = I('chat', 'ic-sm') + ' ' + (hidden ? t('action.hideTranslate') : t('action.translate'));
      }
    });

    /* speaking / recognition */
    LB.$$('[data-rec]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var target = b.getAttribute('data-rec'), tag = b.getAttribute('data-lang');
        var box = b.closest('[data-speak]').querySelector('[data-res]');
        if (!LB.recognition.supported()) {
          box.className = 'feedback no'; box.textContent = t('speaking.unsupported');
          return;
        }
        box.className = 'feedback ok'; box.textContent = '🎙 …';
        LB.recognition.once(tag, function (alts) {
          var best = 0, bestText = '';
          alts.forEach(function (a) { var s = LB.recognition.score(target, a); if (s > best) { best = s; bestText = a; } });
          var ok = best >= 60;
          box.className = 'feedback ' + (ok ? 'ok' : 'no');
          box.innerHTML = '<div><strong>' + (ok ? t('speak.great') : t('speak.almost')) + '</strong></div>' +
            '<div class="small">' + t('speak.youSaid') + ' «' + esc(bestText || '—') + '»</div>' +
            (ok ? '' : '<div class="small">' + t('speak.trySaid') + ' «' + esc(target) + '»</div>') +
            '<div class="btn-row" style="margin-top:.6rem">' +
              '<button class="btn btn-soft btn-sm" data-say="' + esc(target) + '" data-lang="' + esc(tag) + '">' + I('volume', 'ic-sm') + ' ' + t('action.listen') + '</button>' +
              (ok ? '' : '<button class="btn btn-outline btn-sm" data-retry="1">' + I('mic', 'ic-sm') + ' ' + t('speak.tryAgainBtn') + '</button>') +
            '</div>';
          LB.store.addAnswer(ok);
          LB.store.bumpDaily('speak');
          if (ok) { LB.store.touchStreak(); LB.confetti(); LB.sfx && LB.sfx.play('correct'); }
          LB.wireSpeech(root);
          var rt = box.querySelector('[data-retry]');
          if (rt) rt.addEventListener('click', function () { b.click(); });
        }, function (err) {
          box.className = 'feedback no';
          box.textContent = (err === 'unsupported' ? t('speaking.unsupported') : t('speaking.tryAgain'));
        });
      });
    });

    /* runner for practice / test */
    var host = document.getElementById('lb-runner');
    if (host) {
      if (P.parts[P.step].key === 'practice') {
        LB.runner(host, LB.engine.buildPractice(lesson), { mode: 'practice', code: code, lesson: lesson });
      } else {
        LB.runner(host, LB.engine.buildTest(lesson), {
          mode: 'test', code: code, lesson: lesson,
          onDone: function (res) {
            P.testDone = true;
            var st = LB.store.completeLesson(code, lesson.id, res.score, res.total, lesson.vocabKeys());
            LB.store.addTest({ lang: code, lessonId: lesson.id, score: res.score, total: res.total, at: Date.now() });
            LB.store.touchStreak();
            LB.confetti();
            LB.toast(t('toast.lessonDone'));
            if (res.score / res.total >= .8) LB.confetti();
          }
        });
      }
    }

    function repaint() {
      var view = document.getElementById('lb-view');
      var res = LB.player.lesson({ name: 'lesson', parts: ['lesson', code, lesson.id] });
      view.innerHTML = res.html;
      LB.player.wireLesson(view, code, lesson);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    LB.player._repaint = repaint;
  };

  /* ===================== conversation playback ===================== */
  LB.playConversation = function (conv, code, root, btn) {
    var lang = LB.getLang(code);
    if (!conv) return;
    var playing = btn && btn.getAttribute('data-playing') === '1';
    if (playing) {
      LB.speech.stop();
      if (btn) { btn.setAttribute('data-playing', '0'); btn.innerHTML = I('play', 'ic-sm') + ' ' + t('action.playAll'); }
      var hl0 = root.querySelector('.bubble.speaking'); if (hl0) hl0.classList.remove('speaking');
      return;
    }
    if (btn) { btn.setAttribute('data-playing', '1'); btn.innerHTML = I('pause', 'ic-sm') + ' ' + t('action.stop'); }
    var bubbles = LB.$$('.dialogue .bubble', root);
    bubbles.forEach(function (b, i) {
      setTimeout(function () {
        bubbles.forEach(function (x) { x.classList.remove('speaking'); });
        if (b) b.classList.add('speaking');
      }, i * 900);
    });
    LB.speech.saySequence(conv.lines.map(function (l) { return { text: l.t, lang: lang.speech }; }), 520, function () {
      bubbles.forEach(function (x) { x.classList.remove('speaking'); });
      if (btn) { btn.setAttribute('data-playing', '0'); btn.innerHTML = I('play', 'ic-sm') + ' ' + t('action.playAll'); }
    });
  };

  /* ===================== exercise runner ===================== */
  LB.runner = function (host, questions, opts) {
    opts = opts || {};
    var state = { i: 0, score: 0, wrong: [], answered: false, results: [] };

    function draw() {
      if (!questions.length) { host.innerHTML = '<div class="card muted">' + t('search.none') + '</div>'; return; }
      if (state.i >= questions.length) return summary();
      var q = questions[state.i];
      state.answered = false;
      var body = '';
      var head = '<div class="ex-head"><span class="pill-tag">' + (state.i + 1) + ' / ' + questions.length + '</span>' +
        '<span class="pill-tag ' + (opts.mode === 'test' ? 'gold' : '') + '">' + (opts.mode === 'test' ? t('exercise.test') : t('exercise.practice')) + '</span></div>' +
        '<div class="bar" style="margin:.7rem 0 1rem"><i style="width:' + Math.round((state.i / questions.length) * 100) + '%"></i></div>';

      if (q.type === 'choice' || q.type === 'listen') {
        body += '<div class="stack">' +
          (q.type === 'listen'
            ? '<button class="btn btn-soft" data-playsay="1">' + I('volume', 'ic-sm') + ' ' + t('action.listen') + '</button>'
            : '') +
          (q.prompt ? '<div class="row" style="gap:.6rem">' +
            (q.type === 'choice' && q.kind === 'vocab' ? sayBtn(q.prompt, LB.getLang(opts.code).speech) : '') +
            '<div><div class="ex-prompt">' + esc(q.prompt) + '</div>' +
            (q.promptSub ? '<div class="small muted">' + esc(q.promptSub) + '</div>' : '') +
            (q.promptAr ? '<div class="small muted">' + esc(q.promptAr) + '</div>' : '') + '</div></div>' : '') +
          '<div class="options" data-options>' + q.options.map(function (o, i) {
            return '<button class="option" data-i="' + i + '">' + esc(o.label) + (o.sub ? ' <span class="tiny muted">' + esc(o.sub) + '</span>' : '') + '</button>';
          }).join('') + '</div>' +
          '<div class="feedback hide" data-fb></div>' +
          '<div><button class="btn hide" data-nexq>' + t('action.next') + ' ' + I('arrow', 'ic-sm') + '</button></div>' +
        '</div>';
      } else if (q.type === 'fill') {
        body += '<div class="stack">' +
          '<div class="ex-prompt">' + esc(q.before) + ' <span style="color:var(--primary)">____</span> ' + esc(q.after) + '</div>' +
          (q.translation ? '<div class="small muted">' + esc(q.translation) + '</div>' : '') +
          (q.promptAr ? '<div class="small muted">' + esc(q.promptAr) + '</div>' : '') +
          '<div class="options" data-options>' + q.options.map(function (o, i) { return '<button class="option" data-i="' + i + '">' + esc(o.label) + '</button>'; }).join('') + '</div>' +
          '<div class="feedback hide" data-fb></div>' +
          '<div><button class="btn hide" data-nexq>' + t('action.next') + ' ' + I('arrow', 'ic-sm') + '</button></div>' +
        '</div>';
      } else if (q.type === 'order') {
        body += '<div class="stack">' +
          '<div class="ex-prompt">' + t('exercise.order') + '</div>' +
          (q.translation ? '<div class="small muted">' + esc(q.translation) + '</div>' : '') +
          '<div class="slot-row" data-slot></div>' +
          '<div class="row" style="flex-wrap:wrap;gap:.5rem" data-bank>' +
            q.words.map(function (w, i) { return '<button class="chip" data-w="' + i + '">' + esc(w) + '</button>'; }).join('') + '</div>' +
          '<div class="btn-row"><button class="btn" data-checkorder>' + t('action.check') + '</button>' +
            '<button class="btn btn-outline" data-clearorder>' + t('action.retry') + '</button></div>' +
          '<div class="feedback hide" data-fb></div>' +
          '<div><button class="btn hide" data-nexq>' + t('action.next') + ' ' + I('arrow', 'ic-sm') + '</button></div>' +
        '</div>';
      } else if (q.type === 'match') {
        var left = q.pairs.map(function (p, i) { return { txt: p.a, id: i }; });
        var right = LB.shuffle(q.pairs.map(function (p, i) { return { txt: p.b, id: i }; }));
        body += '<div class="stack">' +
          '<div class="ex-prompt">' + t('exercise.match') + '</div>' +
          '<div class="match-grid"><div class="match-col" data-side="a">' +
            left.map(function (x) { return '<button class="match-item" data-side="a" data-id="' + x.id + '">' + esc(x.txt) + '</button>'; }).join('') +
          '</div><div class="match-col" data-side="b">' +
            right.map(function (x) { return '<button class="match-item" data-side="b" data-id="' + x.id + '">' + esc(x.txt) + '</button>'; }).join('') +
          '</div></div>' +
          '<div class="feedback hide" data-fb></div>' +
          '<div><button class="btn hide" data-nexq>' + t('action.next') + ' ' + I('arrow', 'ic-sm') + '</button></div>' +
        '</div>';
      } else if (q.type === 'write') {
        body += '<div class="stack">' +
          '<div class="ex-prompt">' + esc(q.promptAr) + '</div>' +
          '<div class="card card-tint-soft"><div class="row-between"><div><div class="strong">' + esc(q.phrase) + '</div>' +
            '<div class="small muted">' + esc(q.meaning) + (q.pron ? ' • ' + esc(q.pron) : '') + '</div></div>' +
            '<div class="row" style="gap:.4rem">' + sayBtn(q.phrase, LB.getLang(opts.code).speech) +
              '<button class="btn btn-soft btn-icon" data-rec="' + esc(q.phrase) + '" data-lang="' + LB.getLang(opts.code).speech + '">' + I('mic') + '</button>' +
            '</div></div><div class="feedback hide" data-res></div></div>' +
          '<div><strong class="small">' + t('exercise.rateSelf') + '</strong>' +
            '<div class="btn-row" style="margin-top:.5rem"><button class="btn btn-soft" data-self="1">' + I('check', 'ic-sm') + ' ' + t('review.iKnow') + '</button>' +
              '<button class="btn btn-outline" data-self="0">' + I('refresh', 'ic-sm') + ' ' + t('review.again') + '</button></div></div>' +
        '</div>';
      }

      host.innerHTML = '<div class="card tight">' + head + body + '</div>';

      /* --- wire --- */
      var fb = host.querySelector('[data-fb]');
      var nx = host.querySelector('[data-nexq]');
      var playSay = host.querySelector('[data-playsay]');
      if (playSay && q.say) playSay.addEventListener('click', function () { LB.speech.say(q.say, LB.getLang(opts.code).speech, { force: true }); });
      if ((q.type === 'listen') && q.say) setTimeout(function () { LB.speech.say(q.say, LB.getLang(opts.code).speech, { force: true }); }, 350);

      function settle(ok, msg, given) {
        if (state.answered) return;
        state.answered = true;
        LB.store.addAnswer(ok);
        if (ok) state.score++;
        else {
          state.wrong.push(q);
          /* mistakes notebook (additive): remember the wrong shape → right shape */
          try {
            var right = q.type === 'order' ? (q.answer || []).join(' ')
              : (q.options && q.options[q.answer]) ? q.options[q.answer].label
              : (q.phrase || q.explain || '');
            LB.store.mistakeAdd(opts.code, String(q.explain || q.prompt || q.phrase || '').slice(0, 120), given || '', right);
          } catch (e) { }
        }
        state.results.push({ q: q, ok: ok });
        if (fb) { fb.className = 'feedback ' + (ok ? 'ok' : 'no'); fb.innerHTML = msg; }
        if (nx) nx.classList.remove('hide');
        if (ok) { LB.confetti(); LB.store.touchStreak(); }
      }

      if (q.type === 'choice' || q.type === 'listen' || q.type === 'fill') {
        LB.$$('[data-options] .option', host).forEach(function (o) {
          o.addEventListener('click', function () {
            if (state.answered) return;
            var i = +o.getAttribute('data-i');
            LB.$$('[data-options] .option', host).forEach(function (x, xi) {
              if (xi === q.answer) x.classList.add('correct');
              x.disabled = true;
            });
            var ok = i === q.answer;
            if (!ok) o.classList.add('wrong');
            settle(ok, (ok ? '✓ ' + t('exercise.correct') : '↻ ' + t('exercise.almost') + ' <strong>' + esc(q.options[q.answer].label) + '</strong>') +
              (q.explain ? '<div class="small" style="font-weight:600">' + esc(q.explain) + (q.explainSub ? ' — ' + esc(q.explainSub) : '') + '</div>' : ''), (o.textContent || '').trim());
          });
        });
      } else if (q.type === 'order') {
        var picked = [];
        var slot = host.querySelector('[data-slot]');
        function paint() {
          slot.innerHTML = picked.map(function (w, i) { return '<button class="chip" data-remove="' + i + '">' + esc(w) + '</button>'; }).join('');
          LB.$$('[data-bank] .chip', host).forEach(function (c) {
            c.classList.toggle('picked', picked.indexOf(c.textContent) > -1);
          });
          LB.$$('[data-remove]', slot).forEach(function (b) {
            b.addEventListener('click', function () {
              if (state.answered) return;
              picked.splice(+b.getAttribute('data-remove'), 1); paint();
            });
          });
        }
        LB.$$('[data-bank] .chip', host).forEach(function (c) {
          c.addEventListener('click', function () {
            if (state.answered) return;
            picked.push(c.textContent); paint();
          });
        });
        host.querySelector('[data-clearorder]').addEventListener('click', function () { if (!state.answered) { picked = []; paint(); } });
        host.querySelector('[data-checkorder]').addEventListener('click', function () {
          var ok = LB.checkOrder(picked, q.answer);
          if (ok) { settle(true, '✓ ' + t('exercise.correct'), picked.join(' ')); }
          else settle(false, '↻ ' + t('exercise.almost') + ' <strong>' + esc(q.answer.join(' ')) + '</strong>', picked.join(' '));
        });
      } else if (q.type === 'match') {
        var selA = null, selB = null, matchedCount = 0, moves = 0;
        var items = LB.$$('.match-item', host);
        items.forEach(function (it) {
          it.addEventListener('click', function () {
            if (state.answered) return;
            if (it.classList.contains('ok')) return;
            var side = it.getAttribute('data-side');
            LB.$$('.match-item[data-side="' + side + '"]', host).forEach(function (x) { x.classList.remove('sel'); });
            it.classList.add('sel');
            if (side === 'a') selA = it; else selB = it;
            if (selA && selB) {
              moves++;
              if (selA.getAttribute('data-id') === selB.getAttribute('data-id')) {
                selA.classList.add('ok'); selB.classList.add('ok');
                selA.classList.remove('sel'); selB.classList.remove('sel');
                matchedCount++;
                if (matchedCount === q.pairs.length) settle(true, '✓ ' + t('exercise.correct') + ' (' + moves + ' ' + t('game.match.moves') + ')');
              } else {
                var a = selA, b = selB;
                a.classList.add('bad'); b.classList.add('bad');
                setTimeout(function () { a.classList.remove('bad', 'sel'); b.classList.remove('bad', 'sel'); }, 500);
              }
              selA = selB = null;
            }
          });
        });
      } else if (q.type === 'write') {
        LB.$$('[data-self]', host).forEach(function (b) {
          b.addEventListener('click', function () {
            var good = b.getAttribute('data-self') === '1';
            settle(good, good ? '✓ ' + t('exercise.correct') : '↻ ' + t('speak.almost'), '');
            if (good) LB.sfx && LB.sfx.play('correct');
          });
        });
        var rec = host.querySelector('[data-rec]');
        if (rec) {
          rec.addEventListener('click', function () {
            var box = host.querySelector('[data-res]');
            if (!LB.recognition.supported()) { box.className = 'feedback no'; box.textContent = t('speaking.unsupported'); return; }
            box.className = 'feedback ok'; box.textContent = '🎙 …';
            LB.recognition.once(rec.getAttribute('data-lang'), function (alts) {
              var best = 0, txt = '';
              alts.forEach(function (a) { var s = LB.recognition.score(q.phrase, a); if (s > best) { best = s; txt = a; } });
              var okk = best >= 60;
              box.className = 'feedback ' + (okk ? 'ok' : 'no');
              box.innerHTML = '<div><strong>' + (okk ? t('speak.great') : t('speak.almost')) + '</strong></div>' +
                '<div class="small">' + t('speak.youSaid') + ' «' + esc(txt) + '»</div>' +
                (okk ? '' : '<div class="small">' + t('speak.trySaid') + ' «' + esc(q.phrase) + '»</div>');
              LB.store.bumpDaily('speak');
              if (okk) LB.sfx && LB.sfx.play('correct');
            }, function () { box.className = 'feedback no'; box.textContent = t('speaking.tryAgain'); });
          });
        }
      }

        if (nx) nx.addEventListener('click', function () { state.i++; draw(); });
        if (q.type === 'listen' && q.say) setTimeout(function () { LB.speech.say(q.say, LB.getLang(opts.code).speech, { force: true }); }, 250);
    }

    function summary() {
      var total = questions.length;
      var pct = Math.round((state.score / total) * 100);
      var wrongWords = {};
      state.wrong.forEach(function (q) {
        if (q.kind) wrongWords[q.explain || q.prompt] = 1;
      });
      var html = '<div class="stack">' +
        '<div class="card center stack" style="align-items:center">' +
          '<span class="ic-badge" style="width:64px;height:64px;border-radius:20px">' + I(pct >= 80 ? 'trophy' : 'target', 'ic-lg') + '</span>' +
          '<h3>' + t('exercise.done') + '</h3>' +
          '<div class="ex-prompt">' + t('exercise.score') + ': ' + state.score + '/' + total + ' — ' + pct + '%</div>' +
          LB.starsHTML(Math.max(1, Math.round(pct / 34))) +
          '<div class="bar" style="width:min(420px,100%)"><i style="width:' + pct + '%"></i></div>' +
          '<div class="btn-row" style="justify-content:center">' +
            '<button class="btn" data-again>' + I('refresh', 'ic-sm') + ' ' + t('action.retry') + '</button>' +
            '<button class="btn btn-outline" data-close2>' + I('arrow', 'ic-sm') + ' ' + t('action.finish') + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="card"><strong>' + t('exercise.answers') + '</strong><table class="table" style="margin-top:.6rem"><tbody>' +
          questions.map(function (q, i) {
            var r = state.results[i] || { ok: false };
            var label = q.type === 'choice' || q.type === 'listen' || q.type === 'fill' ? (q.options[q.answer] ? q.options[q.answer].label : '')
              : q.type === 'order' ? q.answer.join(' ') : q.type === 'match' ? t('exercise.match') : (q.phrase || '');
            return '<tr><td>' + (i + 1) + '</td><td>' + esc(String(label).slice(0, 60)) + '</td>' +
              '<td>' + (r.ok ? '<span class="pill-tag green">✓</span>' : '<span class="pill-tag gold">↻</span>') + '</td></tr>';
          }).join('') +
        '</tbody></table></div>' +
        (state.wrong.length ? '<div class="card card-tint-peach"><strong>' + t('exercise.toReview') + '</strong>' +
          '<div class="row" style="gap:.5rem;flex-wrap:wrap;margin-top:.6rem">' + state.wrong.map(function (q) {
            return '<span class="pill-tag">' + esc(q.explain || q.prompt) + '</span>';
          }).join('') + '</div>' +
          '<p class="small muted" style="margin-top:.6rem">' + t('exercise.recommend') + '</p>' +
          '<div class="btn-row"><a class="btn btn-sm" href="#/review">' + t('action.startReview') + '</a>' +
            '<a class="btn btn-outline btn-sm" href="#/practice">' + t('nav.practice') + '</a></div></div>' : '') +
      '</div>';
      host.innerHTML = html;
      LB.confetti();
      if (opts.onDone) opts.onDone({ score: state.score, total: total, wrong: state.wrong });
      var again = host.querySelector('[data-again]');
      if (again) again.addEventListener('click', function () {
        var qs = opts.onDone ? LB.engine.buildTest(opts.lesson) : questions;
        LB.runner(host, qs, opts);
      });
      var close = host.querySelector('[data-close2]');
      if (close) close.addEventListener('click', function () {
        if (P.parts[P.step] && P.parts[P.step].key === 'test' && P.step < P.parts.length - 1) { P.step++; LB.player._repaint && LB.player._repaint(); }
        else LB.toast(t('toast.lessonDone'));
      });
    }

    draw();
  };

  /* ===================== review session ===================== */
  LB.player.reviewSession = function (words, code, host) {
    var qs = LB.engine.buildReview(words);
    if (!qs.length) { host.innerHTML = '<div class="card muted">' + t('review.none') + '</div>'; return; }
    LB.runner(host, qs, {
      mode: 'review', code: code,
      onDone: function (res) {
        LB.store.addReview();
        /* grade every reviewed word: keep strong ones longer, repeat weak ones */
        words.forEach(function (w, i) {
          var r = res.wrong.filter(function (q) { return q.term === w.v.key; }).length;
          LB.store.srsGrade(code, w.v.key, r === 0);
        });
        LB.toast(t('review.sessionDone'));
      }
    });
  };

  /* ===================== games ===================== */
  LB.player.game = function (kind, code, host) {
    var lang = LB.getLang(code);
    var lessons = LB.allLessons(code);
    if (!lessons.length) { host.innerHTML = '<div class="card muted">' + t('label.comingSoon') + '</div>'; return; }

    if (kind === 'quick') return quickFire(code, host, lang);

    /* match + memory use the same word pool */
    var pool = [];
    lessons.forEach(function (L) { L.vocab.concat(L.related).forEach(function (v) { pool.push(v); }); });
    if (pool.length < 4) { host.innerHTML = '<div class="card muted">' + t('vocab.empty') + '</div>'; return; }
    var pairs = LB.shuffle(pool).slice(0, kind === 'memory' ? 6 : 6);

    if (kind === 'memory') return memory(pairs, code, host, lang);

    /* --- match game --- */
    var left = LB.shuffle(pairs.map(function (p, i) { return { txt: p.t, id: i }; }));
    var right = LB.shuffle(pairs.map(function (p, i) { return { txt: p.m, id: i }; }));
    var start = Date.now(), moves = 0, matched = 0;
    host.innerHTML = '<div class="card stack">' +
      '<div class="row-between"><strong>' + t('game.match.name') + '</strong>' +
        '<span class="row" style="gap:.8rem"><span class="small muted">' + t('game.match.moves') + ': <b data-moves>0</b></span>' +
        '<span class="game-timer small">' + t('game.match.time') + ': <b data-time>0</b>s</span></span></div>' +
      '<div class="match-grid">' +
        '<div class="match-col">' + left.map(function (x) { return '<button class="match-item" data-side="a" data-id="' + x.id + '">' + esc(x.txt) + '</button>'; }).join('') + '</div>' +
        '<div class="match-col">' + right.map(function (x) { return '<button class="match-item" data-side="b" data-id="' + x.id + '">' + esc(x.txt) + '</button>'; }).join('') + '</div>' +
      '</div></div>';
    var timer = setInterval(function () { host.querySelector('[data-time]').textContent = Math.round((Date.now() - start) / 1000); }, 500);
    var sa = null, sb = null;
    LB.$$('.match-item', host).forEach(function (it) {
      it.addEventListener('click', function () {
        if (it.classList.contains('ok')) return;
        var side = it.getAttribute('data-side');
        LB.$$('.match-item[data-side="' + side + '"]', host).forEach(function (x) { x.classList.remove('sel'); });
        it.classList.add('sel');
        if (side === 'a') sa = it; else sb = it;
        if (sa && sb) {
          moves++; host.querySelector('[data-moves]').textContent = moves;
          if (sa.getAttribute('data-id') === sb.getAttribute('data-id')) {
            sa.classList.add('ok'); sb.classList.add('ok'); sa.classList.remove('sel'); sb.classList.remove('sel');
            matched++; LB.store.addAnswer(true);
            if (matched === pairs.length) {
              clearInterval(timer);
              LB.store.touchStreak(); LB.confetti();
              host.querySelector('.card').classList.add('card-tint-mint');
              host.insertAdjacentHTML('afterbegin', '<div class="card center"><strong>' + t('game.match.win') + '</strong>' +
                '<div class="small muted">' + moves + ' ' + t('game.match.moves') + ' • ' + Math.round((Date.now() - start) / 1000) + 's</div></div>');
            }
          } else {
            var a = sa, b = sb;
            a.classList.add('bad'); b.classList.add('bad');
            LB.store.addAnswer(false);
            setTimeout(function () { a.classList.remove('bad', 'sel'); b.classList.remove('bad', 'sel'); }, 450);
          }
          sa = sb = null;
        }
      });
    });
  };

  function memory(pairs, code, host, lang) {
    var cards = [];
    pairs.forEach(function (p, i) {
      cards.push({ id: i, txt: p.t, kind: 'w' });
      cards.push({ id: i, txt: p.m, kind: 'm' });
    });
    cards = LB.shuffle(cards);
    var flip = [], done = 0, moves = 0;
    host.innerHTML = '<div class="card stack"><div class="row-between"><strong>' + t('game.memory.name') + '</strong>' +
      '<span class="small muted">' + t('game.match.moves') + ': <b data-moves>0</b></span></div>' +
      '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr))">' +
        cards.map(function (c, i) { return '<button class="match-item" data-card="' + i + '" style="min-height:74px">?</button>'; }).join('') +
      '</div></div>';
    LB.$$('[data-card]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var i = +b.getAttribute('data-card');
        if (b.classList.contains('ok') || flip.indexOf(i) > -1 || flip.length === 2) return;
        b.textContent = cards[i].txt; b.classList.add('sel'); flip.push(i);
        if (flip.length === 2) {
          moves++; host.querySelector('[data-moves]').textContent = moves;
          var a = cards[flip[0]], c = cards[flip[1]];
          if (a.id === c.id && a.kind !== c.kind) {
            flip.forEach(function (k) { var el = host.querySelector('[data-card="' + k + '"]'); el.classList.remove('sel'); el.classList.add('ok'); });
            LB.store.addAnswer(true); done++; flip = [];
            if (done === pairs.length) { LB.confetti(); LB.store.touchStreak(); host.insertAdjacentHTML('afterbegin', '<div class="card center"><strong>' + t('game.match.win') + '</strong></div>'); }
          } else {
            LB.store.addAnswer(false);
            var f = flip.slice();
            setTimeout(function () {
              f.forEach(function (k) { var el = host.querySelector('[data-card="' + k + '"]'); el.textContent = '?'; el.classList.remove('sel'); });
            }, 600);
            flip = [];
          }
        }
      });
    });
  }

  function quickFire(code, host, lang) {
    var qs = LB.engine.buildQuickFire(code, 15);
    if (!qs.length) { host.innerHTML = '<div class="card muted">' + t('vocab.empty') + '</div>'; return; }
    var i = 0, score = 0, left = 45;
    var timer = null;
    host.innerHTML = '<div class="card stack">' +
      '<div class="row-between"><strong>' + t('game.quick.name') + '</strong>' +
        '<span class="row" style="gap:.8rem"><span class="small muted">' + t('game.quick.score') + ': <b data-score>0</b></span>' +
        '<span class="game-timer">⏱ <b data-left>45</b>s</span></span></div>' +
      '<div id="lb-qf"></div></div>';
    var box = host.querySelector('#lb-qf');
    timer = setInterval(function () {
      left--; host.querySelector('[data-left]').textContent = left;
      if (left <= 0) { clearInterval(timer); end(); }
    }, 1000);

    function step() {
      if (i >= qs.length) { clearInterval(timer); return end(); }
      var q = qs[i];
      box.innerHTML = '<div class="ex-prompt">' + esc(q.prompt) + '</div>' +
        '<div class="small muted">' + t('exercise.choose') + '</div>' +
        '<div class="options" style="margin-top:.8rem">' + q.options.map(function (o, oi) { return '<button class="option" data-i="' + oi + '">' + esc(o.label) + '</button>'; }).join('') + '</div>';
      LB.$$('.option', box).forEach(function (o) {
        o.addEventListener('click', function () {
          var ok = +o.getAttribute('data-i') === q.answer;
          if (ok) { score++; host.querySelector('[data-score]').textContent = score; LB.store.addAnswer(true); }
          else { LB.store.addAnswer(false); }
          i++; step();
        });
      });
    }
    function end() {
      box.innerHTML = '<div class="card center card-tint-mint"><strong>' + t('game.quick.timeUp') + '</strong>' +
        '<div class="ex-prompt">' + t('game.quick.score') + ': ' + score + ' / ' + qs.length + '</div>' + LB.starsHTML(Math.max(1, Math.round(score / 5))) + '</div>';
      LB.confetti(); LB.store.touchStreak();
    }
    step();
  }
})();
