/* ==========================================================================
   LingoBloom — kids layer: petal garden, mascot, badges, daily goal, cheers
   Additive + defensive: if anything here fails, the rest of the app still runs.
   It hooks the public API only (LB.store / LB.render / LB.speech), so lesson
   data files need no changes.
   ========================================================================== */
(function () {
  if (!window.LB) return;

  var S = {
    ar: {
      'kids.mode': 'وضع الأطفال',
      'kids.petals': 'بتلات',
      'kids.garden': 'بستاني',
      'kids.gardenLead': 'كل درس تخلّصه بيزرع زهرة جديدة في بستانك.',
      'kids.gardenEmpty': 'بستانك فاضي لسه… خلّص أول درس وازرع أول زهرة!',
      'kids.goal': 'هدف النهارده',
      'kids.goalDone': 'حققته!',
      'kids.goalUnit': 'درس',
      'kids.badges': 'أوسمتي',
      'kids.badgeLocked': 'لسه مقفولة',
      'kids.badge.first': 'أول زهرة',
      'kids.badge.five': '٥ دروس',
      'kids.badge.words20': '٢٠ كلمة',
      'kids.badge.streak3': '٣ أيام متواصلة',
      'kids.badge.perfect': 'علامة كاملة',
      'kids.badge.conv3': 'محادث ٣ حوارات',
      'kids.cheer.title': 'برافو!',
      'kids.cheer.planted': 'زرعت زهرة جديدة في بستانك',
      'kids.cheer.stars': 'نجومك',
      'kids.cheer.keep': 'كمّل الدرس اللي بعده',
      'kids.cheer.review': 'راجع كلماتي',
      'kids.tip.home': 'أهلاً! اختار لغة وابدأ أول درس 🌱',
      'kids.tip.learn': 'جرّب درس جديد… كل درس بيزرع زهرة!',
      'kids.tip.practice': 'العب بسرعة واكسب بتلات 🌸',
      'kids.tip.review': 'راجع كلماتك قبل النوم، هتفضل في دماغك!',
      'kids.tip.conversations': 'اسمع الحوار والعبه مع نفسك بصوت عالي 🎧',
      'kids.tip.vocabulary': 'دوس على زر الصوت وكرّر الكلمة ٣ مرات!',
      'kids.tip.progress': 'شوف بستانك وهو بيكبر 📈',
      'kids.tip.generic': 'خطوة صغيرة كل يوم = لغة جديدة!'
    },
    en: {
      'kids.mode': 'Kids mode',
      'kids.petals': 'Petals',
      'kids.garden': 'My garden',
      'kids.gardenLead': 'Every lesson you finish plants a new flower.',
      'kids.gardenEmpty': 'Your garden is empty… finish your first lesson to plant a flower!',
      'kids.goal': "Today's goal",
      'kids.goalDone': 'Done!',
      'kids.goalUnit': 'lessons',
      'kids.badges': 'My badges',
      'kids.badgeLocked': 'locked',
      'kids.badge.first': 'First flower',
      'kids.badge.five': '5 lessons',
      'kids.badge.words20': '20 words',
      'kids.badge.streak3': '3-day streak',
      'kids.badge.perfect': 'Perfect score',
      'kids.badge.conv3': '3 conversations',
      'kids.cheer.title': 'Bravo!',
      'kids.cheer.planted': 'You planted a new flower in your garden',
      'kids.cheer.stars': 'Your stars',
      'kids.cheer.keep': 'Next lesson',
      'kids.cheer.review': 'Review my words',
      'kids.tip.home': 'Hi! Pick a language and start your first lesson 🌱',
      'kids.tip.learn': 'Try a new lesson — every one plants a flower!',
      'kids.tip.practice': 'Play fast and collect petals 🌸',
      'kids.tip.review': 'Review before bed and the words stay with you!',
      'kids.tip.conversations': 'Listen to the dialogue and act it out loud 🎧',
      'kids.tip.vocabulary': 'Tap the speaker and repeat the word 3 times!',
      'kids.tip.progress': 'Watch your garden grow 📈',
      'kids.tip.generic': 'A little every day = a new language!'
    }
  };
  Object.keys(S).forEach(function (lang) {
    LB.STRINGS[lang] = LB.STRINGS[lang] || {};
    Object.keys(S[lang]).forEach(function (k) { LB.STRINGS[lang][k] = S[lang][k]; });
  });

  var COLORS = ['#7C5CFC', '#FF8FA3', '#38BDF8', '#34D399', '#FDBA74', '#F472B6', '#A78BFA', '#22D3EE'];

  /* ------------------------------- SVG art ------------------------------- */
  function flowerSVG(color, scale) {
    var c = color || COLORS[0];
    var petals = '';
    for (var i = 0; i < 5; i++) {
      petals += '<ellipse cx="50" cy="24" rx="15" ry="20" transform="rotate(' + (i * 72) + ' 50 50)" fill="' + c + '" opacity=".9"/>';
    }
    return '<svg viewBox="0 0 100 118" class="bloom' + (scale ? ' small' : '') + '" aria-hidden="true">' +
      '<path d="M50 96V118" stroke="#34D399" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M50 108c-12 0-18-6-18-6s10-6 18 0" fill="#34D399"/>' +
      petals +
      '<circle cx="50" cy="50" r="12" fill="#FFE9A8"/>' +
      '<circle cx="46" cy="47" r="1.8" fill="#8A5B00"/><circle cx="54" cy="47" r="1.8" fill="#8A5B00"/>' +
      '<path d="M45 54q5 5 10 0" stroke="#8A5B00" stroke-width="2.2" fill="none" stroke-linecap="round"/>' +
      '</svg>';
  }
  function sproutSVG() {
    return '<svg viewBox="0 0 120 120" class="sprout" aria-hidden="true">' +
      '<ellipse cx="60" cy="108" rx="34" ry="7" fill="#EDE9FE"/>' +
      '<path d="M60 104V56" stroke="#34D399" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M60 74c-16 0-26-9-26-9s16-9 26 0z" fill="#5BCB9B"/>' +
      '<path d="M60 64c16 0 26-10 26-10s-16-9-26 0z" fill="#34D399"/>' +
      '<circle cx="60" cy="40" r="26" fill="#8B6BF7"/>' +
      '<circle cx="60" cy="40" r="26" fill="url(#lbsp)"/>' +
      '<defs><radialGradient id="lbsp" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#B9A6FF"/><stop offset="1" stop-color="#7C5CFC"/></radialGradient></defs>' +
      '<circle cx="50" cy="37" r="3.4" fill="#fff"/><circle cx="70" cy="37" r="3.4" fill="#fff"/>' +
      '<circle cx="51" cy="38" r="1.7" fill="#2B1A66"/><circle cx="69" cy="38" r="1.7" fill="#2B1A66"/>' +
      '<path d="M53 47q7 7 14 0" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>' +
      '<circle cx="42" cy="46" r="4" fill="#FFB3C7" opacity=".75"/>' +
      '<circle cx="78" cy="46" r="4" fill="#FFB3C7" opacity=".75"/>' +
      '<path d="M60 14v6M92 40h6M22 40h6" stroke="#FFD166" stroke-width="3" stroke-linecap="round"/>' +
      '<circle cx="88" cy="20" r="3.4" fill="#FFD166"/>' +
      '</svg>';
  }
  function miniFlower() {
    return '<svg class="mini-flower" viewBox="0 0 100 100" aria-hidden="true">' +
      '<circle cx="50" cy="50" r="13" fill="#FFD166"/>' +
      [0, 72, 144, 216, 288].map(function (d) {
        return '<ellipse cx="50" cy="22" rx="13" ry="18" transform="rotate(' + d + ' 50 50)" fill="#B79CFF"/>';
      }).join('') + '</svg>';
  }

  /* ------------------------------- state -------------------------------- */
  function kdata() {
    var raw = LB.store.raw();
    if (!raw.kids) raw.kids = { petals: 0, flowers: [], badges: [], convs: 0, perfect: 0, day: '', goalDay: '' };
    var k = raw.kids;
    if (!k.flowers) k.flowers = [];
    if (!k.badges) k.badges = [];
    return k;
  }
  function lang() { return (LB.i18n && LB.i18n.lang) || 'ar'; }
  function T(key) { return LB.t(key); }

  function lessonsDoneToday(code) {
    var pg = LB.store.lang(code);
    var today = new Date().toDateString();
    var n = 0;
    Object.keys(pg.lessons || {}).forEach(function (id) {
      var at = pg.lessons[id] && pg.lessons[id].at;
      if (at && new Date(at).toDateString() === today) n++;
    });
    return n;
  }
  function totals() {
    var code = LB.state.targetLang;
    var p = LB.progressOf(code);
    var st = LB.store.raw().stats || {};
    return { code: code, lessons: p.done, words: p.words, stars: p.stars || 0, streak: st.streak || 0, perfect: kdata().perfect, convs: kdata().convs, today: lessonsDoneToday(code) };
  }
  function goal() { return 2; }

  var BADGES = [
    { id: 'first', icon: 'flower', need: function (k) { return k.lessons >= 1; } },
    { id: 'five', icon: 'star', need: function (k) { return k.lessons >= 5; } },
    { id: 'words20', icon: 'cards', need: function (k) { return k.words >= 20; } },
    { id: 'streak3', icon: 'flame', need: function (k) { return k.streak >= 3; } },
    { id: 'perfect', icon: 'trophy', need: function (k) { return k.perfect >= 1; } },
    { id: 'conv3', icon: 'chat', need: function (k) { return k.convs >= 3; } }
  ];
  function checkBadges() {
    var k = kdata(), got = [];
    var tk = totals();
    BADGES.forEach(function (b) {
      if (k.badges.indexOf(b.id) === -1 && b.need(tk)) { k.badges.push(b.id); got.push(b.id); }
    });
    if (got.length) LB.store.save();
    return got;
  }

  function addPetals(n) { var k = kdata(); k.petals += n; LB.store.save(); return k.petals; }

  /* ------------------------- rewards on real actions -------------------- */
  var prevComplete = LB.store.completeLesson;
  LB.store.completeLesson = function (code, lessonId, score, total, vocabKeys) {
    var before = LB.store.lessonState(code, lessonId);
    var res = prevComplete.apply(this, arguments);
    if (!before || !before.done) {           /* first time only */
      var stars = (score / Math.max(1, total)) >= 0.9 ? 3 : (score / Math.max(1, total)) >= 0.6 ? 2 : 1;
      var petals = 4 + stars * 2;
      addPetals(petals);
      var k = kdata();
      k.flowers.push({ c: COLORS[k.flowers.length % COLORS.length], id: lessonId, at: Date.now() });
      if (k.flowers.length > 40) k.flowers.shift();
      if (score >= total) k.perfect++;
      LB.store.save();
      var newBadges = checkBadges();
      try { LB.confetti(); } catch (e) { }
      celebrate({ petals: petals, stars: stars, badges: newBadges, lessonId: lessonId });
    }
    return res;
  };
  var prevTest = LB.store.addTest;
  LB.store.addTest = function (rec) {
    try { if (rec && rec.score >= rec.total) { kdata().perfect++; LB.store.save(); checkBadges(); } } catch (e) { }
    return prevTest.apply(this, arguments);
  };
  var prevReview = LB.store.addReview;
  LB.store.addReview = function () { addPetals(2); return prevReview.apply(this, arguments); };
  LB.kidsMarkConversation = function () { var k = kdata(); k.convs++; LB.store.save(); addPetals(3); checkBadges(); };

  /* --------------------------- celebration card -------------------------- */
  function celebrate(o) {
    try {
      var box = LB.el('div', { class: 'kids-celebrate', role: 'dialog', 'aria-live': 'polite' });
      var stars = '';
      for (var i = 0; i < 3; i++) stars += '<span class="' + (i < o.stars ? '' : 'off') + '">' + LB.icon('star') + '</span>';
      var badgesHTML = (o.badges || []).map(function (id) {
        return '<span class="badge-pill">' + LB.icon('star', 'ic-sm') + ' ' + LB.esc(T('kids.badge.' + id)) + '</span>';
      }).join(' ');
      box.innerHTML =
        '<div class="kids-card">' +
          '<div class="big-bloom">' + flowerSVG(COLORS[Math.floor(Math.random() * COLORS.length)]) + '</div>' +
          '<h3 class="sparkle-text">' + LB.esc(T('kids.cheer.title')) + '</h3>' +
          '<p>' + LB.esc(T('kids.cheer.planted')) + '</p>' +
          '<div class="kids-stars">' + stars + '</div>' +
          '<span class="petal-earn">' + miniFlower() + ' +' + o.petals + ' ' + LB.esc(T('kids.petals')) + '</span>' +
          (badgesHTML ? '<div class="badge-shelf" style="justify-content:center">' + badgesHTML + '</div>' : '') +
          '<div class="btn-row">' +
            '<button class="btn" data-celebrate="next">' + LB.esc(T('kids.cheer.keep')) + '</button>' +
            '<a class="btn btn-outline" href="#/review" data-celebrate="close">' + LB.esc(T('kids.cheer.review')) + '</a>' +
          '</div>' +
        '</div>';
      document.body.appendChild(box);
      var close = function () { if (box.parentNode) box.parentNode.removeChild(box); };
      box.addEventListener('click', function (e) {
        var el = e.target.closest ? e.target.closest('[data-celebrate],[data-say]') : null;
        if (e.target === box) close();
        if (el && el.getAttribute('data-celebrate') === 'next') {
          close();
          var nx = LB.nextLesson(LB.state.targetLang, o.lessonId);
          if (nx) LB.go('lesson', { lang: LB.state.targetLang, id: nx.id });
        }
      });
      setTimeout(function () { if (box.parentNode) close(); }, 7000);
    } catch (e) { }
  }

  /* ------------------------------ mascot -------------------------------- */
  var tipIndex = 0;
  function tipFor(name) {
    var key = 'kids.tip.' + (name || 'generic');
    var s = LB.STRINGS[lang()] || {};
    return s[key] ? T(key) : T('kids.tip.generic');
  }
  function mountMascot() {
    if (document.getElementById('lb-mascot')) return;
    var box = LB.el('div', { class: 'kids-mascot', id: 'lb-mascot' });
    box.innerHTML = sproutSVG() + '<div class="kids-bubble" id="lb-mascot-bubble">' + LB.esc(tipFor('home')) + '</div>';
    document.body.appendChild(box);
    box.addEventListener('click', function () {
      var route = (LB.state.route && LB.state.route.name) || 'home';
      var keys = ['kids.tip.' + route, 'kids.tip.generic'];
      var msg = tipFor(keys[tipIndex % 2 === 0 ? 0 : 1]);
      tipIndex++;
      var b = document.getElementById('lb-mascot-bubble');
      b.hidden = false;
      b.textContent = msg;
      try { LB.confetti(); } catch (e) { }
    });
  }
  function refreshMascotTip() {
    var b = document.getElementById('lb-mascot-bubble');
    if (!b) return;
    var route = (LB.state.route && LB.state.route.name) || 'local';
    b.textContent = tipFor(route);
  }

  /* --------------------------- petals header ---------------------------- */
  function paintChip() {
    var tools = document.querySelector('#lb-header .header-tools');
    if (!tools) return;
    var k = kdata();
    var chip = document.getElementById('lb-petal-chip');
    if (!chip) {
      chip = LB.el('button', { class: 'petal-chip', id: 'lb-petal-chip', title: T('kids.petals') });
      chip.addEventListener('click', function () { LB.go('progress', { lang: LB.state.targetLang }); });
      tools.insertBefore(chip, tools.firstChild);
    }
    chip.innerHTML = miniFlower() + '<b>' + k.petals + '</b><span>' + LB.esc(T('kids.petals')) + '</span>';
  }

  /* ---------------------------- garden block ---------------------------- */
  function gardenHTML() {
    var k = kdata(), tk = totals(), g = goal();
    var pct = Math.min(1, tk.today / g);
    var R = 26, C = 2 * Math.PI * R;
    var flowers = k.flowers.slice(-18).map(function (f) { return flowerSVG(f.c); }).join('');
    if (!flowers) flowers = '<p class="empty">' + LB.esc(T('kids.gardenEmpty')) + '</p>';
    var badges = BADGES.map(function (b) {
      var has = k.badges.indexOf(b.id) > -1;
      return '<span class="badge-pill' + (has ? '' : ' locked') + '" title="' + LB.esc(has ? T('kids.badge.' + b.id) : T('kids.badgeLocked')) + '">' +
        LB.icon(b.icon, 'ic-sm') + ' ' + LB.esc(T('kids.badge.' + b.id)) + '</span>';
    }).join('');
    return '<section class="card garden" id="lb-garden">' +
      '<div class="garden-head">' +
        '<div>' +
          '<div class="garden-title"><span class="ic-badge">' + LB.icon('flower') + '</span>' + LB.esc(T('kids.garden')) + '</div>' +
          '<p class="muted small" style="margin-top:.35rem;max-width:34rem">' + LB.esc(T('kids.gardenLead')) + '</p>' +
        '</div>' +
        '<div class="goal-ring">' +
          '<div class="ring-wrap">' +
            '<svg width="64" height="64" viewBox="0 0 64 64">' +
              '<circle cx="32" cy="32" r="' + R + '" fill="none" stroke="#EDE9FE" stroke-width="8"/>' +
              '<circle cx="32" cy="32" r="' + R + '" fill="none" stroke="#7C5CFC" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + (C * (1 - pct)) + '"/>' +
            '</svg>' +
            '<div class="ring-txt">' + tk.today + '/' + g + '</div>' +
          '</div>' +
          '<div><div class="small muted">' + LB.esc(T('kids.goal')) + '</div><strong>' +
            (tk.today >= g ? LB.esc(T('kids.goalDone')) : tk.today + ' ' + LB.esc(T('kids.goalUnit'))) + '</strong></div>' +
        '</div>' +
      '</div>' +
      '<div class="garden-plot"><div class="blooms">' + flowers + '</div></div>' +
      '<div class="badge-shelf">' + badges + '</div>' +
    '</section>';
  }

  /* ------------------------------ skin toggle --------------------------- */
  function applySkin() {
    var on = LB.store.getSetting('kidsMode');
    if (on === undefined || on === null) { on = true; LB.store.setSetting('kidsMode', true); }
    document.body.classList[on ? 'add' : 'remove']('kids-mode');
    var btn = document.getElementById('lb-kids-toggle');
    if (btn) {
      btn.classList[on ? 'add' : 'remove']('on');
      btn.innerHTML = (on ? '🌸 ' : '🌙 ') + LB.esc(T('kids.mode'));
    }
    return on;
  }
  function paintToggle() {
    var tools = document.querySelector('#lb-header .header-tools');
    if (!tools) return;
    var btn = document.getElementById('lb-kids-toggle');
    if (!btn) {
      btn = LB.el('button', { class: 'kids-toggle', id: 'lb-kids-toggle' });
      btn.addEventListener('click', function () {
        var on = applySkin();
        LB.store.setSetting('kidsMode', !on);
        applySkin();
      });
      tools.appendChild(btn);
    }
    applySkin();
  }

  /* --------------------------- render hook ------------------------------ */
  var prevRender = LB.render;
  LB.render = function () {
    var out = prevRender.apply(this, arguments);
    try {
      applySkin();
      mountMascot();
      paintChip();
      paintToggle();
      refreshMascotTip();
      var route = (LB.state.route && LB.state.route.name) || 'home';
      if (route === 'home') {
        var view = document.getElementById('lb-view');
        if (view && !document.getElementById('lb-garden')) view.insertAdjacentHTML('beforeend', gardenHTML());
      }
      if (route === 'progress') {
        var v2 = document.getElementById('lb-view');
        if (v2 && !document.getElementById('lb-garden') && !v2.querySelector('.garden')) v2.insertAdjacentHTML('beforeend', gardenHTML());
      }
    } catch (e) { }
    return out;
  };
  window.addEventListener('hashchange', function () { setTimeout(function () { try { paintChip(); refreshMascotTip(); } catch (e) { } }, 60); });

  LB.kids = { gardenHTML: gardenHTML, flowers: flowerSVG, sprout: sproutSVG, celebrate: celebrate, state: kdata, totals: totals };
})();
