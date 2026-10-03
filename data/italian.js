/* ==========================================================================
   LingoBloom — ITALIANO (contenuto originale)
   Forma compatta: [parola, significato(ar), pronuncia(ar), esempio, traduzione]
   ========================================================================== */
(function () {
  LB.addLanguage(
    { code: 'it', name: 'Italiano', native: 'Imparare italiano', meaning: 'الإيطالية',
      flag: '🇮🇹', speech: 'it-IT', tone: 'mint', scene: '50%',
      blurb: { ar: 'لغة الموسيقى والأكل — نطقها سهل لأن كل حرف بيتقرأ.', en: 'The language of music and food — every letter is pronounced.' } },
    {
      A0: {
        label: { ar: 'مبتدئ تماماً', en: 'Absolute beginner' },
        units: [
          {
            title: 'Le basi', titleMeaning: 'الأساسيات',
            summary: { ar: 'التحية، الأرقام، والتعريف بنفسك بالطلياني.', en: 'Greetings, numbers and introducing yourself in Italian.' },
            lessons: [
              {
                id: 'it-a0-u1-l1', topic: 'Saluti', title: 'I saluti', titleMeaning: 'التحيات', minutes: 12,
                goals: { ar: ['تسلّم وتودّع بالطلياني', 'تفرّق بين tu و Lei', 'تسأل عن الحال'],
                         en: ['Greet and say goodbye in Italian', 'Tell tu from Lei', 'Ask how someone is'] },
                vocab: [
                  ['Ciao', 'هاي / سلام (تسليم ووداع)', 'تشاو', 'Ciao, come stai?', 'هاي، إزيك؟'],
                  ['Buongiorno', 'صباح الخير / نهارك سعيد', 'بونجورنو', 'Buongiorno, signora!', 'صباح الخير يا مدام!'],
                  ['Buonasera', 'مساء الخير', 'بوناسيرا', 'Buonasera, amici!', 'مساء الخير يا أصحاب!'],
                  ['Arrivederci', 'إلى اللقاء (رسمي)', 'أرّيڤيديرتشي', 'Arrivederci, professore.', 'إلى اللقاء يا أستاذ.'],
                  ['Grazie', 'شكراً', 'جراتسيي', 'Grazie mille!', 'شكراً ألف مرة!'],
                  ['Prego', 'العفو / اتفضل', 'بريجو', 'Grazie! — Prego!', 'شكراً! — العفو!'],
                  ['Sì / No', 'أيوه / لأ', 'سي / نو', 'Sì, va bene.', 'أيوه، تمام.'],
                  ['Come stai?', 'إزيك؟', 'كومي ستاي', 'Ciao! Come stai?', 'هاي! إزيك؟']
                ],
                related: [
                  ['Benvenuto', 'أهلاً وسهلاً', 'بينڤينوتو', 'Benvenuto a Roma!', 'أهلاً بيك في روما!'],
                  ['Per favore', 'من فضلك', 'بير فاڤوري', 'Un caffè, per favore.', 'قهوة من فضلك.'],
                  ['Scusa / Scusi', 'آسف (عادي / رسمي)', 'سكوزا / سكوزي', 'Scusi, posso passare?', 'لو سمحت، أقدر أعدي؟'],
                  ['Signore / Signora', 'سيد / مدام', 'سينيوري / سينيورا', 'Buongiorno, signore.', 'صباح الخير يا سيد.'],
                  ['Ci vediamo', 'أشوفك', 'تشي ڤيديامو', 'Ci vediamo domani!', 'أشوفك بكرة!']
                ],
                expressions: [
                  ['Come sta?', 'إزي حضرتك؟ (رسمي)', 'كومي ستا', 'Buongiorno, come sta?', 'صباح الخير، إزي حضرتك؟'],
                  ['Sto bene, grazie', 'أنا بخير، شكراً', 'ستو بيني، جراتسيي', 'Sto bene, grazie. E Lei?', 'أنا بخير شكراً. وحضرتك؟'],
                  ['Come ti chiami?', 'اسمك إيه؟', 'كومي تي كيامي', 'Ciao, come ti chiami?', 'هاي، اسمك إيه؟'],
                  ['Piacere', 'فرصة سعيدة', 'بيا تشيري', 'Piacere di conoscerti!', 'فرصة سعيدة بمعرفتك!']
                ],
                examples: [
                  ['Ciao! Mi chiamo Giulia.', 'هاي! اسمي جوليا.', 'تشاو! مي كيامو جوليا', ['Ciao', 'Mi', 'chiamo', 'Giulia']],
                  ['Buongiorno, come sta?', 'صباح الخير، إزي حضرتك؟', 'بونجورنو، كومي ستا', ['Buongiorno', 'come', 'sta']],
                  ['Sto bene, grazie mille.', 'أنا بخير، شكراً جزيلاً.', 'ستو بيني، جراتسيي ميلي', ['Sto', 'bene', 'grazie', 'mille']],
                  ['Piacere di conoscerti.', 'فرصة سعيدة بمعرفتك.', 'بيا تشيري دي كونوشيرتي', ['Piacere', 'di', 'conoscerti']]
                ],
                grammar: {
                  title: { ar: 'tu و Lei — والجملة البسيطة', en: 'tu and Lei — and the simple sentence' },
                  points: [
                    { ar: 'الطلياني فيه اتنين "أنت": tu مع الأصحاب و Lei مع الكبار والرسمي.', en: 'Italian has tu (friends) and Lei (formal).' },
                    { ar: 'الفعل بيتغير مع الضمير: io sono، tu sei، Lei è.', en: 'The verb changes with the pronoun: io sono, tu sei, Lei è.' },
                    { ar: 'بنستخدم essere للثبات والحالة: Sono italiano.', en: 'essere describes identity and state: Sono italiano.' },
                    { ar: 'الضمير الشخصي كتير بيتشال لأن الفعل بيوضّح مين.', en: 'Subject pronouns are often dropped — the verb already tells you.' }
                  ],
                  table: [
                    { a: 'io sono', b: 'أنا' },
                    { a: 'tu sei', b: 'أنت (صاحبك)' },
                    { a: 'Lei è', b: 'حضرتك' }
                  ],
                  note: { ar: 'Lei بحرف كابيتال = حضرتك، و lei بحرف صغير = هي.', en: 'Capitalised Lei means "you" formally; lowercase lei means "she".' }
                },
                reading: {
                  title: { ar: 'في المقهى في روما', en: 'Al bar a Roma' },
                  linesEn: ['Giulia entra in un bar a Roma.', '« Buongiorno ! » dice.', '« Buongiorno, signora. Come sta ? »', '« Sto bene, grazie. Un caffè, per favore. »', '« Subito ! »', 'Giulia sorride. Roma è bellissima.'],
                  linesAr: ['جوليا دخلت مقهى في روما.', '"صباح الخير!" بتقول.', '"صباح الخير يا مدام. إزي حضرتك؟"', '"أنا بخير شكراً. قهوة من فضلك."', '"حالاً!"', 'جوليا ابتسمت. روما جميلة جداً.'],
                  questions: [
                    { q: 'Dove è Giulia ?', qMeaning: 'جوليا فين؟', options: ['Al bar', 'A scuola', 'A casa'], answer: 0 },
                    { q: 'Cosa ordina ?', qMeaning: 'طلبت إيه؟', options: ['Un caffè', 'Un tè', 'Un\'acqua'], answer: 0 }
                  ]
                },
                listening: [
                  ['Buongiorno, come sta ?', ['Buongiorno, come sta ?', 'Buonasera, come stai ?', 'Arrivederci !'], 0, 'صباح الخير، إزي حضرتك؟'],
                  ['Grazie mille !', ['Grazie mille', 'Prego', 'Scusa'], 0, 'شكراً جزيلاً!'],
                  ['Ci vediamo domani !', ['Ci vediamo', 'Buongiorno', 'Piacere'], 0, 'أشوفك بكرة!']
                ],
                speaking: [
                  ['Buongiorno! Come sta?', 'صباح الخير! إزي حضرتك؟', 'بونجورنو! كومي ستا'],
                  ['Mi chiamo Giulia.', 'اسمي جوليا.', 'مي كيامو جوليا'],
                  ['Grazie mille, arrivederci!', 'شكراً جزيلاً، إلى اللقاء!', 'جراتسيي ميلي، أرّيڤيديرتشي']
                ],
                conversation: {
                  setting: { ar: 'لوكاا بيسلّم على جارته الجديدة', en: 'Luca greets his new neighbour' },
                  lines: [
                    ['Luca', 'Buongiorno! Mi chiamo Luca.', 'صباح الخير! اسمي لوكا.', 'بونجورنو! مي كيامو لوكا'],
                    ['Anna', 'Buongiorno Luca! Io sono Anna.', 'صباح الخير يا لوكا! أنا آنا.', 'بونجورنو لوكا! إيو سونو آنا'],
                    ['Luca', 'Piacere! Come stai?', 'فرصة سعيدة! إزيك؟', 'بيا تشيري! كومي ستاي'],
                    ['Anna', 'Sto bene, grazie. E tu?', 'أنا بخير شكراً. وأنت؟', 'ستو بيني، جراتسيي. إي تو'],
                    ['Luca', 'Molto bene. Abiti qui?', 'كويس جداً. ساكنة هنا؟', 'مولتو بيني. أبيتي كوي'],
                    ['Anna', 'Sì, al secondo piano.', 'أيوه، في الدور التاني.', 'سي، آل سيكوندو بيانو'],
                    ['Luca', 'Perfetto! Ci vediamo!', 'تمام! أشوفك!', 'بيرفيتو! تشي ڤيديامو'],
                    ['Anna', 'Ciao, a presto!', 'سلام، قريب!', 'تشاو، آ بريستو']
                  ],
                  vocab: [['Abito', 'أسكن'], ['piano', 'دور'], ['molto bene', 'كويس جداً'], ['a presto', 'قريب'], ['perfetto', 'تمام']],
                  questions: [
                    { q: 'Dove abita Anna ?', qMeaning: 'آنا ساكنة فين؟', options: ['Al secondo piano', 'Al primo piano', 'Al pianterreno'], answer: 0 },
                    { q: 'Come sta Anna ?', qMeaning: 'آنا حالتها إيه؟', options: ['Sta bene', 'Sta male', 'È stanca'], answer: 0 },
                    { q: 'Cosa dice Luca alla fine ?', qMeaning: 'لوكا قال إيه في الآخر؟', options: ['Ci vediamo', 'Buongiorno', 'Grazie'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Scrivi un po\'' },
                  tasks: [
                    { ar: 'اكتب تحية رسمية وتحية بين الأصحاب.', en: 'Write one formal and one informal greeting.' },
                    { ar: 'عرّف بنفسك: Mi chiamo ... Piacere!', en: 'Introduce yourself: Mi chiamo … Piacere!' }
                  ]
                }
              },
              {
                id: 'it-a0-u1-l2', topic: 'Numeri', title: 'I numeri da 1 a 10', titleMeaning: 'الأرقام من ١ لـ ١٠', minutes: 14,
                goals: { ar: ['تعدّ بالطلياني', 'تسأل عن العمر', 'تنطق الحروف المشدّدة صح'],
                         en: ['Count 1–10 in Italian', 'Ask about age', 'Pronounce double letters'] },
                vocab: [
                  ['uno', 'واحد (١)', 'أونو', 'un libro', 'كتاب واحد'],
                  ['due', 'اتنين (٢)', 'دوّي', 'due amici', 'صاحبين'],
                  ['tre', 'تلاتة (٣)', 'تري', 'tre caffè', 'تلات قهوة'],
                  ['quattro', 'أربعة (٤)', 'كواترو', 'quattro gatti', 'أربع قطط'],
                  ['cinque', 'خمسة (٥)', 'تشينكوي', 'cinque minuti', 'خمس دقايق'],
                  ['sei', 'ستة (٦)', 'سيي', 'sei anni', 'ست سنين'],
                  ['sette', 'سبعة (٧)', 'سيتّي', 'sette giorni', 'سبع أيام'],
                  ['otto', 'تمانية (٨)', 'أوتّو', 'otto ore', 'تمن ساعات'],
                  ['nove', 'تسعة (٩)', 'نوڤي', 'nove persone', 'تسع أشخاص'],
                  ['dieci', 'عشرة (١٠)', 'دييتشي', 'dieci euro', 'عشر يورو']
                ],
                related: [
                  ['primo', 'الأول', 'بريمو', 'il primo giorno', 'اليوم الأول'],
                  ['numero', 'رقم', 'نوميرو', 'Qual è il tuo numero?', 'رقمك كام؟'],
                  ['quanti ?', 'كام؟', 'كوانتي', 'Quanti libri?', 'كام كتاب؟'],
                  ['età', 'سِن', 'إيتا', 'Qual è la tua età?', 'سِنّك كام؟'],
                  ['anni', 'سنين', 'أنّي', 'Ho dieci anni.', 'عندي عشر سنين.']
                ],
                expressions: [
                  ['Quanti anni hai?', 'عندك كام سنة؟', 'كوانتي أنّي أي', 'Quanti anni hai, Marco?', 'عندك كام سنة يا ماركو؟'],
                  ['Ho dieci anni', 'عندي عشر سنين', 'أو دييتشي أنّي', 'Ho dieci anni oggi.', 'عندي عشر سنين النهاردة.'],
                  ['Qual è il tuo numero?', 'رقمك كام؟', 'كوال إي إل توي نوميرو', 'Qual è il tuo numero di telefono?', 'رقم تليفونك كام؟'],
                  ['Il mio numero è ...', 'رقمي هو ...', 'إل ميو نوميرو إي', 'Il mio numero è il 333.', 'رقمي هو ٣٣٣.']
                ],
                examples: [
                  ['Ho due fratelli e tre sorelle.', 'عندي أخّين وتلات أخوات.', 'أو دوّي فراتيللي إي تري سوريلّي', ['Ho', 'due', 'fratelli', 'e', 'tre', 'sorelle']],
                  ['Mia sorella ha otto anni.', 'أختي عندها تمن سنين.', 'ميا سوريلّا آ أوتّو أنّي', ['Mia', 'sorella', 'ha', 'otto', 'anni']],
                  ['Ci sono cinque studenti.', 'فيه خمس طلاب.', 'تشي سونو تشينكوي ستودينتي', ['Ci', 'sono', 'cinque', 'studenti']],
                  ['Il mio numero è nove, sette.', 'رقمي تسعة وسبعة.', 'إل ميو نوميرو إي نوڤي، سيتّي', ['Il', 'mio', 'numero', 'è', 'nove']]
                ],
                grammar: {
                  title: { ar: 'العمر بـ avere والجمع', en: 'Age with avere and plurals' },
                  points: [
                    { ar: 'في الطلياني العمر بـ avere: Ho dieci anni — "عندي عشر سنين".', en: 'Italian uses avere for age: Ho dieci anni.' },
                    { ar: 'الجمع: الاسم اللي يخلص بحرف متحرك بياخد i أو e: libro → libri، sorella → sorelle.', en: 'Plural: -o → -i; -a → -e.' },
                    { ar: 'ci sono معناها "فيه" للجمع، و c\'è للمفرد.', en: 'ci sono = there are; c\'è = there is.' },
                    { ar: 'الحروف المشدّدة (tt، ss) بتتشدّد في النطق — زي sette و otto.', en: 'Double letters are held longer: sette, otto.' }
                  ],
                  table: [
                    { a: 'Ho otto anni', b: 'عندي تمن سنين' },
                    { a: 'Ha vent\'anni', b: 'هو عنده عشرين سنة' },
                    { a: 'ci sono / c\'è', b: 'فيه (جمع / مفرد)' }
                  ],
                  note: { ar: 'الجمع في الطلياني مش بضيف s — بغيّر آخر حرف.', en: 'Italian plurals change the final vowel, not add s.' }
                },
                reading: {
                  title: { ar: 'عيد ميلاد ماركو', en: 'Il compleanno di Marco' },
                  linesEn: ['Oggi è il compleanno di Marco.', 'Marco ha nove anni.', 'Sua sorella ha sei anni e suo fratello ha dieci anni.', 'Sulla torta ci sono nove candeline.', '« Quanti anni hai ? » chiede il suo amico.', '« Ho nove anni ! » risponde Marco.'],
                  linesAr: ['النهاردة عيد ميلاد ماركو.', 'ماركو عنده تسع سنين.', 'أخته عندها ست سنين وأخوه عنده عشر.', 'على التورتة فيه تسع شمعات.', '"عندك كام سنة؟" سأله صاحبه.', '"عندي تسع سنين!" رد ماركو.'],
                  questions: [
                    { q: 'Quanti anni ha Marco ?', qMeaning: 'ماركو عنده كام سنة؟', options: ['Nove', 'Sei', 'Dieci'], answer: 0 },
                    { q: 'Quante candeline ci sono ?', qMeaning: 'كام شمعة؟', options: ['Nove', 'Sei', 'Dieci'], answer: 0 }
                  ]
                },
                listening: [
                  ['Ho sette anni.', ['sette', 'sei', 'nove'], 0, 'عندي سبع سنين.'],
                  ['Quanti anni hai ?', ['Quanti anni hai ?', 'Come stai ?', 'Chi sei ?'], 0, 'عندك كام سنة؟'],
                  ['Ci sono cinque fiori.', ['cinque', 'due', 'dieci'], 0, 'فيه خمس زهور.']
                ],
                speaking: [
                  ['Ho dieci anni.', 'عندي عشر سنين.', 'أو دييتشي أنّي'],
                  ['Quanti fratelli hai?', 'عندك كام أخ؟', 'كوانتي فراتيللي أي'],
                  ['Il mio numero è il sei, due.', 'رقمي ستة واتنين.', 'إل ميو نوميرو إي إل سيي، دوّي']
                ],
                conversation: {
                  setting: { ar: 'مدرّسة بتسأل الأولاد', en: 'A teacher asking the children' },
                  lines: [
                    ['Insegnante', 'Buongiorno bambini! Quanti anni avete?', 'صباح الخير يا أولاد! عندكم كام سنة؟', 'بونجورنو بامبيني! كوانتي أنّي أڤيتي'],
                    ['Sofia', 'Ho otto anni, signora.', 'عندي تمن سنين يا مدام.', 'أو أوتّو أنّي، سينيورا'],
                    ['Leo', 'Io ho nove anni. Ho due fratelli.', 'عندي تسع سنين. عندي أخّين.', 'إيو أو نوڤي أنّي. أو دوّي فراتيللي'],
                    ['Insegnante', 'Bravo Leo! E tu, Sofia?', 'برافو ليو! وأنتِ يا صوفيا؟', 'براڤو ليو! إي تو، صوفيا'],
                    ['Sofia', 'Ho una sorella e un gatto.', 'عندي أخت وقطة.', 'أو أونا سوريلّا إي أون جاتّو'],
                    ['Leo', 'Qual è il tuo numero di telefono?', 'ورقم تليفونك كام؟', 'كوال إي إل توي نوميرو دي تيليفونو'],
                    ['Sofia', 'Il mio numero è il sei, tre, sette.', 'رقمي ستة، تلاتة، سبعة.', 'إل ميو نوميرو إي إل سيي، تري، سيتّي'],
                    ['Insegnante', 'Bravissimi!', 'برافو عليكم!', 'براڤيسّيمي']
                  ],
                  vocab: [['bambini', 'أولاد'], ['insegnante', 'مدرّسة'], ['gatto', 'قطة'], ['Bravissimi', 'برافو عليكم'], ['avete', 'عندكم']],
                  questions: [
                    { q: 'Quanti anni ha Sofia ?', qMeaning: 'صوفيا عندها كام سنة؟', options: ['Otto', 'Nove', 'Sei'], answer: 0 },
                    { q: 'Quanti fratelli ha Leo ?', qMeaning: 'ليو عنده كام أخ؟', options: ['Due', 'Uno', 'Tre'], answer: 0 },
                    { q: 'Cosa dà Sofia ?', qMeaning: 'صوفيا أدّت إيه؟', options: ['Il suo numero', 'La sua età', 'Niente'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Scrivi un po\'' },
                  tasks: [
                    { ar: 'اكتب أعمار عيلتك بالأرقام الطليانية.', en: 'Write your family\'s ages in Italian numbers.' },
                    { ar: 'اكتب جملتين بـ avere: Ho ... / Ha ...', en: 'Write two sentences with avere.' }
                  ]
                }
              },
              {
                id: 'it-a0-u1-l3', topic: 'Presentarsi', title: 'Presentarsi', titleMeaning: 'التعريف بنفسك', minutes: 13,
                goals: { ar: ['تقدّم نفسك بالاسم والعمر والبلد', 'تسأل حد عن نفسه', 'تستخدم essere و avere'],
                         en: ['Introduce yourself with name, age, country', 'Ask others about themselves', 'Use essere and avere'] },
                vocab: [
                  ['mi chiamo', 'اسمي', 'مي كيامو', 'Mi chiamo Elena.', 'اسمي إيلينا.'],
                  ['sono', 'أنا (أكون)', 'سونو', 'Sono egiziano.', 'أنا مصري.'],
                  ['egiziano / egiziana', 'مصري / مصرية', 'إيجيتسيانو', 'Lei è egiziana.', 'هي مصرية.'],
                  ['italiano / italiana', 'طلياني / طليانية', 'إيتاليانو', 'Lui è italiano.', 'هو طلياني.'],
                  ['abitare', 'يسكن', 'أبيتاري', 'Abito al Cairo.', 'أنا ساكن في القاهرة.'],
                  ['parlare', 'يتكلم', 'بارلاري', 'Parlo un po\' italiano.', 'بتكلم طلياني شوية.'],
                  ['imparare', 'يتعلّم', 'إمباراري', 'Imparo l\'italiano.', 'بتعلّم الطلياني.'],
                  ['studente / studentessa', 'طالب / طالبة', 'ستودينتي', 'Sono studentessa.', 'أنا طالبة.']
                ],
                related: [
                  ['città', 'مدينة', 'تشيتّا', 'In quale città?', 'في أي مدينة؟'],
                  ['paese', 'بلد', 'باييزي', 'Di quale paese?', 'من أي بلد؟'],
                  ['lingua', 'لغة', 'لينجوا', 'Parlo due lingue.', 'بتكلم لغتين.'],
                  ['anche', 'كمان / برضه', 'أنكي', 'Anch\'io!', 'وأنا كمان!'],
                  ['un po\'', 'شوية', 'أون بو', 'Un po\', per favore.', 'شوية من فضلك.']
                ],
                expressions: [
                  ['Mi chiamo ... e ho ... anni.', 'اسمي ... وعندي ... سنة.', 'مي كيامو ... إي أو ... أنّي', 'Mi chiamo Omar e ho dodici anni.', 'اسمي عمر وعندي اتناشر سنة.'],
                  ['Sono egiziano/a.', 'أنا مصري / مصرية.', 'سونو إيجيتسيانو/أ', 'Sono egiziana, del Cairo.', 'أنا مصرية، من القاهرة.'],
                  ['Abito a ...', 'أنا ساكن في ...', 'أبيتو آ', 'Abito ad Alessandria.', 'أنا ساكنة في الإسكندرية.'],
                  ['Come ti chiami?', 'اسمك إيه؟', 'كومي تي كيامي', 'Scusa, come ti chiami?', 'لو سمحت، اسمك إيه؟']
                ],
                examples: [
                  ['Mi chiamo Elena e sono italiana.', 'اسمي إيلينا وأنا طليانية.', 'مي كيامو إيلينا إي سونو إيتاليانا', ['Mi', 'chiamo', 'Elena', 'e', 'sono', 'italiana']],
                  ['Abito a Roma con la mia famiglia.', 'أنا ساكنة في روما مع عيلتي.', 'أبيتو آ روما كون لا ميا فاميلّا', ['Abito', 'a', 'Roma', 'con', 'la', 'mia', 'famiglia']],
                  ['Parlo inglese e un po\' d\'italiano.', 'بتكلم إنجليزي وشوية طلياني.', 'بارلو إنجليزي إي أون بو ديتاليانو', ['Parlo', 'inglese', 'e', 'un', 'po\'', 'd\'italiano']],
                  ['Come ti chiami?', 'اسمك إيه؟', 'كومي تي كيامي', ['Come', 'ti', 'chiami']]
                ],
                grammar: {
                  title: { ar: 'الفعلين الأساسيين: essere و avere', en: 'The two core verbs: essere and avere' },
                  points: [
                    { ar: 'essere = يكون، بنستخدمه للاسم والصفة: Sono studente.', en: 'essere = to be: Sono studente.' },
                    { ar: 'avere = يملك، للعمر والملكية: Ho due fratelli.', en: 'avere = to have: Ho due fratelli.' },
                    { ar: 'الصفة بتتغيّر: italiano → italiana، وبنطابق كمان في الجمع.', en: 'Adjectives agree in gender and number.' },
                    { ar: 'قبل حرف متحرك a بتبقى ad: Abito ad Alessandria.', en: 'a becomes ad before a vowel.' }
                  ],
                  table: [
                    { a: 'io sono / tu sei', b: 'أنا / أنت' },
                    { a: 'lui è / lei è', b: 'هو / هي' },
                    { a: 'io ho / tu hai', b: 'عندي / عندك' }
                  ],
                  note: { ar: 'اسم البلد بتاعك بيتكتب بحرف صغير في الطلياني: egiziano.', en: 'Nationalities are lowercase in Italian.' }
                },
                reading: {
                  title: { ar: 'طالبة جديدة في بولونيا', en: 'Una studentessa nuova a Bologna' },
                  linesEn: ['Elena è nuova nella classe.', 'È egiziana e abita a Bologna.', '« Mi chiamo Elena. Ho tredici anni. »', '« Benvenuta ! Parli italiano ? »', '« Sì, un po\'. Imparo l\'italiano. »', 'Gli studenti sono contenti.'],
                  linesAr: ['إيلينا جديدة في الفصل.', 'هي مصرية وساكنة في بولونيا.', '"اسمي إيلينا. عندي تلتاشر سنة."', '"أهلاً! بتتكلمي طلياني؟"', '"أيوه، شوية. أنا بتعلّم الطلياني."', 'الطلاب مبسوطين.'],
                  questions: [
                    { q: 'Dove abita Elena ?', qMeaning: 'إيلينا ساكنة فين؟', options: ['A Bologna', 'Al Cairo', 'A Roma'], answer: 0 },
                    { q: 'Quanti anni ha Elena ?', qMeaning: 'إيلينا عندها كام سنة؟', options: ['Tredici', 'Tre', 'Dodici'], answer: 0 }
                  ]
                },
                listening: [
                  ['Mi chiamo Elena.', ['Elena', 'Giulia', 'Anna'], 0, 'اسمي إيلينا.'],
                  ['Abito al Cairo.', ['Al Cairo', 'A Roma', 'A Bologna'], 0, 'أنا ساكن في القاهرة.'],
                  ['Come ti chiami ?', ['Come ti chiami ?', 'Come stai ?', 'Quanti anni hai ?'], 0, 'اسمك إيه؟']
                ],
                speaking: [
                  ['Mi chiamo ... e sono egiziano/a.', 'اسمي ... وأنا مصري/مصرية.', 'مي كيامو ... إي سونو إيجيتسيانو/أ'],
                  ['Come ti chiami?', 'اسمك إيه؟', 'كومي تي كيامي'],
                  ['Imparo l\'italiano.', 'أنا بتعلّم الطلياني.', 'إمبارو ليتاليانو']
                ],
                conversation: {
                  setting: { ar: 'يوم أول في كورس الطلياني', en: 'First day at an Italian course' },
                  lines: [
                    ['Paolo', 'Ciao! Come ti chiami?', 'هاي! اسمك إيه؟', 'تشاو! كومي تي كيامي'],
                    ['Elena', 'Mi chiamo Elena. E tu?', 'اسمي إيلينا. وأنت؟', 'مي كيامو إيلينا. إي تو'],
                    ['Paolo', 'Io sono Paolo. Sei italiana?', 'أنا باولو. إنتِ طليانية؟', 'إيو سونو باولو. سيي إيتاليانا'],
                    ['Elena', 'No, sono egiziana. Abito al Cairo.', 'لأ، أنا مصرية. ساكنة في القاهرة.', 'نو، سونو إيجيتسيانا. أبيتو آل كايرو'],
                    ['Paolo', 'Interessante! Parli bene italiano.', 'ممتع! بتتكلمي طلياني كويس.', 'إنترسّانتي! بارلي بيني إيتاليانو'],
                    ['Elena', 'Grazie! Imparo l\'italiano da un anno.', 'شكراً! بتعلّم طلياني من سنة.', 'جراتسيي! إمبارو ليتاليانو دا أون أنو'],
                    ['Paolo', 'Sei studentessa?', 'إنتِ طالبة؟', 'سيي ستودينتيسّا'],
                    ['Elena', 'Sì, studio all\'università.', 'أيوه، بدرس في الجامعة.', 'سي، ستوديو أللونيڤرسيتا']
                  ],
                  vocab: [['da un anno', 'من سنة'], ['università', 'جامعة'], ['interessante', 'ممتع'], ['bene', 'كويس'], ['No', 'لأ']],
                  questions: [
                    { q: 'Qual è la nazionalità di Elena ?', qMeaning: 'جنسية إيلينا إيه؟', options: ['Egiziana', 'Italiana', 'Francese'], answer: 0 },
                    { q: 'Da quanto tempo impara l\'italiano ?', qMeaning: 'بتتعلم طلياني من قد إيه؟', options: ['Un anno', 'Due anni', 'Un mese'], answer: 0 },
                    { q: 'Dove studia ?', qMeaning: 'بتدرس فين؟', options: ['All\'università', 'Al liceo', 'A casa'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Scrivi un po\'' },
                  tasks: [
                    { ar: 'اكتب ٤ جمل تعرّف بنفسك: الاسم، العمر، المدينة، واللغة.', en: 'Write four sentences: name, age, city, language.' },
                    { ar: 'اكتب سؤالين تسألهم لحد جديد.', en: 'Write two questions for someone new.' }
                  ]
                }
              }
            ]
          }
        ]
      },
      A1: {
        label: { ar: 'مبتدئ', en: 'Beginner' },
        units: [
          {
            title: 'Vita quotidiana', titleMeaning: 'الحياة اليومية',
            summary: { ar: 'يومك، الساعات، والعادات.', en: 'Your day, the clock and habits.' },
            lessons: [
              {
                id: 'it-a1-u1-l1', topic: 'Routine', title: 'La mia giornata', titleMeaning: 'يومي', minutes: 15,
                goals: { ar: ['تحكي يومك بالترتيب', 'تستخدم الأفعال الضميرية', 'تقول الساعة'],
                         en: ['Describe your day in order', 'Use reflexive verbs', 'Tell the time'] },
                vocab: [
                  ['svegliarsi', 'يصحى', 'سڤيليارسي', 'Mi sveglio alle sette.', 'بصحى الساعة سبعة.'],
                  ['alzarsi', 'يقوم من السرير', 'ألتسارسي', 'Mi alzo presto.', 'بقوم بدري.'],
                  ['fare colazione', 'يفطر', 'فاري كولاتسيوني', 'Faccio colazione alle otto.', 'بفطر الساعة تمانية.'],
                  ['andare a scuola', 'يروح المدرسة', 'أنداري آ سكولا', 'Vado a scuola a piedi.', 'بروح المدرسة ماشي.'],
                  ['lavorare', 'يشتغل', 'لاڤوراري', 'Lavoro la mattina.', 'بشتغل الصبح.'],
                  ['i compiti', 'الواجب', 'إي كومبيتي', 'Faccio i compiti alle cinque.', 'بعمل الواجب الخمسة.'],
                  ['cenare', 'يتعشى', 'تشيناري', 'Ceniamo alle otto.', 'بنتعشى التمانية.'],
                  ['andare a letto', 'ينام', 'أنداري آ ليتّو', 'Vado a letto alle dieci.', 'بنام الساعة عشرة.']
                ],
                related: [
                  ['sempre', 'دايماً', 'سيمبري', 'È sempre in ritardo.', 'هو دايماً متأخر.'],
                  ['spesso', 'كتير', 'سبيسّو', 'Leggo spesso.', 'بقرأ كتير.'],
                  ['a volte', 'أحياناً', 'آ ڤولتي', 'A volte cammino.', 'أحياناً بمشي.'],
                  ['mai', 'أبداً', 'ماي', 'Non fumo mai.', 'عمري ما بدخّن.'],
                  ['presto', 'بدري', 'بريستو', 'Mi alzo presto.', 'بقوم بدري.'],
                  ['in ritardo', 'متأخر', 'إن ريتاردو', 'Non essere in ritardo!', 'متتأخرش!']
                ],
                expressions: [
                  ['A che ora ti svegli?', 'بتصحى الساعة كام؟', 'آ كي أورا تي سڤيلي', 'A che ora ti svegli la mattina?', 'بتصحى الساعة كام الصبح؟'],
                  ['Mi sveglio alle sette.', 'بصحى الساعة سبعة.', 'مي سڤيليو ألّي سيتّي', 'Mi sveglio alle sette in punto.', 'بصحى الساعة سبعة بالظبط.'],
                  ['Che ore sono?', 'الساعة كام؟', 'كي أوري سونو', 'Scusa, che ore sono?', 'لو سمحت، الساعة كام؟'],
                  ['Sono le otto e mezza.', 'الساعة تمانية والنص.', 'سونو لي أوتّو إي ميدتسا', 'Sono le otto e mezza.', 'الساعة تمانية والنص.']
                ],
                examples: [
                  ['Mi sveglio alle sette e faccio colazione.', 'بصحى الساعة سبعة وبفطر.', 'مي سڤيليو ألّي سيتّي إي فاتشّو كولاتسيوني', ['Mi', 'sveglio', 'alle', 'sette']],
                  ['Poi vado a scuola con l\'autobus.', 'بعدها بروح المدرسة بالأتوبيس.', 'بوي ڤادو آ سكولا كون لاوتوبوس', ['Poi', 'vado', 'a', 'scuola']],
                  ['La sera ceno con la mia famiglia.', 'بالليل بتعشى مع عيلتي.', 'لا سيرا تشينو كون لا ميا فاميلّا', ['La', 'sera', 'ceno', 'con', 'la', 'mia', 'famiglia']],
                  ['Non vado mai a letto tardi.', 'عمري ما بنام متأخر.', 'نون ڤادو ماي آ ليتّو تاردي', ['Non', 'vado', 'mai', 'a', 'letto', 'tardi']]
                ],
                grammar: {
                  title: { ar: 'الأفعال الضميرية والمضارع', en: 'Reflexive verbs and the present tense' },
                  points: [
                    { ar: 'أفعال الروتين في الطلياني ضميرية: mi sveglio، ti alzi، si lava.', en: 'Routine verbs are reflexive: mi sveglio, ti alzi.' },
                    { ar: 'المضارع بيمثّل الحاضر والمستمر: Leggo = بقرأ / I am reading.', en: 'The present covers simple and continuous.' },
                    { ar: 'ظرف التكرار بييجي بعد الفعل: Vado spesso.', en: 'Frequency adverbs follow the verb.' },
                    { ar: 'الساعة بـ essere: Sono le due (ليها جمع!) و Sono le otto e mezza.', en: 'Time uses plural essere: sono le due.' }
                  ],
                  table: [
                    { a: 'mi sveglio', b: 'أنا بصحى' },
                    { a: 'ci alziamo', b: 'إحنا بنقوم' },
                    { a: 'sono le otto', b: 'الساعة تمانية' }
                  ],
                  note: { ar: 'الساعة الواحدة شاذة: È l\'una (مفرد).', en: 'One o\'clock is singular: È l\'una.' }
                },
                reading: {
                  title: { ar: 'يوم جوليا', en: 'La giornata di Giulia' },
                  linesEn: ['Giulia si sveglia alle sei e mezza.', 'Fa colazione con sua madre.', 'Poi va a scuola in autobus.', 'Nel pomeriggio fa i compiti e legge un libro.', 'La sera cena con la famiglia alle otto.', 'Va a letto alle dieci.'],
                  linesAr: ['جوليا بتصحى ٦:٣٠.', 'بتفطر مع مامتها.', 'بعدين بتروح المدرسة بالأتوبيس.', 'بعد الضهر بتعمل واجبها وبتقرأ كتاب.', 'بالليل بتتعشى مع العيلة التمانية.', 'وبتنام الساعة عشرة.'],
                  questions: [
                    { q: 'A che ora si sveglia Giulia ?', qMeaning: 'جوليا بتصحى الساعة كام؟', options: ['Sei e mezza', 'Sette', 'Dieci'], answer: 0 },
                    { q: 'Come va a scuola ?', qMeaning: 'بتروح المدرسة إزاي؟', options: ['In autobus', 'A piedi', 'In macchina'], answer: 0 }
                  ]
                },
                listening: [
                  ['Vado a letto alle dieci.', ['dieci', 'due', 'dodici'], 0, 'بنام الساعة عشرة.'],
                  ['Mi alzo presto.', ['presto', 'tardi', 'sempre'], 0, 'بقوم بدري.'],
                  ['A che ora fai colazione ?', ['A che ora fai colazione ?', 'Dove fai colazione ?', 'Cosa mangi a colazione ?'], 0, 'بتفطر الساعة كام؟']
                ],
                speaking: [
                  ['Mi sveglio alle sette.', 'بصحى الساعة سبعة.', 'مي سڤيليو ألّي سيتّي'],
                  ['A che ora vai a letto?', 'بتنام الساعة كام؟', 'آ كي أورا ڤاي آ ليتّو'],
                  ['Lavoro la mattina.', 'بشتغل الصبح.', 'لاڤورو لا ماتّينا']
                ],
                conversation: {
                  setting: { ar: 'صاحبين بيقارنوا يومهم', en: 'Two friends comparing their days' },
                  lines: [
                    ['Chiara', 'A che ora ti svegli?', 'بتصحى الساعة كام؟', 'آ كي أورا تي سڤيلي'],
                    ['Marco', 'Alle sei e mezza. E tu?', '٦:٣٠. وأنتِ؟', 'ألّي سيي إي ميدتسا. إي تو'],
                    ['Chiara', 'Alle sette. Faccio sempre colazione.', 'الساعة سبعة. أنا دايماً بفطر.', 'ألّي سيتّي. فاتشّو سيمبري كولاتسيوني'],
                    ['Marco', 'Io mai! Non ho tempo.', 'وأنا أبداً! معنديش وقت.', 'إيو ماي! نون أو تيمبو'],
                    ['Chiara', 'E a che ora vai a letto?', 'وبتنام الساعة كام؟', 'إي آ كي أورا ڤاي آ ليتّو'],
                    ['Marco', 'Verso mezzanotte. Lavoro molto.', 'حوالي نص الليل. بشتغل كتير.', 'ڤيرسو ميدتسانوتّي. لاڤورو مولتو'],
                    ['Chiara', 'È troppo tardi! Dormi presto stasera.', 'ده متأخر أوي! نام بدري النهاردة.', 'إي تروبّو تاردي! دورمي بريستو ستاسيرا'],
                    ['Marco', 'Hai ragione. Buonanotte!', 'عندك حق. تصبح على خير!', 'أي راجوني. بونانوتّي']
                  ],
                  vocab: [['verso', 'حوالي'], ['mezzanotte', 'نص الليل'], ['molto', 'كتير'], ['troppo', 'أوي'], ['Hai ragione', 'عندك حق']],
                  questions: [
                    { q: 'A che ora si sveglia Marco ?', qMeaning: 'ماركو بيصحى الساعة كام؟', options: ['Sei e mezza', 'Sette', 'Mezzanotte'], answer: 0 },
                    { q: 'Perché Marco non fa colazione ?', qMeaning: 'ماركو بيفطرش ليه؟', options: ['Non ha tempo', 'Non gli piace', 'È malato'], answer: 0 },
                    { q: 'A che ora va a letto ?', qMeaning: 'بينام الساعة كام؟', options: ['Verso mezzanotte', 'Alle dieci', 'Alle otto'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Scrivi un po\'' },
                  tasks: [
                    { ar: 'اكتب يومك في ٥ جمل مع الساعات.', en: 'Write your day in five sentences with times.' },
                    { ar: 'اكتب جملتين بظرف تكرار (sempre / mai).', en: 'Write two sentences with sempre / mai.' }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  );
})();
