/* ==========================================================================
   LingoBloom — FRENCH curriculum (contenu original, pas une traduction)
   Array form: [mot, sens(ar), prononciation(ar), exemple, sens de l'exemple]
   ========================================================================== */
(function () {
  LB.addLanguage(
    { code: 'fr', name: 'Français', native: 'Apprendre le français', meaning: 'الفرنسية',
      flag: '🇫🇷', speech: 'fr-FR', tone: 'pink', scene: '25%',
      blurb: { ar: 'لغة الفن والثقافة — سهلة في النطق مع شوية تدريب.', en: 'The language of art and culture — easy once you master the sounds.' } },
    {
      A0: {
        label: { ar: 'مبتدئ تماماً', en: 'Absolute beginner' },
        units: [
          {
            title: 'Les bases', titleMeaning: 'الأساسيات',
            summary: { ar: 'أول كلماتك: التحية، الأرقام، والتعريف بنفسك.', en: 'Your first words: greetings, numbers and introducing yourself.' },
            lessons: [
              {
                id: 'fr-a0-u1-l1', topic: 'Salutations', title: 'Les salutations', titleMeaning: 'التحيات', minutes: 12,
                goals: { ar: ['تسلّم وتودّع بالفرنسي', 'تفرّق بين tu و vous', 'تسأل عن الحال'],
                         en: ['Greet and say goodbye in French', 'Tell tu from vous', 'Ask how someone is'] },
                vocab: [
                  ['Bonjour', 'صباح الخير / نهارك سعيد', 'بونجور', 'Bonjour, madame !', 'صباح الخير يا مدام!'],
                  ['Salut', 'هاي (بين الأصحاب)', 'سالو', 'Salut, ça va ?', 'هاي، إيه الأخبار؟'],
                  ['Bonsoir', 'مساء الخير', 'بونسوار', 'Bonsoir, monsieur.', 'مساء الخير يا سيد.'],
                  ['Au revoir', 'إلى اللقاء', 'أو رِڤوار', 'Au revoir, à demain !', 'إلى اللقاء، لبكرة!'],
                  ['Bonne nuit', 'تصبح على خير', 'بون نوي', 'Bonne nuit, maman.', 'تصبح على خير يا ماما.'],
                  ['Merci', 'شكراً', 'ميرسي', 'Merci beaucoup.', 'شكراً جزيلاً.'],
                  ['Oui / Non', 'أيوه / لأ', 'وي / نون', 'Oui, merci.', 'أيوه، شكراً.'],
                  ['Ça va ?', 'إيه الأخبار؟', 'سا ڤا', 'Salut ! Ça va ?', 'هاي! إيه الأخبار؟']
                ],
                related: [
                  ['Bienvenue', 'أهلاً وسهلاً', 'بيانڤونو', 'Bienvenue en France !', 'أهلاً بيك في فرنسا!'],
                  ['S\'il vous plaît', 'من فضلك (رسمي)', 'سيل ڤو بلي', 'Un café, s\'il vous plaît.', 'قهوة من فضلك.'],
                  ['Pardon', 'آسف / لو سمحت', 'باردون', 'Pardon, excusez-moi.', 'آسف، لو سمحت.'],
                  ['Monsieur', 'السيد / حضرتك', 'مسيو', 'Bonjour, monsieur.', 'صباح الخير يا سيد.'],
                  ['Madame', 'المدام / حضرتك', 'مادام', 'Bonjour, madame.', 'صباح الخير يا مدام.']
                ],
                expressions: [
                  ['Comment allez-vous ?', 'إزاي حضرتك؟ (رسمي)', 'كومان تاليه ڤو', 'Bonjour, comment allez-vous ?', 'صباح الخير، إزاي حضرتك؟'],
                  ['Je vais bien, merci', 'أنا بخير، شكراً', 'جُو ڤي بيان، ميرسي', 'Je vais bien, merci. Et vous ?', 'أنا بخير شكراً. وحضرتك؟'],
                  ['Comment tu t\'appelles ?', 'اسمك إيه؟ (بين الأصحاب)', 'كومان تو تابيل', 'Salut, comment tu t\'appelles ?', 'هاي، اسمك إيه؟'],
                  ['Enchanté(e)', 'فرصة سعيدة', 'أونشانتي', 'Enchanté de vous rencontrer.', 'فرصة سعيدة بلقاء حضرتك.']
                ],
                examples: [
                  ['Bonjour ! Je m\'appelle Camille.', 'صباح الخير! اسمي كاميل.', 'بونجور! جُو مابيل كامي', ['Bonjour', 'Je', 'm\'appelle', 'Camille']],
                  ['Comment allez-vous ?', 'إزاي حضرتك؟', 'كومان تاليه ڤو', ['Comment', 'allez', 'vous']],
                  ['Je vais bien, merci.', 'أنا بخير، شكراً.', 'جُو ڤي بيان، ميرسي', ['Je', 'vais', 'bien', 'merci']],
                  ['Enchanté de vous rencontrer.', 'فرصة سعيدة بلقاء حضرتك.', 'أونشانتي دُو ڤو رانكونتره', ['Enchanté', 'de', 'vous', 'rencontrer']]
                ],
                grammar: {
                  title: { ar: 'tu و vous — والضمائر', en: 'tu and vous — the two "you"' },
                  points: [
                    { ar: 'في الفرنسي فيه اتنين "أنت": tu مع صاحبك، و vous مع الغريب أو الرسمي أو الجمع.', en: 'French has two "you": tu for friends, vous for strangers, formal speech or a group.' },
                    { ar: 'الفعل بيتغير حسب الضمير: je vais, tu vas, vous allez.', en: 'The verb changes with the pronoun: je vais, tu vas, vous allez.' },
                    { ar: 'الجملة بالترتيب: فاعل + فعل + (مفعول).', en: 'Word order is subject + verb + (object).' },
                    { ar: 'الفرنسي فيه حروف أنفية (on, an, in) لازم تتطلع من الأنف.', en: 'French has nasal vowels (on, an, in) that come through the nose.' }
                  ],
                  table: [
                    { a: 'tu parles', b: 'أنت بتتكلم (لصاحبك)' },
                    { a: 'vous parlez', b: 'حضرتك بتتكلم / إنتوا بتتكلموا' },
                    { a: 'je parle', b: 'أنا بتكلم' }
                  ],
                  note: { ar: 'لو مش متأكد استخدم vous — دي الأسلم دايمًا.', en: 'If unsure, use vous — it is always safe.' }
                },
                reading: {
                  title: { ar: 'في المقهى', en: 'At the café' },
                  linesEn: ['Julie entre dans un café à Paris.', '« Bonjour, monsieur ! » dit-elle.', '« Bonjour, madame. Comment allez-vous ? »', '« Je vais bien, merci. Un café, s\'il vous plaît. »', '« Très bien. »', 'Julie sourit. Paris est belle le matin.'],
                  linesAr: ['جولي دخلت مقهى في باريس.', '"صباح الخير يا سيد!" قالت.', '"صباح الخير يا مدام. إزاي حضرتك؟"', '"أنا بخير شكراً. قهوة من فضلك."', '"تمام."', 'جولي ابتسمت. باريس حلوة الصبح.'],
                  questions: [
                    { q: 'Où est Julie ?', qMeaning: 'جولي فين؟', options: ['Au café', 'À l\'école', 'À la maison'], answer: 0 },
                    { q: 'Que commande-t-elle ?', qMeaning: 'طلبت إيه؟', options: ['Un café', 'Un thé', 'De l\'eau'], answer: 0 }
                  ]
                },
                listening: [
                  ['Bonjour, comment allez-vous ?', ['Bonjour, comment allez-vous ?', 'Bonsoir, ça va ?', 'Au revoir !'], 0, 'صباح الخير، إزاي حضرتك؟'],
                  ['Merci beaucoup.', ['Merci beaucoup', 'Pardon', 'Salut'], 0, 'شكراً جزيلاً.'],
                  ['Au revoir, à demain !', ['Au revoir', 'Bonsoir', 'Bonjour'], 0, 'إلى اللقاء، لبكرة!']
                ],
                speaking: [
                  ['Bonjour ! Comment allez-vous ?', 'صباح الخير! إزاي حضرتك؟', 'بونجور! كومان تاليه ڤو'],
                  ['Je m\'appelle Camille.', 'اسمي كاميل.', 'جُو مابيل كامي'],
                  ['Merci beaucoup, au revoir !', 'شكراً جزيلاً، إلى اللقاء!', 'ميرسي بوكو، أو رِڤوار']
                ],
                conversation: {
                  setting: { ar: 'لينا بتقابل جارتها الجديدة على السلم', en: 'Lina meets her new neighbour on the stairs' },
                  lines: [
                    ['Lina', 'Bonjour ! Je m\'appelle Lina.', 'صباح الخير! اسمي لينا.', 'بونجور! جُو مابيل لينا'],
                    ['Marie', 'Bonjour Lina ! Moi, c\'est Marie.', 'صباح الخير يا لينا! وأنا ماري.', 'بونجور لينا! موا، سي ماري'],
                    ['Lina', 'Enchantée ! Comment allez-vous ?', 'فرصة سعيدة! إزاي حضرتك؟', 'أونشانتي! كومان تاليه ڤو'],
                    ['Marie', 'Je vais très bien, merci. Et vous ?', 'أنا كويسة جداً، شكراً. وحضرتك؟', 'جُو ڤي تري بيان، ميرسي. إيه ڤو'],
                    ['Lina', 'Ça va, merci. Vous habitez ici ?', 'تمام، شكراً. حضرتك ساكنة هنا؟', 'سا ڤا، ميرسي. ڤو أَبيتيه إيسي'],
                    ['Marie', 'Oui, au deuxième étage.', 'أيوه، في الدور التاني.', 'وي، أو دُوزييم إيتاج'],
                    ['Lina', 'Très bien ! Au revoir, Marie.', 'تمام! إلى اللقاء يا ماري.', 'تري بيان! أو رِڤوار، ماري'],
                    ['Marie', 'Au revoir, à bientôt !', 'إلى اللقاء، قريب!', 'أو رِڤوار، آ بيانتو']
                  ],
                  vocab: [['Moi, c\'est', 'أنا اسمي'], ['habitez', 'تسكن'], ['étage', 'دور (في عمارة)'], ['à bientôt', 'أشوفك قريب'], ['très bien', 'كويس جداً']],
                  questions: [
                    { q: 'Où habite Marie ?', qMeaning: 'ماري ساكنة فين؟', options: ['Au deuxième étage', 'Au premier étage', 'Au rez-de-chaussée'], answer: 0 },
                    { q: 'Comment dit Marie bonjour ?', qMeaning: 'ماري ردّت التحية إزاي؟', options: ['Bonjour Lina', 'Salut', 'Bonsoir'], answer: 0 },
                    { q: 'Que dit Lina à la fin ?', qMeaning: 'لينا قالت إيه في الآخر؟', options: ['Au revoir', 'Bonjour', 'Merci'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Écris un peu' },
                  tasks: [
                    { ar: 'اكتب تحية رسمية وتحية بين الأصحاب.', en: 'Write one formal greeting and one informal greeting.' },
                    { ar: 'عرّف بنفسك: Je m\'appelle ... Enchanté(e).', en: 'Introduce yourself: Je m\'appelle … Enchanté(e).' }
                  ]
                }
              },
              {
                id: 'fr-a0-u1-l2', topic: 'Nombres', title: 'Les nombres de 1 à 10', titleMeaning: 'الأرقام من ١ لـ ١٠', minutes: 14,
                goals: { ar: ['تعدّ بالفرنسي من ١ لـ ١٠', 'تسأل عن العمر', 'تفرّق بين اللفظ الرسّمي والعادي'],
                         en: ['Count from 1 to 10 in French', 'Ask about age', 'Hear the tricky sounds'] },
                vocab: [
                  ['un', 'واحد (١)', 'أَنْ', 'un livre', 'كتاب واحد'],
                  ['deux', 'اتنين (٢)', 'دُو', 'deux amis', 'صاحبين'],
                  ['trois', 'تلاتة (٣)', 'تروا', 'trois chats', 'تلات قطط'],
                  ['quatre', 'أربعة (٤)', 'كاتر', 'quatre fleurs', 'أربع زهور'],
                  ['cinq', 'خمسة (٥)', 'سانك', 'cinq minutes', 'خمس دقايق'],
                  ['six', 'ستة (٦)', 'سيس', 'six heures', 'ست ساعات'],
                  ['sept', 'سبعة (٧)', 'سيت', 'sept jours', 'سبع أيام'],
                  ['huit', 'تمانية (٨)', 'ويت', 'huit personnes', 'تمن أشخاص'],
                  ['neuf', 'تسعة (٩)', 'نُف', 'neuf ans', 'تسع سنين'],
                  ['dix', 'عشرة (١٠)', 'ديس', 'dix euros', 'عشر يورو']
                ],
                related: [
                  ['premier / première', 'الأول / الأولى', 'بروميي', 'le premier jour', 'اليوم الأول'],
                  ['numéro', 'رقم', 'نوميرو', 'Quel est votre numéro ?', 'رقم حضرتك كام؟'],
                  ['combien ?', 'كام؟', 'كومبيان', 'Combien de livres ?', 'كام كتاب؟'],
                  ['âge', 'سِن', 'آج', 'Quel âge avez-vous ?', 'حضرتك عندك كام سنة؟'],
                  ['ans', 'سنين', 'آن', 'J\'ai dix ans.', 'عندي عشر سنين.']
                ],
                expressions: [
                  ['Quel âge avez-vous ?', 'حضرتك عندك كام سنة؟', 'كيل آج أڤيه ڤو', 'Quel âge avez-vous, monsieur ?', 'حضرتك عندك كام سنة يا سيد؟'],
                  ['J\'ai dix ans', 'عندي عشر سنين', 'جي ديس آن', 'J\'ai dix ans aujourd\'hui.', 'عندي عشر سنين النهاردة.'],
                  ['Quel est votre numéro ?', 'رقم حضرتك كام؟', 'كيل إي ڤوتر نوميرو', 'Quel est votre numéro de téléphone ?', 'رقم تليفون حضرتك كام؟'],
                  ['Mon numéro est ...', 'رقمي هو ...', 'مون نوميرو إي', 'Mon numéro est le 06 12 34.', 'رقمي هو ٠٦ ١٢ ٣٤.']
                ],
                examples: [
                  ['J\'ai deux frères et trois sœurs.', 'عندي أخّين وتلات أخوات.', 'جي دُو فرير إي تروا سير', ['J\'ai', 'deux', 'frères', 'et', 'trois', 'sœurs']],
                  ['Il a dix ans.', 'هو عنده عشر سنين.', 'إيل آ ديس آن', ['Il', 'a', 'dix', 'ans']],
                  ['Combien de personnes ?', 'كام شخص؟', 'كومبيان دُو بيرسون', ['Combien', 'de', 'personnes']],
                  ['Mon numéro est le neuf, huit.', 'رقمي تسعة وتمانية.', 'مون نوميرو إي لُو نُف، ويت', ['Mon', 'numéro', 'est', 'le', 'neuf']]
                ],
                grammar: {
                  title: { ar: 'العمر بحرف الجر avoir مش être', en: 'Age uses avoir, not être' },
                  points: [
                    { ar: 'في الفرنسي العمر بيتقال بالفعل avoir (يملك): J\'ai dix ans — حرفياً "أنا أملك عشر سنين".', en: 'French uses avoir literally "to have" for age: J\'ai dix ans.' },
                    { ar: 'الاحظ إن الفرنسي مش بيقول "سنين" مفردة إلا مع un: un an / une année.', en: 'Use an / année for years of age.' },
                    { ar: 'quatre و cinq و huit فيهم أصوات صعبة — اسمع الفرق بينهم.', en: 'quatre, cinq and huit hide tricky sounds — listen carefully.' },
                    { ar: 'الجمع: بنضيف s على معظم الأسماء: un livre → deux livres.', en: 'Plural: add s to most nouns.' }
                  ],
                  table: [
                    { a: 'J\'ai huit ans.', b: 'عندي تمن سنين' },
                    { a: 'Il a vingt ans.', b: 'هو عنده عشرين سنة' },
                    { a: 'Nous avons deux enfants.', b: 'عندنا طفلين' }
                  ],
                  note: { ar: 'اسم الفعل ده avoir ومصر عليه: j\'ai، tu as، il a، nous avons.', en: 'Learn the avoir forms by heart: j\'ai, tu as, il a, nous avons.' }
                },
                reading: {
                  title: { ar: 'عيد ميلاد لوكا', en: 'Luca\'s birthday' },
                  linesEn: ['Aujourd\'hui, c\'est l\'anniversaire de Luca.', 'Il a neuf ans.', 'Sa sœur a six ans et son frère a dix ans.', 'Il y a neuf bougies sur le gâteau.', '« Quel âge as-tu ? » demande son ami.', '« J\'ai neuf ans ! » répond Luca.'],
                  linesAr: ['النهاردة عيد ميلاد لوكا.', 'هو عنده تسع سنين.', 'أخته عندها ست سنين وأخوه عنده عشر.', 'فيه تسع شموع على التورتة.', '"عندك كام سنة؟" سأله صاحبه.', '"عندي تسع سنين!" رد لوكا.'],
                  questions: [
                    { q: 'Quel âge a Luca ?', qMeaning: 'لوكا عنده كام سنة؟', options: ['Neuf ans', 'Six ans', 'Dix ans'], answer: 0 },
                    { q: 'Combien de bougies ?', qMeaning: 'كام شمعة؟', options: ['Neuf', 'Six', 'Dix'], answer: 0 }
                  ]
                },
                listening: [
                  ['J\'ai sept ans.', ['sept', 'six', 'neuf'], 0, 'عندي سبع سنين.'],
                  ['Quel âge avez-vous ?', ['Quel âge avez-vous ?', 'Comment allez-vous ?', 'Quel est votre numéro ?'], 0, 'حضرتك عندك كام سنة؟'],
                  ['Il y a cinq fleurs.', ['cinq', 'deux', 'dix'], 0, 'فيه خمس زهور.']
                ],
                speaking: [
                  ['J\'ai dix ans.', 'عندي عشر سنين.', 'جي ديس آن'],
                  ['Combien de frères avez-vous ?', 'عندك كام أخ؟', 'كومبيان دُو فرير أڤيه ڤو'],
                  ['Mon numéro est le six, deux.', 'رقمي ستة واتنين.', 'مون نوميرو إي لُو سيس، دُو']
                ],
                conversation: {
                  setting: { ar: 'معلمة بتسأل الأطفال في الفصل', en: 'A teacher asking the children in class' },
                  lines: [
                    ['La maîtresse', 'Bonjour les enfants ! Quel âge avez-vous ?', 'صباح الخير يا أولاد! عندكم كام سنة؟', 'بونجور لي زانفان! كيل آج أڤيه ڤو'],
                    ['Emma', 'J\'ai huit ans, madame.', 'عندي تمن سنين يا مدام.', 'جي ويت آن، مادام'],
                    ['Théo', 'J\'ai neuf ans. J\'ai deux frères.', 'عندي تسع سنين. عندي أخّين.', 'جي نُف آن. جي دُو فرير'],
                    ['La maîtresse', 'Très bien, Théo. Et toi, Emma ?', 'تمام يا تيو. وأنتِ يا إيما؟', 'تري بيان، تيو. إي توا، إيما'],
                    ['Emma', 'J\'ai une sœur et un chat.', 'عندي أخت وقطة.', 'جي أون سير إي أَنْ شا'],
                    ['Théo', 'Et quel est ton numéro de téléphone ?', 'ورقم تليفونك كام؟', 'إي كيل إي تون نوميرو دُو تيليفون'],
                    ['Emma', 'Mon numéro est le six, trois, sept.', 'رقمي ستة، تلاتة، سبعة.', 'مون نوميرو إي لُو سيس، تروا، سيت'],
                    ['La maîtresse', 'Bravo les enfants !', 'برافو يا أولاد!', 'براڤو لي زانفان']
                  ],
                  vocab: [['maîtresse', 'معلمة'], ['enfants', 'أولاد'], ['et toi', 'وأنتِ'], ['chat', 'قطة'], ['bravo', 'برافو']],
                  questions: [
                    { q: 'Quel âge a Emma ?', qMeaning: 'إيما عندها كام سنة؟', options: ['Huit ans', 'Neuf ans', 'Six ans'], answer: 0 },
                    { q: 'Combien de frères a Théo ?', qMeaning: 'تيو عنده كام أخ؟', options: ['Deux', 'Un', 'Trois'], answer: 0 },
                    { q: 'Que donne Emma ?', qMeaning: 'إيما أدّت إيه؟', options: ['Son numéro', 'Son âge seulement', 'Rien'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Écris un peu' },
                  tasks: [
                    { ar: 'اكتب أعمار عيلتك بالأرقام الفرنسية.', en: 'Write your family\'s ages using French numbers.' },
                    { ar: 'اكتب جملتين بالفعل avoir: J\'ai ... / Il a ...', en: 'Write two sentences with avoir: J\'ai … / Il a …' }
                  ]
                }
              },
              {
                id: 'fr-a0-u1-l3', topic: 'Se présenter', title: 'Se présenter', titleMeaning: 'التعريف بنفسك', minutes: 13,
                goals: { ar: ['تقول اسمك وسنك وبلدك', 'تسأل حد عن نفسه', 'تستخدم الأفعال être و avoir'],
                         en: ['Say your name, age and country', 'Ask someone about themselves', 'Use être and avoir'] },
                vocab: [
                  ['je m\'appelle', 'اسمي', 'جُو مابيل', 'Je m\'appelle Nadia.', 'اسمي نادية.'],
                  ['je suis', 'أنا (أكون)', 'جُو سوي', 'Je suis égyptienne.', 'أنا مصرية.'],
                  ['égyptien / égyptienne', 'مصري / مصرية', 'إيجيبتيان', 'Elle est égyptienne.', 'هي مصرية.'],
                  ['français / française', 'فرنسي / فرنسية', 'فرانسيه', 'Il est français.', 'هو فرنسي.'],
                  ['habiter', 'يسكن', 'أبيتيه', 'J\'habite au Caire.', 'أنا ساكنة في القاهرة.'],
                  ['parler', 'يتكلم', 'بارليه', 'Je parle un peu français.', 'بتكلم فرنسي شوية.'],
                  ['apprendre', 'يتعلّم', 'أبروند', 'J\'apprends le français.', 'بتعلّم فرنسي.'],
                  ['étudiant', 'طالب', 'إتوديان', 'Je suis étudiant.', 'أنا طالب.']
                ],
                related: [
                  ['ville', 'مدينة', 'ڤيل', 'Quelle ville ?', 'أي مدينة؟'],
                  ['pays', 'بلد', 'بيي', 'Quel pays ?', 'أي بلد؟'],
                  ['langue', 'لغة', 'لانج', 'Je parle deux langues.', 'بتكلم لغتين.'],
                  ['aussi', 'كمان / برضه', 'أوسي', 'Moi aussi !', 'وأنا كمان!'],
                  ['un peu', 'شوية', 'أَنْ بُو', 'Un peu, s\'il vous plaît.', 'شوية من فضلك.']
                ],
                expressions: [
                  ['Je m\'appelle ... et j\'ai ... ans.', 'اسمي ... وعندي ... سنة.', 'جُو مابيل ... إي جي ... آن', 'Je m\'appelle Omar et j\'ai douze ans.', 'اسمي عمر وعندي اتناشر سنة.'],
                  ['Je suis égyptien(ne).', 'أنا مصري / مصرية.', 'جُو سوي إيجيبتيان', 'Je suis égyptienne, je suis du Caire.', 'أنا مصرية، من القاهرة.'],
                  ['J\'habite à ...', 'أنا ساكن في ...', 'أبيت آ', 'J\'habite à Alexandrie.', 'أنا ساكنة في الإسكندرية.'],
                  ['Comment vous appelez-vous ?', 'اسم حضرتك إيه؟', 'كومان ڤو زابليه ڤو', 'Pardon, comment vous appelez-vous ?', 'لو سمحت، اسم حضرتك إيه؟']
                ],
                examples: [
                  ['Je m\'appelle Nadia et je suis égyptienne.', 'اسمي نادية وأنا مصرية.', 'جُو مابيل نادية إي جُو سوي إيجيبتيان', ['Je', 'm\'appelle', 'Nadia', 'et', 'je', 'suis', 'égyptienne']],
                  ['J\'habite à Paris avec ma famille.', 'أنا ساكنة في باريس مع عيلتي.', 'أبيت آ باري أڤيك ما فامي', ['J\'habite', 'à', 'Paris', 'avec', 'ma', 'famille']],
                  ['Je parle anglais et un peu français.', 'بتكلم إنجليزي وفرنسي شوية.', 'جُو بارل أنجلي إي أَنْ بُو فرانسيه', ['Je', 'parle', 'anglais', 'et', 'un', 'peu', 'français']],
                  ['Comment vous appelez-vous ?', 'اسم حضرتك إيه؟', 'كومان ڤو زابليه ڤو', ['Comment', 'vous', 'appelez-vous']]
                ],
                grammar: {
                  title: { ar: 'الفعلين الأساسيين: être و avoir', en: 'The two core verbs: être and avoir' },
                  points: [
                    { ar: 'être = يكون، وبنستخدمه للتعريف بنفسك: Je suis étudiant.', en: 'être = to be: Je suis étudiant.' },
                    { ar: 'avoir = يملك، وبنستخدمه للعمر والملكية: J\'ai deux frères.', en: 'avoir = to have: J\'ai deux frères.' },
                    { ar: 'الصفة بتتغير مع المذكر والمؤنث: égyptien → égyptienne.', en: 'Adjectives agree: égyptien → égyptienne.' },
                    { ar: 'الجنسيات بتتكتب بحرف صغير في الفرنسي.', en: 'Nationalities are lowercase in French.' }
                  ],
                  table: [
                    { a: 'Je suis', b: 'أنا' },
                    { a: 'Tu es / Vous êtes', b: 'أنت / حضرتك' },
                    { a: 'Il / Elle est', b: 'هو / هي' },
                    { a: 'J\'ai', b: 'عندي' }
                  ],
                  note: { ar: 'je → j\' قبل حرف متحرك: j\'habite، j\'aime.', en: 'je becomes j\' before a vowel.' }
                },
                reading: {
                  title: { ar: 'طالبة جديدة في باريس', en: 'A new student in Paris' },
                  linesEn: ['Nadia est nouvelle dans la classe.', 'Elle est égyptienne et elle habite à Paris.', '« Je m\'appelle Nadia. J\'ai treize ans. »', '« Bienvenue ! Tu parles français ? »', '« Oui, un peu. J\'apprends le français. »', 'Les élèves sont contents.'],
                  linesAr: ['نادية جديدة في الفصل.', 'هي مصرية وساكنة في باريس.', '"اسمي نادية. عندي تلتاشر سنة."', '"أهلاً! بتتكلمي فرنسي؟"', '"أيوه، شوية. أنا بتعلّم فرنسي."', 'الطلاب مبسوطين.'],
                  questions: [
                    { q: 'Où habite Nadia ?', qMeaning: 'نادية ساكنة فين؟', options: ['À Paris', 'Au Caire', 'À Lyon'], answer: 0 },
                    { q: 'Quel âge a Nadia ?', qMeaning: 'نادية عندها كام سنة؟', options: ['Treize ans', 'Trois ans', 'Douze ans'], answer: 0 }
                  ]
                },
                listening: [
                  ['Je m\'appelle Nadia.', ['Nadia', 'Marie', 'Lina'], 0, 'اسمي نادية.'],
                  ['J\'habite au Caire.', ['Le Caire', 'Paris', 'Rome'], 0, 'أنا ساكنة في القاهرة.'],
                  ['Comment vous appelez-vous ?', ['Comment vous appelez-vous ?', 'Comment allez-vous ?', 'Quel âge avez-vous ?'], 0, 'اسم حضرتك إيه؟']
                ],
                speaking: [
                  ['Je m\'appelle ... et je suis égyptien(ne).', 'اسمي ... وأنا مصري/مصرية.', 'جُو مابيل ... إي جُو سوي إيجيبتيان'],
                  ['Comment vous appelez-vous ?', 'اسم حضرتك إيه؟', 'كومان ڤو زابليه ڤو'],
                  ['J\'apprends le français.', 'أنا بتعلّم فرنسي.', 'أبرون لُو فرانسيه']
                ],
                conversation: {
                  setting: { ar: 'يوم أول في كورس اللغة', en: 'First day at a language course' },
                  lines: [
                    ['Paul', 'Bonjour ! Comment vous appelez-vous ?', 'صباح الخير! اسم حضرتك إيه؟', 'بونجور! كومان ڤو زابليه ڤو'],
                    ['Nadia', 'Je m\'appelle Nadia. Et vous ?', 'اسمي نادية. وحضرتك؟', 'جُو مابيل نادية. إي ڤو'],
                    ['Paul', 'Moi, c\'est Paul. Vous êtes française ?', 'أنا بول. حضرتك فرنسية؟', 'موا، سي بول. ڤو زيت فرانسي'],
                    ['Nadia', 'Non, je suis égyptienne. J\'habite au Caire.', 'لأ، أنا مصرية. ساكنة في القاهرة.', 'نون، جُو سوي إيجيبتيان. أبيت أو كير'],
                    ['Paul', 'Intéressant ! Vous parlez bien français.', 'ممتع! بتتكلمي فرنسي كويس.', 'إنترسان! ڤو بارليه بيان فرانسيه'],
                    ['Nadia', 'Merci ! J\'apprends le français depuis un an.', 'شكراً! بتعلّم فرنسي من سنة.', 'ميرسي! أبرون لُو فرانسيه دُوبوي أَنْ آن'],
                    ['Paul', 'Vous êtes étudiante ?', 'حضرتك طالبة؟', 'ڤو زيت إتوديانت'],
                    ['Nadia', 'Oui, j\'étudie à l\'université.', 'أيوه، بدرس في الجامعة.', 'وي، جيتودي آ لونيڤرسيتي']
                  ],
                  vocab: [['depuis', 'من (زمن)'], ['université', 'جامعة'], ['intéressant', 'ممتع'], ['bien', 'كويس'], ['Non', 'لأ']],
                  questions: [
                    { q: 'Quelle est la nationalité de Nadia ?', qMeaning: 'نادية جنسيتها إيه؟', options: ['Égyptienne', 'Française', 'Italienne'], answer: 0 },
                    { q: 'Depuis combien de temps apprend-elle le français ?', qMeaning: 'بتتعلم فرنسي من قد إيه؟', options: ['Un an', 'Deux ans', 'Un mois'], answer: 0 },
                    { q: 'Où étudie-t-elle ?', qMeaning: 'بتدرس فين؟', options: ['À l\'université', 'Au lycée', 'À la maison'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Écris un peu' },
                  tasks: [
                    { ar: 'اكتب ٤ جمل تعرّف بنفسك: الاسم، العمر، البلد، واللغة اللي بتتعلمها.', en: 'Write four sentences: name, age, country, language you are learning.' },
                    { ar: 'اكتب سؤالين تسألهم لحد جديد.', en: 'Write two questions you would ask someone new.' }
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
            title: 'La vie quotidienne', titleMeaning: 'الحياة اليومية',
            summary: { ar: 'يومك، الوقت، والعادات.', en: 'Your day, the time and habits.' },
            lessons: [
              {
                id: 'fr-a1-u1-l1', topic: 'Routine', title: 'Ma journée', titleMeaning: 'يومي', minutes: 15,
                goals: { ar: ['تحكي يومك بالترتيب', 'تستخدم المضارع مع الضمائر', 'تسأل وتقول الساعة'],
                         en: ['Describe your day in order', 'Use the present tense with pronouns', 'Ask and tell the time'] },
                vocab: [
                  ['se réveiller', 'يصحى', 'سُو ريفيي', 'Je me réveille à sept heures.', 'بصحى الساعة سبعة.'],
                  ['se lever', 'يقوم من السرير', 'سُو لُوڤيه', 'Il se lève tôt.', 'هو بيقوم بدري.'],
                  ['prendre le petit-déjeuner', 'يفطر', 'بروندر لُو بُتي ديجونيه', 'Nous prenons le petit-déjeuner ensemble.', 'بنفطر مع بعض.'],
                  ['aller à l\'école', 'يروح المدرسة', 'آليه آ ليكول', 'Elle va à l\'école à pied.', 'هي بتروح المدرسة ماشي.'],
                  ['travailler', 'يشتغل', 'تراڤاييه', 'Je travaille le matin.', 'بشتغل الصبح.'],
                  ['les devoirs', 'الواجب', 'لي دُوڤوار', 'Il fait ses devoirs.', 'هو بيعمل واجبه.'],
                  ['dîner', 'يتعشى', 'دينيه', 'On dîne à huit heures.', 'بنتعشى الساعة تمانية.'],
                  ['se coucher', 'ينام', 'سُو كوشيه', 'Je me couche à dix heures.', 'بنام الساعة عشرة.']
                ],
                related: [
                  ['toujours', 'دايماً', 'توجور', 'Il est toujours en retard.', 'هو دايماً متأخر.'],
                  ['souvent', 'كثيراً', 'سوڤان', 'Je lis souvent le soir.', 'بقرأ كثير بالليل.'],
                  ['parfois', 'أحياناً', 'بارفوا', 'Parfois je marche.', 'أحياناً بمشي.'],
                  ['jamais', 'أبداً', 'جاميه', 'Je ne fume jamais.', 'عمري ما بدخّن.'],
                  ['tôt', 'بدري', 'تو', 'Elle se lève tôt.', 'هي بتقوم بدري.'],
                  ['en retard', 'متأخر', 'أون رُتار', 'Ne sois pas en retard !', 'متتأخرش!']
                ],
                expressions: [
                  ['À quelle heure tu te réveilles ?', 'بتصحى الساعة كام؟', 'آ كيل أور تو سُو ريفيي', 'À quelle heure tu te réveilles ?', 'بتصحى الساعة كام؟'],
                  ['Je me réveille à sept heures.', 'بصحى الساعة سبعة.', 'جُو سُو ريفيي آ سيت أور', 'Je me réveille à sept heures du matin.', 'بصحى الساعة سبعة الصبح.'],
                  ['Quelle heure est-il ?', 'الساعة كام؟', 'كيل أور إيتيل', 'Pardon, quelle heure est-il ?', 'لو سمحت، الساعة كام؟'],
                  ['Il est huit heures et demie.', 'الساعة تمانية والنص.', 'إيل إي ويت أور إي دُومي', 'Il est huit heures et demie.', 'الساعة تمانية والنص.']
                ],
                examples: [
                  ['Je me réveille à sept heures et je prends le petit-déjeuner.', 'بصحى الساعة سبعة وبفطر.', 'جُو سُو ريفيي آ سيت أور إي جُو برون لُو بُتي ديجونيه', ['Je', 'me', 'réveille', 'à', 'sept', 'heures']],
                  ['Elle va à l\'école à pied.', 'هي بتروح المدرسة ماشي.', 'إيل ڤا آ ليكول آ بيه', ['Elle', 'va', 'à', 'l\'école', 'à', 'pied']],
                  ['Nous dînons à huit heures.', 'بنتعشى الساعة تمانية.', 'نو دينون آ ويت أور', ['Nous', 'dînons', 'à', 'huit', 'heures']],
                  ['Tu te couches toujours tard.', 'أنت دايماً بتنام متأخر.', 'تو سُو كوش توجور تار', ['Tu', 'te', 'couches', 'toujours', 'tard']]
                ],
                grammar: {
                  title: { ar: 'الأفعال الضميرية (se réveiller) والمضارع', en: 'Reflexive verbs and the present tense' },
                  points: [
                    { ar: 'أفعال الروتين اليومي ضميرية: je me réveille، tu te lèves، il se couche.', en: 'Daily-routine verbs are reflexive: je me réveille, tu te lèves.' },
                    { ar: 'المضارع في الفرنسي بيمثّل الحاضر والمستمر مع بعض: Je travaille = بشتغل /我正在بشتغل.', en: 'The French present covers both simple and continuous: Je travaille = I work / I am working.' },
                    { ar: 'ظروف التكرار بتيجي بعد الفعل: Je marche souvent.', en: 'Frequency adverbs come after the verb.' },
                    { ar: 'الساعة: il est + رقم + heures، والنص et demie، والثلث et quart.', en: 'Time: il est … heures, et demie, et quart.' }
                  ],
                  table: [
                    { a: 'je me réveille', b: 'أنا بصحى' },
                    { a: 'nous nous levons', b: 'إحنا بنقوم' },
                    { a: 'il est huit heures', b: 'الساعة تمانية' }
                  ],
                  note: { ar: 'الحرف بيمنع اللفظ: في sept و huit الحرف الأخير بيتنطق، لكن في autres لأ.', en: 'Silent letters hide everywhere in French — trust the audio.' }
                },
                reading: {
                  title: { ar: 'يوم فلور', en: 'Fleur\'s day' },
                  linesEn: ['Fleur se réveille à six heures et demie.', 'Elle prend le petit-déjeuner avec sa mère.', 'Ensuite, elle va à l\'école en bus.', 'L\'après-midi, elle fait ses devoirs et elle lit.', 'Le soir, on dîne en famille à huit heures.', 'Elle se couche à dix heures.'],
                  linesAr: ['فلور بتصحى ٦:٣٠.', 'بتفطر مع مامتها.', 'بعدين بتروح المدرسة بالأتوبيس.', 'بعد الضهر بتعمل واجبها وبتقرأ.', 'بالليل بتتعشى مع العيلة الساعة تمانية.', 'وبتنام الساعة عشرة.'],
                  questions: [
                    { q: 'À quelle heure se réveille Fleur ?', qMeaning: 'فلور بتصحى الساعة كام؟', options: ['Six heures et demie', 'Sept heures', 'Dix heures'], answer: 0 },
                    { q: 'Comment va-t-elle à l\'école ?', qMeaning: 'بتروح المدرسة إزاي؟', options: ['En bus', 'À pied', 'En voiture'], answer: 0 }
                  ]
                },
                listening: [
                  ['Je me couche à dix heures.', ['dix heures', 'deux heures', 'douze heures'], 0, 'بنام الساعة عشرة.'],
                  ['Elle se lève tôt.', ['tôt', 'tard', 'toujours'], 0, 'هي بتقوم بدري.'],
                  ['À quelle heure prends-tu le petit-déjeuner ?', ['À quelle heure prends-tu le petit-déjeuner ?', 'Où prends-tu le petit-déjeuner ?', 'Que prends-tu au petit-déjeuner ?'], 0, 'بتفطر الساعة كام؟']
                ],
                speaking: [
                  ['Je me réveille à sept heures.', 'بصحى الساعة سبعة.', 'جُو سُو ريفيي آ سيت أور'],
                  ['À quelle heure tu te couches ?', 'بتنام الساعة كام؟', 'آ كيل أور تو سُو كوش'],
                  ['Je travaille le matin.', 'بشتغل الصبح.', 'جُو تراڤاي لُو ماتان']
                ],
                conversation: {
                  setting: { ar: 'حبيبين بيتكلموا عن يومهم', en: 'Two friends comparing their days' },
                  lines: [
                    ['Lucie', 'À quelle heure tu te réveilles ?', 'بتصحى الساعة كام؟', 'آ كيل أور تو سُو ريفيي'],
                    ['Marc', 'À six heures et demie. Et toi ?', 'الساعة ٦:٣٠. وأنتِ؟', 'آ سيس أور إي دُومي. إي توا'],
                    ['Lucie', 'À sept heures. Je prends toujours le petit-déjeuner.', 'الساعة سبعة. أنا دايماً بفطر.', 'آ سيت أور. جُو برون توجور لُو بُتي ديجونيه'],
                    ['Marc', 'Moi, jamais ! Je n\'ai pas le temps.', 'وأنا أبداً! معنديش وقت.', 'موا، جاميه! جُو ني پا لُو تان'],
                    ['Lucie', 'Et à quelle heure tu te couches ?', 'وبتنام الساعة كام؟', 'إي آ كيل أور تو سُو كوش'],
                    ['Marc', 'Vers minuit. Je travaille beaucoup.', 'حوالي نص الليل. بشتغل كتير.', 'ڤير مينوي. جُو تراڤاي بوكو'],
                    ['Lucie', 'C\'est trop tard ! Dors tôt ce soir.', 'ده متأخر أوي! نام بدري النهاردة.', 'سي ترو تار! دور تو سُو سوار'],
                    ['Marc', 'Tu as raison. Bonne nuit !', 'عندك حق. تصبح على خير!', 'تو آ ريزون. بون نوي']
                  ],
                  vocab: [['vers', 'حوالي'], ['minuit', 'نص الليل'], ['beaucoup', 'كتير'], ['trop', 'أوي'], ['Tu as raison', 'عندك حق']],
                  questions: [
                    { q: 'À quelle heure se réveille Marc ?', qMeaning: 'مارك بيصحى الساعة كام؟', options: ['Six heures et demie', 'Sept heures', 'Minuit'], answer: 0 },
                    { q: 'Pourquoi Marc ne prend pas le petit-déjeuner ?', qMeaning: 'مارك بيفطرش ليه؟', options: ['Il n\'a pas le temps', 'Il n\'aime pas', 'Il est malade'], answer: 0 },
                    { q: 'À quelle heure se couche-t-il ?', qMeaning: 'بينام الساعة كام؟', options: ['Vers minuit', 'À dix heures', 'À huit heures'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Écris un peu' },
                  tasks: [
                    { ar: 'اكتب يومك في ٥ جمل بالترتيب مع الساعات.', en: 'Write your day in five ordered sentences with times.' },
                    { ar: 'اكتب جملتين بظرف تكرار (toujours / jamais).', en: 'Write two sentences with toujours / jamais.' }
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
