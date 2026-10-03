/* ==========================================================================
   LingoBloom — Curricula-Erweiterung · DEUTSCH (native Inhalte)
   ========================================================================== */
(function () {
  if (!LB.addUnits) return;

  LB.addUnits('de', 'A1', [
    {
      title: 'Zu Hause', titleMeaning: 'في البيت',
      summary: { ar: 'أوض البيت، الأثاث، والوصف بالألماني.', en: 'Rooms, furniture and describing your home.' },
      lessons: [
        {
          id: 'de-a1-u2-l1', topic: 'Wohnen', title: 'Meine Wohnung', titleMeaning: 'شقتي', minutes: 14,
          goals: { ar: ['تسمّي أوض البيت بالألماني', 'تقول ساكن فين', 'تستخدم es gibt بسهولة'],
                   en: ['Name rooms in German', 'Say where you live', 'Use “es gibt” easily'] },
          vocab: [
            ['das Haus', 'بيت', 'داس هاوس', 'Ich wohne in einem Haus.', 'ساكن في بيت.'],
            ['die Wohnung', 'شقة', 'دي ڤونونج', 'Meine Wohnung ist klein.', 'شقتي صغيرة.'],
            ['die Küche', 'المطبخ', 'دي كوخِ', 'Mama ist in der Küche.', 'ماما في المطبخ.'],
            ['das Schlafzimmer', 'أوضة النوم', 'داس شلافتسيمر', 'Mein Schlafzimmer ist oben.', 'أوضة نومي فوق.'],
            ['das Badezimmer', 'الحمّام', 'داس بادِتسيمر', 'Das Badezimmer ist rechts.', 'الحمّام على اليمين.'],
            ['das Wohnzimmer', 'الصالة', 'داس ڤونتسيمر', 'Wir sehen im Wohnzimmer fern.', 'بنتفرج على التلفزيون في الصالة.'],
            ['die Tür', 'الباب', 'دي تير', 'Mach die Tür zu, bitte.', 'اقفل الباب لو سمحت.'],
            ['das Fenster', 'الشباك', 'داس فينستر', 'Öffne das Fenster!', 'افتح الشباك!']
          ],
          related: [
            ['der Tisch', 'طربيزة', 'دير تيش', 'Das Buch liegt auf dem Tisch.', 'الكتاب على الطربيزة.'],
            ['der Stuhl', 'كرسي', 'دير شتول', 'Nimm einen Stuhl.', 'خد كرسي.'],
            ['das Bett', 'سرير', 'داس بِت', 'Die Katze schläft im Bett.', 'القطة نايمة على السرير.'],
            ['das Sofa', 'كنبة', 'داس زوفا', 'Das Sofa ist neu.', 'الكنبة جديدة.'],
            ['der Garten', 'جنينة', 'دير جارتن', 'Es gibt einen Garten hinten.', 'في جنينة ورا.'],
            ['der Schlüssel', 'المفتاح', 'دير شلوسل', 'Wo ist der Schlüssel?', 'المفتاح فين؟']
          ],
          expressions: [
            ['Wo wohnst du?', 'إنت ساكن فين؟', 'ڤو ڤونست دو', 'Wo wohnst du, Lukas?', 'إنت ساكن فين يا لوكاس؟'],
            ['Ich wohne in Berlin.', 'أنا ساكن في برلين.', 'إش ڤونِ إن برلين', 'Ich wohne in Berlin, neben dem Park.', 'ساكن في برلين، جنب الجنينة.'],
            ['Komm rein, bitte!', 'اتفضل ادخل!', 'كوم راين بیتِ', 'Komm rein, bitte! Fühl dich wie zu Hause.', 'اتفضل ادخل! البيت بيتك.'],
            ['Es ist im ersten Stock.', 'ده في الدور الأول.', 'إس إست إم إرستن شتوك', 'Das Schlafzimmer ist im ersten Stock.', 'أوضة النوم في الدور الأول.']
          ],
          examples: [
            ['Im Wohnzimmer gibt es ein großes Sofa.', 'في الصالة كنبة كبيرة.', 'إم ڤونتسيمر جيبت إس آين جروسِس زوفا', ['Im', 'Wohnzimmer', 'gibt', 'es', 'ein', 'großes', 'Sofa']],
            ['Die Küche ist neben dem Badezimmer.', 'المطبخ جنب الحمّام.', 'دي كوخِ إست نيبِن دِم بادِتسيمر', ['Die', 'Küche', 'ist', 'neben', 'dem', 'Badezimmer']],
            ['Es gibt zwei Fenster im Schlafzimmer.', 'في شباكين في أوضة النوم.', 'إس جيبت تسڤاي فينستر إم شلافتسيمر', ['Es', 'gibt', 'zwei', 'Fenster', 'im', 'Schlafzimmer']],
            ['Es gibt keinen Balkon.', 'مفيش بلكونة.', 'إس جيبت كاينِن بالكون', ['Es', 'gibt', 'keinen', 'Balkon']]
          ],
          grammar: {
            title: { ar: 'es gibt + حروف المكان (Dativ)', en: 'es gibt + prepositions of place (dative)' },
            points: [
              { ar: 'es gibt = فيه، وبتفضل زي ما هي مع المفرد والجمع.', en: '“es gibt” means there is/there are — never changes.' },
              { ar: 'في النفي بنقول es gibt kein / keine / keinen.', en: 'Negative: es gibt kein / keine / keinen.' },
              { ar: 'حروف المكان بتاخد Dativ: in dem → im، neben dem، auf dem.', en: 'Prepositions take the dative: in dem → im, neben dem, auf dem.' }
            ],
            table: [
              { a: 'auf dem Tisch', b: 'Das Buch liegt auf dem Tisch.' },
              { a: 'unter dem Bett', b: 'Die Katze ist unter dem Bett.' },
              { a: 'neben der Tür', b: 'Das Fenster ist neben der Tür.' },
              { a: 'es gibt keine…', b: 'Es gibt keine Garage.' }
            ],
            note: { ar: 'der/das بتبقى dem، و die بتبقى der في الـ Dativ.', en: 'In the dative, der/das become dem and die becomes der.' }
          },
          reading: {
            title: { ar: 'شقة العيلة في برلين', en: 'Die Familienwohnung in Berlin' },
            linesEn: ['Lukas wohnt in einer Wohnung in Berlin.', 'Es gibt drei Zimmer: ein Wohnzimmer, eine Küche und zwei Schlafzimmer.', 'Im Wohnzimmer gibt es ein blaues Sofa und ein großes Fenster.', 'Seine Mutter kocht in der Küche.', 'Sein Bruder lernt in seinem Zimmer.', 'Abends isst die Familie zusammen im Wohnzimmer.'],
            linesAr: ['لوكاس ساكن في شقة في برلين.', 'فيه تلات أوض: صالة ومطبخ وأوضتين نوم.', 'في الصالة كنبة زرقا وشباك كبير.', 'مامته بتطبخ في المطبخ.', 'أخوه بيدرس في أوضته.', 'بالليل العيلة بتعشى مع بعض في الصالة.'],
            questions: [
              { q: 'Wie viele Schlafzimmer gibt es?', qMeaning: 'فيه كام أوضة نوم؟', options: ['Zwei', 'Drei', 'Eine'], answer: 0 },
              { q: 'Welche Farbe hat das Sofa?', qMeaning: 'لون الكنبة إيه؟', options: ['Blau', 'Rot', 'Grün'], answer: 0 }
            ]
          },
          listening: [
            ['Wo wohnst du?', ['Wo wohnst du?', 'Wo arbeitest du?', 'Wo gehst du?'], 0, 'إنت ساكن فين؟'],
            ['Die Küche ist rechts.', ['Die Küche ist rechts', 'Die Küche ist links', 'Die Küche ist oben'], 0, 'المطبخ على اليمين.'],
            ['Es gibt zwei Stühle.', ['Zwei Stühle', 'Zwei Zimmer', 'Zwei Tische'], 0, 'في كرسيين.']
          ],
          speaking: [
            ['Ich wohne mit meiner Familie in einer Wohnung.', 'ساكن في شقة مع عيلتي.', 'إش ڤونِ مِت ماينر فاميلي إن آينر ڤونونج'],
            ['Es gibt ein großes Wohnzimmer.', 'عندي صالة كبيرة.', 'إس جيبت آين جروسِس ڤونتسيمر'],
            ['Der Schlüssel liegt auf dem Tisch.', 'المفتاح على الطربيزة.', 'دير شلوسل ليقت أوف دِم تيش']
          ],
          conversation: {
            setting: { ar: 'لوكاس بيزور شقة صاحبه يان', en: 'Lukas besucht die Wohnung seines Freundes Jan' },
            lines: [
              ['Jan', 'Hallo Lukas! Komm rein, bitte.', 'هاي يا لوكاس! اتفضل ادخل.', 'هالو لوكاس! كوم راين، بیتِ'],
              ['Lukas', 'Danke! Deine Wohnung ist sehr schön.', 'شكراً! شقتك حلوة أوي.', 'دانكِ! داينِ ڤونونج إست زير شون'],
              ['Jan', 'Das ist das Wohnzimmer. Es gibt ein neues Fenster.', 'دي الصالة. فيها شباك جديد.', 'داس إست داس ڤونتسيمر. إس جيبت آين نويِس فينستر'],
              ['Lukas', 'Sehr hell! Und die Küche?', 'منوّرة أوي! والمطبخ؟', 'زير هيل! أوند دي كوخِ'],
              ['Jan', 'Die Küche ist neben dem Badezimmer.', 'المطبخ جنب الحمّام.', 'دي كوخِ إست نيبِن دِم بادِتسيمر'],
              ['Lukas', 'Habt ihr einen Balkon?', 'عندكم بلكونة؟', 'هابت إير آينِن بالكون'],
              ['Jan', 'Nein, aber es gibt einen kleinen Garten hinten.', 'لأ، بس فيه جنينة صغيرة ورا.', 'ناين، آبِر إس جيبت آينِن كلاينِن جارتن هينتِن']
            ],
            vocab: [['Komm rein', 'اتفضل ادخل'], ['schön', 'حلو'], ['hell', 'منوّر'], ['neben', 'جنب'], ['hinten', 'ورا']],
            questions: [
              { q: 'Was gibt es im Wohnzimmer?', qMeaning: 'فيه إيه في الصالة؟', options: ['Ein neues Fenster', 'Ein großes Bett', 'Einen Balkon'], answer: 0 },
              { q: 'Hat Jan einen Balkon?', qMeaning: 'يان عنده بلكونة؟', options: ['Nein', 'Ja, zwei', 'Ja, einen kleinen'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Schreib ein bisschen' },
            tasks: [
              { ar: 'اوصف بيتك في ٤ جمل بـ es gibt.', en: 'Describe your home in four sentences with “es gibt”.' },
              { ar: 'اكتب ٣ جمل بحروف المكان (auf / unter / neben).', en: 'Write three sentences with auf / unter / neben.' }
            ]
          }
        },
        {
          id: 'de-a1-u2-l2', topic: 'Essen', title: 'Das Essen', titleMeaning: 'الأكل', minutes: 15,
          goals: { ar: ['تسمّي الوجبات والأكل بالألماني', 'تطلب بأسلوب مؤدّب', 'تعبر عن اللي بتحبه'],
                   en: ['Name meals and food', 'Order politely', 'Express likes and dislikes'] },
          vocab: [
            ['das Frühstück', 'الفطار', 'داس فريبشتيك', 'Ich frühstücke um sieben.', 'بفطر الساعة سبعة.'],
            ['das Mittagessen', 'الغدا', 'داس ميتاجإسن', 'Das Mittagessen ist um zwölf.', 'الغدا الساعة اتناشر.'],
            ['das Abendessen', 'العشا', 'داس آبِنتإسن', 'Das Abendessen ist um acht.', 'العشا الساعة تمانية.'],
            ['das Brot', 'عيش', 'داس بروت', 'Ich mag frisches Brot.', 'بحب العيش الطازة.'],
            ['das Wasser', 'مية', 'داس ڤاسر', 'Ich trinke Wasser ohne Gas.', 'بشرب مية سادة.'],
            ['der Käse', 'جبنة', 'دير كيزِ', 'Der deutsche Käse ist lecker.', 'الجبنة الألمانية لذيذة.'],
            ['das Hähnchen', 'فراخ', 'داس هينشِن', 'Wir essen sonntags Hähnchen.', 'بناكل فراخ يوم الحد.'],
            ['das Gemüse', 'خضار', 'داس جِميزِ', 'Iss dein Gemüse!', 'كل الخضار!']
          ],
          related: [
            ['das Ei', 'بيضة', 'داس آي', 'Ich möchte zwei Eier.', 'عايز بيضتين.'],
            ['der Apfel', 'تفاحة', 'دير آبفِل', 'Ein Apfel, bitte.', 'تفاحة لو سمحت.'],
            ['der Fisch', 'سمك', 'دير فيش', 'Der Fisch ist frisch.', 'السمك طازة.'],
            ['das Getränk', 'مشروب', 'داس جِترينك', 'Welches Getränk möchtest du?', 'عايز أنهي مشروب؟'],
            ['ich habe Hunger', 'أنا جعان', 'إش هابِ هونجر', 'Ich habe Hunger, lass uns essen!', 'أنا جعان، يلا ناكل!'],
            ['ich habe Durst', 'أنا عطشان', 'إش هابِ دورست', 'Ich habe Durst. Ein Glas Wasser?', 'أنا عطشان. كوباية مية؟']
          ],
          expressions: [
            ['Ich möchte…', 'عايز…', 'إش موشتِ', 'Ich möchte einen Kaffee, bitte.', 'عايز قهوة لو سمحت.'],
            ['Was möchtest du essen?', 'عايز تاكل إيه؟', 'ڤاس موشتِست دو إسن', 'Was möchtest du heute Abend essen?', 'عايز تاكل إيه النهاردة بالليل؟'],
            ['Das ist lecker!', 'دي حاجة لذيذة!', 'داس إست ليكر', 'Der Kuchen ist lecker!', 'الكيكة دي لذيذة!'],
            ['Ich mag kein…', 'أنا مباحبش…', 'إش ماج كاين', 'Ich mag keine Zwiebeln.', 'مباحبش البصل.']
          ],
          examples: [
            ['Zum Frühstück esse ich Brot mit Käse.', 'في الفطار بآكل عيش بالجبنة.', 'تسوم فريبشتيك إسِ إش بروت مِت كيزِ', ['Zum', 'Frühstück', 'esse', 'ich', 'Brot', 'mit', 'Käse']],
            ['Nach dem Abendessen trinken wir Tee.', 'بعد العشا بنشرب شاي.', 'ناخ دِم آبِنتإسن ترينكن ڤير تي', ['Nach', 'dem', 'Abendessen', 'trinken', 'wir', 'Tee']],
            ['Mein Bruder isst keinen Fisch.', 'أخويا مبياكلش سمك.', 'ماين برودر إست كاينِن فيش', ['Mein', 'Bruder', 'isst', 'keinen', 'Fisch']],
            ['Möchtest du ein Getränk?', 'تحب مشروب؟', 'موشتِست دو آين جِترينك', ['Möchtest', 'du', 'ein', 'Getränk']]
          ],
          grammar: {
            title: { ar: 'أفعال möchten و mag + النفي kein', en: 'möchten & mag + the negative kein' },
            points: [
              { ar: 'möchten = عايز بأسلوب مؤدّب: ich möchte, du möchtest.', en: '“möchten” is the polite “would like”: ich möchte, du möchtest.' },
              { ar: 'mag = بحب: ich mag Brot / ich mag keinen Fisch.', en: '“mag” = like: ich mag Brot / ich mag keinen Fisch.' },
              { ar: 'النفي بـ kein بيتصرّف حسب الاسم: kein / keine / keinen.', en: 'The negative is kein / keine / keinen, agreeing with the noun.' }
            ],
            table: [
              { a: 'ich möchte', b: 'Ich möchte einen Tee.' },
              { a: 'ich mag', b: 'Ich mag Käse.' },
              { a: 'kein / keine', b: 'Ich mag keine Milch.' },
              { a: 'keinen', b: 'Ich möchte keinen Kaffee.' }
            ],
            note: { ar: 'kein بياخد نفس نهاية الأداة ein: ein Fisch → keinen Fisch.', en: '“kein” takes the same endings as “ein”: ein Fisch → keinen Fisch.' }
          },
          reading: {
            title: { ar: 'فطار يوم الحد', en: 'Das Sonntagsfrühstück' },
            linesEn: ['Sonntags frühstückt die Familie zusammen.', 'Die Oma macht Tee und Eier.', 'Lukas isst Brot mit Käse und trinkt Milch.', 'Seine Schwester isst einen Apfel und trinkt Orangensaft.', 'Nach dem Frühstück räumen sie die Küche zusammen auf.', 'Dann gehen sie auf den Markt und kaufen Gemüse.'],
            linesAr: ['يوم الحد العيلة بتفطر مع بعض.', 'الجدة بتعمل شاي وبيض.', 'لوكاس بياكل عيش بالجبنة وبيشرب لبن.', 'أخته بتاكل تفاحة وبتشرب عصير برتقان.', 'بعد الفطار بيرتبوا المطبخ مع بعض.', 'وبعدين بيروحوا السوق يشتروا خضار.'],
            questions: [
              { q: 'Was trinkt Lukas?', qMeaning: 'لوكاس بيشرب إيه؟', options: ['Milch', 'Tee', 'Saft'], answer: 0 },
              { q: 'Wohin gehen sie nach dem Frühstück?', qMeaning: 'بيروحوا فين بعد الفطار؟', options: ['Auf den Markt', 'In die Schule', 'In den Park'], answer: 0 }
            ]
          },
          listening: [
            ['Ich möchte einen Kaffee, bitte.', ['Einen Kaffee', 'Einen Tee', 'Wasser'], 0, 'عايز قهوة لو سمحت.'],
            ['Ich mag keinen Fisch.', ['Er mag keinen Fisch', 'Er mag Fisch', 'Er will Fisch'], 0, 'أنا مباحبش السمك.'],
            ['Das Abendessen ist um acht.', ['Um acht', 'Um sieben', 'Um zwölf'], 0, 'العشا الساعة تمانية.']
          ],
          speaking: [
            ['Ich habe Hunger. Ich möchte Brot.', 'أنا جعان. عايز عيش.', 'إش هابِ هونجر. إش موشتِ بروت'],
            ['Das ist lecker, danke!', 'دي حاجة لذيذة، شكراً!', 'داس إست ليكر، دانكِ'],
            ['Ich esse kein Fleisch.', 'أنا مبآكلش لحمة.', 'إش إسِ كاين فلايش']
          ],
          conversation: {
            setting: { ar: 'لوكاس وأخته في المطبخ الصبح', en: 'Lukas und seine Schwester in der Küche am Morgen' },
            lines: [
              ['Lukas', 'Ich habe Hunger. Was gibt es zum Frühstück?', 'أنا جعان. فيه إيه في الفطار؟', 'إش هابِ هونجر. ڤاس جيبت إس تسوم فريبشتيك'],
              ['Anna', 'Es gibt Eier und Brot.', 'فيه بيض وعيش.', 'إس جيبت آير أوند بروت'],
              ['Lukas', 'Ich möchte auch Käse.', 'عايز جبنة كمان.', 'إش موشتِ أوخ كيزِ'],
              ['Anna', 'Klar. Möchtest du Tee oder Milch?', 'تمام. عايز شاي ولا لبن؟', 'كلار. موشتِست دو تي أودِر ميلش'],
              ['Lukas', 'Milch, bitte. Wo ist Mama?', 'لبن لو سمحت. ماما فين؟', 'ميلش، بیتِ. ڤو إست ماما'],
              ['Anna', 'Im Garten. Das Frühstück ist fertig!', 'في الجنينة. الفطار جاهز!', 'إم جارتن. داس فريبشتيك إست فيرتيش']
            ],
            vocab: [['auch', 'كمان'], ['Klar', 'تمام'], ['fertig', 'جاهز'], ['Milch', 'لبن'], ['Garten', 'جنينة']],
            questions: [
              { q: 'Was möchte Lukas trinken?', qMeaning: 'لوكاس عايز يشرب إيه؟', options: ['Milch', 'Tee', 'Saft'], answer: 0 },
              { q: 'Wo ist Mama?', qMeaning: 'ماما فين؟', options: ['Im Garten', 'In der Küche', 'Bei der Arbeit'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Schreib ein bisschen' },
            tasks: [
              { ar: 'اكتب فطارك في ٣ جمل.', en: 'Write your breakfast in three sentences.' },
              { ar: 'اكتب حاجتين بتحبهم وحاجة مبتحبهاش بـ ich mag / ich mag kein.', en: 'Write two likes and one dislike with ich mag / ich mag kein.' }
            ]
          }
        }
      ]
    },
    {
      title: 'Alltag', titleMeaning: 'الحياة اليومية',
      summary: { ar: 'التسوّق والمقارنة بين الأسعار بالألماني.', en: 'Shopping and comparing prices.' },
      lessons: [
        {
          id: 'de-a2-u1-l1', topic: 'Einkaufen', title: 'Einkaufen gehen', titleMeaning: 'التسوّق', minutes: 16,
          goals: { ar: ['تسأل عن السعر بالألماني', 'تقارن بين حاجتين', 'تشتري ودفع بثقة'],
                   en: ['Ask about price', 'Compare two items', 'Buy and pay confidently'] },
          vocab: [
            ['der Laden', 'محل', 'دير لادِن', 'Der Laden öffnet um neun.', 'المحل بيفتح الساعة تسعة.'],
            ['der Preis', 'السعر', 'دير پرايس', 'Der Preis steht auf dem Etikett.', 'السعر على اللافتة.'],
            ['günstig', 'رخيص', 'جونستيش', 'Diese Tasche ist günstig.', 'الشنطة دي رخيصة.'],
            ['teuer', 'غالي', 'تويِر', 'Die Jacke ist zu teuer.', 'الجاكيت ده غالي أوي.'],
            ['die Größe', 'المقاس', 'دي جروسِ', 'Welche Größe trägst du?', 'بتلبس مقاس كام؟'],
            ['die Quittung', 'إيصال', 'دي كڤيتونج', 'Bitte die Quittung behalten.', 'خد الإيصال لو سمحت.'],
            ['der Rabatt', 'خصم', 'دير رابات', 'Gibt es heute einen Rabatt?', 'فيه خصم النهاردة؟'],
            ['bar bezahlen', 'يدفع كاش', 'بار بِتسالِن', 'Ich bezahle bar.', 'هدفع كاش.']
          ],
          related: [
            ['der Markt', 'السوق', 'دير ماركت', 'Samstags gehen wir auf den Markt.', 'بنروح السوق السبت.'],
            ['der Verkäufer', 'البائع', 'دير فيركويِفر', 'Der Verkäufer ist freundlich.', 'البائع لطيف.'],
            ['das Wechselgeld', 'الباقي / فكة', 'داس ڤيكسلجلت', 'Hier ist Ihr Wechselgeld.', 'ده الباقي بتاع حضرتك.'],
            ['die Kasse', 'الكاشير', 'دي كاسِ', 'Bitte an der Kasse zahlen.', 'ادفع عند الكاشير.'],
            ['eine Tasche', 'شنطة', 'آينِ تاشِ', 'Brauchen Sie eine Tasche?', 'محتاج شنطة؟'],
            ['eine Nummer größer', 'مقاس أكبر', 'آينِ نومر جروسِر', 'Haben Sie eine Nummer größer?', 'عندك مقاس أكبر؟']
          ],
          expressions: [
            ['Wie viel kostet das?', 'ده بكام؟', 'ڤي فيل كوستِت داس', 'Entschuldigung, wie viel kostet diese Tasche?', 'لو سمحت، الشنطة دي بكام؟'],
            ['Kann ich es anprobieren?', 'ممكن أقيسه؟', 'كان إش إس أنپروبيرن', 'Kann ich es anprobieren, bitte?', 'ممكن أقيسه لو سمحت؟'],
            ['Das ist mir zu teuer.', 'ده غالي عليّا.', 'داس إست مير تسو تويِر', 'Das ist mir zu teuer, leider.', 'غالي عليّا للأسف.'],
            ['Ich nehme es.', 'هاخده.', 'إش نيمِ إس', 'Die Größe passt — ich nehme es.', 'المقاس مظبوط — هاخده.']
          ],
          examples: [
            ['Dieses Hemd ist teurer als das blaue.', 'القميص ده أغلى من الأزرق.', 'ديزِس هيمت إست تويِرر آلس داس بلاوِ', ['Dieses', 'Hemd', 'ist', 'teurer', 'als', 'das', 'blaue']],
            ['Ich suche ein Geschenk für meine Mutter.', 'بدور على هدية لماما.', 'إش زوخِ آين جِشنك فور ماينِ موتر', ['Ich', 'suche', 'ein', 'Geschenk', 'für', 'meine', 'Mutter']],
            ['Haben Sie eine andere Farbe?', 'عندك لون تاني؟', 'هابِن زي آينِ أندرِ فاربِ', ['Haben', 'Sie', 'eine', 'andere', 'Farbe']],
            ['Ich zahle mit Karte.', 'هدفع بالكارت.', 'إش تسالِ مِت كارتي', ['Ich', 'zahle', 'mit', 'Karte']]
          ],
          grammar: {
            title: { ar: 'المقارنة: teurer als / am teuersten', en: 'Comparatives: teurer als / am teuersten' },
            points: [
              { ar: 'المقارنة بـ als: teuer → teurer als.', en: 'Comparison uses “als”: teuer → teurer als.' },
              { ar: 'الصفات القصيرة بتاخد umlaut: groß → größer, alt → älter.', en: 'Short adjectives take an umlaut: groß → größer, alt → älter.' },
              { ar: 'أعلى درجة: am teuersten / der beste.', en: 'Superlative: am teuersten / der beste.' }
            ],
            table: [
              { a: 'teurer als', b: 'Das ist teurer als das andere.' },
              { a: 'billiger als', b: 'Das ist billiger als das rote.' },
              { a: 'größer als', b: 'Ich brauche eine größere Größe.' },
              { a: 'am besten', b: 'Dieser Laden ist am besten.' }
            ],
            note: { ar: 'gut → besser → am besten، دي شاذة ولازم تحفظها.', en: 'gut → besser → am besten is irregular — learn it by heart.' }
          },
          reading: {
            title: { ar: 'هدية عيد ميلاد', en: 'Ein Geburtstagsgeschenk' },
            linesEn: ['Mia möchte ein Geschenk für ihre Mutter kaufen.', 'Sie geht in einen kleinen Laden neben dem Markt.', 'Sie sieht einen violetten Schal. Er ist schön, aber teuer.', 'Der Verkäufer zeigt ihr einen blauen, billiger und weicher.', 'Mia fragt nach einem Rabatt und bezahlt bar.', 'Sie verlässt den Laden mit der Quittung und einem Lächeln.'],
            linesAr: ['ميا عايزة تشتري هدية لمامتها.', 'راحت محل صغير جنب السوق.', 'شافت إيشارب بنفسجي. حلو بس غالي.', 'البائع ورّاها واحد أزرق، أرخص وأنعم.', 'ميا طلبت خصم ودفعت كاش.', 'خرجت من المحل بالإيصال وبابتسامة.'],
            questions: [
              { q: 'Für wen ist das Geschenk?', qMeaning: 'الهدية لمين؟', options: ['Für ihre Mutter', 'Für ihre Schwester', 'Für eine Freundin'], answer: 0 },
              { q: 'Warum nimmt sie den blauen Schal?', qMeaning: 'ليه خدت الإيشارب الأزرق؟', options: ['Er ist billiger', 'Er ist größer', 'Er ist neu'], answer: 0 }
            ]
          },
          listening: [
            ['Wie viel kostet das?', ['Wie viel kostet das?', 'Wo ist das?', 'Wer ist da?'], 0, 'ده بكام؟'],
            ['Kann ich es anprobieren?', ['Anprobieren', 'Waschen', 'Anziehen'], 0, 'ممكن أقيسه؟'],
            ['Ich bezahle bar.', ['Bar', 'Mit Karte', 'Online'], 0, 'هدفع كاش.']
          ],
          speaking: [
            ['Entschuldigung, wie viel kostet diese Tasche?', 'لو سمحت، الشنطة دي بكام؟', 'إنتشولديگونج، ڤي فيل كوستِت ديزِ تاشِ'],
            ['Kann ich es anprobieren, bitte?', 'ممكن أقيسه لو سمحت؟', 'كان إش إس أنپروبيرن، بیتِ'],
            ['Das ist zu teuer. Gibt es einen Rabatt?', 'غالي أوي. فيه خصم؟', 'داس إست تسو تويِر. جيبت إس آينِن رابات']
          ],
          conversation: {
            setting: { ar: 'ميا بتشتري إيشارب من محل', en: 'Mia kauft einen Schal in einem Laden' },
            lines: [
              ['Verkäufer', 'Guten Morgen! Kann ich helfen?', 'صباح الخير! أقدر أساعدك؟', 'جوتِن مورگِن! كان إش هيلفِن'],
              ['Mia', 'Ja, ich suche einen Schal.', 'أيوه، بدور على إيشارب.', 'يا، إش زوخِ آينِن شال'],
              ['Verkäufer', 'Wir haben violette und blaue.', 'عندنا بنفسجي وأزرق.', 'ڤير هابِن ڤيولِتِ أوند بلاوِ'],
              ['Mia', 'Wie viel kostet der violette?', 'البنفسجي بكام؟', 'ڤي فيل كوستِت دير ڤيولِتِ'],
              ['Verkäufer', 'Dreißig Euro.', 'تلاتين يورو.', 'درايسيش أويرو'],
              ['Mia', 'Das ist mir zu teuer. Gibt es einen Rabatt?', 'غالي عليّا. فيه خصم؟', 'داس إست مير تسو تويِر. جيبت إس آينِن رابات'],
              ['Verkäufer', 'Ja, heute zehn Prozent.', 'أيوه، عشرة في المية النهاردة.', 'يا، هويتِ تسين پروتسينت'],
              ['Mia', 'Perfekt, ich nehme ihn. Die Quittung, bitte.', 'تمام، هاخده. الإيصال لو سمحت.', 'پِرفيكت، إش نيمِ إين. دي كڤيتونج، بیتِ']
            ],
            vocab: [['helfen', 'يساعد'], ['Schal', 'إيشارب'], ['Rabatt', 'خصم'], ['Quittung', 'إيصال'], ['Perfekt', 'تمام']],
            questions: [
              { q: 'Welchen Schal fragt Mia zuerst?', qMeaning: 'ميا سألت عن أنهي إيشارب الأول؟', options: ['Den violetten', 'Den blauen', 'Den roten'], answer: 0 },
              { q: 'Wie hoch ist der Rabatt?', qMeaning: 'الخصم كام؟', options: ['Zehn Prozent', 'Zwanzig Prozent', 'Kein Rabatt'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Schreib ein bisschen' },
            tasks: [
              { ar: 'اكتب حوار قصير في محل (٤ أدوار).', en: 'Write a short shop dialogue (four turns).' },
              { ar: 'قارن بين حاجتين بـ teurer / billiger als.', en: 'Compare two things with teurer / billiger als.' }
            ]
          }
        }
      ]
    }
  ], { ar: 'متوسط', en: 'Elementary' });
})();
