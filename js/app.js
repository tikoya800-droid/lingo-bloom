/* ==========================================================================
   LingoBloom — app shell: navigation, router, pages
   Every page is a function that returns HTML, plus an optional wire() step.
   ========================================================================== */
(function () {
  var t = LB.t, esc = LB.esc, I = LB.icon;

  /* ===================== shell pieces ===================== */
  function navItems() {
    return [
      { id: 'home', href: '#/home', icon: 'home', label: t('nav.home') },
      { id: 'learn', href: '#/learn', icon: 'book', label: t('nav.learn') },
      { id: 'practice', href: '#/practice', icon: 'puzzle', label: t('nav.practice') },
      { id: 'conversations', href: '#/conversations', icon: 'chat', label: t('nav.conversations') },
      { id: 'vocabulary', href: '#/vocabulary', icon: 'cards', label: t('nav.vocabulary') },
      { id: 'review', href: '#/review', icon: 'refresh', label: t('nav.review') },
      { id: 'progress', href: '#/progress', icon: 'chart', label: t('nav.progress') }
    ];
  }

  function headerHTML(active) {
    var items = navItems();
    var code = LB.state.targetLang;
    var lang = LB.getLang(code);
    var dark = LB.state.theme === 'dark';
    return '<div class="wrap header-inner">' +
      '<a class="brand" href="#/home">' +
        '<img src="assets/logo-mark.png" alt="LingoBloom logo" />' +
        '<span class="brand-name">Lingo<span>Bloom</span></span>' +
      '</a>' +
      '<nav class="main-nav" aria-label="main">' +
        items.map(function (it) {
          return '<a class="nav-link' + (it.id === active ? ' active' : '') + '" href="' + it.href + '">' + I(it.icon) + '<span>' + it.label + '</span></a>';
        }).join('') +
      '</nav>' +
      '<div class="header-tools">' +
        '<select class="chip-select" id="lb-lang-pick" aria-label="' + t('label.language') + '">' +
          LB.LANGS.map(function (l) {
            return '<option value="' + l.code + '"' + (l.code === code ? ' selected' : '') + '>' + l.flag + ' ' + l.name + '</option>';
          }).join('') +
        '</select>' +
        '<select class="chip-select" id="lb-ui-pick" aria-label="interface language">' +
          '<option value="ar"' + (LB.i18n.lang === 'ar' ? ' selected' : '') + '>العربية</option>' +
          '<option value="en"' + (LB.i18n.lang === 'en' ? ' selected' : '') + '>English</option>' +
        '</select>' +
        '<button class="btn btn-ghost btn-icon" id="lb-theme" title="theme" aria-label="theme">' + I(dark ? 'sun' : 'moon') + '</button>' +
        '<a class="btn btn-ghost btn-icon" href="#/search" title="' + t('nav.search') + '" aria-label="' + t('nav.search') + '">' + I('search') + '</a>' +
      '</div>' +
    '</div>';
  }

  function bottomNavHTML(active) {
    return '<ul>' + navItems().slice(0, 5).map(function (it) {
      return '<li><a class="' + (it.id === active ? 'active' : '') + '" href="' + it.href + '">' + I(it.icon) + '<span>' + it.label + '</span></a></li>';
    }).join('') + '</ul>';
  }

  function footerHTML() {
    return '<div class="wrap">' +
      '<div class="footer-grid">' +
        '<div class="stack">' +
          '<div class="brand"><img src="assets/logo-mark.png" alt="logo" /><span class="brand-name">Lingo<span>Bloom</span></span></div>' +
          '<p class="small muted">' + t('footer.note') + '</p>' +
          '<p class="tiny muted">' + t('footer.rights') + ' © ' + new Date().getFullYear() + '</p>' +
        '</div>' +
        '<div class="stack" style="gap:.5rem"><strong>' + t('footer.quick') + '</strong>' +
          '<a href="#/learn">' + t('nav.learn') + '</a><a href="#/practice">' + t('nav.practice') + '</a>' +
          '<a href="#/vocabulary">' + t('nav.vocabulary') + '</a><a href="#/progress">' + t('nav.progress') + '</a></div>' +
        '<div class="stack" style="gap:.5rem"><strong>' + t('footer.support') + '</strong>' +
          '<a href="#/guide">' + t('nav.guide') + '</a><a href="#/guide">' + t('footer.faq') + '</a>' +
          '<a href="#/search">' + t('nav.search') + '</a></div>' +
        '<div class="stack" style="gap:.5rem"><strong>' + t('footer.follow') + '</strong>' +
          '<span class="row" style="gap:.5rem">' +
            '<a class="btn btn-soft btn-icon" href="#/home" aria-label="site">' + I('globe') + '</a>' +
            '<a class="btn btn-soft btn-icon" href="#/home" aria-label="chat">' + I('chat') + '</a>' +
            '<a class="btn btn-soft btn-icon" href="#/home" aria-label="star">' + I('star') + '</a>' +
          '</span></div>' +
      '</div>' +
    '</div>';
  }

  /* ===================== small components ===================== */
  function sayBtn(text, langCode, cls) {
    return '<button class="btn btn-soft btn-icon ' + (cls || '') + '" data-say="' + esc(text) + '" data-lang="' + esc(langCode) + '" aria-label="' + t('action.listen') + '">' + I('volume') + '</button>';
  }
  function chip(label, value, current, param, extra) {
    return '<button class="tab' + (String(current) === String(value) ? ' active' : '') + '" data-param="' + param + '" data-value="' + esc(value) + '"' + (extra || '') + '>' + esc(label) + '</button>';
  }
  function ring(percent, size, label) {
    var s = size || 150, r = (s / 2) - 12, c = 2 * Math.PI * r;
    var off = c - (LB.clamp(percent, 0, 100) / 100) * c;
    return '<div class="ring" style="width:' + s + 'px;height:' + s + 'px">' +
      '<svg width="' + s + '" height="' + s + '"><circle cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '" stroke="var(--primary-soft)" stroke-width="12" fill="none"></circle>' +
      '<circle cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '" stroke="var(--primary)" stroke-width="12" fill="none" stroke-linecap="round" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"></circle></svg>' +
      '<div class="val">' + (label || percent + '%') + '</div></div>';
  }
  function starsHTML(n) {
    var out = '';
    for (var i = 0; i < 3; i++) out += '<span class="' + (i < n ? 'on' : '') + '">' + I('star', 'ic-sm') + '</span>';
    return '<span class="stars">' + out + '</span>';
  }
  function toast(msg) {
    var layer = document.getElementById('lb-toasts');
    if (!layer) return;
    var el = LB.el('div', { class: 'toast' }, msg);
    layer.appendChild(el);
    setTimeout(function () { el.remove(); }, 2200);
  }
  function confetti() {
    var host = LB.el('div', { class: 'confetti' });
    var colors = ['#5D38DB', '#FF8FA3', '#38BDF8', '#34D399', '#F59E0B'];
    for (var i = 0; i < 40; i++) {
      host.appendChild(LB.el('i', {
        style: 'inset-inline-start:' + Math.random() * 100 + '%;top:-20px;background:' + colors[i % colors.length] +
          ';animation-delay:' + (Math.random() * .5).toFixed(2) + 's'
      }));
    }
    document.body.appendChild(host);
    setTimeout(function () { host.remove(); }, 2200);
  }
  LB.toast = toast; LB.confetti = confetti; LB.ring = ring; LB.starsHTML = starsHTML; LB.sayBtn = sayBtn;

  function lessonCard(lesson, code) {
    var st = LB.store.lessonState(code, lesson.id);
    var done = st && st.done;
    return '<button class="lesson-card" data-open="' + lesson.id + '" data-code="' + code + '">' +
      '<span class="lesson-num' + (done ? ' done' : '') + '">' + (done ? I('check', 'ic-sm') : lesson.order) + '</span>' +
      '<span class="meta">' +
        '<strong>' + esc(lesson.title) + (lesson.titleMeaning ? ' <span class="tiny muted">' + esc(lesson.titleMeaning) + '</span>' : '') + '</strong>' +
        '<small>' + esc(lesson.topic) + ' • ' + lesson.minutes + ' ' + t('label.minutes') + ' • ' + lesson.vocab.length + ' ' + t('nav.vocabulary') + '</small>' +
      '</span>' +
      '<span class="row" style="gap:.4rem">' +
        (done ? '<span class="pill-tag green">' + (st.best || 0) + '/' + (st.total || 10) + '</span>' + starsHTML(st.stars || 0) : '<span class="pill-tag">' + t('label.new') + '</span>') +
        I('arrow') +
      '</span>' +
    '</button>';
  }
  LB.lessonCard = lessonCard;

  function langCard(lang) {
    var p = LB.progressOf(lang.code);
    return '<button class="lang-card" data-picklang="' + lang.code + '">' +
      '<span class="lang-scene" style="background-position:' + lang.scene + ' center"></span>' +
      '<span class="lang-card-body">' +
        '<span class="flag">' + lang.flag + '</span>' +
        '<strong>' + esc(lang.name) + '</strong>' +
        '<span class="small muted">' + esc(lang.native) + '</span>' +
        '<span class="small">' + esc(lang.blurb ? lang.blurb[LB.i18n.lang] : '') + '</span>' +
        '<span class="row-between" style="margin-top:auto">' +
          '<span class="pill-tag' + (p.done ? ' green' : '') + '">' + p.done + ' / ' + p.total + ' ' + t('label.lessons') + '</span>' +
          '<span class="lang-go">' + I('arrow', 'ic-sm') + '</span>' +
        '</span>' +
      '</span>' +
    '</button>';
  }

  /* ===================== pages ===================== */
  var pages = {};

  /* ---------- home ---------- */
  pages.home = function () {
    var code = LB.state.targetLang, lang = LB.getLang(code);
    var cur = LB.currentLessonId(code);
    var lesson = cur ? LB.findLesson(code, cur) : null;
    var p = LB.progressOf(code);
    var st = LB.store.get('stats');
    var unit = lesson ? LB.unitsOf(code, lesson.level).filter(function (u) { return u.id === lesson.unitId; })[0] : null;

    var cont = lesson ? '<section class="section" style="padding-bottom:0"><h2 style="font-size:1.3rem">' + t('home.continue') + '</h2>' +
      '<div class="card" style="margin-top:1rem">' +
        '<div class="row-between">' +
          '<div class="stack" style="gap:.35rem">' +
            '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + ' • ' + lesson.level + ' • ' + esc(lesson.unitTitle) + '</span>' +
            '<h3>' + t('label.lesson') + ' ' + lesson.order + ': ' + esc(lesson.title) + '</h3>' +
            '<p class="small muted">' + esc(lesson.topic) + ' • ' + lesson.minutes + ' ' + t('label.minutes') + '</p>' +
          '</div>' +
          '<div class="stack" style="gap:.5rem;align-items:end">' + ring(p.percent, 96) +
            '<a class="btn" href="#/lesson/' + code + '/' + lesson.id + '">' + I('play', 'ic-sm') + ' ' + t('action.continue') + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="bar" style="margin-top:1rem"><i style="width:' + p.percent + '%"></i></div>' +
      '</div></section>' : '';

    var quick = [
      { href: '#/learn', icon: 'layers', title: t('action.newLesson'), sub: t('learn.title') },
      { href: '#/review', icon: 'refresh', title: t('nav.review'), sub: p.due + ' ' + t('review.due') },
      { href: '#/practice', icon: 'puzzle', title: t('nav.practice'), sub: t('practice.games') },
      { href: '#/conversations', icon: 'chat', title: t('nav.conversations'), sub: LB.allLessons(code).filter(function (l) { return l.conversation; }).length + ' ' + t('label.lessons') },
      { href: '#/progress', icon: 'chart', title: t('nav.progress'), sub: p.done + '/' + p.total + ' ' + t('label.lessons') },
      { href: '#/vocabulary', icon: 'cards', title: t('nav.vocabulary'), sub: p.words + ' ' + t('home.words') }
    ];

    return '' +
    '<div class="wrap">' +
      '<section class="hero">' +
        '<div>' +
          '<span class="hero-badge">' + t('home.badge') + '</span>' +
          '<h1 style="margin-top:.6rem">' + t('home.h1a') + '<br /><span class="grad-text">' + t('home.h1b') + '</span></h1>' +
          '<p class="lead">' + t('home.lead') + '</p>' +
          '<div class="btn-row" style="margin-top:1.5rem">' +
            '<button class="btn btn-lg" data-picklang="' + code + '">' + I('play', 'ic-sm') + ' ' + t('action.start') + '</button>' +
            '<a class="btn btn-outline btn-lg" href="#/learn">' + t('action.explore') + '</a>' +
          '</div>' +
        '</div>' +
        '<div class="hero-art float"><img src="assets/hero.png" alt="learner with headphones" /></div>' +
      '</section>' +
      cont +
      '<section class="section">' +
        '<h2 style="font-size:1.3rem">' + t('home.quick') + '</h2>' +
        '<div class="grid grid-3" style="margin-top:1rem">' +
          quick.map(function (q) {
            return '<a class="card tight hoverable row" href="' + q.href + '">' +
              '<span class="ic-badge">' + I(q.icon) + '</span>' +
              '<span class="stack" style="gap:.1rem"><strong>' + q.title + '</strong><small class="muted">' + q.sub + '</small></span></a>';
          }).join('') +
        '</div>' +
      '</section>' +
      '<section class="section" style="padding-top:0">' +
        '<div class="grid grid-3">' +
          '<div class="stat"><span class="row" style="gap:.4rem">' + I('flame', 'ic-sm') + '<span class="muted small">' + t('home.streak') + '</span></span><b>' + (st.streak || 0) + '</b></div>' +
          '<div class="stat"><span class="row" style="gap:.4rem">' + I('cards', 'ic-sm') + '<span class="muted small">' + t('home.words') + '</span></span><b>' + p.words + '</b></div>' +
          '<div class="stat"><span class="row" style="gap:.4rem">' + I('trophy', 'ic-sm') + '<span class="muted small">' + t('home.lessons') + '</span></span><b>' + p.done + '</b></div>' +
        '</div>' +
      '</section>' +
      '<section class="section" style="padding-top:0">' +
        '<div class="row-between" style="align-items:flex-end">' +
          '<div><h2 style="font-size:1.4rem">' + t('home.langs.title') + '</h2><p class="small muted" style="margin-top:.4rem">' + t('home.langs.lead') + '</p></div>' +
          '<a class="small strong" href="#/learn" style="color:var(--primary)">' + t('home.viewAll') + ' →</a>' +
        '</div>' +
        '<div class="lang-grid" style="margin-top:1.2rem">' + LB.LANGS.map(langCard).join('') + '</div>' +
      '</section>' +
      '<section class="section" style="padding-top:0">' +
        '<div class="hub">' +
          '<div class="stack" style="padding:2rem">' +
            '<span class="ic-badge">' + I('flower') + '</span>' +
            '<h2>' + t('home.hub.title') + '</h2>' +
            '<p class="muted">' + t('home.hub.lead') + '</p>' +
            '<div><a class="btn" href="#/learn">' + t('home.hub.cta') + ' ' + I('arrow', 'ic-sm') + '</a></div>' +
          '</div>' +
          '<div class="hub-art">' +
            '<span class="flower">🌸</span>' +
            '<span class="flag-bubble" style="inset-inline-start:10%;top:1.4rem">🇫🇷</span>' +
            '<span class="flag-bubble" style="inset-inline-end:14%;top:3.4rem">🇮🇹</span>' +
            '<span class="flag-bubble" style="inset-inline-start:40%;top:5.4rem">🇪🇸</span>' +
            '<span class="flag-bubble" style="inset-inline-start:18%;top:7.4rem">🇬🇧</span>' +
            '<span class="flag-bubble" style="inset-inline-end:30%;top:8.6rem">🇩🇪</span>' +
          '</div>' +
        '</div>' +
      '</section>' +
    '</div>';
  };
  pages.home.active = 'home';

  /* ---------- learn ---------- */
  pages.learn = function (r) {
    var code = r.lang || LB.state.targetLang;
    var lang = LB.getLang(code);
    var levels = LB.levelsOf(code);
    var level = r.level && levels.indexOf(r.level) > -1 ? r.level : levels[0];
    var units = level ? LB.unitsOf(code, level) : [];
    var planned = LB.PLANNED_LEVELS.filter(function (l) { return levels.indexOf(l) === -1; });

    var body = '';
    if (!level) {
      body = '<p class="muted">' + t('label.comingSoon') + '</p>';
    } else {
      body = units.map(function (u, ui) {
        var up = LB.unitProgress(code, u);
        return '<div class="card unit-block">' +
          '<div class="unit-head">' +
            '<span class="ic-badge">' + I('layers') + '</span>' +
            '<div style="flex:1;min-width:200px">' +
              '<strong>' + t('label.unit') + ' ' + (ui + 1) + ': ' + esc(u.title) + '</strong>' +
              '<div class="small muted">' + esc(u.titleMeaning || '') + ' — ' + esc(u.summary ? u.summary[LB.i18n.lang] : '') + '</div>' +
            '</div>' +
            '<div style="min-width:140px">' +
              '<div class="row-between small"><span class="muted">' + up.done + '/' + up.total + '</span><span>' + up.percent + '%</span></div>' +
              '<div class="bar" style="margin-top:.35rem"><i style="width:' + up.percent + '%"></i></div>' +
            '</div>' +
          '</div>' +
          '<div class="lesson-list">' + u.lessons.map(function (L) { return lessonCard(L, code); }).join('') + '</div>' +
        '</div>';
      }).join('');
    }

    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.9rem">' + t('learn.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:44rem">' + t('learn.lead') + '</p>' +

      '<div class="card" style="margin-top:1.5rem">' +
        '<strong class="small muted">' + t('learn.pickLanguage') + '</strong>' +
        '<div class="tabs" style="margin-top:.6rem">' +
          LB.LANGS.map(function (l) { return chip(l.flag + ' ' + l.name, l.code, code, 'lang'); }).join('') +
        '</div>' +
        '<strong class="small muted" style="display:block;margin-top:1.2rem">' + t('learn.pickLevel') + '</strong>' +
        '<div class="tabs" style="margin-top:.6rem">' +
          levels.map(function (l) {
            var n = LB.unitsOf(code, l).reduce(function (a, u) { return a + u.lessons.length; }, 0);
            return chip(l + ' — ' + t('level.' + l) + ' (' + n + ')', l, level, 'level');
          }).join('') +
          planned.map(function (l) { return chip(l + ' — ' + t('level.' + l) + ' • ' + t('label.comingSoon'), l, level, 'level', ' disabled'); }).join('') +
        '</div>' +
      '</div>' +

      '<div class="stack" style="margin-top:1.5rem">' + body + '</div>' +

      '<div class="card" style="margin-top:1.5rem">' +
        '<div class="row" style="gap:.6rem">' + I('layers') + '<strong>' + t('learn.roadmap') + '</strong></div>' +
        '<p class="small muted" style="margin-top:.5rem">' + t('learn.roadmapNote') + '</p>' +
        '<div class="tabs" style="margin-top:.8rem">' +
          LB.PLANNED_LEVELS.map(function (l) { return '<span class="tab' + (levels.indexOf(l) > -1 ? ' active' : ' locked') + '">' + l + ' — ' + t('level.' + l) + '</span>'; }).join('') +
        '</div>' +
        '<div class="table-wrap" style="margin-top:1rem"><table class="table"><thead><tr>' +
          '<th>' + t('label.unit') + '</th><th>' + t('label.topic') + '</th></tr></thead><tbody>' +
          LB.plannedUnits.map(function (u, i) { return '<tr><td>' + t('label.unit') + ' ' + (i + 1) + '</td><td>' + esc(u) + '</td></tr>'; }).join('') +
        '</tbody></table></div>' +
      '</div>' +
    '</div>';
  };
  pages.learn.active = 'learn';
  pages.learn.params = { lang: LB.state.targetLang, level: null };
  pages.learn.wire = function (root, r) {
    LB.$$('[data-param]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var p = b.getAttribute('data-param'), v = b.getAttribute('data-value');
        if (p === 'lang') { LB.setTargetLang(v); location.hash = '#/learn/' + v + '/' + (LB.levelsOf(v)[0] || ''); }
        else if (p === 'level') { location.hash = '#/learn/' + (r.lang || LB.state.targetLang) + '/' + v; }
      });
    });
  };

  /* ---------- practice ---------- */
  pages.practice = function (r) {
    var code = r.lang || LB.state.targetLang, lang = LB.getLang(code);
    var lessons = LB.allLessons(code);
    var games = [
      { key: 'match', name: t('game.match.name'), desc: t('game.match.desc'), icon: 'puzzle', tone: 'card-tint-blue' },
      { key: 'quick', name: t('game.quick.name'), desc: t('game.quick.desc'), icon: 'target', tone: 'card-tint-pink' },
      { key: 'memory', name: t('game.memory.name'), desc: t('game.match.desc'), icon: 'cards', tone: 'card-tint-mint' }
    ];
    var modules = lessons.map(function (L) {
      var st = LB.store.lessonState(code, L.id);
      return '<button class="lesson-card" data-open="' + L.id + '" data-code="' + code + '">' +
        '<span class="lesson-num' + (st && st.done ? ' done' : '') + '">' + L.order + '</span>' +
        '<span class="meta"><strong>' + esc(L.title) + '</strong><small>' + esc(L.topic) + '</small></span>' +
        '<span class="pill-tag">' + (st && st.done ? (st.best + '/' + st.total) : t('label.new')) + '</span></button>';
    }).join('');

    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.9rem">' + t('practice.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:44rem">' + t('practice.lead') + '</p>' +

      '<div class="grid grid-3" style="margin-top:1.5rem">' +
        games.map(function (g) {
          return '<div class="card ' + g.tone + ' stack">' +
            '<span class="ic-badge" style="background:#fff">' + I(g.icon) + '</span>' +
            '<strong>' + g.name + '</strong><span class="small">' + g.desc + '</span>' +
            '<div><button class="btn btn-sm" data-game="' + g.key + '">' + t('practice.start') + '</button></div>' +
          '</div>';
        }).join('') +
      '</div>' +

      '<h2 style="font-size:1.3rem;margin-top:2rem">' + t('practice.pickLesson') + '</h2>' +
      '<div class="lesson-list" style="margin-top:1rem">' + (modules || '<p class="muted">—</p>') + '</div>' +
      '<div id="lb-game-host" style="margin-top:1.5rem"></div>' +
    '</div>';
  };
  pages.practice.active = 'practice';
  pages.practice.wire = function (root, r) {
    var code = r.lang || LB.state.targetLang;
    LB.$$('[data-game]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var host = document.getElementById('lb-game-host');
        LB.player.game(b.getAttribute('data-game'), code, host);
        host.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    LB.wireOpen(root);
  };

  /* ---------- conversations ---------- */
  pages.conversations = function (r) {
    var code = r.lang || LB.state.targetLang, lang = LB.getLang(code);
    var list = LB.allLessons(code).filter(function (L) { return L.conversation; });
    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.9rem">' + t('conv.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:44rem">' + t('conv.lead') + '</p>' +
      '<div class="stack" style="margin-top:1.5rem">' +
        (list.length ? list.map(function (L) {
          var c = L.conversation;
          return '<div class="card stack">' +
            '<div class="row-between">' +
              '<div><strong>' + esc(L.title) + '</strong><div class="small muted">' + esc(L.topic) + ' • ' + esc(L.unitTitle) + ' • ' + L.level + '</div></div>' +
              '<div class="row" style="gap:.4rem">' +
                '<button class="btn btn-soft btn-sm" data-playconv="' + L.id + '" data-code="' + code + '">' + I('play', 'ic-sm') + ' ' + t('action.playAll') + '</button>' +
                '<a class="btn btn-outline btn-sm" href="#/lesson/' + code + '/' + L.id + '">' + t('action.openLesson') + '</a>' +
              '</div>' +
            '</div>' +
            (c.setting ? '<div class="pill-tag pink">' + t('conv.setting') + ': ' + esc(c.setting[LB.i18n.lang] || c.setting.ar || '') + '</div>' : '') +
            LB.convHTML(L, code, { showTranslation: true, questions: true }) +
          '</div>';
        }).join('') : '<p class="muted">' + t('label.comingSoon') + '</p>') +
      '</div>' +
      '<div id="lb-game-host"></div>' +
    '</div>';
  };
  pages.conversations.active = 'conversations';
  pages.conversations.wire = function (root, r) {
    LB.wireSpeech(root);
    LB.$$('[data-playconv]', root).forEach(function (b) {
      b.addEventListener('click', function () {
        var L = LB.findLesson(b.getAttribute('data-code'), b.getAttribute('data-playconv'));
        if (L) LB.playConversation(L.conversation, L.language, root, b);
      });
    });
    LB.wireQuiz(root);
  };

  /* ---------- vocabulary ---------- */
  pages.vocabulary = function (r) {
    var code = r.lang || LB.state.targetLang, lang = LB.getLang(code);
    var words = LB.learnedWords(code);
    var q = (r.q || '').toLowerCase();
    var status = r.status || 'all';
    var lvl = r.level || 'all';
    var unit = r.unit || 'all';
    var levelList = LB.levelsOf(code);
    var unitList = [];
    levelList.forEach(function (l) { LB.unitsOf(code, l).forEach(function (u) { if (unitList.indexOf(u.title) === -1) unitList.push(u.title); }); });

    var filtered = words.filter(function (w) {
      if (q && (w.v.t + ' ' + w.v.m + ' ' + (w.v.ex || '')).toLowerCase().indexOf(q) === -1) return false;
      if (lvl !== 'all' && w.lesson.level !== lvl) return false;
      if (unit !== 'all' && w.lesson.unitTitle !== unit) return false;
      if (status === 'review') { if (!w.srs || (w.srs.due || 0) > Date.now()) return false; }
      if (status === 'learned') { /* all learned */ }
      return true;
    });

    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.9rem">' + t('vocab.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:44rem">' + t('vocab.lead') + '</p>' +

      '<div class="card" style="margin-top:1.5rem">' +
        '<div class="field">' + I('search') + '<input class="input" id="lb-vsearch" placeholder="' + t('vocab.search') + '" value="' + esc(r.q || '') + '" /></div>' +
        '<div class="row" style="gap:1rem;margin-top:1rem;flex-wrap:wrap">' +
          '<span class="row" style="gap:.4rem"><span class="small muted">' + t('vocab.filterLevel') + '</span>' +
            '<select class="chip-select" data-filter="level"><option value="all">' + t('vocab.all') + '</option>' +
            levelList.map(function (l) { return '<option value="' + l + '"' + (lvl === l ? ' selected' : '') + '>' + l + '</option>'; }).join('') + '</select></span>' +
          '<span class="row" style="gap:.4rem"><span class="small muted">' + t('vocab.filterUnit') + '</span>' +
            '<select class="chip-select" data-filter="unit"><option value="all">' + t('vocab.all') + '</option>' +
            unitList.map(function (u) { return '<option value="' + esc(u) + '"' + (unit === u ? ' selected' : '') + '>' + esc(u) + '</option>'; }).join('') + '</select></span>' +
          '<span class="row" style="gap:.4rem"><span class="small muted">' + t('vocab.filterStatus') + '</span>' +
            '<select class="chip-select" data-filter="status">' +
              '<option value="all"' + (status === 'all' ? ' selected' : '') + '>' + t('vocab.all') + '</option>' +
              '<option value="learned"' + (status === 'learned' ? ' selected' : '') + '>' + t('label.learned') + '</option>' +
              '<option value="review"' + (status === 'review' ? ' selected' : '') + '>' + t('label.needsReview') + '</option>' +
            '</select></span>' +
          '<span class="pill-tag">' + filtered.length + ' / ' + words.length + '</span>' +
        '</div>' +
      '</div>' +

      '<div class="vocab-list" style="margin-top:1.2rem">' +
        (filtered.length ? filtered.map(function (w) {
          var due = w.srs && (w.srs.due || 0) <= Date.now();
          return '<div class="vocab-row">' +
            '<div style="flex:1;min-width:0">' +
              '<div class="row" style="gap:.6rem"><span class="term">' + esc(w.v.t) + '</span>' +
                (w.v.pron ? '<span class="pron">' + esc(w.v.pron) + '</span>' : '') + '</div>' +
              '<div class="meaning">' + esc(w.v.m) + '</div>' +
              (w.v.ex ? '<div class="ex">' + esc(w.v.ex) + (w.v.exM ? ' — ' + esc(w.v.exM) : '') + '</div>' : '') +
              '<div class="tiny muted" style="margin-top:.2rem">' + esc(w.lesson.title) + ' • ' + w.lesson.level + ' • ' + esc(w.lesson.unitTitle) + '</div>' +
            '</div>' +
            '<div class="actions">' + sayBtn(w.v.t, LB.getLang(code).speech) +
              '<span class="pill-tag' + (due ? ' gold' : ' green') + '">' + (due ? t('label.needsReview') : t('label.learned')) + '</span>' +
            '</div>' +
          '</div>';
        }).join('') : '<div class="card center muted">' + t('vocab.empty') + '</div>') +
      '</div>' +
    '</div>' +
    '<div id="lb-game-host"></div>';
  };
  pages.vocabulary.active = 'vocabulary';
  pages.vocabulary.wire = function (root, r) {
    LB.wireSpeech(root);
    var inp = document.getElementById('lb-vsearch');
    if (inp) {
      var tm = null;
      inp.addEventListener('input', function () {
        clearTimeout(tm);
        tm = setTimeout(function () { LB.go('vocabulary', { lang: r.lang || LB.state.targetLang, q: inp.value, level: r.level, unit: r.unit, status: r.status }); }, 260);
      });
    }
    LB.$$('[data-filter]', root).forEach(function (s) {
      s.addEventListener('change', function () {
        var o = { lang: r.lang || LB.state.targetLang, q: r.q, level: r.level, unit: r.unit, status: r.status };
        o[s.getAttribute('data-filter')] = s.value;
        LB.go('vocabulary', o);
      });
    });
  };

  /* ---------- review ---------- */
  pages.review = function (r) {
    var code = r.lang || LB.state.targetLang, lang = LB.getLang(code);
    var p = LB.progressOf(code);
    var due = LB.store.dueWords(code);
    var learned = LB.learnedWords(code);
    var dueWords = learned.filter(function (w) { return due.indexOf(w.v.key) > -1; });

    return '<div class="wrap section">' +
      '<span class="pill-tag">' + lang.flag + ' ' + esc(lang.name) + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.9rem">' + t('review.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:44rem">' + t('review.lead') + '</p>' +

      '<div class="grid grid-3" style="margin-top:1.5rem">' +
        '<div class="stat card-tint-soft"><span class="muted small">' + t('review.due') + '</span><b>' + dueWords.length + '</b></div>' +
        '<div class="stat"><span class="muted small">' + t('review.total') + '</span><b>' + p.srsCount + '</b></div>' +
        '<div class="stat card-tint-mint"><span class="muted small">' + t('progress.reviews') + '</span><b>' + (LB.store.get('stats').reviews || 0) + '</b></div>' +
      '</div>' +

      '<div class="card" style="margin-top:1.5rem">' +
        '<p class="muted">' + (dueWords.length ? '' : t('review.none')) + '</p>' +
        '<div class="btn-row" style="margin-top:.8rem">' +
          '<button class="btn" id="lb-review-start" data-mode="' + (dueWords.length ? 'due' : 'quick') + '">' + I('play', 'ic-sm') + ' ' + (dueWords.length ? t('action.startReview') : t('review.quick')) + '</button>' +
          (dueWords.length ? '<button class="btn btn-outline" id="lb-review-quick">' + t('review.quick') + '</button>' : '') +
        '</div>' +
      '</div>' +

      '<div id="lb-review-host" style="margin-top:1.5rem"></div>' +

      '<div class="card" style="margin-top:1.5rem">' +
        '<strong>' + t('progress.byUnit') + '</strong>' +
        '<div class="stack" style="margin-top:.8rem">' +
          LB.levelsOf(code).map(function (lvl) {
            return LB.unitsOf(code, lvl).map(function (u) {
              var up = LB.unitProgress(code, u);
              return '<div><div class="row-between small"><span>' + lvl + ' • ' + esc(u.title) + '</span><span>' + up.done + '/' + up.total + '</span></div>' +
                '<div class="bar" style="margin-top:.3rem"><i style="width:' + up.percent + '%"></i></div></div>';
            }).join('');
          }).join('') +
        '</div>' +
      '</div>' +
    '</div>';
  };
  pages.review.active = 'review';
  pages.review.wire = function (root, r) {
    var code = r.lang || LB.state.targetLang;
    var start = document.getElementById('lb-review-start');
    var quick = document.getElementById('lb-review-quick');
    var host = document.getElementById('lb-review-host');
    function run(mode) {
      var words = LB.learnedWords(code);
      var due = LB.store.dueWords(code);
      var set = mode === 'due' ? words.filter(function (w) { return due.indexOf(w.v.key) > -1; }) : words;
      if (!set.length) { toast(t('vocab.empty')); return; }
      LB.player.reviewSession(set.slice(0, 12), code, host);
      host.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (start) start.addEventListener('click', function () { run(start.getAttribute('data-mode')); });
    if (quick) quick.addEventListener('click', function () { run('quick'); });
  };

  /* ---------- progress ---------- */
  pages.progress = function (r) {
    var code = r.lang || LB.state.targetLang, lang = LB.getLang(code);
    var p = LB.progressOf(code);
    var st = LB.store.get('stats');
    var tests = LB.store.get('tests').filter(function (x) { return x.lang === code; }).slice(-8).reverse();

    return '<div class="wrap section">' +
      '<h1 style="font-size:1.9rem">' + t('progress.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:44rem">' + t('progress.lead') + '</p>' +

      '<div class="card" style="margin-top:1.5rem">' +
        '<div class="row" style="gap:1.5rem;flex-wrap:wrap">' +
          ring(p.percent, 150) +
          '<div class="stack" style="flex:1;min-width:220px;gap:.6rem">' +
            '<div><div class="row-between small"><span>' + t('progress.overall') + '</span><span>' + p.done + '/' + p.total + ' ' + t('label.lessons') + '</span></div>' +
              '<div class="bar" style="margin-top:.3rem"><i style="width:' + p.percent + '%"></i></div></div>' +
            '<div class="small muted">' + t('label.language') + ': <strong>' + lang.flag + ' ' + esc(lang.name) + '</strong> — ' + t('label.level') + ': <strong>' + (LB.levelsOf(code)[0] || '—') + '</strong></div>' +
            '<div class="small muted">' + t('label.completed') + ': ' + p.done + ' • ' + t('home.words') + ': ' + p.words + ' • ' + t('progress.stars') + ': ' + p.stars + ' ' + I('star', 'ic-sm') + '</div>' +
            '<div class="btn-row"><button class="btn btn-outline btn-sm" id="lb-reset">' + I('refresh', 'ic-sm') + ' ' + t('action.reset') + '</button></div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="grid grid-4" style="margin-top:1.5rem">' +
        '<div class="stat"><span class="muted small">' + t('progress.lessonsDone') + '</span><b>' + p.done + '</b></div>' +
        '<div class="stat"><span class="muted small">' + t('progress.wordsLearned') + '</span><b>' + p.words + '</b></div>' +
        '<div class="stat"><span class="muted small">' + t('progress.avgScore') + '</span><b>' + p.avg + '%</b></div>' +
        '<div class="stat"><span class="muted small">' + t('progress.streak') + '</span><b>' + (st.streak || 0) + '</b></div>' +
        '<div class="stat"><span class="muted small">' + t('progress.reviews') + '</span><b>' + (st.reviews || 0) + '</b></div>' +
        '<div class="stat"><span class="muted small">' + t('review.total') + '</span><b>' + p.srsCount + '</b></div>' +
        '<div class="stat"><span class="muted small">' + t('game.stars') + '</span><b>' + (st.stars || 0) + '</b></div>' +
        '<div class="stat"><span class="muted small">' + t('review.due') + '</span><b>' + p.due + '</b></div>' +
      '</div>' +

      '<div class="grid grid-2" style="margin-top:1.5rem">' +
        '<div class="card"><strong>' + t('progress.byUnit') + '</strong><div class="stack" style="margin-top:.8rem">' +
          LB.levelsOf(code).map(function (lvl) {
            return LB.unitsOf(code, lvl).map(function (u) {
              var up = LB.unitProgress(code, u);
              return '<div><div class="row-between small"><span>' + lvl + ' • ' + esc(u.title) + '</span><span>' + up.percent + '%</span></div>' +
                '<div class="bar" style="margin-top:.3rem"><i style="width:' + up.percent + '%"></i></div></div>';
            }).join('');
          }).join('') || '<p class="muted">—</p>' +
        '</div></div>' +
        '<div class="card"><strong>' + t('progress.recentTests') + '</strong>' +
          (tests.length ? '<table class="table" style="margin-top:.6rem"><thead><tr><th>' + t('label.lesson') + '</th><th>' + t('exercise.score') + '</th><th></th></tr></thead><tbody>' +
            tests.map(function (x) {
              var L = LB.findLesson(x.lang, x.lessonId);
              return '<tr><td>' + esc(L ? L.title : x.lessonId) + '<div class="tiny muted">' + new Date(x.at).toLocaleDateString() + '</div></td>' +
                '<td>' + x.score + '/' + x.total + '</td><td>' + starsHTML(Math.max(1, Math.round(x.score / x.total * 3))) + '</td></tr>';
            }).join('') + '</tbody></table>' : '<p class="muted" style="margin-top:.6rem">' + t('label.comingSoon') + '</p>') +
        '</div>' +
      '</div>' +
    '</div>';
  };
  pages.progress.active = 'progress';
  pages.progress.wire = function () {
    var b = document.getElementById('lb-reset');
    if (b) b.addEventListener('click', function () {
      if (confirm(t('progress.resetAsk'))) { LB.store.wipe(); toast(t('toast.reset')); LB.render(); }
    });
  };

  /* ---------- search ---------- */
  pages.search = function (r) {
    var code = r.lang || LB.state.targetLang;
    var q = (r.q || '').trim().toLowerCase();
    var lessons = [], words = [];
    if (q.length) {
      LB.allLessons(code).forEach(function (L) {
        if ((L.title + ' ' + L.topic + ' ' + L.unitTitle + ' ' + L.titleMeaning).toLowerCase().indexOf(q) > -1) lessons.push(L);
      });
      var seen = {};
      LB.allLessons(code).forEach(function (L) {
        L.vocab.concat(L.related).concat(L.expressions).forEach(function (v) {
          if (seen[v.key]) return;
          if ((v.t + ' ' + v.m + ' ' + (v.ex || '')).toLowerCase().indexOf(q) > -1) { seen[v.key] = 1; words.push({ v: v, lesson: L }); }
        });
      });
    }
    return '<div class="wrap section">' +
      '<h1 style="font-size:1.9rem">' + t('search.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:44rem">' + t('search.lead') + '</p>' +
      '<div class="card" style="margin-top:1.5rem">' +
        '<div class="field">' + I('search') + '<input class="input" id="lb-search" placeholder="' + t('vocab.search') + '" value="' + esc(r.q || '') + '" /></div>' +
        '<div class="tabs" style="margin-top:.9rem">' + LB.LANGS.map(function (l) { return chip(l.flag + ' ' + l.name, l.code, code, 'lang'); }).join('') + '</div>' +
      '</div>' +
      (q.length ? (
        '<div class="card" style="margin-top:1.2rem"><strong>' + t('search.lessons') + ' (' + lessons.length + ')</strong>' +
          '<div class="lesson-list" style="margin-top:.8rem">' + (lessons.length ? lessons.map(function (L) { return lessonCard(L, code); }).join('') : '<p class="muted">' + t('search.none') + '</p>') + '</div></div>' +
        '<div class="card" style="margin-top:1.2rem"><strong>' + t('search.words') + ' (' + words.length + ')</strong>' +
          '<div class="vocab-list" style="margin-top:.8rem">' + (words.length ? words.slice(0, 60).map(function (w) {
            return '<div class="vocab-row"><div style="flex:1"><div class="row" style="gap:.6rem"><span class="term">' + esc(w.v.t) + '</span>' +
              (w.v.pron ? '<span class="pron">' + esc(w.v.pron) + '</span>' : '') + '</div><div class="meaning">' + esc(w.v.m) + '</div>' +
              (w.v.ex ? '<div class="ex">' + esc(w.v.ex) + '</div>' : '') +
              '<div class="tiny muted">' + esc(w.lesson.title) + ' • ' + w.lesson.level + '</div></div>' +
              '<div class="actions">' + sayBtn(w.v.t, LB.getLang(code).speech) + '</div></div>';
          }).join('') : '<p class="muted">' + t('search.none') + '</p>') + '</div></div>'
      ) : '') +
    '</div>';
  };
  pages.search.wire = function (root, r) {
    LB.wireSpeech(root);
    LB.wireOpen(root);
    var inp = document.getElementById('lb-search');
    if (inp) {
      var tm = null;
      inp.addEventListener('input', function () { clearTimeout(tm); tm = setTimeout(function () { LB.go('search', { lang: r.lang || LB.state.targetLang, q: inp.value }); }, 260); });
      inp.focus();
    }
    LB.$$('[data-param]', root).forEach(function (b) {
      b.addEventListener('click', function () { LB.go('search', { lang: b.getAttribute('data-value'), q: r.q }); });
    });
  };

  /* ---------- guide ---------- */
  pages.guide = function () {
    var sample = [
      '{',
      '  id: "fr-a0-u1-l4",        // unique id',
      '  topic: "Famille",',
      '  title: "La famille",      // shown in the lesson list',
      '  titleMeaning: "العيلة",',
      '  minutes: 12,',
      '  goals: { ar: ["..."], en: ["..."] },',
      '  vocab: [ ["père", "أب", "بير", "Mon père est ici.", "أبويا هنا."] ],',
      '  related: [ ... ],          // words that belong with the topic',
      '  expressions: [ ... ],      // useful phrases',
      '  examples: [ ["J\'ai un frère.", "عندي أخ.", "جي أَنْ فرير", ["J\'ai","un","frère"]] ],',
      '  grammar: { title:{ar:"",en:""}, points:[{ar:"",en:""}], table:[{a:"",b:""}], note:{ar:"",en:""} },',
      '  reading: { title:{ar:"",en:""}, linesEn:[], linesAr:[], questions:[{q:"",options:[],answer:0}] },',
      '  listening: [ ["audio text", ["option A","option B"], 0, "المعنى"] ],',
      '  speaking:  [ ["phrase", "المعنى", "النطق"] ],',
      '  conversation: { setting:{ar:"",en:""},',
      '    lines: [ ["Sara","Bonjour !","مرحبا!","بونجور"] ],',
      '    vocab: [ ["Bonjour","مرحبا"] ],',
      '    questions: [ { q:"", options:[], answer:0 } ] },',
      '  writing: { tasks: [ { ar:"", en:"" } ] }',
      '}'
    ].join('\n');

    return '<div class="wrap section">' +
      '<span class="pill-tag">' + I('code', 'ic-sm') + ' ' + t('nav.guide') + '</span>' +
      '<h1 style="margin-top:.6rem;font-size:1.9rem">' + t('guide.title') + '</h1>' +
      '<p class="muted" style="margin-top:.5rem;max-width:46rem">' + t('guide.lead') + '</p>' +

      '<div class="card" style="margin-top:1.5rem">' +
        '<strong>' + t('learn.roadmap') + '</strong>' +
        '<pre class="code" style="margin-top:.8rem">data/\n  english.js\n  french.js\n  italian.js\n  spanish.js\n  german.js\ncss/style.css\njs/  core.js  i18n.js  speech.js  engine.js  app.js  player.js</pre>' +
      '</div>' +

      '<div class="card" style="margin-top:1.2rem">' +
        '<strong>' + t('label.lesson') + ' — JSON' + '</strong>' +
        '<pre class="code" style="margin-top:.8rem">' + esc(sample) + '</pre>' +
      '</div>' +

      '<div class="card" style="margin-top:1.2rem">' +
        '<strong>' + t('label.topic') + ' — steps</strong>' +
        '<div class="stack" style="margin-top:.7rem">' +
          [
            'افتح <code class="inline">data/&lt;language&gt;.js</code>',
            'لاقي المستوى والوحدة، وضيف الكائن جوه <code class="inline">lessons: [ ... ]</code>',
            'أضف الجلسة (conversation) والاستماع (listening) والتدريبات',
            'احفظ الملف — التطبيق بيقرأ الداتا لوحده من غير أي تعديل في الواجهة'
          ].map(function (s, i) { return '<div class="row"><span class="lesson-num">' + (i + 1) + '</span><span>' + s + '</span></div>'; }).join('') +
        '</div>' +
      '</div>' +
    '</div>';
  };
  pages.guide.active = 'guide';

  /* ===================== wiring helpers ===================== */
  LB.wireSpeech = function (root) {
    LB.$$('[data-say]', root || document).forEach(function (b) {
      if (b.__wired) return; b.__wired = true;
      b.addEventListener('click', function () {
        LB.speech.say(b.getAttribute('data-say'), b.getAttribute('data-lang') || 'en-GB', { force: true });
        b.classList.add('pop'); setTimeout(function () { b.classList.remove('pop'); }, 400);
      });
    });
  };
  LB.wireOpen = function (root) {
    LB.$$('[data-open]', root || document).forEach(function (b) {
      if (b.__wired) return; b.__wired = true;
      b.addEventListener('click', function () {
        location.hash = '#/lesson/' + b.getAttribute('data-code') + '/' + b.getAttribute('data-open');
      });
    });
  };
  LB.wireQuiz = function (root) {
    LB.$$('[data-quiz]', root || document).forEach(function (box) {
      if (box.__wired) return; box.__wired = true;
      var ans = +box.getAttribute('data-answer');
      LB.$$('.option', box).forEach(function (o) {
        o.addEventListener('click', function () {
          LB.$$('.option', box).forEach(function (x) { x.disabled = true; });
          var i = +o.getAttribute('data-i');
          LB.$$('.option', box)[ans] && LB.$$('.option', box)[ans].classList.add('correct');
          if (i !== ans) o.classList.add('wrong');
        });
      });
    });
  };

  /* conversation block reused by several pages */
  LB.convHTML = function (lesson, code, opts) {
    opts = opts || {};
    var c = lesson.conversation, lang = LB.getLang(lesson.language);
    var show = opts.showTranslation;
    var html = '<div class="dialogue" data-lang="' + lang.speech + '">' +
      c.lines.map(function (l, i) {
        return '<div class="bubble ' + (i % 2 ? 'b' : 'a') + '" data-line="' + i + '">' +
          '<span class="who">' + esc((l.who || '?').slice(0, 2)) + '</span>' +
          '<div class="say" style="flex:1"><div class="row-between" style="gap:.5rem">' +
            '<span class="t">' + esc(l.who) + ': ' + esc(l.t) + '</span>' +
            '<span class="row" style="gap:.3rem">' + sayBtn(l.t, lang.speech, 'ic-sm') + '</span>' +
          '</div>' +
          '<div class="a"' + (show ? '' : ' hidden') + '>' + esc(l.m) + (l.pron ? ' <span class="tiny">(' + esc(l.pron) + ')</span>' : '') + '</div>' +
          '</div></div>';
      }).join('') + '</div>';

    if (c.vocab && c.vocab.length) {
      html += '<div><strong class="small">' + t('conv.keyVocab') + '</strong><div class="row" style="gap:.5rem;flex-wrap:wrap;margin-top:.5rem">' +
        c.vocab.map(function (v) { return '<span class="pill-tag">' + esc(v.t) + ' — ' + esc(v.m) + '</span>'; }).join('') + '</div></div>';
    }
    if (opts.questions && c.questions && c.questions.length) {
      html += '<div class="stack" style="margin-top:.5rem"><strong class="small">' + t('conv.questions') + '</strong>' +
        c.questions.map(function (q) {
          var opts2 = q.options.map(function (o, i) { return { label: o, sub: '' }; });
          return LB.qHTML({ type: 'choice', prompt: q.q, promptSub: q.qMeaning || '', options: opts2, answer: q.answer, staticQuiz: true });
        }).join('') + '</div>';
    }
    return html;
  };

  /* static question renderer (non-scored, used for comprehension) */
  LB.qHTML = function (q) {
    if (q.type === 'choice' || q.type === 'listen') {
      return '<div class="card tight">' +
        '<div class="row" style="gap:.6rem">' + (q.type === 'listen' ? '<span class="ic-badge">' + I('volume') + '</span>' : '') +
        '<div><strong>' + esc(q.prompt) + '</strong>' + (q.promptSub ? '<div class="small muted">' + esc(q.promptSub) + '</div>' : '') + '</div></div>' +
        '<div class="options" style="margin-top:.8rem"' + (q.staticQuiz ? ' data-quiz="1" data-answer="' + q.answer + '"' : '') + '>' +
          q.options.map(function (o, i) { return '<button class="option" data-i="' + i + '">' + esc(o.label) + '</button>'; }).join('') +
        '</div></div>';
    }
    return '';
  };

  /* ===================== router ===================== */
  LB.go = function (name, params) {
    var q = [];
    Object.keys(params || {}).forEach(function (k) { if (params[k] != null && params[k] !== '') q.push(k + '=' + encodeURIComponent(params[k])); });
    location.hash = '#/' + name + (q.length ? '?' + q.join('&') : '');
  };

  function parseHash() {
    var h = location.hash.replace(/^#\/?/, '');
    var qi = h.indexOf('?');
    var path = qi > -1 ? h.slice(0, qi) : h;
    var query = {};
    if (qi > -1) h.slice(qi + 1).split('&').forEach(function (p) { var kv = p.split('='); if (kv[0]) query[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || ''); });
    var parts = path.split('/').filter(Boolean);
    var name = parts[0] || 'home';
    var r = { name: name, parts: parts, lang: query.lang, level: query.level, q: query.q, lessonId: parts[2] };
    if (!pages[name]) { r.name = name = 'home'; }
    return r;
  }

  LB.render = function () {
    var r = parseHash();
    LB.state.route = r;
    var page = pages[r.name];
    var view = document.getElementById('lb-view');
    document.getElementById('lb-header').innerHTML = headerHTML(page.active || r.name);
    document.getElementById('lb-bottom-nav').innerHTML = bottomNavHTML(page.active || r.name);
    var res = page(r);
    var html = typeof res === 'string' ? res : (res.html || '');
    view.innerHTML = html;
    view.classList.add('pop');
    setTimeout(function () { view.classList.remove('pop'); }, 400);
    if (page.wire) page.wire(view, r);
    LB.wireSpeech(view);
    LB.wireOpen(view);
    LB.wireQuiz(view);
    wireShell();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function wireShell() {
    var lp = document.getElementById('lb-lang-pick');
    if (lp) lp.addEventListener('change', function () { LB.setTargetLang(lp.value); LB.render(); });
    var up = document.getElementById('lb-ui-pick');
    if (up) up.addEventListener('change', function () { LB.i18n.set(up.value); LB.render(); });
    var th = document.getElementById('lb-theme');
    if (th) th.addEventListener('click', function () { LB.setTheme(LB.state.theme === 'dark' ? 'light' : 'dark'); LB.render(); });
  }

  LB.setTargetLang = function (code) {
    LB.state.targetLang = code;
    LB.store.setSetting('targetLang', code);
    LB.i18n.lang = LB.store.getSetting('uiLang') || LB.i18n.lang;
  };
  LB.setTheme = function (theme) {
    LB.state.theme = theme;
    LB.store.setSetting('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  /* ===================== boot ===================== */
  LB.boot = function () {
    var s = LB.store.get('settings') || {};
    LB.i18n.lang = s.uiLang || 'ar';
    LB.state.targetLang = s.targetLang || 'en';
    LB.state.theme = s.theme || 'light';
    LB.i18n.apply();
    document.documentElement.classList.toggle('dark', LB.state.theme === 'dark');
    document.getElementById('lb-footer').innerHTML = footerHTML();
    LB.speech.init();
    window.addEventListener('hashchange', LB.render);
    if (!location.hash) location.hash = '#/home';
    LB.render();
  };

  LB.pages = pages;
})();
