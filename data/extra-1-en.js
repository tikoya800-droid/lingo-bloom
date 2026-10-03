/* ==========================================================================
   LingoBloom — curriculum expansion · ENGLISH
   Adds real native lessons with LB.addUnits(). No UI change needed.
   ========================================================================== */
(function () {
  if (!LB.addUnits) return;

  LB.addUnits('en', 'A1', [
    {
      title: 'Home & Food', titleMeaning: 'البيت والأكل',
      summary: { ar: 'أوضة البيت، أدوات المطبخ، والوجبات التلاتة.', en: 'Rooms, kitchen things and the three daily meals.' },
      lessons: [
        {
          id: 'en-a1-u2-l1', topic: 'Home', title: 'At Home', titleMeaning: 'في البيت', minutes: 14,
          goals: { ar: ['تسمّي أوض البيت والأثاث', 'تقول إنت ساكن فين', 'توصف بيتك في جملة أو جملتين'],
                   en: ['Name rooms and furniture', 'Say where you live', 'Describe your home in a sentence or two'] },
          vocab: [
            ['home', 'بيت', 'هوم', 'I am at home.', 'أنا في البيت.'],
            ['room', 'أوضة', 'روم', 'This room is big.', 'الأوضة دي كبيرة.'],
            ['kitchen', 'مطبخ', 'كيتشن', 'Mum is in the kitchen.', 'ماما في المطبخ.'],
            ['bedroom', 'أوضة النوم', 'بيدروم', 'My bedroom is small.', 'أوضة نومي صغيرة.'],
            ['bathroom', 'الحمّام', 'باثروم', 'The bathroom is there.', 'الحمّام هناك.'],
            ['living room', 'الصالة / أوضة الجلوس', 'ليفينج روم', 'We watch TV in the living room.', 'بنتفرج على التلفزيون في الصالة.'],
            ['door', 'باب', 'دور', 'Please close the door.', 'من فضلك اقفل الباب.'],
            ['window', 'شباك', 'ويندو', 'Open the window, please.', 'افتح الشباك لو سمحت.']
          ],
          related: [
            ['table', 'طربيزة', 'تيبل', 'The books are on the table.', 'الكتب على الطربيزة.'],
            ['chair', 'كرسي', 'تشير', 'Sit on the chair.', 'اقعد على الكرسي.'],
            ['bed', 'سرير', 'بيد', 'My bed is very comfortable.', 'سريري مريح جداً.'],
            ['sofa', 'كنبة', 'صوفا', 'Dad is on the sofa.', 'بابا على الكنبة.'],
            ['garden', 'جنينة', 'جاردن', 'We have a small garden.', 'عندنا جنينة صغيرة.'],
            ['key', 'مفتاح', 'كي', 'Where is the key?', 'المفتاح فين؟']
          ],
          expressions: [
            ['Where do you live?', 'إنت ساكن فين؟', 'وير دو يو ليف', 'Where do you live, Lina?', 'إنت ساكنة فين يا لينا؟'],
            ['I live in a flat.', 'أنا ساكن في شقة.', 'آي ليف إن إيه فلات', 'I live in a flat near the park.', 'ساكن في شقة جنب الجنينة.'],
            ['Come in, please!', 'اتفضل/ي ادخل!', 'كام إن بليز', 'Come in, please! Make yourself at home.', 'اتفضل ادخل! البيت بيتك.'],
            ['It is on the left.', 'على الشمال.', 'إت إز أون ذا ليفت', 'The kitchen is on the left.', 'المطبخ على الشمال.']
          ],
          examples: [
            ['My flat has two bedrooms.', 'شقتي فيها أوضتين نوم.', 'ماي فلات هاز تو بيدرومز', ['My', 'flat', 'has', 'two', 'bedrooms']],
            ['The cat is under the table.', 'القطة تحت الطربيزة.', 'ذا كات إز أندر ذا تيبل', ['The', 'cat', 'is', 'under', 'the', 'table']],
            ['We eat dinner in the kitchen.', 'بنتعشى في المطبخ.', 'وي إيت دينر إن ذا كيتشن', ['We', 'eat', 'dinner', 'in', 'the', 'kitchen']],
            ['There is a lamp next to the bed.', 'في لمبة جنب السرير.', 'ذير إز إيه لامب نيكست تو ذا بيد', ['There', 'is', 'a', 'lamp', 'next', 'to', 'the', 'bed']]
          ],
          grammar: {
            title: { ar: 'There is / There are + حروف المكان', en: 'There is / There are + prepositions of place' },
            points: [
              { ar: 'There is بنستخدمها مع المفرد: There is a table.', en: 'Use “there is” with one thing: There is a table.' },
              { ar: 'There are بنستخدمها مع الجمع: There are two chairs.', en: 'Use “there are” with many: There are two chairs.' },
              { ar: 'حروف المكان: in (جوه)، on (فوق)، under (تحت)، next to (جنب).', en: 'Prepositions: in, on, under, next to.' }
            ],
            table: [
              { a: 'in the room', b: 'The bed is in the room.' },
              { a: 'on the table', b: 'The cup is on the table.' },
              { a: 'under the bed', b: 'The cat is under the bed.' },
              { a: 'next to the door', b: 'The shoes are next to the door.' }
            ],
            note: { ar: 'لو تقدر تعدّ الحاجة بإيدك، غالباً هتاخد s في الجمع.', en: 'If you can count it in ones, it usually takes an -s in the plural.' }
          },
          reading: {
            title: { ar: 'بيت عيلة سامي', en: "Sami's family house" },
            linesEn: ['This is Sami and his family.', 'They live in a small house with a green garden.', 'There are three rooms: a living room, a kitchen and two bedrooms.', 'Sami likes the kitchen because his mother cooks there.', 'His sister likes the garden.', 'Every evening the family sits together in the living room.'],
            linesAr: ['ده سامي وعيلته.', 'ساكنين في بيت صغير بجنينة خضرا.', 'فيه تلات أوض: صالة ومطبخ وأوضتين نوم.', 'سامي بيحب المطبخ لأن مامته بتطبخ فيه.', 'أخته بتحب الجنينة.', 'كل ليلة العيلة بتقعد مع بعض في الصالة.'],
            questions: [
              { q: 'How many bedrooms are there?', qMeaning: 'فيه كام أوضة نوم؟', options: ['Two', 'Three', 'One'], answer: 0 },
              { q: 'Why does Sami like the kitchen?', qMeaning: 'سامي ليه بيحب المطبخ؟', options: ['His mother cooks there', 'It is big', 'It has a TV'], answer: 0 }
            ]
          },
          listening: [
            ['Where do you live?', ['Where do you live?', 'When do you sleep?', 'What do you eat?'], 0, 'إنت ساكن فين؟'],
            ['The kitchen is on the left.', ['The kitchen is on the left', 'The kitchen is on the right', 'The kitchen is upstairs'], 0, 'المطبخ على الشمال.'],
            ['There are two chairs in the room.', ['Two chairs', 'Two rooms', 'Two tables'], 0, 'في كرسيين في الأوضة.']
          ],
          speaking: [
            ['I live in a flat with my family.', 'أنا ساكن في شقة مع عيلتي.', 'آي ليف إن إيه فلات ويذ ماي فاميلي'],
            ['The sofa is next to the window.', 'الكنبة جنب الشباك.', 'ذا صوفا إز نيكست تو ذا ويندو'],
            ['Make yourself at home!', 'البيت بيتك!', 'ميك يورسيلف آت هوم']
          ],
          conversation: {
            setting: { ar: 'لينا بتزور بيت صاحبتها هدى', en: "Lina visits her friend Hoda's house" },
            lines: [
              ['Hoda', 'Hi, Lina! Come in, please!', 'هاي يا لينا! اتفضلي ادخلي!', 'هاي لينا! كام إن بليز'],
              ['Lina', 'Thank you! Your home is lovely.', 'شكراً! بيتكم جميل.', 'ثانك يو! يور هوم إز لافلي'],
              ['Hoda', 'This is the living room.', 'دي الصالة.', 'ذيس إز ذا ليفينج روم'],
              ['Lina', 'It is big! Is that the kitchen?', 'كبيرة! ده المطبخ؟', 'إت إز بيج! إز ذات ذا كيتشن'],
              ['Hoda', 'Yes, and my room is next to it.', 'أيوه، وأوضتي جنبه.', 'يس، آند ماي روم إز نيكست تو إت'],
              ['Lina', 'Where is the bathroom?', 'الحمّام فين؟', 'وير إز ذا باثروم'],
              ['Hoda', 'On the left, next to the door.', 'على الشمال، جنب الباب.', 'أون ذا ليفت، نيكست تو ذا دور']
            ],
            vocab: [['Come in', 'اتفضل ادخل'], ['lovely', 'جميل'], ['next to', 'جنب'], ['on the left', 'على الشمال'], ['bathroom', 'الحمّام']],
            questions: [
              { q: 'What does Hoda show first?', qMeaning: 'هدى ورّت إيه الأول؟', options: ['The living room', 'The kitchen', 'The garden'], answer: 0 },
              { q: 'Where is the bathroom?', qMeaning: 'الحمّام فين؟', options: ['On the left', 'Upstairs', 'In the garden'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
            tasks: [
              { ar: 'اوصف بيتك في ٤ جمل مستخدماً There is / There are.', en: 'Describe your home in four sentences with “there is / there are”.' },
              { ar: 'اكتب فين الأوض اللي في بيتك (next to / on the left).', en: 'Write where the rooms are (next to / on the left).' }
            ]
          }
        },
        {
          id: 'en-a1-u2-l2', topic: 'Food', title: 'Food and Meals', titleMeaning: 'الأكل والوجبات', minutes: 15,
          goals: { ar: ['تسمّي الوجبات التلاتة والأكل الأساسي', 'تطلب أكل بأسلوب مؤدّب', 'تقول بتحب إيه وبتكره إيه'],
                   en: ['Name the three meals and staple food', 'Order politely', 'Say what you like and dislike'] },
          vocab: [
            ['breakfast', 'الفطار', 'بريكفاست', 'I have breakfast at seven.', 'بتفطر الساعة سبعة.'],
            ['lunch', 'الغدا', 'لانش', 'We have lunch at school.', 'بنتغدا في المدرسة.'],
            ['dinner', 'العشا', 'دينر', 'Dinner is at eight.', 'العشا الساعة تمانية.'],
            ['bread', 'عيش', 'بريد', 'I eat bread with cheese.', 'بآكل عيش بالجبنة.'],
            ['water', 'مية', 'ووتر', 'Can I have some water?', 'ممكن شوية مية؟'],
            ['tea', 'شاي', 'تي', 'Grandma drinks tea.', 'تيتا بتشرب شاي.'],
            ['rice', 'رز', 'رايس', 'We eat rice on Fridays.', 'بناكل رز يوم الجمعة.'],
            ['chicken', 'فراخ', 'تشيكن', 'This chicken is delicious.', 'الفراخ دي لذيذة.']
          ],
          related: [
            ['egg', 'بيضة', 'إج', 'I want two eggs.', 'عايز بيضتين.'],
            ['cheese', 'جبنة', 'تشيز', 'I like white cheese.', 'بحب الجبنة البيضا.'],
            ['fruit', 'فاكهة', 'فروت', 'Fruit is good for you.', 'الفاكهة مفيدة.'],
            ['vegetables', 'خضار', 'فيجتبلز', 'Eat your vegetables!', 'كل الخضار!'],
            ['hungry', 'جعان', 'هانجري', 'I am hungry.', 'أنا جعان.'],
            ['thirsty', 'عطشان', 'ثيرستي', 'She is thirsty.', 'هي عطشانة.']
          ],
          expressions: [
            ['I am hungry.', 'أنا جعان.', 'آي آم هانجري', 'I am hungry. Let us eat!', 'أنا جعان. يلا ناكل!'],
            ['Can I have…?', 'ممكن…؟', 'كان آي هاف', 'Can I have a cup of tea, please?', 'ممكن كوباية شاي لو سمحت؟'],
            ['I would like…', 'أنا عايز/ة…', 'آي وود لايك', 'I would like some rice.', 'أنا عايزة شوية رز.'],
            ['It is delicious!', 'دي حاجة لذيذة!', 'إت إز ديليشس', 'The fish is delicious!', 'السمك لذيذ!']
          ],
          examples: [
            ['For breakfast I eat bread and cheese.', 'في الفطار بآكل عيش وجبنة.', 'فور بريكفاست آي إيت بريد آند تشيز', ['For', 'breakfast', 'I', 'eat', 'bread', 'and', 'cheese']],
            ['We drink tea after dinner.', 'بنشرب شاي بعد العشا.', 'وي درينك تي آفتر دينر', ['We', 'drink', 'tea', 'after', 'dinner']],
            ['My brother does not like fish.', 'أخويا مبياكلش سمك.', 'ماي براذر داز نوت لايك فيش', ['My', 'brother', 'does', 'not', 'like', 'fish']],
            ['Would you like some fruit?', 'تحب/ي شوية فاكهة؟', 'وود يو لايك سام فروت', ['Would', 'you', 'like', 'some', 'fruit']]
          ],
          grammar: {
            title: { ar: 'I like / I do not like + المعدود والغير معدود', en: 'I like / I do not like + countable & uncountable' },
            points: [
              { ar: 'بنقول I like + اسم، وللنفي I do not like.', en: 'Say “I like + noun”; negative is “I do not like”.' },
              { ar: 'الأسماء اللي مش بتتعدّ (water, rice, bread) مالهاش s ولا a.', en: 'Uncountable nouns (water, rice, bread) take no “a” and no plural -s.' },
              { ar: 'some بتستخدم في الإيجابي، any في السؤال والنفي.', en: 'Use “some” in positives, “any” in questions and negatives.' }
            ],
            table: [
              { a: 'I like tea.', b: 'I do not like coffee.' },
              { a: 'some bread', b: 'I want some bread.' },
              { a: 'any water', b: 'Is there any water?' },
              { a: 'How much rice?', b: 'How much is uncountable.' }
            ],
            note: { ar: 'اللي بتقدر تعرفه بالعدد خُد بالإنجليزي، واللي بتقيسه (سايل/بودرة) سيب بدون s.', en: 'Countable things take -s; liquids and powders usually do not.' }
          },
          reading: {
            title: { ar: 'فطار يوم الجمعة', en: 'Friday breakfast' },
            linesEn: ['On Friday the family eats breakfast together.', 'Grandma makes tea and eggs.', 'Sami eats bread and cheese, and drinks milk.', 'His sister eats fruit and drinks juice.', 'After breakfast they clean the kitchen together.', 'Then they visit their grandparents.'],
            linesAr: ['يوم الجمعة العيلة بتفطر مع بعض.', 'تيتا بتعمل شاي وبيض.', 'سامي بياكل عيش وجبنة، وبيشرب لبن.', 'أخته بتاكل فاكهة وبتشرب عصير.', 'بعد الفطار بينضّفوا المطبخ مع بعض.', 'وبعدين يزوروا الجد والجدة.'],
            questions: [
              { q: 'What does Sami drink?', qMeaning: 'سامي بيشرب إيه؟', options: ['Milk', 'Tea', 'Juice'], answer: 0 },
              { q: 'What do they do after breakfast?', qMeaning: 'بيعملوا إيه بعد الفطار؟', options: ['Clean the kitchen', 'Go to school', 'Watch TV'], answer: 0 }
            ]
          },
          listening: [
            ['Can I have a cup of tea, please?', ['A cup of tea', 'A glass of water', 'Some bread'], 0, 'ممكن كوباية شاي لو سمحت؟'],
            ['I do not like coffee.', ['He does not like coffee', 'He likes coffee', 'He wants tea'], 0, 'أنا مباحبش القهوة.'],
            ['Dinner is at eight o’clock.', ['At eight', 'At seven', 'At ten'], 0, 'العشا الساعة تمانية.']
          ],
          speaking: [
            ['I am hungry. Can I have some bread?', 'أنا جعان. ممكن شوية عيش؟', 'آي آم هانجري. كان آي هاف سام بريد'],
            ['I would like a cup of tea, please.', 'عايز كوباية شاي لو سمحت.', 'آي وود لايك إيه كاب أوف تي، بليز'],
            ['The food is delicious!', 'الأكل لذيذ!', 'ذا فود إز ديليشس']
          ],
          conversation: {
            setting: { ar: 'سامي وأخته في المطبخ قبل الفطار', en: 'Sami and his sister in the kitchen before breakfast' },
            lines: [
              ['Sami', 'I am hungry. What is for breakfast?', 'أنا جعان. فيه إيه في الفطار؟', 'آي آم هانجري. وات إز فور بريكفاست'],
              ['Sara', 'There are eggs and bread.', 'فيه بيض وعيش.', 'ذير آر إجز آند بريد'],
              ['Sami', 'Can I have some cheese, too?', 'ممكن جبنة كمان؟', 'كان آي هاف سام تشيز، تو'],
              ['Sara', 'Sure. Would you like tea or milk?', 'أكيد. تحب شاي ولا لبن؟', 'شور. وود يو لايك تي أور ميلك'],
              ['Sami', 'Milk, please. Where is Mum?', 'لبن لو سمحت. ماما فين؟', 'ميلك، بليز. وير إز مام'],
              ['Sara', 'In the garden. Breakfast is ready!', 'في الجنينة. الفطار جاهز!', 'إن ذا جاردن. بريكفاست إز ريدي']
            ],
            vocab: [['hungry', 'جعان'], ['for breakfast', 'في الفطار'], ['sure', 'أكيد'], ['ready', 'جاهز'], ['Mum', 'ماما']],
            questions: [
              { q: 'What does Sami want to drink?', qMeaning: 'سامي عايز يشرب إيه؟', options: ['Milk', 'Tea', 'Juice'], answer: 0 },
              { q: 'Where is Mum?', qMeaning: 'ماما فين؟', options: ['In the garden', 'In the kitchen', 'At work'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
            tasks: [
              { ar: 'اكتب فطارك كل يوم في ٣ جمل.', en: 'Write what you eat for breakfast in three sentences.' },
              { ar: 'اكتب حاجتين بتحبهم وحاجة واحدة مش بتحبها بـ I like / I do not like.', en: 'Write two likes and one dislike with “I like / I do not like”.' }
            ]
          }
        }
      ]
    },
    {
      title: 'Real Life', titleMeaning: 'الحياة الواقعية',
      summary: { ar: 'التسوّق: تشتري، تسأل عن السعر، وتجرب حاجة.', en: 'Shopping: buy things, ask about price and try items on.' },
      lessons: [
        {
          id: 'en-a2-u1-l1', topic: 'Shopping', title: 'At the Shop', titleMeaning: 'في المحل', minutes: 16,
          goals: { ar: ['تسأل عن السعر والمقاس', 'تتفق على حاجة وتعرض دفع', 'تتعامل في محل هدوم بثقة'],
                   en: ['Ask about price and size', 'Decide and pay', 'Handle a clothes shop confidently'] },
          vocab: [
            ['shop', 'محل', 'شوب', 'The shop opens at nine.', 'المحل بيفتح الساعة تسعة.'],
            ['price', 'السعر', 'برايس', 'The price is on the label.', 'السعر على اللافتة.'],
            ['cheap', 'رخيص', 'تشيب', 'This bag is cheap.', 'الشنطة دي رخيصة.'],
            ['expensive', 'غالي', 'إكسبينسف', 'That jacket is expensive.', 'الجاكيت ده غالي.'],
            ['size', 'المقاس', 'سايز', 'What size do you wear?', 'بتلبس مقاس كام؟'],
            ['receipt', 'إيصال / فاتورة', 'ريسيت', 'Keep the receipt, please.', 'خد الإيصال لو سمحت.'],
            ['discount', 'خصم', 'ديسكاونت', 'Is there a discount today?', 'فيه خصم النهاردة؟'],
            ['cash', 'كاش / نقدي', 'كاش', 'I will pay in cash.', 'هدفع كاش.']
          ],
          related: [
            ['customer', 'الزبون', 'كستمر', 'The customer is waiting.', 'الزبون مستني.'],
            ['assistant', 'البائع / الموظف', 'أسِستنت', 'The assistant is helpful.', 'الموظف متعاون.'],
            ['till', 'الكاشير', 'تيل', 'Pay at the till.', 'ادفع عند الكاشير.'],
            ['change', 'الباقي / فكة', 'تشينج', 'Here is your change.', 'ده الباقي.'],
            ['trolley', 'ترولي', 'ترولي', 'Take a trolley, please.', 'خد ترولي لو سمحت.'],
            ['bag', 'شنطة', 'باج', 'Do you need a bag?', 'محتاج شنطة؟']
          ],
          expressions: [
            ['How much is this?', 'بكام ده؟', 'هاو ماتش إز ذيس', 'Excuse me, how much is this shirt?', 'لو سمحت، القميص ده بكام؟'],
            ['Can I try it on?', 'ممكن أقيسه؟', 'كان آي تراي إت أون', 'Can I try it on, please?', 'ممكن أقيسه لو سمحت؟'],
            ['Do you have a bigger size?', 'عندك مقاس أكبر؟', 'دو يو هاف إيه بيجر سايز', 'Do you have a bigger size in blue?', 'عندك مقاس أكبر بالأزرق؟'],
            ['I will take it.', 'هاخده.', 'آي ويل تيك إت', 'It fits well — I will take it.', 'مقاسه مظبوط — هاخده.'],
            ['Do you accept cards?', 'بتقبلوا كروت؟', 'دو يو أكسِبت كاردز', 'Do you accept cards or only cash?', 'بتقبلوا كروت ولا كاش بس؟']
          ],
          examples: [
            ['This jacket is too expensive for me.', 'الجاكيت ده غالي عليّا.', 'ذيس جاكيت إز تو إكسبينسف فور مي', ['This', 'jacket', 'is', 'too', 'expensive', 'for', 'me']],
            ['The red one is cheaper than the black one.', 'الأحمر أرخص من الأسود.', 'ذا ريد وان إز تشيبر ذان ذا بلاك وان', ['The', 'red', 'one', 'is', 'cheaper', 'than', 'the', 'black', 'one']],
            ['I am looking for a gift for my mother.', 'بدور على هدية لماما.', 'آي آم لوكينج فور إيه جيفت فور ماي ماذر', ['I', 'am', 'looking', 'for', 'a', 'gift', 'for', 'my', 'mother']],
            ['Can I have a receipt, please?', 'ممكن الإيصال لو سمحت؟', 'كان آي هاف إيه ريسيت، بليز', ['Can', 'I', 'have', 'a', 'receipt', 'please']]
          ],
          grammar: {
            title: { ar: 'المقارنة: cheaper than / the cheapest', en: 'Comparatives: cheaper than / the cheapest' },
            points: [
              { ar: 'للصفة القصيرة زوّد er + than: cheap → cheaper than.', en: 'Short adjectives take -er + than: cheap → cheaper than.' },
              { ar: 'للصفة الطويلة استخدم more: expensive → more expensive than.', en: 'Long adjectives take more: more expensive than.' },
              { ar: 'أعلى درجة: the cheapest / the most expensive.', en: 'Superlative: the cheapest / the most expensive.' }
            ],
            table: [
              { a: 'cheap → cheaper', b: 'This one is cheaper than that one.' },
              { a: 'big → bigger', b: 'I need a bigger size.' },
              { a: 'expensive → more expensive', b: 'It is more expensive than the blue one.' },
              { a: 'the best', b: 'This is the best shop in town.' }
            ],
            note: { ar: 'الصفة القصيرة اللي آخرها حرف ساكن واحد بتضاعف الحرف: big → bigger.', en: 'Double the last consonant of short adjectives: big → bigger.' }
          },
          reading: {
            title: { ar: 'هدية لعيد ميلاد ماما', en: "A birthday gift for Mum" },
            linesEn: ['Nour wants to buy a gift for her mother.', 'She goes to a small shop near the market.', 'She sees a purple scarf. It is beautiful but expensive.', 'The assistant shows her a blue one. It is cheaper and softer.', 'Nour asks for a discount and pays in cash.', 'She leaves the shop with a smile and a receipt in her bag.'],
            linesAr: ['نور عايزة تشتري هدية لمامتها.', 'راحت لمحل صغير جنب السوق.', 'شافت إيشارب بنفسجي. حلو بس غالي.', 'الموظف ورّاها واحد أزرق. أرخص وأنعم.', 'نور طلبت خصم ودفعت كاش.', 'خرجت من المحل بابتسامة وإيصال في شنطتها.'],
            questions: [
              { q: 'What does Nour want to buy?', qMeaning: 'نور عايزة تشتري إيه؟', options: ['A gift for her mother', 'Shoes for school', 'A bag for her father'], answer: 0 },
              { q: 'Why does she choose the blue scarf?', qMeaning: 'اختارت الإيشارب الأزرق ليه؟', options: ['It is cheaper and softer', 'It is bigger', 'It is new'], answer: 0 }
            ]
          },
          listening: [
            ['How much is this jacket?', ['How much is this jacket?', 'How much is this shirt?', 'How many jackets?'], 0, 'الجاكيت ده بكام؟'],
            ['Do you have a bigger size?', ['A bigger size', 'A smaller size', 'Another colour'], 0, 'عندك مقاس أكبر؟'],
            ['I will pay in cash.', ['Cash', 'Card', 'Online'], 0, 'هدفع كاش.']
          ],
          speaking: [
            ['Excuse me, how much is this bag?', 'لو سمحت، الشنطة دي بكام؟', 'إكسكيوز مي، هاو ماتش إز ذيس باج'],
            ['Can I try it on, please?', 'ممكن أقيسه لو سمحت؟', 'كان آي تراي إت أون، بليز'],
            ['It is too expensive. Do you have a discount?', 'غالي أوي. عندك خصم؟', 'إت إز تو إكسبينسف. دو يو هاف إيه ديسكاونت']
          ],
          conversation: {
            setting: { ar: 'نور بتشتري إيشارب من محل هدوم', en: 'Nour buys a scarf in a clothes shop' },
            lines: [
              ['Assistant', 'Good morning! Can I help you?', 'صباح الخير! أقدر أساعدك؟', 'جود مورنينج! كان آي هيلب يو'],
              ['Nour', 'Yes, please. I am looking for a scarf.', 'أيوه لو سمحت. بدور على إيشارب.', 'يس، بليز. آي آم لوكينج فور إيه سكارف'],
              ['Assistant', 'We have purple and blue ones.', 'عندنا بنفسجي وأزرق.', 'وي هاف بيربل آند بلو وونز'],
              ['Nour', 'How much is the purple one?', 'البنفسجي بكام؟', 'هاو ماتش إز ذا بيربل وان'],
              ['Assistant', 'Two hundred pounds.', 'مئتين جنيه.', 'تو هاندرد باوندز'],
              ['Nour', 'That is too expensive for me. Do you have a discount?', 'ده غالي عليّا. عندكوا خصم؟', 'ذات إز تو إكسبينسف فور مي. دو يو هاف إيه ديسكاونت'],
              ['Assistant', 'Yes, ten percent today.', 'أيوه، عشرة في المية النهاردة.', 'يس، تن بيرسنت تو داي'],
              ['Nour', 'Great, I will take it. Can I have a receipt?', 'تمام، هاخده. ممكن الإيصال؟', 'جريت، آي ويل تيك إت. كان آي هاف إيه ريسيت']
            ],
            vocab: [['Can I help you?', 'أقدر أساعدك؟'], ['looking for', 'بدور على'], ['discount', 'خصم'], ['receipt', 'إيصال'], ['percent', 'في المية']],
            questions: [
              { q: 'Which scarf does Nour ask about first?', qMeaning: 'نور سألت عن أنهي إيشارب الأول؟', options: ['The purple one', 'The blue one', 'The red one'], answer: 0 },
              { q: 'What is the discount today?', qMeaning: 'الخصم النهاردة كام؟', options: ['Ten percent', 'Twenty percent', 'No discount'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
            tasks: [
              { ar: 'اكتب حوار قصير بينك وبين البائع (٤ أدوار).', en: 'Write a short dialogue between you and a shop assistant (four turns).' },
              { ar: 'قارن بين حاجتين عندك بـ cheaper / more expensive than.', en: 'Compare two of your things with “cheaper / more expensive than”.' }
            ]
          }
        }
      ]
    }
  ], { ar: 'متوسط', en: 'Elementary' });
})();
