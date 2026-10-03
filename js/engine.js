/* ==========================================================================
   LingoBloom — exercise engine
   Generates real exercises + a 10-question test from any lesson's data.
   Question shapes:
     {type:'choice'}  options:[{label,sub}], answer:idx
     {type:'listen'}  say:'…', options:[{label,sub}], answer:idx
     {type:'fill'}    before, after, options:[{label}], answer:idx
     {type:'order'}   words:[], answer:[words in order]
     {type:'match'}   pairs:[{a,b}]
     {type:'write'}   listen+repeat (self/auto scored)
   ========================================================================== */
window.LB = window.LB || {};

LB.engine = {
  /* --- helpers --- */
  meaningPool(langCode) {
    const pool = [];
    LB.allLessons(langCode).forEach(L => {
      L.vocab.concat(L.related).concat(L.expressions).forEach(v => pool.push({ t: v.t, m: v.m }));
    });
    return pool;
  },
  optionSet(pool, correct, n, field) {
    field = field || 'm';
    const others = LB.shuffle(pool.filter(p => p[field] && p[field] !== correct)).slice(0, n || 3);
    const opts = others.map(o => o[field]).concat([correct]);
    return { labels: LB.shuffle(opts), correct: correct };
  },

  /* word → meaning multiple choice */
  vocabChoice(lesson, langCode, pool) {
    const all = lesson.vocab.concat(lesson.related).concat(lesson.expressions);
    const v = all[Math.floor(Math.random() * all.length)];
    if (!v) return null;
    const set = this.optionSet(pool, v.m, 3, 'm');
    return {
      type: 'choice', kind: 'vocab', term: v.t, say: v.t,
      prompt: v.t, promptSub: v.pron || '',
      promptAr: 'إيه معنى الكلمة دي؟',
      options: set.labels.map(l => ({ label: l, sub: '' })),
      answer: set.labels.indexOf(v.m),
      explain: v.t + ' = ' + v.m, explainSub: v.ex || ''
    };
  },
  meaningChoice(lesson, langCode, pool) {
    const all = lesson.vocab.concat(lesson.related).concat(lesson.expressions);
    const v = all[Math.floor(Math.random() * all.length)];
    if (!v) return null;
    const set = this.optionSet(pool, v.t, 3, 't');
    return {
      type: 'choice', kind: 'meaning',
      prompt: v.m, promptSub: '',
      promptAr: 'اختار الكلمة الصح',
      say: null,
      options: set.labels.map(l => ({ label: l, sub: '' })),
      answer: set.labels.indexOf(v.t),
      explain: v.t + ' = ' + v.m, explainSub: v.ex || ''
    };
  },
  listenChoice(lesson, langCode, pool) {
    const all = lesson.vocab.concat(lesson.related).concat(lesson.expressions);
    const v = all[Math.floor(Math.random() * all.length)];
    if (!v) return null;
    const set = this.optionSet(pool, v.t, 3, 't');
    return {
      type: 'listen', kind: 'listen', say: v.t,
      prompt: '🎧', promptSub: '', promptAr: 'اسمع واختار الكلمة الصح',
      options: set.labels.map(l => ({ label: l, sub: '' })),
      answer: set.labels.indexOf(v.t),
      explain: v.t + ' = ' + v.m, explainSub: ''
    };
  },
  fillChoice(lesson, langCode, pool) {
    const ex = lesson.examples;
    if (!ex || !ex.length) return null;
    const e = ex[Math.floor(Math.random() * ex.length)];
    const words = String(e.t).replace(/[.!?¿¡]$/, '').split(' ');
    if (words.length < 3) return null;
    const idx = 1 + Math.floor(Math.random() * (words.length - 1));
    const target = words[idx];
    const before = words.slice(0, idx).join(' ');
    const after = words.slice(idx + 1).join(' ');
    const clean = w => w.replace(/[.,!?;:]/g, '');
    const terms = lesson.vocab.concat(lesson.related).map(v => v.t).filter(t => t.split(' ').length === 1);
    const wrong = LB.pick(terms, 3, [clean(target)]);
    const labels = LB.shuffle(wrong.concat([clean(target)]));
    return {
      type: 'fill', kind: 'grammar',
      before: before, after: after, promptAr: 'كمّل الجملة بالكلمة الصح',
      translation: e.m,
      options: labels.map(l => ({ label: l, sub: '' })),
      answer: labels.indexOf(clean(target)),
      explain: e.t, explainSub: e.m
    };
  },
  orderChoice(lesson) {
    const ex = lesson.examples;
    if (!ex || !ex.length) return null;
    const e = ex[Math.floor(Math.random() * ex.length)];
    const words = String(e.t).replace(/[.!?¿¡]$/, '').split(' ');
    if (words.length < 3 || words.length > 10) return null;
    return {
      type: 'order', kind: 'grammar',
      promptAr: 'رتّب الكلمات لتكوين جملة صحيحة',
      translation: e.m,
      answer: words, words: LB.shuffle(words),
      explain: e.t, explainSub: e.m
    };
  },
  matchQuestion(lesson) {
    const all = lesson.vocab.concat(lesson.related).slice(0, 12);
    if (all.length < 4) return null;
    const pairs = LB.shuffle(all).slice(0, 4).map(v => ({ a: v.t, b: v.m }));
    return { type: 'match', kind: 'vocab', promptAr: 'وصّل كل كلمة بمعناها', pairs: pairs };
  },
  convQuestion(lesson) {
    const q = lesson.conversation && lesson.conversation.questions;
    if (!q || !q.length) return null;
    const item = q[Math.floor(Math.random() * q.length)];
    return {
      type: 'choice', kind: 'conversation',
      prompt: item.q, promptSub: item.qMeaning || '',
      promptAr: 'سؤال على المحادثة',
      options: item.options.map(o => ({ label: o, sub: '' })),
      answer: item.answer,
      explain: item.options[item.answer], explainSub: ''
    };
  },
  speakingQuestion(lesson) {
    const ph = (lesson.speaking && lesson.speaking.length ? lesson.speaking : lesson.vocab)[0];
    if (!ph) return null;
    return {
      type: 'write', kind: 'speaking',
      promptAr: 'اسمع العبارة وقولها بصوت واضح',
      phrase: ph.t, meaning: ph.m, pron: ph.pron || '',
      explain: ph.t, explainSub: ph.m
    };
  },

  /* ================= ALPHABET builders (A0 letters) ================= */
  /* which word starts with this letter? */
  alphaWordChoice(lesson) {
    const letters = lesson.alphabet || [];
    if (letters.length < 4) return null;
    const a = letters[Math.floor(Math.random() * letters.length)];
    const wrong = LB.shuffle(letters.filter(x => x.w !== a.w)).slice(0, 3).map(x => x.w);
    const labels = LB.shuffle(wrong.concat([a.w]));
    return {
      type: 'choice', kind: 'alphabet', say: a.l,
      prompt: a.l, promptSub: a.name || '', promptAr: 'اختار الكلمة اللي تبدأ بالحرف ده',
      options: labels.map(l => ({ label: l, sub: '' })),
      answer: labels.indexOf(a.w),
      explain: a.l + ' → ' + a.w, explainSub: a.wm || ''
    };
  },
  /* which letter does this word start with? */
  alphaLetterChoice(lesson) {
    const letters = lesson.alphabet || [];
    if (letters.length < 4) return null;
    const a = letters[Math.floor(Math.random() * letters.length)];
    const wrong = LB.shuffle(letters.filter(x => x.l !== a.l)).slice(0, 3).map(x => x.l);
    const labels = LB.shuffle(wrong.concat([a.l]));
    return {
      type: 'choice', kind: 'alphabet',
      prompt: a.w, promptSub: a.wm || '', promptAr: 'الكلمة دي بتبدأ بأنهي حرف؟',
      options: labels.map(l => ({ label: l, sub: '' })),
      answer: labels.indexOf(a.l),
      explain: a.w + ' → ' + a.l, explainSub: a.wm || ''
    };
  },
  /* hear the letter, pick the letter */
  alphaListen(lesson) {
    const letters = lesson.alphabet || [];
    if (letters.length < 4) return null;
    const a = letters[Math.floor(Math.random() * letters.length)];
    const wrong = LB.shuffle(letters.filter(x => x.l !== a.l)).slice(0, 3).map(x => x.l);
    const labels = LB.shuffle(wrong.concat([a.l]));
    return {
      type: 'listen', kind: 'alphabet', say: a.l,
      prompt: '🎧', promptSub: '', promptAr: 'اسمع الحرف واختاره',
      options: labels.map(l => ({ label: l, sub: '' })),
      answer: labels.indexOf(a.l),
      explain: a.l + ' — ' + a.w, explainSub: a.wm || ''
    };
  },
  /* match the letter with its example word */
  alphaMatch(lesson) {
    const letters = lesson.alphabet || [];
    if (letters.length < 4) return null;
    const pairs = LB.shuffle(letters).slice(0, 4).map(x => ({ a: x.l, b: x.w }));
    return { type: 'match', kind: 'alphabet', promptAr: 'وصّل الحرف بكلمة تبدأ بيه', pairs: pairs };
  },
  buildAlphabetPractice(lesson) {
    const out = [];
    const push = q => { if (q) out.push(q); };
    push(this.alphaMatch(lesson));
    push(this.alphaListen(lesson));
    push(this.alphaWordChoice(lesson));
    push(this.alphaLetterChoice(lesson));
    push(this.alphaWordChoice(lesson));
    push(this.alphaListen(lesson));
    return out;
  },
  buildAlphabetTest(lesson) {
    const q = [
      this.alphaListen(lesson), this.alphaWordChoice(lesson), this.alphaLetterChoice(lesson),
      this.alphaListen(lesson), this.alphaWordChoice(lesson), this.alphaMatch(lesson),
      this.alphaLetterChoice(lesson), this.alphaListen(lesson), this.alphaWordChoice(lesson),
      this.alphaLetterChoice(lesson)
    ].filter(Boolean);
    return q.map((x, i) => Object.assign(x, { n: i + 1 }));
  },

  /* --- lesson practice (part 6/10) — always several, varied types --- */
  buildPractice(lesson) {
    const lang = lesson.language;
    const pool = this.meaningPool(lang);
    if (lesson.alphabet && lesson.alphabet.length) return this.buildAlphabetPractice(lesson);
    const out = [];
    const push = q => { if (q && out.length < 10) out.push(q); };
    push(this.matchQuestion(lesson));
    push(this.vocabChoice(lesson, lang, pool));
    push(this.fillChoice(lesson, lang, pool));
    push(this.orderChoice(lesson));
    if (lesson.listening && lesson.listening.length) {
      lesson.listening.forEach(l => out.push({
        type: 'listen', kind: 'listen', say: l.say,
        prompt: '🎧', promptSub: '', promptAr: 'اسمع واختار اللي سمعته',
        options: l.options.map(o => ({ label: o, sub: '' })), answer: l.answer,
        explain: l.say, explainSub: l.sayAr || ''
      }));
    }
    push(this.meaningChoice(lesson, lang, pool));
    push(this.listenChoice(lesson, lang, pool));
    push(this.convQuestion(lesson));
    push(this.vocabChoice(lesson, lang, pool));
    push(this.speakingQuestion(lesson));
    return out;
  },

  /* --- the lesson test: exactly 10 questions, all skills --- */
  buildTest(lesson) {
    const lang = lesson.language;
    const pool = this.meaningPool(lang);
    if (lesson.alphabet && lesson.alphabet.length) return this.buildAlphabetTest(lesson);
    const q = [];
    q.push(this.vocabChoice(lesson, lang, pool));
    q.push(this.meaningChoice(lesson, lang, pool));
    q.push(this.listenChoice(lesson, lang, pool));
    q.push(this.fillChoice(lesson, lang, pool));
    q.push(this.orderChoice(lesson));
    q.push(this.vocabChoice(lesson, lang, pool));
    q.push(this.convQuestion(lesson));
    q.push(this.meaningChoice(lesson, lang, pool));
    q.push(this.listenChoice(lesson, lang, pool));
    q.push(this.speakingQuestion(lesson));
    return q.filter(Boolean).map((x, i) => Object.assign(x, { n: i + 1 }));
  },

  /* --- extra review session over a set of words --- */
  buildReview(words) {
    const out = [];
    words.slice(0, 12).forEach(w => {
      const pool = LB.LANGS.map(l => l).length ? null : null;
      const others = LB.shuffle(words.filter(x => x.v.m !== w.v.m)).slice(0, 3).map(x => x.v.m);
      const labels = LB.shuffle(others.concat([w.v.m]));
      out.push({
        type: 'choice', kind: 'review', term: w.v.key,
        prompt: w.v.t, promptSub: w.v.pron || '', promptAr: 'إيه معنى الكلمة؟',
        options: labels.map(l => ({ label: l, sub: '' })), answer: labels.indexOf(w.v.m),
        explain: w.v.t + ' = ' + w.v.m, explainSub: w.v.ex || ''
      });
    });
    return out;
  },

  /* --- quick-fire game questions (no repeats) --- */
  buildQuickFire(langCode, n) {
    const pool = this.meaningPool(langCode);
    const lessons = LB.allLessons(langCode);
    if (!lessons.length) return [];
    const out = []; const used = {};
    let guard = 0;
    while (out.length < (n || 15) && guard < 400) {
      guard++;
      const L = lessons[Math.floor(Math.random() * lessons.length)];
      const q = this.vocabChoice(L, langCode, pool);
      if (!q || used[q.explain]) continue;
      used[q.explain] = 1; out.push(q);
    }
    return out;
  }
};

/* Does the learner's order match? (word-by-word, ignoring case/punct) */
LB.checkOrder = function (given, answer) {
  const c = w => String(w).toLowerCase().replace(/[.,!?;:¿¡]/g, '');
  return LB.same(given.map(c), answer.map(c));
};
