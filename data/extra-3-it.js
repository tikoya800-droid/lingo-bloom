/* ==========================================================================
   LingoBloom — curriculum expansion · ITALIANO (contenuti nativi)
   ========================================================================== */
(function () {
  if (!LB.addUnits) return;

  LB.addUnits('it', 'A1', [
    {
      title: 'Casa mia', titleMeaning: 'بيتي',
      summary: { ar: 'أوض البيت، الأثاث، والوصف بالإيطالي.', en: 'Rooms, furniture and describing your home.' },
      lessons: [
        {
          id: 'it-a1-u2-l1', topic: 'Casa', title: 'La mia casa', titleMeaning: 'بيتي', minutes: 14,
          goals: { ar: ['تسمّي أوض البيت بالإيطالي', 'تقول ساكن فين', 'تستخدم c’è / ci sono'],
                   en: ['Name rooms in Italian', 'Say where you live', 'Use c’è / ci sono'] },
          vocab: [
            ['la casa', 'بيت', 'لا كازا', 'Abito in una casa grande.', 'ساكن في بيت كبير.'],
            ['l’appartamento', 'شقة', 'لابار تامنتو', 'Il mio appartamento è piccolo.', 'شقتي صغيرة.'],
            ['la cucina', 'المطبخ', 'لا كوتشينا', 'La mamma è in cucina.', 'ماما في المطبخ.'],
            ['la camera', 'أوضة النوم', 'لا كاميرا', 'La mia camera è al primo piano.', 'أوضة نومي في الدور الأول.'],
            ['il bagno', 'الحمّام', 'إل بانيو', 'Il bagno è a destra.', 'الحمّام على اليمين.'],
            ['il soggiorno', 'الصالة', 'إل سوجورنو', 'Guardiamo la TV in soggiorno.', 'بنتفرج على التلفزيون في الصالة.'],
            ['la porta', 'الباب', 'لا پورتا', 'Chiudi la porta, per favore.', 'اقفل الباب لو سمحت.'],
            ['la finestra', 'الشباك', 'لا فينيسترا', 'Apri la finestra!', 'افتح الشباك!']
          ],
          related: [
            ['il tavolo', 'طربيزة', 'إل تاڤولو', 'Il libro è sul tavolo.', 'الكتاب على الطربيزة.'],
            ['la sedia', 'كرسي', 'لا سيديا', 'Prendi una sedia.', 'خد كرسي.'],
            ['il letto', 'سرير', 'إل ليتو', 'Il gatto dorme sul letto.', 'القطة نايمة على السرير.'],
            ['il divano', 'كنبة', 'إل ديڤانو', 'Il divano è nuovo.', 'الكنبة جديدة.'],
            ['il giardino', 'جنينة', 'إل جاردينو', 'C’è un giardino dietro.', 'في جنينة ورا.'],
            ['le chiavi', 'المفاتيح', 'لي كياڤي', 'Dove sono le chiavi?', 'المفاتيح فين؟']
          ],
          expressions: [
            ['Dove abiti?', 'إنت ساكن فين؟', 'دوڤِه أبيتي', 'Dove abiti, Luca?', 'إنت ساكن فين يا لوكا؟'],
            ['Abito a Roma.', 'أنا ساكن في روما.', 'أبيتو آ روما', 'Abito a Roma, vicino al parco.', 'ساكن في روما، جنب الجنينة.'],
            ['Prego, entra!', 'اتفضل ادخل!', 'پريجو، إنترا', 'Prego, entra! Fai come a casa tua.', 'اتفضل ادخل! البيت بيتك.'],
            ['È al primo piano.', 'ده في الدور الأول.', 'إيه آل پريمو پيانو', 'La camera è al primo piano.', 'أوضة النوم في الدور الأول.']
          ],
          examples: [
            ['In soggiorno c’è un grande divano.', 'في الصالة كنبة كبيرة.', 'إن سوجورنو تشيه أن جراندي ديڤانو', ['In', 'soggiorno', 'c’è', 'un', 'grande', 'divano']],
            ['La cucina è accanto al bagno.', 'المطبخ جنب الحمّام.', 'لا كوتشينا إيه أكانتو آل بانيو', ['La', 'cucina', 'è', 'accanto', 'al', 'bagno']],
            ['Ci sono due finestre in camera.', 'في شباكين في أوضة النوم.', 'تشي سونو دوِه فينيستره إن كاميرا', ['Ci', 'sono', 'due', 'finestre', 'in', 'camera']],
            ['Non c’è il balcone.', 'مفيش بلكونة.', 'نون تشيه إل بالكونِه', ['Non', 'c’è', 'il', 'balcone']]
          ],
          grammar: {
            title: { ar: 'c’è / ci sono + حروف المكان', en: 'c’è / ci sono + prepositions of place' },
            points: [
              { ar: 'c’è للمفرد (فيه واحد)، ci sono للجمع (فيهم كذا).', en: '“c’è” for one thing, “ci sono” for many.' },
              { ar: 'حروف المكان: in (جوه)، su (فوق)، sotto (تحت)، accanto a (جنب)، dietro (ورا).', en: 'in, su, sotto, accanto a, dietro.' },
              { ar: 'in + أوضة = in cucina / in camera بدون أداة.', en: '“in” + room takes no article: in cucina, in camera.' }
            ],
            table: [
              { a: 'c’è un tavolo', b: 'C’è un tavolo in cucina.' },
              { a: 'ci sono due sedie', b: 'Ci sono due sedie in salotto.' },
              { a: 'accanto a', b: 'Il bagno è accanto alla camera.' },
              { a: 'non c’è', b: 'Non c’è il giardino.' }
            ],
            note: { ar: 'accanto a + الـ = accanto al / alla / ai / alle.', en: '“accanto a” combines with the article: al, alla, ai, alle.' }
          },
          reading: {
            title: { ar: 'بيت العيلة في روما', en: 'The family home in Rome' },
            linesEn: ['Luca abita in un appartamento a Roma.', 'Ci sono tre stanze: un soggiorno, una cucina e due camere.', 'In soggiorno c’è un divano blu e una grande finestra.', 'Sua madre prepara la cena in cucina.', 'Suo fratello studia nella sua camera.', 'La sera la famiglia mangia insieme in soggiorno.'],
            linesAr: ['لوكا ساكن في شقة في روما.', 'فيه تلات أوض: صالة ومطبخ وأوضتين.', 'في الصالة كنبة زرقا وشباك كبير.', 'مامته بتحضّر العشا في المطبخ.', 'أخوه بيدرس في أوضته.', 'بالليل العيلة بتعشى مع بعض في الصالة.'],
            questions: [
              { q: 'Quante camere ci sono?', qMeaning: 'فيه كام أوضة نوم؟', options: ['Due', 'Tre', 'Una'], answer: 0 },
              { q: 'Di che colore è il divano?', qMeaning: 'لون الكنبة إيه؟', options: ['Blu', 'Rosso', 'Verde'], answer: 0 }
            ]
          },
          listening: [
            ['Dove abiti?', ['Dove abiti?', 'Dove lavori?', 'Dove vai?'], 0, 'إنت ساكن فين؟'],
            ['La cucina è a destra.', ['La cucina è a destra', 'La cucina è a sinistra', 'La cucina è sopra'], 0, 'المطبخ على اليمين.'],
            ['Ci sono due sedie.', ['Due sedie', 'Due camere', 'Due tavoli'], 0, 'في كرسيين.']
          ],
          speaking: [
            ['Abito in un appartamento con la mia famiglia.', 'ساكن في شقة مع عيلتي.', 'أبيتو إن أن أبارتامنتو كون لا ميا فاميليا'],
            ['C’è un grande soggiorno a casa mia.', 'عندي صالة كبيرة.', 'تشيه أن جراندي سوجورنو آ كازا ميا'],
            ['Le chiavi sono sul tavolo.', 'المفاتيح على الطربيزة.', 'لي كياڤي سونو سول تاڤولو']
          ],
          conversation: {
            setting: { ar: 'لوكا بيزور شقة صاحبه ماركو', en: "Luca visits his friend Marco's flat" },
            lines: [
              ['Marco', 'Ciao, Luca! Entra, per favore.', 'هاي يا لوكا! اتفضل ادخل.', 'تشاو لوكا! إنترا، پير فاڤوري'],
              ['Luca', 'Grazie! Il tuo appartamento è molto carino.', 'شكراً! شقتك حلوة أوي.', 'جراتسيه! إل تو أبارتامنتو إيه مولتو كارينو'],
              ['Marco', 'Questo è il soggiorno. C’è una finestra nuova.', 'دي الصالة. فيها شباك جديد.', 'كوِستو إيه إل سوجورنو. تشيه أونا فينيسترا نووڤا'],
              ['Luca', 'Che luminoso! E la cucina?', 'منوّرة! والمطبخ؟', 'كه لومينوزو! إيه لا كوتشينا'],
              ['Marco', 'La cucina è accanto al bagno.', 'المطبخ جنب الحمّام.', 'لا كوتشينا إيه أكانتو آل بانيو'],
              ['Luca', 'Avete un balcone?', 'عندكم بلكونة؟', 'أڤيتي أن بالكونِه'],
              ['Marco', 'No, ma c’è un piccolo giardino dietro.', 'لأ، بس فيه جنينة صغيرة ورا.', 'نو، ما تشيه أن پيكولو جاردينو دِيترو']
            ],
            vocab: [['Entra', 'ادخل'], ['carino', 'حلو'], ['luminoso', 'منوّر'], ['accanto a', 'جنب'], ['dietro', 'ورا']],
            questions: [
              { q: 'Cosa c’è nel soggiorno?', qMeaning: 'فيه إيه في الصالة؟', options: ['Una finestra nuova', 'Un letto grande', 'Un balcone'], answer: 0 },
              { q: 'Marco ha un balcone?', qMeaning: 'ماركو عنده بلكونة؟', options: ['No', 'Sì, due', 'Sì, piccolo'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Scrivi un po’' },
            tasks: [
              { ar: 'اوصف بيتك في ٤ جمل بـ c’è / ci sono.', en: 'Describe your home in four sentences with c’è / ci sono.' },
              { ar: 'اكتب ٣ جمل بحروف المكان (su / sotto / accanto a).', en: 'Write three sentences with su / sotto / accanto a.' }
            ]
          }
        },
        {
          id: 'it-a1-u2-l2', topic: 'Pasti', title: 'I pasti', titleMeaning: 'الوجبات', minutes: 15,
          goals: { ar: ['تسمّي الوجبات والأكل', 'تطلب بأسلوب مؤدّب', 'تعبر عن اللي بتحبه'],
                   en: ['Name meals and food', 'Order politely', 'Express likes and dislikes'] },
          vocab: [
            ['la colazione', 'الفطار', 'لا كولاتسيونِه', 'Faccio colazione alle sette.', 'بفطر الساعة سبعة.'],
            ['il pranzo', 'الغدا', 'إل پرانزو', 'Il pranzo è a mezzogiorno.', 'الغدا الضهر.'],
            ['la cena', 'العشا', 'لا تشينا', 'La cena è alle otto.', 'العشا الساعة تمانية.'],
            ['il pane', 'عيش', 'إل پانِه', 'Mi piace il pane fresco.', 'بحب العيش الطازة.'],
            ['l’acqua', 'مية', 'لاكوا', 'Bevo acqua naturale.', 'بشرب مية سادة.'],
            ['il formaggio', 'جبنة', 'إل فورمادجو', 'Il formaggio italiano è buonissimo.', 'الجبنة الإيطالية لذيذة جداً.'],
            ['il pollo', 'فراخ', 'إل پولو', 'Mangiamo pollo la domenica.', 'بناكل فراخ يوم الحد.'],
            ['le verdure', 'خضار', 'لي ڤيردورِه', 'Mangia le verdure!', 'كل الخضار!']
          ],
          related: [
            ['un uovo', 'بيضة', 'أن ووڤو', 'Vorrei due uova.', 'عايز بيضتين.'],
            ['una mela', 'تفاحة', 'أونا ميلا', 'Una mela, per favore.', 'تفاحة لو سمحت.'],
            ['il pesce', 'سمك', 'إل پيشِه', 'Il pesce è fresco.', 'السمك طازة.'],
            ['una bevanda', 'مشروب', 'أونا بِڤاندا', 'Quale bevanda vuoi?', 'عايز أنهي مشروب؟'],
            ['ho fame', 'أنا جعان', 'أو فامِه', 'Ho fame, mangiamo!', 'أنا جعان، يلا ناكل!'],
            ['ho sete', 'أنا عطشان', 'أو سيتِه', 'Ho sete. Un bicchiere d’acqua?', 'أنا عطشان. كوباية مية؟']
          ],
          expressions: [
            ['Vorrei…', 'عايز…', 'ڤورّي', 'Vorrei un caffè, per favore.', 'عايز قهوة لو سمحت.'],
            ['Cosa vuoi mangiare?', 'عايز تاكل إيه؟', 'كوزا ڤوي مانجاره', 'Cosa vuoi mangiare stasera?', 'عايز تاكل إيه النهاردة بالليل؟'],
            ['È delizioso!', 'دي حاجة لذيذة!', 'إيه دِليزيوزو', 'Questa pasta è deliziosa!', 'المكرونة دي لذيذة!'],
            ['Non mi piace…', 'أنا مباحبش…', 'نون مي پياتشِه', 'Non mi piace la cipolla.', 'مباحبش البصل.']
          ],
          examples: [
            ['A colazione mangio pane e formaggio.', 'في الفطار بآكل عيش وجبنة.', 'آ كولاتسيونِه مانجو پانِه إيه فورمادجو', ['A', 'colazione', 'mangio', 'pane', 'e', 'formaggio']],
            ['Beviamo il tè dopo cena.', 'بنشرب شاي بعد العشا.', 'بِڤيامو إل تيه دوپو تشينا', ['Beviamo', 'il', 'tè', 'dopo', 'cena']],
            ['Mio fratello non mangia pesce.', 'أخويا مبياكلش سمك.', 'ميو فراتيللو نون مانجا بيشِه', ['Mio', 'fratello', 'non', 'mangia', 'pesce']],
            ['Vuoi una bevanda?', 'تحب مشروب؟', 'ڤوي أونا بِڤاندا', ['Vuoi', 'una', 'bevanda']]
          ],
          grammar: {
            title: { ar: 'أداة التجزئة: del / della / dei', en: 'Partitive: del / della / dei' },
            points: [
              { ar: 'للكمية غير المحددة: del pane، della carne، dei biscotti.', en: 'Unspecified quantity: del pane, della carne, dei biscotti.' },
              { ar: 'mi piace + مفرد، mi piacciono + جمع.', en: '“mi piace” + singular, “mi piacciono” + plural.' },
              { ar: 'النفي بـ non بيتحط قبل الفعل مباشرة.', en: 'Put “non” right before the verb.' }
            ],
            table: [
              { a: 'del pane', b: 'Mangio del pane.' },
              { a: 'della frutta', b: 'Vorrei della frutta.' },
              { a: 'mi piace', b: 'Mi piace la pizza.' },
              { a: 'mi piacciono', b: 'Mi piacciono le mele.' }
            ],
            note: { ar: 'mi piacciono بتاخد جمع، فانتبه للنهاية io/ono.', en: '“mi piace” becomes “mi piacciono” before a plural noun.' }
          },
          reading: {
            title: { ar: 'فطار يوم الحد', en: 'Sunday breakfast' },
            linesEn: ['La domenica la famiglia fa colazione insieme.', 'La nonna prepara il tè e le uova.', 'Marco mangia pane con formaggio e beve il latte.', 'Sua sorella prende una mela e un succo d’arancia.', 'Dopo la colazione puliscono la cucina insieme.', 'Poi vanno al mercato a comprare le verdure.'],
            linesAr: ['يوم الحد العيلة بتفطر مع بعض.', 'الجدة بتعمل شاي وبيض.', 'ماركو بياكل عيش بالجبنة وبيشرب لبن.', 'أخته بتاخد تفاحة وعصير برتقان.', 'بعد الفطار بينضّفوا المطبخ مع بعض.', 'وبعدين بيروحوا السوق يشتروا خضار.'],
            questions: [
              { q: 'Cosa beve Marco?', qMeaning: 'ماركو بيشرب إيه؟', options: ['Il latte', 'Il tè', 'Il caffè'], answer: 0 },
              { q: 'Dove vanno dopo la colazione?', qMeaning: 'بيروحوا فين بعد الفطار؟', options: ['Al mercato', 'A scuola', 'Al parco'], answer: 0 }
            ]
          },
          listening: [
            ['Vorrei un caffè, per favore.', ['Un caffè', 'Un tè', 'Dell’acqua'], 0, 'عايز قهوة لو سمحت.'],
            ['Non mi piace il pesce.', ['Non gli piace il pesce', 'Gli piace il pesce', 'Vuole il pesce'], 0, 'أنا مباحبش السمك.'],
            ['La cena è alle otto.', ['Alle otto', 'Alle sette', 'A mezzogiorno'], 0, 'العشا الساعة تمانية.']
          ],
          speaking: [
            ['Ho fame. Vorrei del pane.', 'أنا جعان. عايز عيش.', 'أو فامِه. ڤورّي دل پانِه'],
            ['È delizioso, grazie!', 'دي حاجة لذيذة، شكراً!', 'إيه دِليزيوزو، جراتسيه'],
            ['Non mangio carne.', 'أنا مبآكلش لحمة.', 'نون مانجو كارنِه']
          ],
          conversation: {
            setting: { ar: 'ماركو وأخته في المطبخ الصبح', en: 'Marco and his sister in the kitchen in the morning' },
            lines: [
              ['Marco', 'Ho fame. Cosa c’è per colazione?', 'أنا جعان. فيه إيه في الفطار؟', 'أو فامِه. كوزا تشيه پير كولاتسيونِه'],
              ['Sofia', 'Ci sono le uova e il pane.', 'فيه بيض وعيش.', 'تشي سونو لي ووڤا إيه إل پانِه'],
              ['Marco', 'Vorrei anche del formaggio.', 'عايز جبنة كمان.', 'ڤورّي أنكِه دل فورمادجو'],
              ['Sofia', 'Certo. Vuoi il tè o il latte?', 'تمام. عايز شاي ولا لبن؟', 'تشيرتو. ڤوي إل تيه أو إل لاتِه'],
              ['Marco', 'Il latte, per favore. Dov’è la mamma?', 'لبن لو سمحت. ماما فين؟', 'إل لاتِه، پير فاڤوري. دوڤيه لا ماما'],
              ['Sofia', 'In giardino. La colazione è pronta!', 'في الجنينة. الفطار جاهز!', 'إن جاردينو. لا كولاتسيونِه إيه پرونتا']
            ],
            vocab: [['anche', 'كمان'], ['Certo', 'أكيد'], ['pronta', 'جاهزة'], ['Dov’è', 'فين'], ['giardino', 'جنينة']],
            questions: [
              { q: 'Cosa vuole bere Marco?', qMeaning: 'ماركو عايز يشرب إيه؟', options: ['Il latte', 'Il tè', 'Il succo'], answer: 0 },
              { q: 'Dov’è la mamma?', qMeaning: 'ماما فين؟', options: ['In giardino', 'In cucina', 'Al lavoro'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Scrivi un po’' },
            tasks: [
              { ar: 'اكتب فطارك في ٣ جمل.', en: 'Write your breakfast in three sentences.' },
              { ar: 'اكتب حاجتين بتحبهم وحاجة مبتحبهاش بـ mi piace / mi piacciono.', en: 'Write two likes and one dislike with mi piace / mi piacciono.' }
            ]
          }
        }
      ]
    },
    {
      title: 'Vita quotidiana', titleMeaning: 'الحياة اليومية',
      summary: { ar: 'التسوّق والمقارنة بين الأسعار بالإيطالي.', en: 'Shopping and comparing prices.' },
      lessons: [
        {
          id: 'it-a2-u1-l1', topic: 'Acquisti', title: 'Fare la spesa', titleMeaning: 'التسوّق', minutes: 16,
          goals: { ar: ['تسأل عن السعر', 'تقارن بين حاجتين', 'تشتري ودفع بثقة'],
                   en: ['Ask about price', 'Compare two items', 'Buy and pay confidently'] },
          vocab: [
            ['il negozio', 'محل', 'إل نيگوتسيو', 'Il negozio apre alle nove.', 'المحل بيفتح الساعة تسعة.'],
            ['il prezzo', 'السعر', 'إل پريتسو', 'Il prezzo è sull’etichetta.', 'السعر على اللافتة.'],
            ['economico', 'رخيص', 'إيكونوميكو', 'Questo non è economico.', 'ده مش رخيص.'],
            ['caro', 'غالي', 'كارو', 'Quella giacca è troppo cara.', 'الجاكيت ده غالي أوي.'],
            ['la taglia', 'المقاس', 'لا تاليا', 'Che taglia porti?', 'بتلبس مقاس كام؟'],
            ['lo scontrino', 'إيصال', 'لو سكونترينو', 'Tenga lo scontrino, per favore.', 'خد الإيصال لو سمحت.'],
            ['lo sconto', 'خصم', 'لو سكونتو', 'C’è uno sconto oggi?', 'فيه خصم النهاردة؟'],
            ['in contanti', 'نقدي', 'إن كونتانتي', 'Pago in contanti.', 'هدفع كاش.']
          ],
          related: [
            ['il mercato', 'السوق', 'إل ميركاتو', 'Andiamo al mercato il sabato.', 'بنروح السوق السبت.'],
            ['il commesso', 'البائع', 'إل كوميسو', 'Il commesso è gentile.', 'البائع لطيف.'],
            ['il resto', 'الباقي / فكة', 'إل ريستو', 'Ecco il resto.', 'ده الباقي.'],
            ['la cassa', 'الكاشير', 'لا كاسا', 'Paghi alla cassa.', 'ادفع عند الكاشير.'],
            ['una borsa', 'شنطة', 'أونا بورسا', 'Prendi una borsa.', 'خد شنطة.'],
            ['una taglia più grande', 'مقاس أكبر', 'أونا تاليا پيو جراندي', 'Ha una taglia più grande?', 'عندك مقاس أكبر؟']
          ],
          expressions: [
            ['Quanto costa?', 'ده بكام؟', 'كوانتو كوستا', 'Scusi, quanto costa questa borsa?', 'لو سمحت، الشنطة دي بكام؟'],
            ['Posso provarla?', 'ممكن أقيسها؟', 'پوسو پرولا', 'Posso provarla, per favore?', 'ممكن أقيسها لو سمحت؟'],
            ['È troppo caro per me.', 'ده غالي عليّا.', 'إيه تروپو كارو پير مي', 'È troppo caro per me, mi dispiace.', 'غالي عليّا، آسف.'],
            ['Lo prendo.', 'هاخده.', 'لو پريندو', 'La taglia è giusta, lo prendo.', 'المقاس مظبوط، هاخده.']
          ],
          examples: [
            ['Questa camicia è più cara di quella blu.', 'القميص ده أغلى من الأزرق.', 'كوِستا كاميتشا إيه پيو كارا دي كوِلا بلو', ['Questa', 'camicia', 'è', 'più', 'cara', 'di', 'quella', 'blu']],
            ['Cerco un regalo per mia madre.', 'بدور على هدية لماما.', 'تشيركو أن رِگالو پير ميا مادرِه', ['Cerco', 'un', 'regalo', 'per', 'mia', 'madre']],
            ['Avete un altro colore?', 'عندكم لون تاني؟', 'أڤيتي أن ألترو كولورِه', ['Avete', 'un', 'altro', 'colore']],
            ['Pago con la carta.', 'هدفع بالكارت.', 'پاگو كون لا كارتا', ['Pago', 'con', 'la', 'carta']]
          ],
          grammar: {
            title: { ar: 'المقارنة: più … di / meno … di', en: 'Comparatives: più … di / meno … di' },
            points: [
              { ar: 'più + صفة + di = أكثر من، meno + صفة + di = أقل من.', en: 'più + adjective + di = more than; meno … di = less than.' },
              { ar: 'قبل الأرقام بنستخدم più di: più di venti euro.', en: 'Before numbers use “più di”: più di venti euro.' },
              { ar: 'أعلى درجة: il più / la più + صفة.', en: 'Superlative: il più / la più + adjective.' }
            ],
            table: [
              { a: 'più caro di', b: 'Questo è più caro di quello.' },
              { a: 'meno grande di', b: 'La mia camera è meno grande della tua.' },
              { a: 'migliore', b: 'Questo pane è migliore.' },
              { a: 'il più', b: 'È il regalo più bello.' }
            ],
            note: { ar: 'di + il = del، di + la = della؛ لازم تدمجهم.', en: 'Combine “di” with the article: del, della, dei, delle.' }
          },
          reading: {
            title: { ar: 'هدية عيد ميلاد', en: 'A birthday gift' },
            linesEn: ['Giulia vuole comprare un regalo per sua madre.', 'Entra in un piccolo negozio vicino al mercato.', 'Vede una sciarpa viola. È bella ma cara.', 'Il commesso le mostra una sciarpa blu, meno cara e più morbida.', 'Giulia chiede uno sconto e paga in contanti.', 'Esce dal negozio con lo scontrino e un sorriso.'],
            linesAr: ['جوليا عايزة تشتري هدية لمامتها.', 'دخلت محل صغير جنب السوق.', 'شافت إيشارب بنفسجي. حلو بس غالي.', 'البائع ورّاها إيشارب أزرق، أرخص وأنعم.', 'جوليا طلبت خصم ودفعت كاش.', 'خرجت من المحل بالإيصال وبابتسامة.'],
            questions: [
              { q: 'Per chi è il regalo?', qMeaning: 'الهدية لمين؟', options: ['Per sua madre', 'Per sua sorella', 'Per un’amica'], answer: 0 },
              { q: 'Perché sceglie la sciarpa blu?', qMeaning: 'اختارت الإيشارب الأزرق ليه؟', options: ['Costa meno', 'È più grande', 'È nuova'], answer: 0 }
            ]
          },
          listening: [
            ['Quanto costa?', ['Quanto costa?', 'Dove sei?', 'Chi è?'], 0, 'ده بكام؟'],
            ['Posso provarla?', ['Provarla', 'Lavarla', 'Portarla'], 0, 'ممكن أقيسها؟'],
            ['Pago in contanti.', ['In contanti', 'Con la carta', 'Online'], 0, 'هدفع كاش.']
          ],
          speaking: [
            ['Scusi, quanto costa questa borsa?', 'لو سمحت، الشنطة دي بكام؟', 'سكوزي، كوانتو كوستا كوِستا بورسا'],
            ['Posso provarla, per favore?', 'ممكن أقيسها لو سمحت؟', 'پوسو پرولارلا، پير فاڤوري'],
            ['È troppo caro. Avete uno sconto?', 'غالي أوي. عندكم خصم؟', 'إيه تروپو كارو. أڤيتي أونو سكونتو']
          ],
          conversation: {
            setting: { ar: 'جوليا بتشتري إيشارب من محل', en: 'Giulia buys a scarf in a shop' },
            lines: [
              ['Commesso', 'Buongiorno! Posso aiutarla?', 'صباح الخير! أقدر أساعدك؟', 'بونجورنو! پوسو أيوتارلا'],
              ['Giulia', 'Sì, cerco una sciarpa.', 'أيوه، بدور على إيشارب.', 'سي، تشيركو أونا شارپا'],
              ['Commesso', 'Ne abbiamo di viola e di blu.', 'عندنا بنفسجي وأزرق.', 'ني أڤيامو دي ڤيولا إيه دي بلو'],
              ['Giulia', 'Quanto costa quella viola?', 'البنفسجي ده بكام؟', 'كوانتو كوستا كوِلا ڤيولا'],
              ['Commesso', 'Trenta euro.', 'تلاتين يورو.', 'ترينتا إيرو'],
              ['Giulia', 'È troppo caro per me. C’è uno sconto?', 'غالي عليّا. فيه خصم؟', 'إيه تروپو كارو پير مي. تشيه أونو سكونتو'],
              ['Commesso', 'Sì, dieci per cento oggi.', 'أيوه، عشرة في المية النهاردة.', 'سي، ديتشي پير تشينتو أوجي'],
              ['Giulia', 'Perfetto, la prendo. Lo scontrino, per favore.', 'تمام، هاخده. الإيصال لو سمحت.', 'پرفيتو، لا پريندو. لو سكونترينو، پير فاڤوري']
            ],
            vocab: [['aiutare', 'يساعد'], ['sciarpa', 'إيشارب'], ['sconto', 'خصم'], ['scontrino', 'إيصال'], ['Perfetto', 'تمام']],
            questions: [
              { q: 'Quale sciarpa guarda prima Giulia?', qMeaning: 'جوليا بصّت على أنهي إيشارب الأول؟', options: ['Quella viola', 'Quella blu', 'Quella rossa'], answer: 0 },
              { q: 'Quanto è lo sconto?', qMeaning: 'الخصم كام؟', options: ['Dieci per cento', 'Venti per cento', 'Nessuno sconto'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Scrivi un po’' },
            tasks: [
              { ar: 'اكتب حوار قصير في محل (٤ أدوار).', en: 'Write a short shop dialogue (four turns).' },
              { ar: 'قارن بين حاجتين بـ più / meno … di.', en: 'Compare two things with più / meno … di.' }
            ]
          }
        }
      ]
    }
  ], { ar: 'متوسط', en: 'Elementary' });
})();
