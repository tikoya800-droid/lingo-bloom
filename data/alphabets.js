/* ==========================================================================
   LingoBloom — A0 ALPHABETS (additive curriculum layer)
   Adds one "Alphabet" unit to the A0 level of every language, taught the
   LingoBloom way: a real letter grid with letter name, sound, example word
   and audio (browser TTS today, drop-in native audio files later).

   Every letter is also pushed into `vocab`, so alphabets automatically take
   part in the vocabulary library, the search, the games and the SRS review.

   Format per letter: [letter, letterName(ar), soundAr, exampleWord, exampleMeaningAr]
   ========================================================================== */
(function () {
  if (!window.LB || !LB.addUnits) return;

  var LETTERS = {
    /* ------------------------------------------------------------- ENGLISH */
    en: {
      unit: 'The Alphabet', unitMeaning: 'الأبجدية',
      summary: { ar: 'الحروف الإنجليزية الـ26، صوت كل حرف وكلمة مثال تبدأ بيه.', en: 'The 26 English letters, their sound and an example word.' },
      lessons: [
        {
          id: 'en-a0-alpha-l1', topic: 'Alphabet', title: 'Letters A – Z', titleMeaning: 'الحروف من A لـ Z', minutes: 15,
          goals: { ar: ['تعرف شكل وصوت كل حرف', 'تربط كل حرف بكلمة تبدأ بيه', 'تسمع الحرف وتختاره صح'], en: ['Know every letter and its sound', 'Link each letter to a word', 'Hear a letter and pick it'] },
          letters: [
            ['A', 'اسم الحرف: إيه', 'إيه', 'Apple', 'تفاحة'],
            ['B', 'اسم الحرف: بي', 'بي', 'Ball', 'كورة'],
            ['C', 'اسم الحرف: سي', 'سي', 'Cat', 'قطة'],
            ['D', 'اسم الحرف: دي', 'دي', 'Dog', 'كلب'],
            ['E', 'اسم الحرف: إي', 'إي', 'Egg', 'بيضة'],
            ['F', 'اسم الحرف: إف', 'إف', 'Fish', 'سمكة'],
            ['G', 'اسم الحرف: جي', 'جي', 'Girl', 'بنت'],
            ['H', 'اسم الحرف: إتش', 'إتش', 'Hat', 'قبعة'],
            ['I', 'اسم الحرف: آي', 'آي', 'Ice', 'تلج'],
            ['J', 'اسم الحرف: جيه', 'جيه', 'Juice', 'عصير'],
            ['K', 'اسم الحرف: كيه', 'كيه', 'Key', 'مفتاح'],
            ['L', 'اسم الحرف: إل', 'إل', 'Lion', 'أسد'],
            ['M', 'اسم الحرف: إم', 'إم', 'Moon', 'قمر'],
            ['N', 'اسم الحرف: إن', 'إن', 'Nose', 'مناخير'],
            ['O', 'اسم الحرف: أو', 'أو', 'Orange', 'برتقالة'],
            ['P', 'اسم الحرف: پي', 'پي', 'Pen', 'قلم'],
            ['Q', 'اسم الحرف: كيو', 'كيو', 'Queen', 'ملكة'],
            ['R', 'اسم الحرف: آر', 'آر', 'Red', 'أحمر'],
            ['S', 'اسم الحرف: إس', 'إس', 'Sun', 'شمس'],
            ['T', 'اسم الحرف: تي', 'تي', 'Tree', 'شجرة'],
            ['U', 'اسم الحرف: يو', 'يو', 'Umbrella', 'شمسية'],
            ['V', 'اسم الحرف: في', 'في', 'Van', 'عربية نقل'],
            ['W', 'اسم الحرف: دَبليو', 'دَبليو', 'Water', 'مية'],
            ['X', 'اسم الحرف: إكس', 'إكس', 'Box', 'صندوق'],
            ['Y', 'اسم الحرف: واي', 'واي', 'Yellow', 'أصفر'],
            ['Z', 'اسم الحرف: زي', 'زي', 'Zebra', 'حمار وحشي']
          ]
        }
      ]
    },

    /* -------------------------------------------------------------- FRENCH */
    fr: {
      unit: "L'alphabet", unitMeaning: 'أبجدية الفرنسي',
      summary: { ar: 'حروف الفرنسي وأصواتها، وكمان الحروف اللي عليها علامات (accents).', en: 'French letters and sounds, plus the accented letters.' },
      lessons: [
        {
          id: 'fr-a0-alpha-l1', topic: 'Alphabet', title: 'Les lettres', titleMeaning: 'الحروف', minutes: 15,
          goals: { ar: ['تعرف شكل وصوت كل حرف بالفرنسي', 'تربط كل حرف بكلمة فرنسية', 'تسمع الحرف وتختاره'], en: ['Know each French letter and sound', 'Link letters to French words', 'Hear a letter and pick it'] },
          letters: [
            ['A', 'اسم الحرف: آ', 'آ', 'Avion', 'طيارة'],
            ['B', 'اسم الحرف: بي', 'بي', 'Bateau', 'مركب'],
            ['C', 'اسم الحرف: سي', 'سي', 'Chat', 'قطة'],
            ['D', 'اسم الحرف: دي', 'دي', 'Dauphin', 'دلفين'],
            ['E', 'اسم الحرف: أُو', 'أُو', 'Éléphant', 'فيل'],
            ['F', 'اسم الحرف: إف', 'إف', 'Fleur', 'زهرة'],
            ['G', 'اسم الحرف: جي', 'جي', 'Gâteau', 'كيكة'],
            ['H', 'اسم الحرف: آش', 'آش', 'Hibou', 'بومة'],
            ['I', 'اسم الحرف: إي', 'إي', 'Île', 'جزيرة'],
            ['J', 'اسم الحرف: جي', 'جي', 'Jardin', 'جنينة'],
            ['K', 'اسم الحرف: كا', 'كا', 'Kangourou', 'كنغر'],
            ['L', 'اسم الحرف: إل', 'إل', 'Lune', 'قمر'],
            ['M', 'اسم الحرف: إم', 'إم', 'Maison', 'بيت'],
            ['N', 'اسم الحرف: إن', 'إن', 'Nuage', 'سحابة'],
            ['O', 'اسم الحرف: أو', 'أو', 'Oiseau', 'عصفور'],
            ['P', 'اسم الحرف: بي', 'بي', 'Pomme', 'تفاحة'],
            ['Q', 'اسم الحرف: كو', 'كو', 'Quatre', 'أربعة'],
            ['R', 'اسم الحرف: إغ', 'إغ', 'Rouge', 'أحمر'],
            ['S', 'اسم الحرف: إس', 'إس', 'Soleil', 'شمس'],
            ['T', 'اسم الحرف: تي', 'تي', 'Table', 'طربيزة'],
            ['U', 'اسم الحرف: أو', 'أو', 'Un', 'واحد'],
            ['V', 'اسم الحرف: في', 'في', 'Vélo', 'دراجة'],
            ['W', 'اسم الحرف: دوبلُو', 'دوبلُو', 'Wagon', 'عربية قطر'],
            ['X', 'اسم الحرف: إيكس', 'إيكس', 'Xylophone', 'زيلوفون'],
            ['Y', 'اسم الحرف: إي جريك', 'إي جريك', 'Yaourt', 'زبادي'],
            ['Z', 'اسم الحرف: زيد', 'زيد', 'Zèbre', 'حمار وحشي']
          ]
        },
        {
          id: 'fr-a0-alpha-l2', topic: 'Accents', title: 'Les accents', titleMeaning: 'الحروف بالعلامات', minutes: 10,
          goals: { ar: ['تفرّق بين é و è و ê', 'تعرف شغل الـ ç', 'تقرأ الكلمات اللي فيها accents'], en: ['Tell é, è and ê apart', 'Know what ç does', 'Read accented words'] },
          letters: [
            ['É é', 'إيه أكو (é)', 'إيه', 'École', 'مدرسة'],
            ['È è', 'إيه غراف (è)', 'إيه مفتوحة', 'Père', 'أب'],
            ['Ê ê', 'إيه سيركونفلِكس (ê)', 'إيه مفتوحة طويلة', 'Forêt', 'غابة'],
            ['À à', 'آ أكسآن غراف', 'آ', "À bientôt", 'أشوفك قريب'],
            ['Ç ç', 'سي سيديّ (ç)', 'س', 'Garçon', 'ولد'],
            ['Ô ô', 'أو سيركونفلِكس', 'أو', 'Hôtel', 'فندق'],
            ['Î î', 'إي سيركونفلِكس', 'إي', 'Île', 'جزيرة'],
            ['Û û', 'أو سيركونفلِكس', 'أو', 'Sûr', 'متأكد'],
            ['Ù ù', 'أو غراف', 'أو', 'Où', 'فين'],
            ['Ï ï', 'إي تريمَا', 'إي', 'Naïve', 'بريء']
          ]
        }
      ]
    },

    /* ------------------------------------------------------------- ITALIAN */
    it: {
      unit: "L'alfabeto", unitMeaning: 'أبجدية الطلياني',
      summary: { ar: 'الطلياني فيه 21 حرف أساسي، وكل حرف بيتقرأ زي ما هو مكتوب.', en: 'Italian has 21 core letters — every letter is pronounced.' },
      lessons: [
        {
          id: 'it-a0-alpha-l1', topic: 'Alfabeto', title: 'Le lettere', titleMeaning: 'الحروف', minutes: 14,
          goals: { ar: ['تعرف الـ21 حرف الطلياني', 'تنطق الحرف الصح', 'تربط الحرف بكلمة طليانية'], en: ['Know the 21 Italian letters', 'Pronounce each letter', 'Link letters to Italian words'] },
          letters: [
            ['A', 'اسم الحرف: آ', 'آ', 'Ape', 'نحلة'],
            ['B', 'اسم الحرف: بي', 'بي', 'Banca', 'بنك'],
            ['C', 'اسم الحرف: تشي', 'تشي', 'Casa', 'بيت'],
            ['D', 'اسم الحرف: دي', 'دي', 'Dado', 'زهر (كعب)'],
            ['E', 'اسم الحرف: إيه', 'إيه', 'Elefante', 'فيل'],
            ['F', 'اسم الحرف: إفِه', 'إفيه', 'Farfalla', 'فراشة'],
            ['G', 'اسم الحرف: جي', 'جي', 'Gatto', 'قطة'],
            ['H', 'اسم الحرف: أكّا', 'أكّا', 'Hotel', 'فندق'],
            ['I', 'اسم الحرف: إي', 'إي', 'Isola', 'جزيرة'],
            ['L', 'اسم الحرف: إلله', 'إلله', 'Luna', 'قمر'],
            ['M', 'اسم الحرف: إمّه', 'إمّه', 'Mamma', 'ماما'],
            ['N', 'اسم الحرف: إنّه', 'إنّه', 'Nonna', 'جدة'],
            ['O', 'اسم الحرف: أو', 'أو', 'Orso', 'دب'],
            ['P', 'اسم الحرف: بي', 'بي', 'Pane', 'عيش'],
            ['Q', 'اسم الحرف: كو', 'كو', 'Quadro', 'لوحة'],
            ['R', 'اسم الحرف: إرّه', 'إرّه', 'Rosa', 'وردة'],
            ['S', 'اسم الحرف: إسّه', 'إسّه', 'Sole', 'شمس'],
            ['T', 'اسم الحرف: تي', 'تي', 'Tavolo', 'طربيزة'],
            ['U', 'اسم الحرف: أو', 'أو', 'Uva', 'عنب'],
            ['V', 'اسم الحرف: في', 'في', 'Vino', 'نبيت'],
            ['Z', 'اسم الحرف: زيتا', 'زيتا', 'Zebra', 'حمار وحشي']
          ]
        },
        {
          id: 'it-a0-alpha-l2', topic: 'Lettere straniere', title: 'Lettere straniere', titleMeaning: 'الحروف الأجنبية', minutes: 8,
          goals: { ar: ['تعرف الحروف اللي الطلياني خدها من لغات تانية', 'تقرأ كلمات أجنبية بسهولة'], en: ['Know the borrowed letters', 'Read foreign words easily'] },
          letters: [
            ['J', 'اسم الحرف: إي لونجا', 'إي لونجا', 'Jeans', 'بنطلون جينز'],
            ['K', 'اسم الحرف: كاپّا', 'كاپّا', 'Kiwi', 'كيوي'],
            ['W', 'اسم الحرف: دوبيو ڤي', 'دوبيو ڤي', 'Waffle', 'وافل'],
            ['X', 'اسم الحرف: إيكس', 'إيكس', 'Xilofono', 'زيلوفون'],
            ['Y', 'اسم الحرف: إپسيلون', 'إپسيلون', 'Yogurt', 'زبادي']
          ]
        }
      ]
    },

    /* ------------------------------------------------------------- SPANISH */
    es: {
      unit: 'El alfabeto', unitMeaning: 'أبجدية الإسباني',
      summary: { ar: 'الـ27 حرف الإسباني، ومعاهم الحرف الشهير ñ.', en: 'The 27 Spanish letters, including ñ.' },
      lessons: [
        {
          id: 'es-a0-alpha-l1', topic: 'Alfabeto', title: 'Las letras', titleMeaning: 'الحروف', minutes: 15,
          goals: { ar: ['تعرف الـ27 حرف الإسباني', 'تنطق الحروف الصح', 'تربط كل حرف بكلمة إسبانية'], en: ['Know the 27 Spanish letters', 'Pronounce them right', 'Link letters to words'] },
          letters: [
            ['A', 'اسم الحرف: آ', 'آ', 'Agua', 'مية'],
            ['B', 'اسم الحرف: بي', 'بي', 'Barco', 'مركب'],
            ['C', 'اسم الحرف: ثي', 'ثي', 'Casa', 'بيت'],
            ['D', 'اسم الحرف: دي', 'دي', 'Dedo', 'صبع'],
            ['E', 'اسم الحرف: إي', 'إي', 'Escuela', 'مدرسة'],
            ['F', 'اسم الحرف: إفِه', 'إفيه', 'Flor', 'زهرة'],
            ['G', 'اسم الحرف: خي', 'خي', 'Gato', 'قطة'],
            ['H', 'اسم الحرف: أتشي', 'أتشي', 'Helado', 'آيس كريم'],
            ['I', 'اسم الحرف: إي', 'إي', 'Isla', 'جزيرة'],
            ['J', 'اسم الحرف: خوتا', 'خوتا', 'Jirafa', 'زرافة'],
            ['K', 'اسم الحرف: كا', 'كا', 'Kiwi', 'كيوي'],
            ['L', 'اسم الحرف: إلِه', 'إلِه', 'Luna', 'قمر'],
            ['M', 'اسم الحرف: إمِه', 'إمِه', 'Mesa', 'طربيزة'],
            ['N', 'اسم الحرف: إنِه', 'إنِه', 'Niño', 'ولد'],
            ['Ñ', 'اسم الحرف: إينيه', 'إينيه', 'España', 'إسبانيا'],
            ['O', 'اسم الحرف: أو', 'أو', 'Oso', 'دب'],
            ['P', 'اسم الحرف: بي', 'بي', 'Perro', 'كلب'],
            ['Q', 'اسم الحرف: كو', 'كو', 'Queso', 'جبنة'],
            ['R', 'اسم الحرف: إرِه', 'إرِه', 'Ratón', 'فأر'],
            ['S', 'اسم الحرف: إسِه', 'إسِه', 'Sol', 'شمس'],
            ['T', 'اسم الحرف: تي', 'تي', 'Tren', 'قطر'],
            ['U', 'اسم الحرف: أو', 'أو', 'Uva', 'عنب'],
            ['V', 'اسم الحرف: أوبي', 'أوبي', 'Vaca', 'بقرة'],
            ['W', 'اسم الحرف: أوبي دوبلِه', 'أوبي دوبلِه', 'Web', 'موقع'],
            ['X', 'اسم الحرف: إكيس', 'إكيس', 'Xilófono', 'زيلوفون'],
            ['Y', 'اسم الحرف: إي جرييغا', 'إي جرييغا', 'Yo', 'أنا'],
            ['Z', 'اسم الحرف: ثيتا', 'ثيتا', 'Zapato', 'جزمة']
          ]
        }
      ]
    },

    /* -------------------------------------------------------------- GERMAN */
    de: {
      unit: 'Das Alphabet', unitMeaning: 'أبجدية الألماني',
      summary: { ar: 'حروف الألماني + الحروف اللي عليها نقطتين (Umlaute) وحرف ß.', en: 'German letters plus the umlauts and ß.' },
      lessons: [
        {
          id: 'de-a0-alpha-l1', topic: 'Alphabet', title: 'Die Buchstaben', titleMeaning: 'الحروف', minutes: 15,
          goals: { ar: ['تعرف أصوات الحروف الألمانية', 'تربط الحرف بكلمة ألمانية', 'تنطق w و v و z صح'], en: ['Know German letter sounds', 'Link letters to words', 'Pronounce w, v and z right'] },
          letters: [
            ['A', 'اسم الحرف: آ', 'آ', 'Apfel', 'تفاحة'],
            ['B', 'اسم الحرف: بي', 'بي', 'Ball', 'كورة'],
            ['C', 'اسم الحرف: تسيه', 'تسيه', 'Computer', 'كمبيوتر'],
            ['D', 'اسم الحرف: دي', 'دي', 'Danke', 'شكراً'],
            ['E', 'اسم الحرف: إيه', 'إيه', 'Elefant', 'فيل'],
            ['F', 'اسم الحرف: إف', 'إف', 'Fisch', 'سمكة'],
            ['G', 'اسم الحرف: جيه', 'جيه', 'Garten', 'جنينة'],
            ['H', 'اسم الحرف: ها', 'ها', 'Haus', 'بيت'],
            ['I', 'اسم الحرف: إي', 'إي', 'Insel', 'جزيرة'],
            ['J', 'اسم الحرف: يوت', 'يوت', 'Jahr', 'سنة'],
            ['K', 'اسم الحرف: كا', 'كا', 'Katze', 'قطة'],
            ['L', 'اسم الحرف: إل', 'إل', 'Lampe', 'لمبة'],
            ['M', 'اسم الحرف: إم', 'إم', 'Mond', 'قمر'],
            ['N', 'اسم الحرف: إن', 'إن', 'Nacht', 'ليل'],
            ['O', 'اسم الحرف: أو', 'أو', 'Obst', 'فاكهة'],
            ['P', 'اسم الحرف: بي', 'بي', 'Papier', 'ورق'],
            ['Q', 'اسم الحرف: كو', 'كو', 'Quelle', 'نبع'],
            ['R', 'اسم الحرف: إر', 'إر', 'Rot', 'أحمر'],
            ['S', 'اسم الحرف: إس', 'إس', 'Sonne', 'شمس'],
            ['T', 'اسم الحرف: تي', 'تي', 'Tisch', 'طربيزة'],
            ['U', 'اسم الحرف: أو', 'أو', 'Uhr', 'ساعة'],
            ['V', 'اسم الحرف: فاو', 'فاو', 'Vogel', 'عصفور'],
            ['W', 'اسم الحرف: فيه', 'فيه', 'Wasser', 'مية'],
            ['X', 'اسم الحرف: إكس', 'إكس', 'Xylophon', 'زيلوفون'],
            ['Y', 'اسم الحرف: إپسيلون', 'إپسيلون', 'Yoga', 'يوجا'],
            ['Z', 'اسم الحرف: تسِت', 'تسِت', 'Zug', 'قطر']
          ]
        },
        {
          id: 'de-a0-alpha-l2', topic: 'Umlaute', title: 'Umlaute und ß', titleMeaning: 'الحروف المنقّطة وحرف ß', minutes: 10,
          goals: { ar: ['تفرّق بين a و ä و o و ö و u و ü', 'تعرف إمتى تكتب ß', 'تنطق الحروف دي صح'], en: ['Tell a/ä, o/ö, u/ü apart', 'Know when to write ß', 'Pronounce them correctly'] },
          letters: [
            ['Ä ä', 'إيه أوملاوت', 'إيه (من غير شفايف)', 'Äpfel', 'تفاحات'],
            ['Ö ö', 'أو أوملاوت', 'أو مدوّرة', 'Öl', 'زيت'],
            ['Ü ü', 'أو أوملاوت', 'أو (بشفايف مضمومة)', 'Übung', 'تمرين'],
            ['ß', 'إس تسِت', 'س قوية', 'Straße', 'شارع']
          ]
        }
      ]
    }
  };

  var CODE_ALIAS = { en: 'en', fr: 'fr', it: 'it', es: 'es', de: 'de' };

  Object.keys(LETTERS).forEach(function (code) {
    if (!CODE_ALIAS[code]) return;
    var pack = LETTERS[code];
    var lessons = pack.lessons.map(function (spec) {
      var letters = spec.letters.map(function (x) {
        return { l: x[0], name: x[1], sound: x[2], w: x[3], wm: x[4] };
      });
      return {
        id: spec.id,
        topic: spec.topic,
        title: spec.title,
        titleMeaning: spec.titleMeaning,
        minutes: spec.minutes,
        goals: spec.goals,
        alphabet: letters,
        vocab: letters.map(function (x) {
          return [x.l, x.name + ' — ' + x.w + ' (' + x.wm + ')', x.sound, x.w, x.wm];
        }),
        related: [],
        expressions: []
      };
    });
    try {
      LB.addUnits(code, 'A0', [{
        id: code + '-a0-alpha',
        title: pack.unit,
        titleMeaning: pack.unitMeaning,
        summary: pack.summary,
        lessons: lessons
      }]);
    } catch (e) { /* the rest of the app keeps working */ }
    /* the alphabet is the FIRST unit a beginner meets in A0 */
    var a0 = LB.CURRICULUM[code] && LB.CURRICULUM[code].A0;
    if (a0 && a0.units) {
      var ai = -1;
      a0.units.forEach(function (u, ix) { if (u.id === code + '-a0-alpha') ai = ix; });
      if (ai > 0) { var mv = a0.units.splice(ai, 1)[0]; a0.units.unshift(mv); }
    }
  });
})();
