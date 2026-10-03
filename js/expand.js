/* ==========================================================================
   LingoBloom — curriculum expander
   Lets you add whole units or single lessons to any language/level WITHOUT
   touching the UI or the existing data files:

     LB.addUnits('fr', 'A1', [ { title:'…', lessons:[ … ] } ]);
     LB.addLessons('fr', 'A0', 'Everyday Life', [ { …lesson… } ]);

   Load this file AFTER js/core.js and BEFORE the data files.
   ========================================================================== */
window.LB = window.LB || {};

(function () {
  function bucket(code, level, label) {
    if (!LB.CURRICULUM[code]) LB.CURRICULUM[code] = {};
    if (!LB.CURRICULUM[code][level]) {
      LB.CURRICULUM[code][level] = { status: 'ready', label: label || level, units: [] };
    }
    var b = LB.CURRICULUM[code][level];
    if (!b.units) b.units = [];
    b.status = 'ready';
    return b;
  }

  /* add complete units to a level of a language */
  LB.addUnits = function (code, level, units, label) {
    var lang = LB.getLang(code);
    var b = bucket(code, level, label);
    (units || []).forEach(function (u) {
      u.id = u.id || (code + '-' + level + '-u' + (b.units.length + 1));
      u.lessons = (u.lessons || []).map(function (L, i) { return LB.normLesson(L, lang, level, u, i); });
      b.units.push(u);
    });
    return b;
  };

  /* append lessons to an existing unit (matched by title) or create that unit */
  LB.addLessons = function (code, level, unitTitle, lessons, opts) {
    opts = opts || {};
    var lang = LB.getLang(code);
    var b = bucket(code, level, opts.label);
    var unit = b.units.filter(function (u) { return u.title === unitTitle; })[0];
    if (!unit) {
      unit = {
        id: code + '-' + level + '-u' + (b.units.length + 1),
        title: unitTitle,
        titleMeaning: opts.titleMeaning || unitTitle,
        summary: opts.summary || { ar: '', en: '' },
        lessons: []
      };
      b.units.push(unit);
    }
    (lessons || []).forEach(function (L) {
      unit.lessons.push(LB.normLesson(L, lang, level, unit, unit.lessons.length));
    });
    return unit;
  };

  /* levels that are still empty are reported as "coming soon" by the UI */
  LB.levelStatus = function (code, level) {
    var b = (LB.CURRICULUM[code] || {})[level];
    if (!b || !b.units || !b.units.length) return 'planned';
    return 'ready';
  };
})();
