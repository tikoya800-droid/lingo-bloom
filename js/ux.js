/* ==========================================================================
   LingoBloom — experience layer 2.0  (js/ux.js)
   Additive only. Reuses the existing router / store / engine / player and
   never renames an existing page or storage key.

   Adds:
     • first-visit gate: "ابدأ التعلم" / "اختبر مستواك"
     • 15-question placement test → suggested level (accept or start at A0)
     • Today's learning plan on Home
     • A0 → C1 journey map
     • My mistakes notebook + weak words (built on the existing SRS data)
     • Alphabet browser (A0 letter grids for every language)
     • "More" sheet, sound settings, friendly speech feedback helpers
   ========================================================================== */
(function () {
  if (!window.LB) return;
  var t = LB.t, esc = LB.esc, I = LB.icon;

  /* ======================= extra strings (ar / en) ======================= */
  var S = {
    ar: {
      'nav.more': 'المزيد',
      'nav.mistakes': 'أخطائي',
      'nav.journey': 'رحلتي',
      'nav.alphabet': 'الحروف',
      'nav.placement': 'اختبار المستوى',
      'nav.today': 'تعلّم النهاردة',
      'part.0': '٠. الحروف والأصوات',
      'alpha.hint': 'دوس على أي حرف تسمع صوته، وشوف كلمة تبدأ بيه. جرّب تقولها بصوت عالي بعد الصوت.',
      'alpha.playAll': 'اسمع كل الحروف',
      'alpha.title': 'حروف اللغة',
      'alpha.lead': 'كل الحروف بصوتها وكلمة مثال. ده أول باب لأي لغة جديدة.',
      'alpha.startLesson': 'افتح درس الحروف',
      'alpha.none': 'الحروف هتظهر هنا أول ما تدخل درس الحروف.',
      'alpha.count': 'حرف',
      'today.title': 'تعلّم النهاردة',
      'today.min': '١٠–١٥ دقيقة',
      'today.w1': 'اتعلّم ٥ كلمات جديدة',
      'today.w2': 'اسمع محادثة قصيرة',
      'today.w3': 'اتدرّب على ٥ أسئلة',
      'today.w4': 'انطق ٣ جُمل بصوت عالي',
      'today.w5': 'راجع كلمات الأيام اللي فاتت',
      'today.start': 'ابدأ التعلّم',
      'today.continue': 'كمّل من حيث وقفت',
      'today.done': 'خلصت خطة النهاردة! 🎉',
      'today.progress': 'خطة النهاردة',
      'journey.title': 'رحلتك من A0 لـ C1',
      'journey.lead': 'كل مستوى مرحلة في الرحلة. المستويات المتاحة مفتوحة، والباقي بيتبني بنفس المنهج.',
      'journey.current': 'إنت هنا',
      'journey.locked': 'قريباً',
      'journey.ready': 'متاح',
      'journey.done': 'خلصته',
      'journey.next': 'خطوتك الجاية',
      'journey.openLevel': 'افتح المستوى',
      'onboard.hi': 'أهلاً بيك في LingoBloom 🌱',
      'onboard.lead': 'لغة جديدة، نسخة أحلى منك. اختار لغتك وابدأ — أو اعمل اختبار سريع وقولنا نبدأ منين.',
      'onboard.pick': 'اختار اللغة اللي عايزها',
      'onboard.start': 'ابدأ التعلّم',
      'onboard.test': 'اختبر مستواك',
      'onboard.skip': 'اتفرج الأول',
      'onboard.note': 'تقدّمك محفوظ على جهازك — من غير أي تسجيل.',
      'onboard.testNote': '١٥ سؤال • دقيقتين',
      'place.title': 'اختبار تحديد المستوى',
      'place.lead': '١٥ سؤال بالتدريج من السهل للأصعب. جاوب بأريحية — الغرض نعرف نبدأ منين، مش نقيّمك.',
      'place.q': 'سؤال',
      'place.listen': 'اسمع',
      'place.whichWord': 'اختار الكلمة الصح اللي تبدأ بالحرف ده',
      'place.result': 'نتيجتك',
      'place.suggest': 'المستوى المناسب ليك',
      'place.suggestNote': 'بناءً على إجاباتك. اختار البداية اللي تحبها — وتقدر تغيّرها في أي وقت.',
      'place.accept': 'ابدأ من المستوى ده',
      'place.fromA0': 'أفضّل أبدأ من A0',
      'place.again': 'أعد الاختبار',
      'place.breakdown': 'تفصيل الإجابات',
      'place.easy': 'البداية',
      'place.moreLevels': 'المستويات الأعلى (A2 → C1) بتتبني حالياً على نفس المنهج.',
      'mistakes.title': 'أخطائي',
      'mistakes.lead': 'كل غلطة بتتحوّل لتمرين. مفيش عقاب — بس فرصة تانية لحد ما تثبت.',
      'mistakes.none': 'لسه مفيش أخطاء مسجّلة — كمّل دروسك وهنسجّل أي حاجة محتاجة تدريب.',
      'mistakes.weak': 'كلماتي الضعيفة',
      'mistakes.weakNone': 'مافيش كلمات ضعيفة حالياً — برافو!',
      'mistakes.times': 'مرة',
      'mistakes.practice': 'اتدرّب على أخطائي',
      'mistakes.practiceWeak': 'اتدرّب على الكلمات الضعيفة',
      'mistakes.clear': 'امسح السجل',
      'mistakes.wrong': 'إجابتك',
      'mistakes.right': 'الصح',
      'mistakes.empty': 'اختار تمرين:',
      'speak.great': 'نطقك حلو!',
      'speak.almost': 'قريب قوي! جرّب تاني بشويّة تركيز.',
      'speak.youSaid': 'إنت قلت:',
      'speak.trySaid': 'اللي المفروض تقوله:',
      'speak.tryAgainBtn': 'جرّب تاني',
      'more.title': 'كل حاجة في LingoBloom',
      'more.lead': 'المهم قدامك على طول، والباقي هنا.',
      'more.settings': 'الإعدادات',
      'more.sound': 'الأصوات والتنبيهات',
      'more.sfx': 'أصوات النجاح والخطأ',
      'more.kids': 'واجهة الأطفال',
      'more.reset': 'تصفير تقدّمي',
      'empty.soon': 'قريباً',
      'level.hint': 'المستوى الحالي',
      'toast.needWords': 'اتعلّم كام كلمة الأول وسجّل أخطاء، وبعدين ارجع هنا.',
      'toast.saved2': 'اتحفظ',
      'toast.mistakesCleared': 'اتمسح سجل الأخطاء'
    },
    en: {
      'nav.more': 'More',
      'nav.mistakes': 'My mistakes',
      'nav.journey': 'My journey',
      'nav.alphabet': 'Alphabet',
      'nav.placement': 'Level test',
      'nav.today': "Today's learning",
      'part.0': '0. Letters & sounds',
      'alpha.hint': 'Tap any letter to hear it, then say it out loud. Every language starts here.',
      'alpha.playAll': 'Play all letters',
      'alpha.title': 'Letters of the language',
      'alpha.lead': 'Every letter with its sound and an example word.',
      'alpha.startLesson': 'Open the alphabet lesson',
      'alpha.none': 'Letters appear here once you open the alphabet lesson.',
      'alpha.count': 'letters',
      'today.title': "Today's learning",
      'today.min': '10–15 min',
      'today.w1': 'Learn 5 new words',
      'today.w2': 'Listen to a short conversation',
      'today.w3': 'Answer 5 practice questions',
      'today.w4': 'Say 3 sentences out loud',
      'today.w5': 'Review the last days\u2019 words',
      'today.start': 'Start learning',
      'today.continue': 'Continue where you left off',
      'today.done': "Today's plan is done! 🎉",
      'today.progress': "Today's plan",
      'journey.title': 'Your A0 → C1 journey',
      'journey.lead': 'Each level is a stage of the trip. Open levels are live, the rest are being built on the same curriculum.',
      'journey.current': 'You are here',
      'journey.locked': 'Soon',
      'journey.ready': 'Available',
      'journey.done': 'Completed',
      'journey.next': 'Your next step',
      'journey.openLevel': 'Open level',
      'onboard.hi': 'Welcome to LingoBloom 🌱',
      'onboard.lead': 'A new language, a brighter you. Pick your language and start — or take a quick test and we will suggest a level.',
      'onboard.pick': 'Choose your language',
      'onboard.start': 'Start learning',
      'onboard.test': 'Test my level',
      'onboard.skip': 'Just look around',
      'onboard.note': 'Your progress is stored on your device — no account needed.',
      'onboard.testNote': '15 questions • ~2 min',
      'place.title': 'Level placement test',
      'place.lead': '15 questions, easy to harder. Answer comfortably — it only decides where to start.',
      'place.q': 'Question',
      'place.listen': 'Listen',
      'place.whichWord': 'Pick the word that starts with this letter',
      'place.result': 'Your result',
      'place.suggest': 'Suggested level',
      'place.suggestNote': 'Based on your answers. Choose your start — you can change it any time.',
      'place.accept': 'Start at this level',
      'place.fromA0': 'I prefer to start at A0',
      'place.again': 'Retake the test',
      'place.breakdown': 'Answer breakdown',
      'place.easy': 'Starting point',
      'place.moreLevels': 'Higher levels (A2 → C1) are being built on the same curriculum.',
      'mistakes.title': 'My mistakes',
      'mistakes.lead': 'Every mistake becomes a drill. Nothing punitive — just another try until it sticks.',
      'mistakes.none': 'No mistakes recorded yet — keep learning and anything shaky shows up here.',
      'mistakes.weak': 'My weak words',
      'mistakes.weakNone': 'No weak words right now — well done!',
      'mistakes.times': 'times',
      'mistakes.practice': 'Practise my mistakes',
      'mistakes.practiceWeak': 'Practise weak words',
      'mistakes.clear': 'Clear the log',
      'mistakes.wrong': 'You wrote',
      'mistakes.right': 'Correct',
      'mistakes.empty': 'Choose a drill:',
      'speak.great': 'Nice pronunciation!',
      'speak.almost': 'So close! Try once more, a little slower.',
      'speak.youSaid': 'You said:',
      'speak.trySaid': 'Target:',
      'speak.tryAgainBtn': 'Try again',
      'more.title': 'Everything in LingoBloom',
      'more.lead': 'The essentials stay in front of you; the rest lives here.',
      'more.settings': 'Settings',
      'more.sound': 'Sound & feedback',
      'more.sfx': 'Correct / wrong sound effects',
      'more.kids': 'Kids-friendly skin',
      'more.reset': 'Reset my progress',
      'empty.soon': 'Coming soon',
      'level.hint': 'Current level',
      'toast.needWords': 'Learn a few words and make a few mistakes first — then come back.',
      'toast.saved2': 'Saved',
      'toast.mistakesCleared': 'Mistake log cleared'
    }
  };
  Object.keys(S).forEach(function (lang) {
    LB.STRINGS[lang] = LB.STRINGS[lang] || {};
    Object.keys(S[lang]).forEach(function (k) { LB.STRINGS[lang][k] = S[lang][k]; });
  });

  /* ======================= tiny sound effect layer ======================= */
  LB.sfx = {
    ctx: null,
    enabled() {
      return LB.store.getSetting('sfx') !== false && LB.store.getSetting('sound') !== false;
    },
    tone(freq, at, dur, type, gain) {
      var c = this.ctx, o = c.createOscillator(), g = c.createGain();
      o.type = type || 'sine'; o.frequency.value = freq;
      g.gain.setValueAtTime(0, c.currentTime + at);
      g.gain.linearRampToValueAtTime(gain == null ? 0.06 : gain, c.currentTime + at + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + at + dur);
      o.connect(g); g.connect(c.destination);
      o.start(c.currentTime + at); o.stop(c.currentTime + at + dur + 0.02);
    },
    play(kind) {
      if (!this.enabled()) return;
      try {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        this.ctx = this.ctx || new AC();
        if (this.ctx.state === 'suspended') this.ctx.resume();
        if (kind === 'correct') { this.tone(660, 0, .12, 'sine'); this.tone(990, .09, .16, 'sine'); }
        else if (kind === 'wrong') { this.tone(300, 0, .16, 'triangle', .05); this.tone(210, .1, .2, 'triangle', .05); }
        else if (kind === 'done') { this.tone(523, 0, .13); this.tone(659, .1, .13); this.tone(784, .2, .24); }
        else if (kind === 'unlock') { this.tone(784, 0, .12); this.tone(1046, .1, .2); }
      } catch (e) { }
    }
  };

  /* ================== daily counters (wrap public API only) ================== */
  var stats = LB.store.get('stats');
  var prevAddAnswer = LB.store.addAnswer;
  LB.store.addAnswer = function (ok) {
    var r = prevAddAnswer.apply(this, arguments);
    try {
      this.bumpDaily('answers');
      if (ok) this.bumpDaily('correct');
      if (this.raw().daily && this.raw().daily.answers % 8 === 0) LB.sfx.play(ok ? 'correct' : 'wrong');
    } catch (e) { }
    return r;
  };
  var prevPlayConv = LB.playConversation;
  LB.playConversation = function () {
    try { LB.store.bumpDaily('listen'); } catch (e) { }
    return prevPlayConv.apply(this, arguments);
  };

  /* ======================= shared little builders ======================= */
  function langOf(code) { return LB.getLang(code); }
  function daily() { return LB.store.daily(); }
  function lessonsDoneToday(code) {
    var pg = LB.store.lang(code), today = new Date().toDateString(), n = 0;
    Object.keys(pg.lessons || {}).forEach(function (id) {
      var at = pg.lessons[id] && pg.lessons[id].at;
      if (at && new Date(at).toDateString() === today) n++;
    });
    return n;
  }
  function levelPercent(code, level) {
    var units = LB.unitsOf(code, level), done = 0, total = 0;
    units.forEach(function (u) {
      var up = LB.unitProgress(code, u);
      done += up.done; total += up.total;
    });
    return { done: done, total: total, percent: total ? Math.round(done / total * 100) : 0 };
  }
  function firstLessonOfLevel(code, level) {
    var units = LB.unitsOf(code, level);
    for (var i = 0; i < units.length; i++) if (units[i].lessons.length) return units[i].lessons[0];
    return null;
  }
  function alphabetLessons(code) {
    return LB.allLessons(code).filter(function (L) { return L.alphabet && L.alphabet.length; });
  }
  function allAlphabet(code) {
    var out = [];
    alphabetLessons(code).forEach(function (L) { L.alphabet.forEach(function (x) { out.push({ x: x, L: L }); }); });
    return out;
  }

  /* ============================ Today's learning ============================ */
  function todayPlan(code) {
    var d = daily(), p = LB.progressOf(code);
    var cur = LB.currentLessonId(code), lesson = cur ? LB.findLesson(code, cur) : null;
    var speaks = d.speak || 0, listen = d.listen || 0, answers = d.answers || 0, reviews = d.review || 0;
    var doneToday = lessonsDoneToday(code);
    return [
      { key: 'learn', label: t('today.w1'), done: doneToday >= 1, href: lesson ? '#/lesson/' + code + '/' + lesson.id : '#/learn/' + code + '/A0' },
      { key: 'listen', label: t('today.w2'), done: listen >= 1, href: lesson ? '#/lesson/' + code + '/' + lesson.id : '#/conversations' },
      { key: 'practice', label: t('today.w3'), done: answers >= 5, href: '#/practice' },
      { key: 'speak', label: t('today.w4'), done: speaks >= 3, href: lesson ? '#/lesson/' + code + '/' + lesson.id : '#/learn/' + code + '/A0' },
      { key: 'review', label: t('today.w5'), done: reviews >= 1 || (p.due === 0 && p.words > 0), href: '#/review' }
    ];
  }
  function todayHTML(code) {
    var plan = todayPlan(code);
    var done = plan.filter(function (x) { return x.done; }).length;
    var lesson = LB.findLesson(code, LB.currentLessonId(code));
    var pct = Math.round(done / plan.length * 100);
    return '<section class="today" id="lb-today" aria-labelledby="lb-today-h">' +
      '<div class="head">' +
        '<div class="title" id="lb-today-h">' + I('target') + ' ' + esc(t('today.title')) + '</div>' +
        '<span class="mins">' + I('refresh', 'ic-sm') + ' ' + esc(t('today.min')) + '</span>' +
      '</div>' +
      '<div class="bar" style="margin-top:.9rem"><i style="width:' + pct + '%"></i></div>' +
      '<div class="small muted" style="margin-top:.35rem">' + done + ' / ' + plan.length + ' — ' + pct + '%</div>' +
      '<div class="today-list">' + plan.map(function (x) {
        return '<a class="today-item' + (x.done ? ' done' : '') + '" href="' + x.href + '">' +
          '<span class="tick">' + (x.done ? I('check', 'ic-sm') : '') + '</span>' +
          '<span>' + esc(x.label) + '</span>' +
          '<span class="go">' + (x.done ? '' : I('arrow', 'ic-sm')) + '</span></a>';
      }).join('') + '</div>' +
      '<div class="today-cta">' +
        '<a class="btn btn-lg" href="' + (lesson ? '#/lesson/' + code + '/' + lesson.id : '#/learn') + '">' +
          I('play', 'ic-sm') + ' ' + esc(done ? t('today.continue') : t('today.start')) + '</a>' +
        '<a class="btn btn-outline btn-lg" href="#/review">' + I('refresh', 'ic-sm') + ' ' + esc(t('nav.review')) + '</a>' +
      '</div>' +
    '</section>';
  }

  /* ============================== journey map ============================== */
  function journeyHTML(code) {
    var levels = LB.levelsOf(code);
    var nodes = LB.PLANNED_LEVELS.map(function (lvl) {
      var ready = levels.indexOf(lvl) > -1;
      var info = ready ? levelPercent(code, lvl) : { done: 0, total: 0, percent: 0 };
      var state = !ready ? 'locked' : info.percent >= 100 ? 'done' : info.percent > 0 ? 'current' : 'ready';
      return { lvl: lvl, ready: ready, info: info, state: state };
    });
    var firstOpen = nodes.filter(function (n) { return n.ready && n.info.percent < 100; })[0] || nodes.filter(function (n) { return n.ready; })[0];
    var html = '<div class="journey">' + nodes.map(function (n, i) {
      return (i ? '<span class="j-line' + (nodes[i - 1].ready && n.ready ? ' on' : '') + '"></span>' : '') +
        '<button class="j-node ' + n.state + '" data-level="' + n.lvl + '"' + (n.ready ? '' : ' disabled') + '>' +
          '<span class="j-dot">' + (n.state === 'done' ? I('check', 'ic-sm') : n.lvl) + '</span>' +
          '<span class="j-label">' + n.lvl + '</span>' +
          '<span class="j-sub">' + esc(t('level.' + n.lvl)) + '</span>' +
          '<span class="j-sub">' + (n.ready ? n.info.done + '/' + n.info.total : esc(t('journey.locked'))) + '</span>' +
        '</button>';
    }).join('') + '</div>';
    if (firstOpen) {
      html += '<div class="j-card">' +
        '<span class="ic-badge" style="width:38px;height:38px;border-radius:12px">' + I('target', 'ic-sm') + '</span>' +
        '<div style="flex:1;min-width:180px"><div class="strong">' + esc(t('journey.next')) + '</div>' +
          '<div class="small muted">' + firstOpen.lvl + ' • ' + esc(t('level.' + firstOpen.lvl)) + ' — ' + firstOpen.info.percent + '%</div></div>' +
        '<a class="btn btn-sm" href="#/learn/' + code + '/' + firstOpen.lvl + '">' + I('play', 'ic-sm') + ' ' + esc(t('journey.openLevel')) + '</a>' +
      '</div>';
    }
    return html;
  }

  LB.journeyHTML = journeyHTML;
  LB.todayHTML = todayHTML;

  /* one wiring point for every journey map on screen (Home, Learn, Journey) */
  function wireJourney(root) {
    LB.$$('[data-level]', root || document).forEach(function (b) {
      if (b.__jw) return; b.__jw = true;
      b.addEventListener('click', function () {
        var code = LB.state.targetLang, lvl = b.getAttribute('data-level');
        if (LB.levelsOf(code).indexOf(lvl) === -1) { LB.toast(t('journey.locked')); return; }
        location.hash = '#/learn/' + code + '/' + lvl;
      });
    });
  }
  LB.wireJourney = wireJourney;

  /* =============================== App pages =============================== */
  /* ---- more (everything that is not in the primary nav) ---- */
  LB.pages.more = function () {
    var code = LB.state.targetLang;
    return '<div class="wrap section">' +
      '<h1 style="font-size:1.8rem">' + esc(t('more.title')) + '</h1>' +
      '<p class="section-lead">' + esc(t('more.lead')) + '</p>' +
      '<div class="more-grid" style="margin-top:1.4rem">' +
        moreList().map(function (m) {
          return '<a class="more-item" href="' + m.href + '"><span class="ic-badge">' + I(m.icon) + '</span><span>' + esc(m.label) + '</span></a>';
        }).join('') +
      '</div>' +
      '<div class="card" style="margin-top:1.4rem" id="lb-more-settings"></div>' +
      '<p class="small muted" style="margin-top:1rem">' + esc(t('level.hint')) + ': <strong>' + esc(code) + '</strong></p>' +
    '</div>';
  };
  LB.pages.more.active = 'more';
  LB.pages.more.wire = function (root) { paintSettings(root.querySelector('#lb-more-settings')); };

  function moreList() {
    return [
      { href: '#/conversations', icon: 'chat', label: t('nav.conversations') },
      { href: '#/vocabulary', icon: 'cards', label: t('nav.vocabulary') },
      { href: '#/alphabet', icon: 'sparkle', label: t('nav.alphabet') },
      { href: '#/mistakes', icon: 'target', label: t('nav.mistakes') },
      { href: '#/journey', icon: 'layers', label: t('nav.journey') },
      { href: '#/placement', icon: 'trophy', label: t('nav.placement') },
      { href: '#/search', icon: 'search', label: t('nav.search') },
      { href: '#/progress', icon: 'chart', label: t('nav.progress') },
      { href: '#/guide', icon: 'code', label: t('nav.guide') }
    ];
  }
  LB.moreList = moreList;

  /* ---- journey ---- */
  LB.pages.journey = function (r) {
    var code = r.lang || LB.state.targetLang, lang = langOf(code);
    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.8rem">' + esc(t('journey.title')) + '</h1>' +
      '<p class="section-lead">' + esc(t('journey.lead')) + '</p>' +
      '<div class="card" style="margin-top:1.3rem">' + journeyHTML(code) + '</div>' +
      '<div class="card" style="margin-top:1.2rem"><p class="small muted">' + esc(t('place.moreLevels')) + '</p></div>' +
    '</div>';
  };
  LB.pages.journey.active = 'journey';
  LB.pages.journey.wire = function (root, r) {
    var code = r.lang || LB.state.targetLang;
    LB.$$('[data-level]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var lvl = b.getAttribute('data-level');
        if (LB.levelsOf(code).indexOf(lvl) === -1) { LB.toast(t('journey.locked')); return; }
        location.hash = '#/learn/' + code + '/' + lvl;
      });
    });
  };

  /* ---- alphabet browser ---- */
  LB.pages.alphabet = function (r) {
    var code = r.lang || LB.state.targetLang, lang = langOf(code);
    var letters = allAlphabet(code);
    var first = alphabetLessons(code)[0];
    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.8rem">' + esc(t('alpha.title')) + '</h1>' +
      '<p class="section-lead">' + esc(t('alpha.lead')) + '</p>' +
      '<div class="card card-tint-soft small" style="margin-top:1.2rem">' + I('sparkle', 'ic-sm') + ' ' + esc(t('alpha.hint')) + '</div>' +
      (letters.length ? (
        '<div class="alpha-tools">' +
          '<button class="btn btn-soft btn-sm" data-alpha="all">' + I('play', 'ic-sm') + ' ' + esc(t('alpha.playAll')) + '</button>' +
          '<button class="btn btn-outline btn-sm" data-alpha="stop">' + I('pause', 'ic-sm') + ' ' + esc(t('action.stop')) + '</button>' +
          '<span class="pill-tag">' + letters.length + ' ' + esc(t('alpha.count')) + '</span>' +
          (first ? '<a class="btn btn-sm" href="#/lesson/' + code + '/' + first.id + '">' + I('play', 'ic-sm') + ' ' + esc(t('alpha.startLesson')) + '</a>' : '') +
        '</div>' +
        '<div class="alpha-grid" style="margin-top:1rem">' + letters.map(function (row) {
          var x = row.x;
          return '<button class="alpha-cell" data-letter="' + esc(x.l) + '" data-lang="' + esc(lang.speech) + '" data-w="' + esc(x.w) + '">' +
            '<span class="L">' + esc(x.l) + '</span><span class="spk">🔊</span>' +
            '<span class="nm">' + esc(x.name || '') + '</span>' +
            '<span class="wd">' + esc(x.w) + '</span><span class="wm">' + esc(x.wm || '') + '</span></button>';
        }).join('') + '</div>'
      ) : '<div class="card center muted" style="margin-top:1.2rem">' + esc(t('alpha.none')) + '</div>') +
    '</div>';
  };
  LB.pages.alphabet.active = 'alphabet';
  LB.pages.alphabet.wire = function (root, r) {
    var code = r.lang || LB.state.targetLang, lang = langOf(code), letters = allAlphabet(code);
    LB.$$('[data-letter]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        LB.speech.say(b.getAttribute('data-letter'), b.getAttribute('data-lang'), { force: true });
        b.classList.add('pop'); setTimeout(function () { b.classList.remove('pop'); }, 400);
      });
    });
    var all = root.querySelector('[data-alpha="all"]');
    var stop = root.querySelector('[data-alpha="stop"]');
    if (all) all.addEventListener('click', function () {
      LB.speech.saySequence(letters.map(function (r2) { return { text: r2.x.l, lang: lang.speech }; }), 300);
    });
    if (stop) stop.addEventListener('click', function () { LB.speech.stop(); });
  };

  /* ---- mistakes + weak words ---- */
  function mistakeRows(code) {
    var m = LB.store.mistakesOf(code), out = [];
    Object.keys(m).forEach(function (k) { out.push(Object.assign({ key: k }, m[k])); });
    out.sort(function (a, b) { return b.n - a.n; });
    return out;
  }
  function mistakeWords(code) {
    var rows = mistakeRows(code), learned = LB.learnedWords(code), out = [], seen = {};
    rows.forEach(function (row) {
      learned.forEach(function (w) {
        if (seen[w.v.key]) return;
        var explain = (w.v.t + ' = ' + w.v.m);
        if (row.key === explain || row.key === w.v.t || row.key.indexOf(w.v.t) === 0 || explain.indexOf(row.key) > -1) {
          seen[w.v.key] = 1; out.push(w);
        }
      });
    });
    return out;
  }
  function weakWords(code) {
    var keys = LB.store.weakKeys(code), learned = LB.learnedWords(code);
    return keys.map(function (k) { return learned.filter(function (w) { return w.v.key === k.key; })[0]; }).filter(Boolean);
  }

  LB.pages.mistakes = function (r) {
    var code = r.lang || LB.state.targetLang, lang = langOf(code);
    var rows = mistakeRows(code), weak = weakWords(code), mWords = mistakeWords(code);
    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.8rem">' + esc(t('mistakes.title')) + '</h1>' +
      '<p class="section-lead">' + esc(t('mistakes.lead')) + '</p>' +

      '<div class="grid grid-3" style="margin-top:1.3rem">' +
        '<div class="stat card-tint-peach"><span class="muted small">' + esc(t('nav.mistakes')) + '</span><b>' + rows.length + '</b></div>' +
        '<div class="stat"><span class="muted small">' + esc(t('mistakes.weak')) + '</span><b>' + weak.length + '</b></div>' +
        '<div class="stat card-tint-mint"><span class="muted small">' + esc(t('progress.wordsLearned')) + '</span><b>' + LB.progressOf(code).words + '</b></div>' +
      '</div>' +

      '<div class="card" style="margin-top:1.3rem">' +
        '<strong>' + esc(t('mistakes.empty')) + '</strong>' +
        '<div class="btn-row" style="margin-top:.8rem">' +
          '<button class="btn" id="lb-ms-practice" data-kind="mistakes">' + I('target', 'ic-sm') + ' ' + esc(t('mistakes.practice')) + '</button>' +
          '<button class="btn btn-outline" id="lb-ms-weak" data-kind="weak">' + I('refresh', 'ic-sm') + ' ' + esc(t('mistakes.practiceWeak')) + '</button>' +
          (rows.length ? '<button class="btn btn-ghost btn-sm" id="lb-ms-clear">' + esc(t('mistakes.clear')) + '</button>' : '') +
        '</div>' +
      '</div>' +

      '<div id="lb-ms-host" style="margin-top:1.2rem"></div>' +

      '<div class="card" style="margin-top:1.3rem">' +
        '<strong>' + I('target', 'ic-sm') + ' ' + esc(t('mistakes.title')) + '</strong>' +
        (rows.length ? '<div class="stack" style="margin-top:.8rem">' + rows.map(function (x) {
          return '<div class="mistake-row">' +
            '<span class="bad">' + esc(x.w || '—') + '</span>' +
            '<span class="arrow arr-r">→</span>' +
            '<span class="good">' + esc(x.r || '—') + '</span>' +
            '<span class="count">' + x.n + ' ' + esc(t('mistakes.times')) + '</span>' +
          '</div>';
        }).join('') + '</div>' : '<p class="muted small" style="margin-top:.6rem">' + esc(t('mistakes.none')) + '</p>') +
      '</div>' +

      '<div class="card" style="margin-top:1.2rem">' +
        '<strong>' + I('flame', 'ic-sm') + ' ' + esc(t('mistakes.weak')) + '</strong>' +
        (weak.length ? '<div class="row" style="gap:.5rem;flex-wrap:wrap;margin-top:.7rem">' + weak.map(function (w) {
          return '<span class="weak-chip">' + esc(w.v.t) + ' — ' + esc(w.v.m) + '</span>';
        }).join('') + '</div>' : '<p class="muted small" style="margin-top:.6rem">' + esc(t('mistakes.weakNone')) + '</p>') +
      '</div>' +
    '</div>';
  };
  LB.pages.mistakes.active = 'mistakes';
  LB.pages.mistakes.wire = function (root, r) {
    var code = r.lang || LB.state.targetLang;
    var host = root.querySelector('#lb-ms-host');
    function run(kind) {
      var set = kind === 'weak' ? weakWords(code) : (mistakeWords(code).length ? mistakeWords(code) : weakWords(code));
      if (!set.length) { LB.toast(t('toast.needWords')); return; }
      LB.player.reviewSession(set.slice(0, 12), code, host);
      host.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    var a = root.querySelector('#lb-ms-practice'), b = root.querySelector('#lb-ms-weak'), c = root.querySelector('#lb-ms-clear');
    if (a) a.addEventListener('click', function () { run('mistakes'); });
    if (b) b.addEventListener('click', function () { run('weak'); });
    if (c) c.addEventListener('click', function () {
      var raw = LB.store.raw();
      if (!raw.mistakes) raw.mistakes = {};
      raw.mistakes[code] = {};
      LB.store.save(); LB.toast(t('toast.mistakesCleared')); LB.render();
    });
  };

  /* ---- placement test (15 questions drawn from the real curriculum) ---- */
  function buildPlacement(code) {
    var lessons = LB.allLessons(code);
    if (!lessons.length) return [];
    var pool = LB.engine.meaningPool(code);
    var levels = LB.levelsOf(code);
    var qs = [];

    /* 1) alphabet / spelling — letters are the true A0 entry point */
    var alphas = lessons.filter(function (L) { return L.alphabet && L.alphabet.length; });
    if (alphas.length) {
      var letters = [];
      alphas.forEach(function (L) { letters = letters.concat(L.alphabet); });
      LB.shuffle(letters).slice(0, 3).forEach(function (x) {
        var wrong = LB.pick(pool.map(function (p) { return p.t; }), 3, [x.w]);
        var labels = LB.shuffle(wrong.concat([x.w]));
        qs.push({
          type: 'choice', kind: 'alphabet', level: 'A0',
          prompt: x.l, promptSub: x.name || '', promptAr: t('place.whichWord'),
          options: labels.map(function (l) { return { label: l }; }),
          answer: labels.indexOf(x.w), explain: x.l + ' → ' + x.w + ' (' + (x.wm || '') + ')'
        });
      });
    }

    /* 2) vocabulary choice, spread across every level that exists */
    levels.forEach(function (lvl) {
      var ls = lessons.filter(function (L) { return L.level === lvl; });
      var usable = ls.filter(function (L) { return L.vocab.length; });
      var n = 0;
      LB.shuffle(usable).forEach(function (L) {
        if (n >= 4) return;
        var v = L.vocab[Math.floor(Math.random() * L.vocab.length)];
        if (!v) return;
        var wrong = LB.pick(pool.map(function (p) { return p.m; }), 3, [v.m]);
        var labels = LB.shuffle(wrong.concat([v.m]));
        qs.push({
          type: 'choice', kind: 'vocab', level: lvl, say: v.t,
          prompt: v.t, promptSub: v.pron || '', promptAr: t('exercise.choose'),
          options: labels.map(function (x) { return { label: x }; }),
          answer: labels.indexOf(v.m), explain: v.t + ' = ' + v.m
        });
        n++;
      });
    });

    /* 3) grammar / sentence building from the harder levels first */
    levels.slice().reverse().forEach(function (lvl) {
      var ls = lessons.filter(function (L) { return L.level === lvl && L.examples && L.examples.length; });
      LB.shuffle(ls).slice(0, 2).forEach(function (L) {
        var q = LB.engine.fillChoice(L, code, pool) || LB.engine.orderChoice(L);
        if (q) { q.level = lvl; qs.push(q); }
      });
    });

    /* 4) listening questions (audio comprehension) */
    var withListening = lessons.filter(function (L) { return L.listening && L.listening.length; });
    LB.shuffle(withListening).slice(0, 2).forEach(function (L) {
      var l = LB.shuffle(L.listening)[0];
      qs.push({
        type: 'listen', kind: 'listen', level: L.level, say: l.say,
        prompt: '🎧', promptSub: '', promptAr: t('exercise.listen'),
        options: l.options.map(function (o) { return { label: o }; }),
        answer: l.answer, explain: l.say, explainSub: l.sayAr || ''
      });
    });

    /* keep 15, restore easy → hard ordering */
    var order = {}; (LB.PLANNED_LEVELS || []).forEach(function (l, i) { order[l] = i; });
    qs = qs.filter(function (q, i, a) { return a.indexOf(q) === i; });
    qs.sort(function (x, y) { return (order[x.level] || 0) - (order[y.level] || 0); });
    while (qs.length > 15) qs.pop();
    var guard = 0;
    while (qs.length < 15 && qs.length && guard < 40) {
      var src = qs[guard % qs.length];
      var clone = JSON.parse(JSON.stringify(src));
      clone.n = qs.length + 1;
      qs.push(clone); guard++;
    }
    return qs.slice(0, 15).map(function (q, i) { q.n = i + 1; return q; });
  }

  function suggestLevel(qs, answers) {
    var order = {}; (LB.PLANNED_LEVELS || []).forEach(function (l, i) { order[l] = i; });
    var score = answers.filter(function (a) { return a.ok; }).length;
    var byLevel = {};
    answers.forEach(function (a) {
      var lvl = a.level || 'A0';
      byLevel[lvl] = byLevel[lvl] || { ok: 0, n: 0 };
      byLevel[lvl].n++; if (a.ok) byLevel[lvl].ok++;
    });
    var available = LB.levelsOf(LB.state.route.lang || LB.state.targetLang);
    var highest = 'A0';
    Object.keys(byLevel).forEach(function (lvl) {
      var r = byLevel[lvl];
      if (r.n && r.ok / r.n >= 0.6) {
        if ((order[lvl] || 0) > (order[highest] || 0)) highest = lvl;
      }
    });
    if (score >= 13) highest = available[available.length - 1] || 'A0';
    else if (score <= 4) highest = 'A0';
    if (available.indexOf(highest) === -1) highest = available[available.length - 1] || 'A0';
    return { score: score, total: answers.length, level: highest, byLevel: byLevel };
  }

  LB.pages.placement = function (r) {
    var code = r.lang || LB.state.targetLang, lang = langOf(code);
    return '<div class="wrap section place-shell">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.8rem">' + esc(t('place.title')) + '</h1>' +
      '<p class="section-lead">' + esc(t('place.lead')) + '</p>' +
      '<div class="card" style="margin-top:1.2rem"><div id="lb-runner"></div></div>' +
      '<div id="lb-place-result" style="margin-top:1.2rem"></div>' +
    '</div>';
  };
  LB.pages.placement.active = 'placement';
  LB.pages.placement.wire = function (root, r) {
    var code = r.lang || LB.state.targetLang;
    var qs = buildPlacement(code);
    var host = root.querySelector('#lb-runner');
    var out = root.querySelector('#lb-place-result');
    if (!qs.length) { host.innerHTML = '<p class="muted">' + esc(t('empty.soon')) + '</p>'; return; }
    var seen = [];
    LB.runner(host, qs, {
      mode: 'practice', code: code,
      onDone: function (res) {
        var answers = (res.wrong || []).length ? null : null;
        /* rebuild the per-question record from the runner results is not exposed,
           so score + wrong list drive the suggestion (documented, real data) */
        var total = res.total;
        var byLevel = {};
        qs.forEach(function (q, i) {
          var lvl = q.level || 'A0';
          byLevel[lvl] = byLevel[lvl] || { ok: 0, n: 0 };
          byLevel[lvl].n++;
        });
        var wrongSet = {};
        (res.wrong || []).forEach(function (q) { wrongSet[q.level || 'A0'] = (wrongSet[q.level || 'A0'] || 0) + 1; });
        Object.keys(byLevel).forEach(function (l) { byLevel[l].ok = byLevel[l].n - (wrongSet[l] || 0); });
        var order = {}; (LB.PLANNED_LEVELS || []).forEach(function (l, i) { order[l] = i; });
        var available = LB.levelsOf(code);
        var highest = 'A0';
        Object.keys(byLevel).forEach(function (l) {
          var rr = byLevel[l];
          if (rr.n && rr.ok / rr.n >= 0.6 && (order[l] || 0) > (order[highest] || 0)) highest = l;
        });
        if (res.score >= 13) highest = available[available.length - 1] || 'A0';
        if (res.score <= 4) highest = 'A0';
        if (available.indexOf(highest) === -1) highest = 'A0';

        try {
          var set = LB.store.raw().settings;
          set.placement = { lang: code, score: res.score, total: total, level: highest, at: Date.now() };
          LB.store.save();
        } catch (e) { }

        var pct = Math.round((res.score / total) * 100);
        out.innerHTML = '<div class="card stack">' +
          '<div class="place-head">' +
            '<div><strong>' + esc(t('place.result')) + '</strong>' +
              '<div class="ex-prompt">' + res.score + ' / ' + total + ' — ' + pct + '%</div></div>' +
            '<span class="level-badge">' + I('trophy', 'ic-sm') + ' ' + esc(t('place.suggest')) + ': ' + highest + '</span>' +
          '</div>' +
          '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
          '<div class="grid grid-3">' + Object.keys(byLevel).map(function (l) {
            var rr = byLevel[l];
            return '<div class="stat"><span class="muted small">' + l + ' — ' + esc(t('level.' + l)) + '</span><b>' +
              rr.ok + '/' + rr.n + '</b></div>';
          }).join('') + '</div>' +
          '<p class="small muted">' + esc(t('place.suggestNote')) + '</p>' +
          '<div class="btn-row">' +
            '<button class="btn btn-lg" id="lb-place-accept">' + I('play', 'ic-sm') + ' ' + esc(t('place.accept')) + ' — ' + highest + '</button>' +
            '<button class="btn btn-outline btn-lg" id="lb-place-a0">' + esc(t('place.fromA0')) + '</button>' +
            '<button class="btn btn-ghost" id="lb-place-again">' + I('refresh', 'ic-sm') + ' ' + esc(t('place.again')) + '</button>' +
          '</div>' +
          '<p class="small muted">' + esc(t('place.moreLevels')) + '</p>' +
        '</div>';
        LB.sfx.play('done');
        var acc = out.querySelector('#lb-place-accept');
        var a0 = out.querySelector('#lb-place-a0');
        var ag = out.querySelector('#lb-place-again');
        if (acc) acc.addEventListener('click', function () { openLevel(code, highest, 'start'); });
        if (a0) a0.addEventListener('click', function () { openLevel(code, 'A0', 'start'); });
        if (ag) ag.addEventListener('click', function () { LB.pages.placement.wire(root, r); out.innerHTML = ''; });
        out.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  function openLevel(code, level, mode) {
    var L = firstLessonOfLevel(code, level);
    if (!L) { location.hash = '#/learn/' + code + '/' + level; return; }
    if (mode === 'start') location.hash = '#/lesson/' + code + '/' + L.id;
    else location.hash = '#/learn/' + code + '/' + level;
  }

  /* ======================= first-visit onboarding gate ======================= */
  function onboardHTML() {
    var code = LB.state.targetLang;
    return '<div class="onboard" id="lb-onboard" role="dialog" aria-modal="true" aria-labelledby="lb-onboard-h">' +
      '<div class="onboard-card">' +
        '<div class="brand"><img src="assets/logo-mark.png" alt="" width="42" height="42" /><span class="brand-name">Lingo<span>Bloom</span></span></div>' +
        '<h2 id="lb-onboard-h">' + esc(t('onboard.hi')) + '</h2>' +
        '<p class="muted small">' + esc(t('onboard.lead')) + '</p>' +
        '<div class="onboard-art"><img src="assets/hero.webp" alt="' + esc(t('home.h1b')) + '" /></div>' +
        '<strong class="small">' + esc(t('onboard.pick')) + '</strong>' +
        '<div class="onboard-langs">' + LB.LANGS.map(function (l) {
          return '<button type="button" data-oblang="' + l.code + '" class="' + (l.code === code ? 'on' : '') + '">' + l.flag + ' ' + esc(l.name) + '</button>';
        }).join('') + '</div>' +
        '<div class="onboard-actions">' +
          '<button class="btn btn-lg btn-block-mobile" id="lb-ob-start">' + I('play', 'ic-sm') + ' ' + esc(t('onboard.start')) + '</button>' +
          '<button class="btn btn-outline btn-lg btn-block-mobile" id="lb-ob-test">' + I('trophy', 'ic-sm') + ' ' + esc(t('onboard.test')) +
            ' <span class="tiny muted">' + esc(t('onboard.testNote')) + '</span></button>' +
          '<button class="onboard-skip" id="lb-ob-skip">' + esc(t('onboard.skip')) + '</button>' +
        '</div>' +
        '<p class="onboard-note">' + esc(t('onboard.note')) + '</p>' +
      '</div>' +
    '</div>';
  }

  function mountOnboard() {
    if (LB.store.get('onboarded')) return;
    if (document.getElementById('lb-onboard')) return;
    /* never interrupt a learner who already has progress from a previous version */
    try {
      var raw = LB.store.raw();
      var hasWork = Object.keys(raw.progress || {}).some(function (c) {
        return Object.keys((raw.progress[c] || {}).lessons || {}).length > 0;
      });
      if (hasWork) { LB.store.set('onboarded', true); return; }
    } catch (e) { }
    var host = LB.el('div', {}, onboardHTML());
    document.body.appendChild(host.firstChild);
    var box = document.getElementById('lb-onboard');
    var picked = LB.state.targetLang;
    LB.$$('[data-oblang]', box).forEach(function (b) {
      b.addEventListener('click', function () {
        picked = b.getAttribute('data-oblang');
        LB.$$('[data-oblang]', box).forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
      });
    });
    function finish(hash) {
      LB.setTargetLang(picked);
      LB.store.set('onboarded', true);
      if (box.parentNode) box.parentNode.removeChild(box);
      location.hash = hash;
      setTimeout(LB.render, 30);
    }
    var s = document.getElementById('lb-ob-start');
    var te = document.getElementById('lb-ob-test');
    var sk = document.getElementById('lb-ob-skip');
    if (s) s.addEventListener('click', function () { finish('#/learn/' + picked + '/' + (LB.levelsOf(picked)[0] || 'A0')); });
    if (te) te.addEventListener('click', function () { finish('#/placement?lang=' + picked); });
    if (sk) sk.addEventListener('click', function () {
      LB.setTargetLang(picked); LB.store.set('onboarded', true);
      if (box.parentNode) box.parentNode.removeChild(box); LB.render();
    });
  }

  /* ============================== "More" sheet ============================== */
  var sheet = null;
  LB.openMore = function () {
    if (sheet) return;
    LB.sfx.play('unlock');
    sheet = LB.el('div', { class: 'more-sheet', id: 'lb-more-sheet', role: 'dialog', 'aria-modal': 'true' });
    sheet.innerHTML = '<div class="panel">' +
      '<div class="grab"></div>' +
      '<div class="row-between" style="margin-bottom:.8rem"><strong>' + esc(t('nav.more')) + '</strong>' +
        '<button class="btn btn-ghost btn-icon" id="lb-more-close" aria-label="' + esc(t('action.close')) + '">' + I('x') + '</button></div>' +
      '<div class="more-grid">' + moreList().map(function (m) {
        return '<a class="more-item" href="' + m.href + '" data-more-link="1"><span class="ic-badge">' + I(m.icon) + '</span><span>' + esc(m.label) + '</span></a>';
      }).join('') + '</div>' +
      '<div id="lb-sheet-settings" style="margin-top:.9rem"></div>' +
    '</div>';
    document.body.appendChild(sheet);
    sheet.addEventListener('click', function (e) {
      if (e.target === sheet) LB.closeMore();
      var a = e.target.closest && e.target.closest('[data-more-link]');
      if (a) setTimeout(LB.closeMore, 10);
    });
    var c = document.getElementById('lb-more-close');
    if (c) c.addEventListener('click', LB.closeMore);
    paintSettings(document.getElementById('lb-sheet-settings'));
  };
  LB.closeMore = function () {
    if (sheet && sheet.parentNode) sheet.parentNode.removeChild(sheet);
    sheet = null;
  };

  function paintSettings(host) {
    if (!host) return;
    var sound = LB.store.getSetting('sound') !== false;
    var sfx = LB.store.getSetting('sfx') !== false;
    var kids = document.body.classList.contains('kids-mode');
    host.innerHTML = '<div class="card tight stack">' +
      '<strong class="small">' + esc(t('more.settings')) + '</strong>' +
      '<div class="more-row"><span class="switch-label">' + I('volume', 'ic-sm') + ' ' + esc(t('more.sound')) + '</span>' +
        '<button class="switch' + (sound ? ' on' : '') + '" data-set="sound" role="switch" aria-checked="' + sound + '"></button></div>' +
      '<div class="more-row"><span class="switch-label">' + I('sparkle', 'ic-sm') + ' ' + esc(t('more.sfx')) + '</span>' +
        '<button class="switch' + (sfx ? ' on' : '') + '" data-set="sfx" role="switch" aria-checked="' + sfx + '"></button></div>' +
      '<div class="more-row"><span class="switch-label">' + I('flower', 'ic-sm') + ' ' + esc(t('more.kids')) + '</span>' +
        '<button class="switch' + (kids ? ' on' : '') + '" data-set="kids" role="switch" aria-checked="' + kids + '"></button></div>' +
      '<div class="more-row"><span class="switch-label">' + I('refresh', 'ic-sm') + ' ' + esc(t('more.reset')) + '</span>' +
        '<button class="btn btn-outline btn-sm" id="lb-reset2">' + esc(t('action.reset')) + '</button></div>' +
    '</div>';
    LB.$$('[data-set]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var k = b.getAttribute('data-set');
        if (k === 'kids') {
          var now = !document.body.classList.contains('kids-mode');
          LB.store.setSetting('kidsMode', now);
          document.body.classList[k ? 'toggle' : 'toggle']('kids-mode', now);
          b.classList.toggle('on', now); b.setAttribute('aria-checked', String(now));
          LB.store.setSetting('kidsMode', now);
          if (LB.kids && LB.kids.applySkin) { } /* kids.js reads the setting on next render */
          LB.render();
          return;
        }
        var val = !(LB.store.getSetting(k) !== false);
        LB.store.setSetting(k, val);
        b.classList.toggle('on', val); b.setAttribute('aria-checked', String(val));
        if (k === 'sfx' && val) LB.sfx.play('correct');
      });
    });
    var r = host.querySelector('#lb-reset2');
    if (r) r.addEventListener('click', function () {
      if (confirm(t('progress.resetAsk'))) { LB.store.wipe(); LB.toast(t('toast.reset')); LB.render(); }
    });
  }

  /* ============================ header / shell extras ============================ */
  function paintHeaderTools() {
    var tools = document.querySelector('#lb-header .header-tools');
    if (!tools) return;
    if (!document.getElementById('lb-sound-btn')) {
      var b = LB.el('button', {
        class: 'btn btn-ghost btn-icon', id: 'lb-sound-btn', type: 'button',
        title: t('more.sound'), 'aria-label': t('more.sound')
      });
      b.addEventListener('click', function () {
        var val = !(LB.store.getSetting('sound') !== false);
        LB.store.setSetting('sound', val);
        LB.toast(val ? '🔊 ' + t('more.sound') : '🔇 ' + t('more.sound'));
        paintHeaderTools();
        if (val) LB.sfx.play('correct');
      });
      tools.insertBefore(b, tools.firstChild);
    }
    var sb = document.getElementById('lb-sound-btn');
    var on = LB.store.getSetting('sound') !== false;
    sb.innerHTML = I(on ? 'volume' : 'x');
    sb.setAttribute('aria-pressed', String(!on));
  }

  function wireMoreButtons(root) {
    ['lb-more-btn', 'lb-more-btn-m'].forEach(function (id) {
      var b = document.getElementById(id);
      if (!b || b.__moreWired) return;
      b.__moreWired = true;
      b.addEventListener('click', function (e) { e.preventDefault(); LB.openMore(); });
    });
    var n = document.getElementById('lb-nav-more');
    if (n && !n.__moreWired) { n.__moreWired = true; n.addEventListener('click', function (e) { e.preventDefault(); LB.openMore(); }); }
  }

  /* ==================== lesson extras (sticky stepper etc.) ==================== */
  LB.ux = {
    /* called by the boot script right after the player wired a lesson */
    afterLesson(root, code, lesson) {
      var part = root.querySelector('#lb-part');
      if (part) part.classList.add('part-body');
      /* keep the alphabet grid audio friendly (letters + example word) */
      LB.$$('[data-letter]', root).forEach(function (b) {
        if (b.__letterWired) return; b.__letterWired = true;
      });
      /* mistakes drill shortcut on the exercise summary */
      var st = root.querySelector('#lb-stepper');
      if (st && !st.__stepperWired) {
        st.__stepperWired = true;
        /* the player already wired #lb-prev / #lb-next inside the stepper */
      }
      return true;
    }
  };

  /* ============================== render hook ============================== */
  var prevRender = LB.render;
  LB.render = function () {
    var out = prevRender.apply(this, arguments);
    try {
      var route = (LB.state.route && LB.state.route.name) || 'home';
      var view = document.getElementById('lb-view');
      /* page-enter transition */
      if (view) {
        view.classList.add('view-enter');
        setTimeout(function () { if (view) view.classList.remove('view-enter'); }, 300);
      }
      /* Home: Today's learning right under the hero + journey map */
      if (route === 'home' && view && !document.getElementById('lb-today')) {
        var hero = view.querySelector('.hero');
        var block = todayHTML(LB.state.targetLang) +
          '<section class="section" style="padding-top:1.2rem"><h2 class="section-title">' + I('layers') + ' ' + esc(t('journey.title')) + '</h2>' +
          '<p class="section-lead small">' + esc(t('journey.lead')) + '</p>' +
          '<div class="card" style="margin-top:1rem">' + journeyHTML(LB.state.targetLang) + '</div></section>';
        if (hero && hero.insertAdjacentHTML) hero.insertAdjacentHTML('afterend', block);
        else if (view.insertAdjacentHTML) view.insertAdjacentHTML('afterbegin', block);
      }
      /* journey page wiring is handled by its own wire() */
      wireMoreButtons(document);
      paintHeaderTools();
      paintSettings(document.getElementById('lb-sheet-settings'));
      if (route === 'home' && view) {
        var t2 = view.querySelector('#lb-today');
        if (t2) t2.setAttribute('data-code', LB.state.targetLang);
      }
      mountOnboard();
      wireJourney(document);
    } catch (e) { /* the app must keep working even if this layer fails */ }
    return out;
  };

  window.addEventListener('hashchange', function () {
    setTimeout(function () { try { wireMoreButtons(document); paintHeaderTools(); } catch (e) { } }, 60);
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') LB.closeMore(); });
})();
