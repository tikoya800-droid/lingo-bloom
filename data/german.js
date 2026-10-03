/* ==========================================================================
   LingoBloom — DEUTSCH (eigene Inhalte, keine Übersetzung)
   Kompakt: [Wort, Bedeutung(ar), Aussprache(ar), Beispiel, Übersetzung]
   ========================================================================== */
(function () {
  LB.addLanguage(
    { code: 'de', name: 'Deutsch', native: 'Deutsch lernen', meaning: 'الألمانية',
      flag: '🇩🇪', speech: 'de-DE', tone: 'gold', scene: '100%',
      blurb: { ar: 'لغة الهندسة والدراسة — منطقية ومنظّمة جداً.', en: 'The language of engineering — logical and well organised.' } },
    {
      A0: {
        label: { ar: 'مبتدئ تماماً', en: 'Absolute beginner' },
        units: [
          {
            title: 'Die Grundlagen', titleMeaning: 'الأساسيات',
            summary: { ar: 'التحية، الأرقام، والتعريف بنفسك بالألماني.', en: 'Greetings, numbers and introducing yourself in German.' },
            lessons: [
              {
                id: 'de-a0-u1-l1', topic: 'Begrüßung', title: 'Begrüßungen', titleMeaning: 'التحيات', minutes: 12,
                goals: { ar: ['تسلّم وتودّع بالألماني', 'تفرّق بين du و Sie', 'تسأل عن الحال'],
                         en: ['Greet and say goodbye in German', 'Tell du from Sie', 'Ask how someone is'] },
                vocab: [
                  ['Hallo', 'أهلاً / هاي', 'هالو', 'Hallo, Anna!', 'أهلاً يا آنا!'],
                  ['Guten Morgen', 'صباح الخير', 'جوتِن مورجِن', 'Guten Morgen, Frau Klein.', 'صباح الخير يا مدام كلاين.'],
                  ['Guten Tag', 'نهارك سعيد', 'جوتِن تاج', 'Guten Tag, Herr Braun.', 'نهارك سعيد يا سيد براون.'],
                  ['Guten Abend', 'مساء الخير', 'جوتِن آبِند', 'Guten Abend, alle zusammen!', 'مساء الخير للجميع!'],
                  ['Tschüss', 'سلام (وداع بين الأصحاب)', 'تشوس', 'Tschüss, bis morgen!', 'سلام، لبكرة!'],
                  ['Auf Wiedersehen', 'إلى اللقاء (رسمي)', 'آوف ڤيدرزيهِن', 'Auf Wiedersehen, Herr Doktor.', 'إلى اللقاء يا دكتور.'],
                  ['Danke', 'شكراً', 'دانكِ', 'Danke sehr!', 'شكراً جزيلاً!'],
                  ['Wie geht es dir?', 'إزيك؟', 'ڤي جيت إس دير', 'Hallo! Wie geht es dir?', 'أهلاً! إزيك؟']
                ],
                related: [
                  ['Bitte', 'من فضلك / العفو', 'بيتِ', 'Einen Kaffee, bitte.', 'قهوة من فضلك.'],
                  ['Entschuldigung', 'لو سمحت / آسف', 'إنتشولديجونج', 'Entschuldigung, wo ist der Bahnhof?', 'لو سمحت، المحطة فين؟'],
                  ['Herr / Frau', 'سيد / مدام', 'هير / فراو', 'Guten Tag, Frau Weber.', 'نهارك سعيد يا مدام ڤيبر.'],
                  ['Willkommen', 'أهلاً وسهلاً', 'ڤيلكومِن', 'Willkommen in Berlin!', 'أهلاً بيك في برلين!'],
                  ['Bis bald', 'أشوفك قريب', 'بيس بالد', 'Tschüss, bis bald!', 'سلام، أشوفك قريب!']
                ],
                expressions: [
                  ['Wie geht es Ihnen?', 'إزي حضرتك؟ (رسمي)', 'ڤي جيت إس إينِن', 'Guten Tag, wie geht es Ihnen?', 'نهارك سعيد، إزي حضرتك؟'],
                  ['Mir geht es gut, danke', 'أنا كويس، شكراً', 'مير جيت إس جوت، دانكِ', 'Mir geht es gut, danke. Und Ihnen?', 'أنا كويس شكراً. وحضرتك؟'],
                  ['Wie heißt du?', 'اسمك إيه؟', 'ڤي هايست دو', 'Hallo, wie heißt du?', 'أهلاً، اسمك إيه؟'],
                  ['Ich heiße ...', 'اسمي ...', 'إش هايسِ', 'Ich heiße Lena.', 'اسمي لينا.']
                ],
                examples: [
                  ['Hallo! Ich heiße Lena.', 'أهلاً! اسمي لينا.', 'هالو! إش هايسِ لينا', ['Hallo', 'Ich', 'heiße', 'Lena']],
                  ['Guten Morgen, wie geht es dir?', 'صباح الخير، إزيك؟', 'جوتِن مورجِن، ڤي جيت إس دير', ['Guten', 'Morgen', 'wie', 'geht', 'es', 'dir']],
                  ['Mir geht es gut, danke.', 'أنا كويس، شكراً.', 'مير جيت إس جوت، دانكِ', ['Mir', 'geht', 'es', 'gut', 'danke']],
                  ['Tschüss, bis morgen!', 'سلام، لبكرة!', 'تشوس، بيس مورجِن', ['Tschüss', 'bis', 'morgen']]
                ],
                grammar: {
                  title: { ar: 'du و Sie — وترتيب الجملة', en: 'du and Sie — and word order' },
                  points: [
                    { ar: 'الألماني فيه اتنين "أنت": du مع الأصحاب و Sie مع الرسمي (دايماً بحرف كابيتال).', en: 'German has du (friends) and Sie (formal, always capitalised).' },
                    { ar: 'الفعل بييجي في المكان التاني في الجملة العادية: Ich heiße Lena.', en: 'The verb sits in position two: Ich heiße Lena.' },
                    { ar: 'في السؤال الفعل بييجي الأول: Wie heißt du?', en: 'In a question the verb comes first: Wie heißt du?' },
                    { ar: 'الحروف المتحركة فيها Umlaut (ä, ö, ü) وبتغيّر المعنى.', en: 'Umlauts (ä, ö, ü) change meaning — practise them.' }
                  ],
                  table: [
                    { a: 'ich bin', b: 'أنا' },
                    { a: 'du bist', b: 'أنت (صاحبك)' },
                    { a: 'Sie sind', b: 'حضرتك' }
                  ],
                  note: { ar: 'كل الأسماء في الألماني بتبدأ بحرف كابيتال: der Mann, die Frau.', en: 'All German nouns are capitalised.' }
                },
                reading: {
                  title: { ar: 'في مقهى في برلين', en: 'In einem Café in Berlin' },
                  linesEn: ['Lena geht in ein Café in Berlin.', '„Guten Morgen!“ sagt sie.', '„Guten Morgen, gnädige Frau. Wie geht es Ihnen?“', '„Mir geht es gut, danke. Einen Kaffee, bitte.“', '„Sofort!“', 'Lena lächelt. Berlin ist schön am Morgen.'],
                  linesAr: ['لينا دخلت مقهى في برلين.', '"صباح الخير!" بتقول.', '"صباح الخير يا مدام. إزي حضرتك؟"', '"أنا كويسة شكراً. قهوة من فضلك."', '"حالاً!"', 'لينا ابتسمت. برلين حلوة الصبح.'],
                  questions: [
                    { q: 'Wo ist Lena?', qMeaning: 'لينا فين؟', options: ['Im Café', 'In der Schule', 'Zu Hause'], answer: 0 },
                    { q: 'Was bestellt sie?', qMeaning: 'طلبت إيه؟', options: ['Einen Kaffee', 'Einen Tee', 'Wasser'], answer: 0 }
                  ]
                },
                listening: [
                  ['Guten Morgen, wie geht es Ihnen?', ['Guten Morgen, wie geht es Ihnen?', 'Guten Abend, wie geht es dir?', 'Auf Wiedersehen!'], 0, 'صباح الخير، إزي حضرتك؟'],
                  ['Danke sehr!', ['Danke sehr', 'Bitte', 'Tschüss'], 0, 'شكراً جزيلاً!'],
                  ['Tschüss, bis bald!', ['Bis bald', 'Guten Tag', 'Willkommen'], 0, 'سلام، أشوفك قريب!']
                ],
                speaking: [
                  ['Guten Morgen! Wie geht es Ihnen?', 'صباح الخير! إزي حضرتك؟', 'جوتِن مورجِن! ڤي جيت إس إينِن'],
                  ['Ich heiße Lena.', 'اسمي لينا.', 'إش هايسِ لينا'],
                  ['Danke sehr, auf Wiedersehen!', 'شكراً جزيلاً، إلى اللقاء!', 'دانكِ زير، آوف ڤيدرزيهِن']
                ],
                conversation: {
                  setting: { ar: 'لينا بتسلّم على جارتها الجديدة', en: 'Lena greets her new neighbour' },
                  lines: [
                    ['Lena', 'Guten Morgen! Ich heiße Lena.', 'صباح الخير! اسمي لينا.', 'جوتِن مورجِن! إش هايسِ لينا'],
                    ['Anna', 'Guten Morgen, Lena! Ich bin Anna.', 'صباح الخير يا لينا! أنا آنا.', 'جوتِن مورجِن، لينا! إش بين آنا'],
                    ['Lena', 'Freut mich! Wie geht es dir?', 'فرصة سعيدة! إزيك؟', 'فرويت ميش! ڤي جيت إس دير'],
                    ['Anna', 'Mir geht es gut, danke. Und dir?', 'أنا كويسة شكراً. وأنتِ؟', 'مير جيت إس جوت، دانكِ. أوند دير'],
                    ['Lena', 'Auch gut. Wohnst du hier?', 'أنا كمان كويسة. ساكنة هنا؟', 'آوخ جوت. ڤونست دو هير'],
                    ['Anna', 'Ja, im zweiten Stock.', 'أيوه، في الدور التاني.', 'يا، إم تسڤايتِن شتوك'],
                    ['Lena', 'Schön! Bis bald!', 'حلو! أشوفك قريب!', 'شون! بيس بالد'],
                    ['Anna', 'Tschüss, bis morgen!', 'سلام، لبكرة!', 'تشوس، بيس مورجِن']
                  ],
                  vocab: [['Freut mich', 'فرصة سعيدة'], ['Wohnst', 'تسكن'], ['Stock', 'دور'], ['Auch gut', 'كويس كمان'], ['Ja', 'أيوه']],
                  questions: [
                    { q: 'Wo wohnt Anna?', qMeaning: 'آنا ساكنة فين؟', options: ['Im zweiten Stock', 'Im ersten Stock', 'Im Erdgeschoss'], answer: 0 },
                    { q: 'Wie geht es Anna?', qMeaning: 'آنا حالتها إيه؟', options: ['Gut', 'Schlecht', 'Müde'], answer: 0 },
                    { q: 'Was sagt Lena am Ende?', qMeaning: 'لينا قالت إيه في الآخر؟', options: ['Bis bald', 'Guten Morgen', 'Danke'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Schreib ein bisschen' },
                  tasks: [
                    { ar: 'اكتب تحية رسمية وتحية بين الأصحاب.', en: 'Write one formal and one informal greeting.' },
                    { ar: 'عرّف بنفسك: Ich heiße ... Freut mich!', en: 'Introduce yourself: Ich heiße … Freut mich!' }
                  ]
                }
              },
              {
                id: 'de-a0-u1-l2', topic: 'Zahlen', title: 'Die Zahlen von 1 bis 10', titleMeaning: 'الأرقام من ١ لـ ١٠', minutes: 15,
                goals: { ar: ['تعدّ بالألماني', 'تسأل عن العمر', 'تنطق ü و ö صح'],
                         en: ['Count 1–10 in German', 'Ask about age', 'Pronounce ü and ö'] },
                vocab: [
                  ['eins', 'واحد (١)', 'آينس', 'ein Buch', 'كتاب واحد'],
                  ['zwei', 'اتنين (٢)', 'تسڤاي', 'zwei Freunde', 'صاحبين'],
                  ['drei', 'تلاتة (٣)', 'دراي', 'drei Kaffee', 'تلات قهوة'],
                  ['vier', 'أربعة (٤)', 'فير', 'vier Blumen', 'أربع زهور'],
                  ['fünf', 'خمسة (٥)', 'فُنف', 'fünf Minuten', 'خمس دقايق'],
                  ['sechs', 'ستة (٦)', 'زيكس', 'sechs Jahre', 'ست سنين'],
                  ['sieben', 'سبعة (٧)', 'زيبِن', 'sieben Tage', 'سبع أيام'],
                  ['acht', 'تمانية (٨)', 'آخت', 'acht Stunden', 'تمن ساعات'],
                  ['neun', 'تسعة (٩)', 'نوين', 'neun Personen', 'تسع أشخاص'],
                  ['zehn', 'عشرة (١٠)', 'تسين', 'zehn Euro', 'عشر يورو']
                ],
                related: [
                  ['erste', 'الأول', 'إيرستِ', 'der erste Tag', 'اليوم الأول'],
                  ['Nummer', 'رقم', 'نومِر', 'Wie ist deine Nummer?', 'رقمك كام؟'],
                  ['Wie viele?', 'كام؟', 'ڤي فيلِ', 'Wie viele Bücher?', 'كام كتاب؟'],
                  ['Alter', 'سِن', 'آلتِر', 'Wie ist dein Alter?', 'سِنّك كام؟'],
                  ['Jahre', 'سنين', 'يارِ', 'Ich bin zehn Jahre alt.', 'عندي عشر سنين.']
                ],
                expressions: [
                  ['Wie alt bist du?', 'عندك كام سنة؟', 'ڤي آلت بيست دو', 'Wie alt bist du, Max?', 'عندك كام سنة يا ماكس؟'],
                  ['Ich bin zehn Jahre alt', 'عندي عشر سنين', 'إش بين تسين يارِ آلت', 'Ich bin zehn Jahre alt.', 'عندي عشر سنين.'],
                  ['Wie ist deine Telefonnummer?', 'رقم تليفونك كام؟', 'ڤي إست داينِ تيليفوننومِر', 'Wie ist deine Telefonnummer?', 'رقم تليفونك كام؟'],
                  ['Meine Nummer ist ...', 'رقمي هو ...', 'ماينِ نومِر إست', 'Meine Nummer ist 0176 ...', 'رقمي هو ٠١٧٦ ...']
                ],
                examples: [
                  ['Ich habe zwei Brüder und drei Schwestern.', 'عندي أخّين وتلات أخوات.', 'إش هابِ تسڤاي برودِر أوند دراي شڤيستِرن', ['Ich', 'habe', 'zwei', 'Brüder']],
                  ['Meine Schwester ist acht Jahre alt.', 'أختي عندها تمن سنين.', 'ماينِ شڤيستِر إست آخت يارِ آلت', ['Meine', 'Schwester', 'ist', 'acht', 'Jahre', 'alt']],
                  ['Es gibt fünf Schüler.', 'فيه خمس طلاب.', 'إس جيبت فُنف شولِر', ['Es', 'gibt', 'fünf', 'Schüler']],
                  ['Meine Nummer ist neun, sieben.', 'رقمي تسعة وسبعة.', 'ماينِ نومِر إست نوين، زيبِن', ['Meine', 'Nummer', 'ist', 'neun']]
                ],
                grammar: {
                  title: { ar: 'العمر بـ sein + alt والجمع', en: 'Age with sein + alt, and plurals' },
                  points: [
                    { ar: 'الألماني بيقول العمر بـ sein + alt: Ich bin zehn Jahre alt.', en: 'German uses sein + alt for age: Ich bin zehn Jahre alt.' },
                    { ar: 'الجمع بطرق مختلفة: -e، -er، -en مع Umlaut أحياناً — اسمع الجمع مع كل كلمة.', en: 'Plurals vary: -e, -er, -en, sometimes with umlaut — learn each with its noun.' },
                    { ar: 'es gibt معناها "فيه" وبييجي بعدها النصب (Akkusativ).', en: 'es gibt = there is/are, followed by the accusative.' },
                    { ar: 'ü بيتنطق بضم الشفايف وزي "إي" — زي fünf و Brüder.', en: 'ü is said with rounded lips: fünf, Brüder.' }
                  ],
                  table: [
                    { a: 'Ich bin acht Jahre alt', b: 'عندي تمن سنين' },
                    { a: 'Er ist zwanzig Jahre alt', b: 'هو عنده عشرين سنة' },
                    { a: 'es gibt', b: 'فيه' }
                  ],
                  note: { ar: 'في الألماني بنقول "عشر سنين قديم" — alt جاية في الآخر دايمًا.', en: 'The adjective alt always comes at the end of the age phrase.' }
                },
                reading: {
                  title: { ar: 'عيد ميلاد ماكس', en: 'Max hat Geburtstag' },
                  linesEn: ['Heute hat Max Geburtstag.', 'Max ist neun Jahre alt.', 'Seine Schwester ist sechs Jahre alt und sein Bruder ist zehn.', 'Auf dem Kuchen sind neun Kerzen.', '„Wie alt bist du?“ fragt sein Freund.', '„Ich bin neun Jahre alt!“ antwortet Max.'],
                  linesAr: ['النهاردة عيد ميلاد ماكس.', 'ماكس عنده تسع سنين.', 'أخته عندها ست سنين وأخوه عنده عشر.', 'على التورتة فيه تسع شمعات.', '"عندك كام سنة؟" سأله صاحبه.', '"عندي تسع سنين!" رد ماكس.'],
                  questions: [
                    { q: 'Wie alt ist Max?', qMeaning: 'ماكس عنده كام سنة؟', options: ['Neun', 'Sechs', 'Zehn'], answer: 0 },
                    { q: 'Wie viele Kerzen sind auf dem Kuchen?', qMeaning: 'كام شمعة على التورتة؟', options: ['Neun', 'Sechs', 'Zehn'], answer: 0 }
                  ]
                },
                listening: [
                  ['Ich bin sieben Jahre alt.', ['sieben', 'sechs', 'neun'], 0, 'عندي سبع سنين.'],
                  ['Wie alt bist du?', ['Wie alt bist du?', 'Wie geht es dir?', 'Wer bist du?'], 0, 'عندك كام سنة؟'],
                  ['Es gibt fünf Blumen.', ['fünf', 'zwei', 'zehn'], 0, 'فيه خمس زهور.']
                ],
                speaking: [
                  ['Ich bin zehn Jahre alt.', 'عندي عشر سنين.', 'إش بين تسين يارِ آلت'],
                  ['Wie viele Brüder hast du?', 'عندك كام أخ؟', 'ڤي فيلِ برودِر هاست دو'],
                  ['Meine Nummer ist sechs, zwei.', 'رقمي ستة واتنين.', 'ماينِ نومِر إست زيكس، تسڤاي']
                ],
                conversation: {
                  setting: { ar: 'مدرّسة بتسأل الأولاد', en: 'Eine Lehrerin fragt die Kinder' },
                  lines: [
                    ['Lehrerin', 'Guten Morgen, Kinder! Wie alt seid ihr?', 'صباح الخير يا أولاد! عندكم كام سنة؟', 'جوتِن مورجِن، كيندِر! ڤي آلت زايت إير'],
                    ['Mia', 'Ich bin acht Jahre alt, Frau Schmidt.', 'عندي تمن سنين يا مدام شميت.', 'إش بين آخت يارِ آلت، فراو شميت'],
                    ['Ben', 'Ich bin neun. Ich habe zwei Brüder.', 'عندي تسع سنين. عندي أخّين.', 'إش بين نوين. إش هابِ تسڤاي برودِر'],
                    ['Lehrerin', 'Sehr gut, Ben! Und du, Mia?', 'تمام يا بن! وأنتِ يا ميا؟', 'زير جوت، بن! أوند دو، ميا'],
                    ['Mia', 'Ich habe eine Schwester und eine Katze.', 'عندي أخت وقطة.', 'إش هابِ آينِ شڤيستِر أوند آينِ كاتسِ'],
                    ['Ben', 'Wie ist deine Telefonnummer?', 'ورقم تليفونك كام؟', 'ڤي إست داينِ تيليفوننومِر'],
                    ['Mia', 'Meine Nummer ist sechs, drei, sieben.', 'رقمي ستة، تلاتة، سبعة.', 'ماينِ نومِر إست زيكس، دراي، زيبِن'],
                    ['Lehrerin', 'Ausgezeichnet, Kinder!', 'ممتاز يا أولاد!', 'آوسجِتسايشنِت، كيندِر']
                  ],
                  vocab: [['Kinder', 'أولاد'], ['Lehrerin', 'مدرّسة'], ['Katze', 'قطة'], ['seid', 'عندكم / تكونوا'], ['Ausgezeichnet', 'ممتاز']],
                  questions: [
                    { q: 'Wie alt ist Mia?', qMeaning: 'ميا عندها كام سنة؟', options: ['Acht', 'Neun', 'Sechs'], answer: 0 },
                    { q: 'Wie viele Brüder hat Ben?', qMeaning: 'بن عنده كام أخ؟', options: ['Zwei', 'Einen', 'Drei'], answer: 0 },
                    { q: 'Was gibt Mia?', qMeaning: 'ميا أدّت إيه؟', options: ['Ihre Nummer', 'Ihr Alter', 'Nichts'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Schreib ein bisschen' },
                  tasks: [
                    { ar: 'اكتب أعمار عيلتك بالأرقام الألمانية.', en: 'Write your family\'s ages in German numbers.' },
                    { ar: 'اكتب جملتين: Ich bin ... Jahre alt.', en: 'Write two sentences with Ich bin … Jahre alt.' }
                  ]
                }
              },
              {
                id: 'de-a0-u1-l3', topic: 'Sich vorstellen', title: 'Sich vorstellen', titleMeaning: 'التعريف بنفسك', minutes: 14,
                goals: { ar: ['تعرّف بنفسك بالاسم والعمر والبلد', 'تسأل حد عن نفسه', 'تفهم فكرة تصريف الفعل'],
                         en: ['Introduce yourself with name, age, country', 'Ask others about themselves', 'Understand verb endings'] },
                vocab: [
                  ['ich heiße', 'اسمي', 'إش هايسِ', 'Ich heiße Karim.', 'اسمي كريم.'],
                  ['ich bin', 'أنا (أكون)', 'إش بين', 'Ich bin Ägypter.', 'أنا مصري.'],
                  ['Ägypter / Ägypterin', 'مصري / مصرية', 'إجيبتِر', 'Sie ist Ägypterin.', 'هي مصرية.'],
                  ['Deutscher / Deutsche', 'ألماني / ألمانية', 'دويتشِر', 'Er ist Deutscher.', 'هو ألماني.'],
                  ['wohnen', 'يسكن', 'ڤونِن', 'Ich wohne in Kairo.', 'أنا ساكن في القاهرة.'],
                  ['sprechen', 'يتكلم', 'شبريشِن', 'Ich spreche ein bisschen Deutsch.', 'بتكلم ألماني شوية.'],
                  ['lernen', 'يتعلّم', 'ليرنِن', 'Ich lerne Deutsch.', 'بتعلّم ألماني.'],
                  ['Student / Studentin', 'طالب / طالبة', 'شتودينت', 'Ich bin Studentin.', 'أنا طالبة.']
                ],
                related: [
                  ['Stadt', 'مدينة', 'شتادت', 'In welcher Stadt?', 'في أي مدينة؟'],
                  ['Land', 'بلد', 'لاند', 'Aus welchem Land?', 'من أي بلد؟'],
                  ['Sprache', 'لغة', 'شبراخِ', 'Ich spreche zwei Sprachen.', 'بتكلم لغتين.'],
                  ['auch', 'كمان / برضه', 'آوخ', 'Ich auch!', 'وأنا كمان!'],
                  ['ein bisschen', 'شوية', 'آين بيسشِن', 'Ein bisschen, bitte.', 'شوية من فضلك.']
                ],
                expressions: [
                  ['Ich heiße ... und bin ... Jahre alt.', 'اسمي ... وعندي ... سنة.', 'إش هايسِ ... أوند بين ... يارِ آلت', 'Ich heiße Karim und bin zwölf Jahre alt.', 'اسمي كريم وعندي اتناشر سنة.'],
                  ['Ich bin Ägypter/Ägypterin.', 'أنا مصري / مصرية.', 'إش بين إجيبتِر/إجيبترين', 'Ich bin Ägypterin, aus Kairo.', 'أنا مصرية، من القاهرة.'],
                  ['Ich wohne in ...', 'أنا ساكن في ...', 'إش ڤونِ إن', 'Ich wohne in Alexandria.', 'أنا ساكنة في الإسكندرية.'],
                  ['Wie heißen Sie?', 'اسم حضرتك إيه؟', 'ڤي هايسِن زي', 'Entschuldigung, wie heißen Sie?', 'لو سمحت، اسم حضرتك إيه؟']
                ],
                examples: [
                  ['Ich heiße Lena und ich bin Deutsche.', 'اسمي لينا وأنا ألمانية.', 'إش هايسِ لينا أوند إش بين دويتشِ', ['Ich', 'heiße', 'Lena', 'und', 'ich', 'bin', 'Deutsche']],
                  ['Ich wohne in Berlin mit meiner Familie.', 'أنا ساكنة في برلين مع عيلتي.', 'إش ڤونِ إن برلين ميت ماينِر فاميليِ', ['Ich', 'wohne', 'in', 'Berlin', 'mit', 'meiner', 'Familie']],
                  ['Ich spreche Englisch und ein bisschen Deutsch.', 'بتكلم إنجليزي وألماني شوية.', 'إش شبريشِ إنجليش أوند آين بيسشِن دويتش', ['Ich', 'spreche', 'Englisch', 'und', 'ein', 'bisschen', 'Deutsch']],
                  ['Wie heißen Sie?', 'اسم حضرتك إيه؟', 'ڤي هايسِن زي', ['Wie', 'heißen', 'Sie']]
                ],
                grammar: {
                  title: { ar: 'sein و haben وتصريف الفعل', en: 'sein, haben and verb endings' },
                  points: [
                    { ar: 'sein = يكون: ich bin، du bist، er/sie ist، wir sind.', en: 'sein = to be: ich bin, du bist, er/sie ist, wir sind.' },
                    { ar: 'haben = يملك: ich habe، du hast، er hat، wir haben.', en: 'haben = to have: ich habe, du hast, er hat.' },
                    { ar: 'معظم الأفعال العادية بتاخد -e أو -st أو -t حسب الضمير: wohnen → ich wohne، du wohnst، er wohnt.', en: 'Regular verbs take -e/-st/-t: ich wohne, du wohnst, er wohnt.' },
                    { ar: 'حرف الجر in للبلد المنتظر مع Dativ: in Kairo، in Berlin.', en: 'in + city uses the dative: in Kairo.' }
                  ],
                  table: [
                    { a: 'ich bin / du bist', b: 'أنا / أنت' },
                    { a: 'ich habe / du hast', b: 'عندي / عندك' },
                    { a: 'ich wohne / du wohnst', b: 'أسكن / تسكن' }
                  ],
                  note: { ar: 'كل الأفعال المنتظمة بتتبع نفس النمط — تعلّم النمط مرة واحدة.', en: 'Regular verbs all follow one pattern — learn it once.' }
                },
                reading: {
                  title: { ar: 'طالب جديد في ميونخ', en: 'Ein neuer Student in München' },
                  linesEn: ['Karim ist neu in der Klasse.', 'Er ist Ägypter und wohnt in München.', '„Ich heiße Karim. Ich bin dreizehn Jahre alt.“', '„Willkommen! Sprichst du Deutsch?“', '„Ja, ein bisschen. Ich lerne Deutsch.“', 'Die Schüler sind zufrieden.'],
                  linesAr: ['كريم جديد في الفصل.', 'هو مصري وساكن في ميونخ.', '"اسمي كريم. عندي تلتاشر سنة."', '"أهلاً! بتتكلم ألماني؟"', '"أيوه، شوية. أنا بتعلّم ألماني."', 'الطلاب مبسوطين.'],
                  questions: [
                    { q: 'Wo wohnt Karim?', qMeaning: 'كريم ساكن فين؟', options: ['In München', 'In Kairo', 'In Berlin'], answer: 0 },
                    { q: 'Wie alt ist Karim?', qMeaning: 'كريم عنده كام سنة؟', options: ['Dreizehn', 'Drei', 'Zwölf'], answer: 0 }
                  ]
                },
                listening: [
                  ['Ich heiße Karim.', ['Karim', 'Lena', 'Ben'], 0, 'اسمي كريم.'],
                  ['Ich wohne in Kairo.', ['In Kairo', 'In Berlin', 'In München'], 0, 'أنا ساكن في القاهرة.'],
                  ['Wie heißen Sie?', ['Wie heißen Sie?', 'Wie geht es Ihnen?', 'Wie alt sind Sie?'], 0, 'اسم حضرتك إيه؟']
                ],
                speaking: [
                  ['Ich heiße ... und ich bin Ägypter(in).', 'اسمي ... وأنا مصري/مصرية.', 'إش هايسِ ... أوند إش بين إجيبتِر/إجيبترين'],
                  ['Wie heißen Sie?', 'اسم حضرتك إيه؟', 'ڤي هايسِن زي'],
                  ['Ich lerne Deutsch.', 'أنا بتعلّم ألماني.', 'إش ليرنِ دويتش']
                ],
                conversation: {
                  setting: { ar: 'يوم أول في كورس الألماني', en: 'Der erste Tag im Deutschkurs' },
                  lines: [
                    ['Jonas', 'Hallo! Wie heißt du?', 'أهلاً! اسمك إيه؟', 'هالو! ڤي هايست دو'],
                    ['Karim', 'Ich heiße Karim. Und du?', 'اسمي كريم. وأنت؟', 'إش هايسِ كريم. أوند دو'],
                    ['Jonas', 'Ich bin Jonas. Bist du Ägypter?', 'أنا يوناس. إنتَ مصري؟', 'إش بين يوناس. بيست دو إجيبتِر'],
                    ['Karim', 'Ja, ich bin Ägypter. Ich wohne in Kairo.', 'أيوه، أنا مصري. ساكن في القاهرة.', 'يا، إش بين إجيبتِر. إش ڤونِ إن كايرو'],
                    ['Jonas', 'Interessant! Du sprichst gut Deutsch.', 'ممتع! بتتكلم ألماني كويس.', 'إنترسانت! دو شبريشست جوت دويتش'],
                    ['Karim', 'Danke! Ich lerne Deutsch seit einem Jahr.', 'شكراً! بتعلّم ألماني من سنة.', 'دانكِ! إش ليرنِ دويتش زايت آينِم يار'],
                    ['Jonas', 'Bist du Student?', 'إنتَ طالب؟', 'بيست دو شتودينت'],
                    ['Karim', 'Ja, ich studiere an der Universität.', 'أيوه، بدرس في الجامعة.', 'يا، إش شتوديرِ آن دير اونيڤرزيتِت']
                  ],
                  vocab: [['seit', 'من (مدة)'], ['Universität', 'جامعة'], ['interessant', 'ممتع'], ['gut', 'كويس'], ['Ja', 'أيوه']],
                  questions: [
                    { q: 'Welche Nationalität hat Karim?', qMeaning: 'جنسية كريم إيه؟', options: ['Ägypter', 'Deutscher', 'Franzose'], answer: 0 },
                    { q: 'Seit wann lernt er Deutsch?', qMeaning: 'بتعلّم ألماني من قد إيه؟', options: ['Seit einem Jahr', 'Seit zwei Jahren', 'Seit einem Monat'], answer: 0 },
                    { q: 'Wo studiert er?', qMeaning: 'بيدرس فين؟', options: ['An der Universität', 'In der Schule', 'Zu Hause'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Schreib ein bisschen' },
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
            title: 'Alltag', titleMeaning: 'الحياة اليومية',
            summary: { ar: 'يومك، الساعات، والعادات.', en: 'Your day, the clock and habits.' },
            lessons: [
              {
                id: 'de-a1-u1-l1', topic: 'Tagesablauf', title: 'Mein Tag', titleMeaning: 'يومي', minutes: 15,
                goals: { ar: ['تحكي يومك بالترتيب', 'تستخدم الأفعال المنفصلة', 'تقول الساعة'],
                         en: ['Describe your day in order', 'Use separable verbs', 'Tell the time'] },
                vocab: [
                  ['aufwachen', 'يصحى', 'آوفڤاخِن', 'Ich wache um sieben auf.', 'بصحى الساعة سبعة.'],
                  ['aufstehen', 'يقوم من السرير', 'آوفشتيهِن', 'Ich stehe früh auf.', 'بقوم بدري.'],
                  ['frühstücken', 'يفطر', 'فروشستوكن', 'Ich frühstücke um acht.', 'بفطر الساعة تمانية.'],
                  ['zur Schule gehen', 'يروح المدرسة', 'تسور شولِ جيهِن', 'Ich gehe zu Fuß zur Schule.', 'بروح المدرسة ماشي.'],
                  ['arbeiten', 'يشتغل', 'آربايتِن', 'Ich arbeite am Morgen.', 'بشتغل الصبح.'],
                  ['die Hausaufgaben', 'الواجب', 'هاوسآوفگابِن', 'Ich mache die Hausaufgaben um fünf.', 'بعمل الواجب الخمسة.'],
                  ['zu Abend essen', 'يتعشى', 'تسو آبِنت إسِن', 'Wir essen um acht zu Abend.', 'بنتعشى التمانية.'],
                  ['ins Bett gehen', 'ينام', 'إنس بيت جيهِن', 'Ich gehe um zehn ins Bett.', 'بنام الساعة عشرة.']
                ],
                related: [
                  ['immer', 'دايماً', 'إمِر', 'Er ist immer pünktlich.', 'هو دايماً في الميعاد.'],
                  ['oft', 'كتير', 'أوفت', 'Ich lese oft.', 'بقرأ كتير.'],
                  ['manchmal', 'أحياناً', 'مانشمال', 'Manchmal gehe ich zu Fuß.', 'أحياناً بمشي.'],
                  ['nie', 'أبداً', 'ني', 'Ich rauche nie.', 'عمري ما بدخّن.'],
                  ['früh', 'بدري', 'فرو', 'Ich stehe früh auf.', 'بقوم بدري.'],
                  ['spät', 'متأخر', 'شبيت', 'Komm nicht zu spät!', 'متتأخرش!']
                ],
                expressions: [
                  ['Wann stehst du auf?', 'بتقوم الساعة كام؟', 'ڤان شتيهست دو آوف', 'Wann stehst du morgens auf?', 'بتقوم الصبح الساعة كام؟'],
                  ['Ich stehe um sieben auf.', 'بقوم الساعة سبعة.', 'إش شتيهِ أوم زيبِن آوف', 'Ich stehe um sieben Uhr auf.', 'بقوم الساعة سبعة بالظبط.'],
                  ['Wie viel Uhr ist es?', 'الساعة كام؟', 'ڤي فيل أور إست إس', 'Entschuldigung, wie viel Uhr ist es?', 'لو سمحت، الساعة كام؟'],
                  ['Es ist halb neun.', 'الساعة تمانية والنص.', 'إس إست هالب نوين', 'Es ist halb neun.', 'الساعة تمانية والنص.']
                ],
                examples: [
                  ['Ich stehe um sieben auf und frühstücke.', 'بقوم الساعة سبعة وبفطر.', 'إش شتيهِ أوم زيبِن آوف أوند فروشستوكِ', ['Ich', 'stehe', 'um', 'sieben', 'auf']],
                  ['Dann gehe ich zur Schule.', 'بعدها بروح المدرسة.', 'دان جيهِ إش تسور شولِ', ['Dann', 'gehe', 'ich', 'zur', 'Schule']],
                  ['Am Abend esse ich mit meiner Familie.', 'بالليل بتعشى مع عيلتي.', 'آم آبِنت إسِ إش ميت ماينِر فاميليِ', ['Am', 'Abend', 'esse', 'ich']],
                  ['Ich gehe nie spät ins Bett.', 'عمري ما بنام متأخر.', 'إش جيهِ ني شبيت إنس بيت', ['Ich', 'gehe', 'nie', 'spät', 'ins', 'Bett']]
                ],
                grammar: {
                  title: { ar: 'الأفعال المنفصلة (aufstehen)', en: 'Separable verbs (aufstehen)' },
                  points: [
                    { ar: 'أفعال الروتين في الألماني أفعال منفصلة: البادئة (auf, ein) بتتطلع لآخر الجملة.', en: 'Routine verbs are separable: the prefix (auf, ein) jumps to the end.' },
                    { ar: 'Ich stehe um sieben auf — مش Ich aufstehe.', en: 'Ich stehe um sieben auf — never ich aufstehe.' },
                    { ar: 'المضارع بيغطي الحاضر والمستمر مع بعض.', en: 'The present covers simple and continuous.' },
                    { ar: 'الساعة: um + رقم + Uhr، و halb + الساعة الجاية يعني النص قبلها.', en: 'Time: um … Uhr; halb neun literally means half before nine.' }
                  ],
                  table: [
                    { a: 'ich stehe ... auf', b: 'أنا بقوم' },
                    { a: 'ich wache ... auf', b: 'أنا بصحى' },
                    { a: 'halb neun', b: 'الساعة ٨:٣٠' }
                  ],
                  note: { ar: 'خد بالك: halb neun معناها ٨:٣٠ مش ٩:٣٠!', en: 'Careful: halb neun means 8:30, not 9:30.' }
                },
                reading: {
                  title: { ar: 'يوم لينا', en: 'Lenas Tag' },
                  linesEn: ['Lena wacht um sechs Uhr dreißig auf.', 'Sie frühstückt mit ihrer Mutter.', 'Dann geht sie mit dem Bus zur Schule.', 'Am Nachmittag macht sie die Hausaufgaben und liest ein Buch.', 'Am Abend isst sie mit der Familie um acht zu Abend.', 'Sie geht um zehn ins Bett.'],
                  linesAr: ['لينا بتصحى ٦:٣٠.', 'بتفطر مع مامتها.', 'بعدين بتروح المدرسة بالأتوبيس.', 'بعد الضهر بتعمل واجبها وبتقرأ كتاب.', 'بالليل بتتعشى مع العيلة التمانية.', 'وبتنام الساعة عشرة.'],
                  questions: [
                    { q: 'Wann wacht Lena auf?', qMeaning: 'لينا بتصحى الساعة كام؟', options: ['Um sechs Uhr dreißig', 'Um sieben', 'Um zehn'], answer: 0 },
                    { q: 'Wie geht sie zur Schule?', qMeaning: 'بتروح المدرسة إزاي؟', options: ['Mit dem Bus', 'Zu Fuß', 'Mit dem Auto'], answer: 0 }
                  ]
                },
                listening: [
                  ['Ich gehe um zehn ins Bett.', ['zehn', 'zwei', 'zwölf'], 0, 'بنام الساعة عشرة.'],
                  ['Ich stehe früh auf.', ['früh', 'spät', 'immer'], 0, 'بقوم بدري.'],
                  ['Wann frühstückst du?', ['Wann frühstückst du?', 'Wo frühstückst du?', 'Was frühstückst du?'], 0, 'بتفطر إمتى؟']
                ],
                speaking: [
                  ['Ich stehe um sieben Uhr auf.', 'بقوم الساعة سبعة.', 'إش شتيهِ أوم زيبِن أور آوف'],
                  ['Wann gehst du ins Bett?', 'بتنام الساعة كام؟', 'ڤان جيهست دو إنس بيت'],
                  ['Ich arbeite am Morgen.', 'بشتغل الصبح.', 'إش آربايتِ آم مورجِن']
                ],
                conversation: {
                  setting: { ar: 'صاحبين بيقارنوا يومهم', en: 'Zwei Freunde vergleichen ihren Tag' },
                  lines: [
                    ['Clara', 'Wann stehst du auf?', 'بتقوم الساعة كام؟', 'ڤان شتيهست دو آوف'],
                    ['Felix', 'Um halb sieben. Und du?', '٦:٣٠. وأنتِ؟', 'أوم هالب زيبِن. أوند دو'],
                    ['Clara', 'Um sieben. Ich frühstücke immer.', 'الساعة سبعة. أنا دايماً بفطر.', 'أوم زيبِن. إش فروشستوكِ إمِر'],
                    ['Felix', 'Ich nie! Ich habe keine Zeit.', 'وأنا أبداً! معنديش وقت.', 'إش ني! إش هابِ كاينِ تسايت'],
                    ['Clara', 'Und wann gehst du ins Bett?', 'وبتنام الساعة كام؟', 'أوند ڤان جيهست دو إنس بيت'],
                    ['Felix', 'Gegen Mitternacht. Ich arbeite viel.', 'حوالي نص الليل. بشتغل كتير.', 'جيهگِن ميتِرناخت. إش آربايتِ فيل'],
                    ['Clara', 'Das ist zu spät! Schlaf früh heute.', 'ده متأخر أوي! نام بدري النهاردة.', 'داس إست تسو شبيت! شلاف فرو هويتِ'],
                    ['Felix', 'Du hast recht. Gute Nacht!', 'عندك حق. تصبح على خير!', 'دو هاست رِشت. جوتِ ناخت']
                  ],
                  vocab: [['gegen', 'حوالي'], ['Mitternacht', 'نص الليل'], ['viel', 'كتير'], ['zu spät', 'متأخر أوي'], ['Du hast recht', 'عندك حق']],
                  questions: [
                    { q: 'Wann steht Felix auf?', qMeaning: 'فيليكس بيقوم الساعة كام؟', options: ['Um halb sieben', 'Um sieben', 'Um Mitternacht'], answer: 0 },
                    { q: 'Warum frühstückt Felix nicht?', qMeaning: 'فيليكس بيفطرش ليه؟', options: ['Er hat keine Zeit', 'Er mag es nicht', 'Er ist krank'], answer: 0 },
                    { q: 'Wann geht er ins Bett?', qMeaning: 'بينام الساعة كام؟', options: ['Gegen Mitternacht', 'Um zehn', 'Um acht'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Schreib ein bisschen' },
                  tasks: [
                    { ar: 'اكتب يومك في ٥ جمل مع الساعات.', en: 'Write your day in five sentences with times.' },
                    { ar: 'اكتب جملتين بظرف تكرار (immer / nie).', en: 'Write two sentences with immer / nie.' }
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
