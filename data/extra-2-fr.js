/* ==========================================================================
   LingoBloom — curriculum expansion · FRANÇAIS (native, not translated)
   ========================================================================== */
(function () {
  if (!LB.addUnits) return;

  LB.addUnits('fr', 'A1', [
    {
      title: 'Chez moi', titleMeaning: 'في بيتي',
      summary: { ar: 'أوض البيت، الأثاث، والوصف بالفرنسي.', en: 'Rooms, furniture and describing your home.' },
      lessons: [
        {
          id: 'fr-a1-u2-l1', topic: 'Logement', title: 'Ma maison', titleMeaning: 'بيتي', minutes: 14,
          goals: { ar: ['تسمّي أوض البيت بالفرنسي', 'تقول ساكن فين', 'تستخدم il y a بسهولة'],
                   en: ['Name rooms in French', 'Say where you live', 'Use “il y a” easily'] },
          vocab: [
            ['une maison', 'بيت', 'إن ميزون', 'J’habite dans une maison.', 'أنا ساكن في بيت.'],
            ['un appartement', 'شقة', 'أن أبارتمو', 'Mon appartement est petit.', 'شقتي صغيرة.'],
            ['la cuisine', 'المطبخ', 'لا كويزين', 'Maman est dans la cuisine.', 'ماما في المطبخ.'],
            ['la chambre', 'أوضة النوم', 'لا شومبر', 'Ma chambre est en haut.', 'أوضة نومي فوق.'],
            ['la salle de bains', 'الحمّام', 'لا سال دو بان', 'La salle de bains est à droite.', 'الحمّام على اليمين.'],
            ['le salon', 'الصالة', 'لو سالون', 'On regarde la télé dans le salon.', 'بنتفرج على التلفزيون في الصالة.'],
            ['la porte', 'الباب', 'لا پورت', 'Ferme la porte, s’il te plaît.', 'اقفل الباب لو سمحت.'],
            ['la fenêtre', 'الشباك', 'لا فنِتر', 'Ouvre la fenêtre !', 'افتح الشباك!']
          ],
          related: [
            ['une table', 'طربيزة', 'إن تابلو', 'Le livre est sur la table.', 'الكتاب على الطربيزة.'],
            ['une chaise', 'كرسي', 'إن شيز', 'Prends une chaise.', 'خد كرسي.'],
            ['un lit', 'سرير', 'أن لي', 'Le chat dort sur le lit.', 'القطة نايمة على السرير.'],
            ['un canapé', 'كنبة', 'أن كاناپي', 'Le canapé est grand.', 'الكنبة كبيرة.'],
            ['un jardin', 'جنينة', 'أن جاردان', 'Il y a un jardin derrière.', 'في جنينة ورا.'],
            ['les clés', 'المفاتيح', 'لي كلي', 'Où sont les clés ?', 'المفاتيح فين؟']
          ],
          expressions: [
            ['Où habites-tu ?', 'إنت ساكن فين؟', 'أو أبيت تو', 'Où habites-tu, Karim ?', 'إنت ساكن فين يا كريم؟'],
            ['J’habite à Lyon.', 'أنا ساكن في ليون.', 'جابيت آ ليون', 'J’habite à Lyon, près du parc.', 'ساكن في ليون، جنب الجنينة.'],
            ['Entrez, je vous en prie.', 'اتفضل/ي ادخل.', 'أونتره، جو ڤوز إن پري', 'Entrez, je vous en prie !', 'اتفضل، ادخل!'],
            ['C’est au premier étage.', 'ده في الدور الأول.', 'سيه أو پريميه إيتاج', 'La chambre est au premier étage.', 'أوضة النوم في الدور الأول.']
          ],
          examples: [
            ['Dans mon salon, il y a un grand canapé.', 'في الصالة عندي كنبة كبيرة.', 'دان مون سالون، إل يا أن جران كاناپي', ['Dans', 'mon', 'salon', 'il', 'y', 'a', 'un', 'grand', 'canapé']],
            ['La cuisine est à côté de la salle de bains.', 'المطبخ جنب الحمّام.', 'لا كويزين إيه آ كوتيه دو لا سال دو بان', ['La', 'cuisine', 'est', 'à', 'côté', 'de', 'la', 'salle', 'de', 'bains']],
            ['Les clés sont sur la table.', 'المفاتيح على الطربيزة.', 'لي كلي سون سور لا تابلو', ['Les', 'clés', 'sont', 'sur', 'la', 'table']],
            ['Il n’y a pas de balcon.', 'مفيش بلكونة.', 'إل ني يا پا دو بالكون', ['Il', 'n’y', 'a', 'pas', 'de', 'balcon']]
          ],
          grammar: {
            title: { ar: 'il y a + حروف المكان', en: 'il y a + prepositions of place' },
            points: [
              { ar: 'il y a = فيه / يوجد، وبتفضل زي ما هي مع المفرد والجمع.', en: '“il y a” means there is/there are — the form never changes.' },
              { ar: 'النفي: il n’y a pas de + اسم بدون أداة.', en: 'Negative: “il n’y a pas de + noun” with no article.' },
              { ar: 'حروف المكان: dans (جوه)، sur (فوق)، sous (تحت)، à côté de (جنب)، derrière (ورا).', en: 'dans, sur, sous, à côté de, derrière.' }
            ],
            table: [
              { a: 'sur la table', b: 'Le livre est sur la table.' },
              { a: 'sous le lit', b: 'Le chat est sous le lit.' },
              { a: 'à côté de la porte', b: 'La fenêtre est à côté de la porte.' },
              { a: 'il n’y a pas de…', b: 'Il n’y a pas de jardin.' }
            ],
            note: { ar: 'خلي بالك: بعد النفي بـ pas بنستخدم de مش un/une.', en: 'After “pas”, use “de” instead of un/une.' }
          },
          reading: {
            title: { ar: 'شقة العيلة في ليون', en: 'The family flat in Lyon' },
            linesEn: ['Karim habite dans un petit appartement à Lyon.', 'Il y a trois pièces : un salon, une cuisine et deux chambres.', 'Dans le salon, il y a un canapé bleu et une grande fenêtre.', 'Sa mère prépare le dîner dans la cuisine.', 'Son frère range ses livres dans sa chambre.', 'Le soir, la famille mange ensemble dans le salon.'],
            linesAr: ['كريم ساكن في شقة صغيرة في ليون.', 'فيه تلات أوض: صالة ومطبخ وأوضتين.', 'في الصالة كنبة زرقا وشباك كبير.', 'مامته بتحضّر العشا في المطبخ.', 'أخوه بيرتب كتبه في أوضته.', 'بالليل العيلة بتعشى مع بعض في الصالة.'],
            questions: [
              { q: 'Combien de chambres y a-t-il ?', qMeaning: 'فيه كام أوضة نوم؟', options: ['Deux', 'Trois', 'Une'], answer: 0 },
              { q: 'Quelle est la couleur du canapé ?', qMeaning: 'لون الكنبة إيه؟', options: ['Bleu', 'Rouge', 'Vert'], answer: 0 }
            ]
          },
          listening: [
            ['Où habites-tu ?', ['Où habites-tu ?', 'Où travailles-tu ?', 'Où vas-tu ?'], 0, 'إنت ساكن فين؟'],
            ['La cuisine est à droite.', ['La cuisine est à droite', 'La cuisine est à gauche', 'La cuisine est en haut'], 0, 'المطبخ على اليمين.'],
            ['Il y a deux chaises.', ['Deux chaises', 'Deux chambres', 'Deux tables'], 0, 'في كرسيين.']
          ],
          speaking: [
            ['J’habite dans un appartement avec ma famille.', 'أنا ساكن في شقة مع عيلتي.', 'جابيت دان أن أبارتمو أڤيك ما فامي'],
            ['Il y a un grand salon chez moi.', 'عندي صالة كبيرة.', 'إل يا أن جران سالون شيه موا'],
            ['Les clés sont sur la table.', 'المفاتيح على الطربيزة.', 'لي كلي سون سور لا تابلو']
          ],
          conversation: {
            setting: { ar: 'كريم بيزور شقة صاحبه لوك', en: "Karim visits his friend Luc's flat" },
            lines: [
              ['Luc', 'Salut, Karim ! Entre, s’il te plaît.', 'هاي يا كريم! اتفضل ادخل.', 'سالو كريم! أونتر، سيل تو بلي'],
              ['Karim', 'Merci ! Ton appartement est très joli.', 'شكراً! شقتك حلوة أوي.', 'ميرسي! تون أبارتمو إيه تريه جولي'],
              ['Luc', 'Voici le salon. Il y a une nouvelle fenêtre.', 'دي الصالة. فيها شباك جديد.', 'ڤواسي لو سالون. إل يا إن نوڤيل فنِتر'],
              ['Karim', 'C’est lumineux ! Et la cuisine ?', 'منوّرة! والمطبخ؟', 'سيه لومينو! إيه لا كويزين'],
              ['Luc', 'La cuisine est à côté de la salle de bains.', 'المطبخ جنب الحمّام.', 'لا كويزين إيه آ كوتيه دو لا سال دو بان'],
              ['Karim', 'Tu as un balcon ?', 'عندك بلكونة؟', 'تو آ أن بالكون'],
              ['Luc', 'Non, mais il y a un petit jardin derrière.', 'لأ، بس فيه جنينة صغيرة ورا.', 'نون، ميه إل يا أن پتي جاردان ديريير']
            ],
            vocab: [['Entre', 'ادخل'], ['joli', 'حلو'], ['lumineux', 'منوّر'], ['balcon', 'بلكونة'], ['derrière', 'ورا']],
            questions: [
              { q: 'Qu’est-ce qu’il y a dans le salon ?', qMeaning: 'فيه إيه في الصالة؟', options: ['Une nouvelle fenêtre', 'Un grand lit', 'Un balcon'], answer: 0 },
              { q: 'Est-ce que Luc a un balcon ?', qMeaning: 'لوك عنده بلكونة؟', options: ['Non', 'Oui, deux', 'Oui, un petit'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Écris un peu' },
            tasks: [
              { ar: 'اوصف بيتك في ٤ جمل بـ il y a.', en: 'Describe your home in four sentences with “il y a”.' },
              { ar: 'اكتب ٣ جمل بحروف المكان (sur / sous / à côté de).', en: 'Write three sentences with sur / sous / à côté de.' }
            ]
          }
        },
        {
          id: 'fr-a1-u2-l2', topic: 'Repas', title: 'Les repas', titleMeaning: 'الوجبات', minutes: 15,
          goals: { ar: ['تسمّي الوجبات والأكل', 'تطلب بأسلوب مؤدّب', 'تعبر عن اللي بتحبه'],
                   en: ['Name meals and food', 'Order politely', 'Express likes and dislikes'] },
          vocab: [
            ['le petit-déjeuner', 'الفطار', 'لو پتي ديجونيه', 'Je prends le petit-déjeuner à sept heures.', 'بفطر الساعة سبعة.'],
            ['le déjeuner', 'الغدا', 'لو ديجونيه', 'Le déjeuner est à midi.', 'الغدا الضهر.'],
            ['le dîner', 'العشا', 'لو دينيه', 'Le dîner est à huit heures.', 'العشا الساعة تمانية.'],
            ['le pain', 'عيش', 'لو پان', 'J’aime le pain frais.', 'بحب العيش الطازة.'],
            ['l’eau', 'مية', 'لو', 'Je bois de l’eau.', 'بشرب مية.'],
            ['le fromage', 'جبنة', 'لو فروماج', 'Le fromage français est délicieux.', 'الجبنة الفرنسية لذيذة.'],
            ['le poulet', 'فراخ', 'لو پولي', 'Nous mangeons du poulet dimanche.', 'بناكل فراخ يوم الحد.'],
            ['les légumes', 'خضار', 'لي ليجوم', 'Mange tes légumes !', 'كل الخضار!']
          ],
          related: [
            ['un œuf', 'بيضة', 'أن أُف', 'Je voudrais deux œufs.', 'عايز بيضتين.'],
            ['une pomme', 'تفاحة', 'إن پوم', 'Une pomme, s’il vous plaît.', 'تفاحة لو سمحت.'],
            ['le poisson', 'سمك', 'لو پواسون', 'Le poisson est frais.', 'السمك طازة.'],
            ['une boisson', 'مشروب', 'إن بواسون', 'Quelle boisson voulez-vous ?', 'عايز أنهي مشروب؟'],
            ['j’ai faim', 'أنا جعان', 'جيه فان', 'J’ai faim, allons manger !', 'أنا جعان، يلا ناكل!'],
            ['j’ai soif', 'أنا عطشان', 'جيه سواف', 'J’ai soif. Un verre d’eau ?', 'أنا عطشان. كوباية مية؟']
          ],
          expressions: [
            ['Je voudrais…', 'أنا عايز…', 'جو ڤودريه', 'Je voudrais un café, s’il vous plaît.', 'عايز قهوة لو سمحت.'],
            ['Qu’est-ce que tu veux manger ?', 'عايز تاكل إيه؟', 'كيسك تو ڤو مانجيه', 'Qu’est-ce que tu veux manger ce soir ?', 'عايز تاكل إيه النهاردة بالليل؟'],
            ['C’est délicieux !', 'دي حاجة لذيذة!', 'سيه ديليسيو', 'Ce gâteau est délicieux !', 'الكيكة دي لذيذة!'],
            ['Je n’aime pas…', 'أنا مباحبش…', 'جو نيم پا', 'Je n’aime pas les oignons.', 'أنا مباحبش البصل.']
          ],
          examples: [
            ['Au petit-déjeuner, je mange du pain et du fromage.', 'في الفطار بآكل عيش وجبنة.', 'أو پتي ديجونيه، جو مانج دو پان إيه دو فروماج', ['Au', 'petit-déjeuner', 'je', 'mange', 'du', 'pain', 'et', 'du', 'fromage']],
            ['Nous buvons du thé après le dîner.', 'بنشرب شاي بعد العشا.', 'نو بوڤون دو تيه أپريه لو دينيه', ['Nous', 'buvons', 'du', 'thé', 'après', 'le', 'dîner']],
            ['Mon frère n’aime pas le poisson.', 'أخويا مبياكلش سمك.', 'مون فريه نيم پا لو پواسون', ['Mon', 'frère', 'n’aime', 'pas', 'le', 'poisson']],
            ['Vous voulez une boisson ?', 'تحب مشروب؟', 'ڤو ڤوليه إن بواسون', ['Vous', 'voulez', 'une', 'boisson']]
          ],
          grammar: {
            title: { ar: 'المادة partitif: du / de la / des', en: 'Partitive articles: du / de la / des' },
            points: [
              { ar: 'لما تتكلم عن كمية غير محددة استخدم du (مذكر) / de la (مؤنث) / des (جمع).', en: 'Unspecified quantity: du (masc.), de la (fem.), des (plural).' },
              { ar: 'في النفي بقت de: Je ne mange pas de poisson.', en: 'After a negative, it becomes “de”.' },
              { ar: 'Je voudrais + اسم بعدها بدون أداة مع الأعداد: deux cafés.', en: 'After “je voudrais”, use the article or a number directly.' }
            ],
            table: [
              { a: 'du pain', b: 'Je mange du pain.' },
              { a: 'de la soupe', b: 'Elle prend de la soupe.' },
              { a: 'des légumes', b: 'Nous voulons des légumes.' },
              { a: 'pas de', b: 'Je ne mange pas de viande.' }
            ],
            note: { ar: 'du = de + le، فلو جيت تعمل نفي بترجع de لوحدها.', en: '“du” is “de + le”; in the negative it reduces to “de”.' }
          },
          reading: {
            title: { ar: 'فطار الأحد', en: 'Sunday breakfast' },
            linesEn: ['Le dimanche, la famille prend le petit-déjeuner ensemble.', 'La grand-mère prépare du thé et des œufs.', 'Marie mange du pain avec du fromage et boit du lait.', 'Son petit frère prend une pomme et un jus d’orange.', 'Après le repas, ils rangent la cuisine ensemble.', 'Ensuite, ils vont au marché acheter des légumes.'],
            linesAr: ['يوم الحد العيلة بتفطر مع بعض.', 'الجدة بتعمل شاي وبيض.', 'ماري بتاكل عيش بالجبنة وبتشرب لبن.', 'أخوها الصغير بياخد تفاحة وعصير برتقان.', 'بعد الأكل بيرتبوا المطبخ مع بعض.', 'وبعدين بيروحوا السوق يشتروا خضار.'],
            questions: [
              { q: 'Que boit Marie ?', qMeaning: 'ماري بتشرب إيه؟', options: ['Du lait', 'Du thé', 'Du café'], answer: 0 },
              { q: 'Où vont-ils après le repas ?', qMeaning: 'بيروحوا فين بعد الأكل؟', options: ['Au marché', 'À l’école', 'Au parc'], answer: 0 }
            ]
          },
          listening: [
            ['Je voudrais un café, s’il vous plaît.', ['Un café', 'Un thé', 'De l’eau'], 0, 'عايز قهوة لو سمحت.'],
            ['Je n’aime pas le poisson.', ['Il n’aime pas le poisson', 'Il aime le poisson', 'Il veut du poisson'], 0, 'أنا مباحبش السمك.'],
            ['Le dîner est à huit heures.', ['À huit heures', 'À sept heures', 'À midi'], 0, 'العشا الساعة تمانية.']
          ],
          speaking: [
            ['J’ai faim. Je voudrais du pain.', 'أنا جعان. عايز عيش.', 'جيه فان. جو ڤودريه دو پان'],
            ['C’est délicieux, merci !', 'دي حاجة لذيذة، شكراً!', 'سيه ديليسيو، ميرسي'],
            ['Je ne mange pas de viande.', 'أنا مبآكلش لحمة.', 'جو نو مانج پا دو ڤياند']
          ],
          conversation: {
            setting: { ar: 'ماري وأخوها في المطبخ الصبح', en: 'Marie and her brother in the kitchen in the morning' },
            lines: [
              ['Marie', 'J’ai faim. Qu’est-ce qu’il y a pour le petit-déjeuner ?', 'أنا جعانة. فيه إيه في الفطار؟', 'جيه فان. كيسك إل يا پور لو پتي ديجونيه'],
              ['Paul', 'Il y a des œufs et du pain.', 'فيه بيض وعيش.', 'إل يا دي زُف إيه دو پان'],
              ['Marie', 'Je voudrais du fromage aussi.', 'عايزة جبنة كمان.', 'جو ڤودريه دو فروماج أوسي'],
              ['Paul', 'D’accord. Tu veux du thé ou du lait ?', 'تمام. عايزة شاي ولا لبن؟', 'داكور. تو ڤو دو تيه أو دو لي'],
              ['Marie', 'Du lait, s’il te plaît. Où est maman ?', 'لبن لو سمحت. ماما فين؟', 'دو لي، سيل تو بلي. أو إيه مامان'],
              ['Paul', 'Dans le jardin. Le petit-déjeuner est prêt !', 'في الجنينة. الفطار جاهز!', 'دان لو جاردان. لو پتي ديجونيه إيه پريه']
            ],
            vocab: [['pour', 'في / لـ'], ['aussi', 'كمان'], ['D’accord', 'تمام'], ['prêt', 'جاهز'], ['maman', 'ماما']],
            questions: [
              { q: 'Que veut boire Marie ?', qMeaning: 'ماري عايزة تشرب إيه؟', options: ['Du lait', 'Du thé', 'Du café'], answer: 0 },
              { q: 'Où est maman ?', qMeaning: 'ماما فين؟', options: ['Dans le jardin', 'Dans la cuisine', 'Au marché'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Écris un peu' },
            tasks: [
              { ar: 'اكتب فطارك في ٣ جمل بـ du / de la / des.', en: 'Write your breakfast in three sentences with du / de la / des.' },
              { ar: 'اكتب حاجتين بتحبهم وحاجة مبتحبهاش.', en: 'Write two things you like and one you dislike.' }
            ]
          }
        }
      ]
    },
    {
      title: 'Vie quotidienne', titleMeaning: 'الحياة اليومية',
      summary: { ar: 'التسوّق والمقارنة بين الأسعار.', en: 'Shopping and comparing prices.' },
      lessons: [
        {
          id: 'fr-a2-u1-l1', topic: 'Courses', title: 'Faire les courses', titleMeaning: 'التسوّق', minutes: 16,
          goals: { ar: ['تسأل عن السعر بالفرنسي', 'تقارن بين حاجتين', 'تشتري ودفع بثقة'],
                   en: ['Ask about price', 'Compare two items', 'Buy and pay confidently'] },
          vocab: [
            ['un magasin', 'محل', 'أن ماجازان', 'Le magasin ouvre à neuf heures.', 'المحل بيفتح الساعة تسعة.'],
            ['le prix', 'السعر', 'لو پري', 'Le prix est sur l’étiquette.', 'السعر على اللافتة.'],
            ['pas cher', 'رخيص', 'پا شير', 'Ce sac n’est pas cher.', 'الشنطة دي رخيصة.'],
            ['cher', 'غالي', 'شير', 'Cette veste est trop chère.', 'الجاكيت ده غالي أوي.'],
            ['la taille', 'المقاس', 'لا تاي', 'Quelle taille faites-vous ?', 'بتلبس مقاس كام؟'],
            ['le ticket de caisse', 'إيصال', 'لو تيكيه دو كيس', 'Gardez le ticket, s’il vous plaît.', 'خد الإيصال لو سمحت.'],
            ['une réduction', 'خصم', 'إن ريدوكسيون', 'Il y a une réduction aujourd’hui ?', 'فيه خصم النهاردة؟'],
            ['en espèces', 'نقدي', 'أون إسپيس', 'Je paie en espèces.', 'هدفع كاش.']
          ],
          related: [
            ['le marché', 'السوق', 'لو مارشيه', 'On va au marché le samedi.', 'بنروح السوق السبت.'],
            ['un vendeur', 'البائع', 'أن ڤاندور', 'Le vendeur est très gentil.', 'البائع لطيف جداً.'],
            ['la monnaie', 'الباقي / فكة', 'لا مونيه', 'Voici votre monnaie.', 'ده الباقي بتاع حضرتك.'],
            ['une caisse', 'الكاشير', 'إن كيس', 'Payez à la caisse.', 'ادفع عند الكاشير.'],
            ['un panier', 'سلة', 'أن پانييه', 'Prenez un panier.', 'خد سلة.'],
            ['une taille plus grande', 'مقاس أكبر', 'إن تاي پلي جراند', 'Avez-vous une taille plus grande ?', 'عندك مقاس أكبر؟']
          ],
          expressions: [
            ['Combien ça coûte ?', 'ده بكام؟', 'كومبيان سا كوت', 'Excusez-moi, combien ça coûte ?', 'لو سمحت، ده بكام؟'],
            ['Je peux l’essayer ?', 'ممكن أقيسه؟', 'جو پو ليسييه', 'Je peux l’essayer, s’il vous plaît ?', 'ممكن أقيسه لو سمحت؟'],
            ['C’est trop cher pour moi.', 'ده غالي عليّا.', 'سيه ترو شير پور موا', 'C’est trop cher pour moi, désolé.', 'ده غالي عليّا، آسف.'],
            ['Je le prends.', 'هاخده.', 'جو لو پرون', 'La taille est parfaite, je le prends.', 'المقاس مظبوط، هاخده.']
          ],
          examples: [
            ['Cette chemise est plus chère que la bleue.', 'القميص ده أغلى من الأزرق.', 'سيت شميز إيه پلي شير كو لا بلو', ['Cette', 'chemise', 'est', 'plus', 'chère', 'que', 'la', 'bleue']],
            ['Je cherche un cadeau pour ma mère.', 'بدور على هدية لماما.', 'جو شيرش أن كادو پور ما مير', ['Je', 'cherche', 'un', 'cadeau', 'pour', 'ma', 'mère']],
            ['Avez-vous une autre couleur ?', 'عندك لون تاني؟', 'أڤيه ڤو إن أوتر كولور', ['Avez-vous', 'une', 'autre', 'couleur']],
            ['Je paie par carte.', 'هدفع بالكارت.', 'جو پيه پار كارت', ['Je', 'paie', 'par', 'carte']]
          ],
          grammar: {
            title: { ar: 'المقارنة: plus … que / moins … que', en: 'Comparatives: plus … que / moins … que' },
            points: [
              { ar: 'plus + صفة + que = أكثر من، moins + صفة + que = أقل من.', en: 'plus + adjective + que = more than; moins … que = less than.' },
              { ar: 'صفة “bon” بتبقى meilleur مش plus bon.', en: '“bon” becomes “meilleur”, not “plus bon”.' },
              { ar: 'أعلى درجة: le plus / la plus + صفة.', en: 'Superlative: le plus / la plus + adjective.' }
            ],
            table: [
              { a: 'plus cher que', b: 'Ce sac est plus cher que celui-là.' },
              { a: 'moins grand que', b: 'Ma chambre est moins grande que la tienne.' },
              { a: 'meilleur', b: 'Ce pain est meilleur.' },
              { a: 'le plus', b: 'C’est le plus beau cadeau.' }
            ],
            note: { ar: 'لو الصفة بتخلص بـ e، المؤنث مش بتتغير: une robe chère.', en: 'Adjectives ending in -e stay the same in the feminine.' }
          },
          reading: {
            title: { ar: 'هدية عيد ميلاد', en: 'A birthday gift' },
            linesEn: ['Amel veut acheter un cadeau pour sa mère.', 'Elle entre dans un petit magasin près du marché.', 'Elle voit une écharpe violette. Elle est belle mais chère.', 'Le vendeur lui montre une écharpe bleue, moins chère et plus douce.', 'Amel demande une réduction et paie en espèces.', 'Elle sort du magasin avec le ticket et un grand sourire.'],
            linesAr: ['أمَل عايزة تشتري هدية لمامتها.', 'دخلت محل صغير جنب السوق.', 'شافت إيشارب بنفسجي. حلو بس غالي.', 'البائع ورّاها إيشارب أزرق، أرخص وأنعم.', 'أمَل طلبت خصم ودفعت كاش.', 'خرجت من المحل بالإيصال وبابتسامة كبيرة.'],
            questions: [
              { q: 'Pour qui est le cadeau ?', qMeaning: 'الهدية لمين؟', options: ['Sa mère', 'Sa sœur', 'Son amie'], answer: 0 },
              { q: 'Pourquoi l’écharpe bleue ?', qMeaning: 'ليه الإيشارب الأزرق؟', options: ['Elle est moins chère', 'Elle est plus grande', 'Elle est neuve'], answer: 0 }
            ]
          },
          listening: [
            ['Combien ça coûte ?', ['Combien ça coûte ?', 'Où c’est ?', 'Qui est là ?'], 0, 'ده بكام؟'],
            ['Je peux l’essayer ?', ['L’essayer', 'Le laver', 'Le porter'], 0, 'ممكن أقيسه؟'],
            ['Je paie en espèces.', ['En espèces', 'Par carte', 'En ligne'], 0, 'هدفع كاش.']
          ],
          speaking: [
            ['Excusez-moi, combien coûte ce sac ?', 'لو سمحت، الشنطة دي بكام؟', 'إكسكيوزيه موا، كومبيان كوت سو باج'],
            ['Je peux l’essayer, s’il vous plaît ?', 'ممكن أقيسه لو سمحت؟', 'جو پو ليسييه، سيل ڤو پلي'],
            ['C’est trop cher. Vous avez une réduction ?', 'غالي أوي. عندكوا خصم؟', 'سيه ترو شير. ڤو أفيه إن ريدوكسيون']
          ],
          conversation: {
            setting: { ar: 'أمَل بتشتري إيشارب من محل', en: 'Amel buys a scarf in a shop' },
            lines: [
              ['Vendeur', 'Bonjour ! Je peux vous aider ?', 'صباح الخير! أقدر أساعدك؟', 'بونجور! جو پو ڤوز إيديه'],
              ['Amel', 'Oui, je cherche une écharpe.', 'أيوه، بدور على إيشارب.', 'وي، جو شيرش إن إيشارب'],
              ['Vendeur', 'Nous avons du violet et du bleu.', 'عندنا بنفسجي وأزرق.', 'نو زاڤون دو ڤيوليه إيه دو بلو'],
              ['Amel', 'Combien coûte l’écharpe violette ?', 'الإيشارب البنفسجي بكام؟', 'كومبيان كوت ليشارب ڤيوليت'],
              ['Vendeur', 'Trente euros.', 'تلاتين يورو.', 'ترانت أورو'],
              ['Amel', 'C’est trop cher pour moi. Vous avez une réduction ?', 'ده غالي عليّا. عندكم خصم؟', 'سيه ترو شير پور موا. ڤو زاڤيه إن ريدوكسيون'],
              ['Vendeur', 'Oui, dix pour cent aujourd’hui.', 'أيوه، عشرة في المية النهاردة.', 'وي، ديس پور سان أوجوردوي'],
              ['Amel', 'Parfait, je la prends. Le ticket, s’il vous plaît.', 'تمام، هاخده. الإيصال لو سمحت.', 'پارفيه، جو لا پرون. لو تيكيه، سيل ڤو پلي']
            ],
            vocab: [['chercher', 'يدوّر على'], ['écharpe', 'إيشارب'], ['réduction', 'خصم'], ['ticket', 'إيصال'], ['Parfait', 'تمام']],
            questions: [
              { q: 'Quelle écharpe Amel regarde d’abord ?', qMeaning: 'أمَل بصّت على أنهي إيشارب الأول؟', options: ['La violette', 'La bleue', 'La rouge'], answer: 0 },
              { q: 'Quelle est la réduction ?', qMeaning: 'الخصم كام؟', options: ['Dix pour cent', 'Vingt pour cent', 'Aucune'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Écris un peu' },
            tasks: [
              { ar: 'اكتب حوار قصير في محل (٤ أدوار).', en: 'Write a short shop dialogue (four turns).' },
              { ar: 'قارن بين حاجتين بـ plus / moins … que.', en: 'Compare two things with plus / moins … que.' }
            ]
          }
        }
      ]
    }
  ], { ar: 'متوسط', en: 'Elementary' });
})();
