/* ==========================================================================
   LingoBloom — ENGLISH curriculum
   Add a lesson = add one object to a unit's `lessons` array. Nothing else.
   Compact array form: [word, meaning(ar), pronunciation(ar), example, example ar]
   ========================================================================== */
(function () {
  LB.addLanguage(
    { code: 'en', name: 'English', native: 'Learn English', meaning: 'الإنجليزية',
      flag: '🇬🇧', speech: 'en-GB', tone: 'blue', scene: '0%',
      blurb: { ar: 'لغة العالم الأولى — بسيطة ومفيدة في كل مكان.', en: 'The global language — practical everywhere.' } },
    {
      /* ================================ A0 ================================ */
      A0: {
        label: { ar: 'مبتدئ تماماً', en: 'Absolute beginner' },
        units: [
          {
            title: 'Foundations', titleMeaning: 'الأساسيات',
            summary: { ar: 'أول كلماتك: التحيات، الأرقام، والتعريف بنفسك.', en: 'Your first words: greetings, numbers and introducing yourself.' },
            lessons: [
              /* ---------------- Lesson 1 ---------------- */
              {
                id: 'en-a0-u1-l1', topic: 'Greetings', title: 'Basic Greetings', titleMeaning: 'تحيات أساسية', minutes: 12,
                goals: { ar: ['تسلّم وتودّع بثقة', 'تسأل عن الحال وتردّ', 'تقول اسمك وتعرّف بنفسك'],
                         en: ['Greet and say goodbye with confidence', 'Ask and answer "How are you?"', 'Say your name and introduce yourself'] },
                vocab: [
                  ['Hello', 'أهلاً / مرحباً', 'هَلو', 'Hello, Anna!', 'أهلاً يا آنا!'],
                  ['Hi', 'هاي (تحية سريعة)', 'هاي', 'Hi, John!', 'هاي يا جون!'],
                  ['Good morning', 'صباح الخير', 'جود مورنينج', 'Good morning, teacher.', 'صباح الخير يا أستاذ.'],
                  ['Good evening', 'مساء الخير', 'جود إيفنينج', 'Good evening, everyone.', 'مساء الخير للجميع.'],
                  ['Goodbye', 'إلى اللقاء', 'جود باي', 'Goodbye! See you tomorrow.', 'إلى اللقاء! أشوفك بكرة.'],
                  ['See you', 'أشوفك / إلى اللقاء', 'سي يو', 'See you later!', 'أشوفك بعدين!']
                ],
                related: [
                  ['Good afternoon', 'طاب مساؤك (بعد الظهر)', 'جود آفترنون', 'Good afternoon, Mrs Ali.', 'طاب مساؤك يا مدام علي.'],
                  ['Good night', 'تصبح على خير', 'جود نايت', 'Good night, Mum.', 'تصبح على خير يا ماما.'],
                  ['Welcome', 'أهلاً وسهلاً', 'وِلكَم', 'Welcome to our school!', 'أهلاً بيك في مدرستنا!'],
                  ['Please', 'من فضلك', 'بليز', 'Please, come in.', 'من فضلك، اتفضل.'],
                  ['Thank you', 'شكراً', 'ثانك يو', 'Thank you very much.', 'شكراً جزيلاً.'],
                  ['Sorry', 'آسف', 'سوري', 'Sorry, I am late.', 'آسف، أنا اتأخرت.']
                ],
                expressions: [
                  ['How are you?', 'إزاي حالك؟', 'هاو آر يو', 'How are you today?', 'إزاي حالك النهاردة؟'],
                  ["I'm fine, thank you", 'أنا بخير، شكراً', 'آيم فاين، ثانك يو', "I'm fine, thank you. And you?", 'أنا بخير، شكراً. وأنت؟'],
                  ['Nice to meet you', 'فرصة سعيدة بالتعرف عليك', 'نايس تو ميت يو', 'Nice to meet you, Sara.', 'فرصة سعيدة يا سارة.'],
                  ['Nice to meet you too', 'فرصة سعيدة بالتعرف عليك كذلك', 'نايس تو ميت يو تو', 'Nice to meet you too!', 'وأنا كذلك!']
                ],
                examples: [
                  ['Hello, my name is Anna.', 'أهلاً، اسمي آنا.', 'هَلو، ماي نيم إز آنا', ['Hello', 'my', 'name', 'is', 'Anna']],
                  ['Nice to meet you.', 'فرصة سعيدة بالتعرف عليك.', 'نايس تو ميت يو', ['Nice', 'to', 'meet', 'you']],
                  ['How are you today?', 'إزاي حالك النهاردة؟', 'هاو آر يو تو داي', ['How', 'are', 'you', 'today']],
                  ['I am fine, thank you.', 'أنا بخير، شكراً.', 'آي آم فاين، ثانك يو', ['I', 'am', 'fine', 'thank', 'you']],
                  ['See you tomorrow!', 'أشوفك بكرة!', 'سي يو تو مورو', ['See', 'you', 'to', 'morrow']]
                ],
                grammar: {
                  title: { ar: 'جملة بسيطة: فاعل + فعل', en: 'A simple sentence: subject + verb' },
                  points: [
                    { ar: 'الجملة الإنجليزية بتبدأ بالفاعل (اللي بيعمل الحاجة) وبعدين الفعل.', en: 'An English sentence starts with the subject, then the verb.' },
                    { ar: 'مع كلمة I (أنا) بنستخدم am: I am Anna — اختصارها I\'m.', en: 'With "I" we use am: I am Anna → I\'m Anna.' },
                    { ar: 'مع he / she / it بنستخدم is، ومع you / we / they بنستخدم are.', en: 'he/she/it take is; you/we/they take are.' }
                  ],
                  table: [
                    { a: 'I am', b: 'I am fine.' },
                    { a: 'You are', b: 'You are kind.' },
                    { a: 'He / She is', b: 'She is my friend.' },
                    { a: 'We / They are', b: 'They are students.' }
                  ],
                  note: { ar: 'خلّي عينك على ضمير الفاعل هو اللي يحدّد الفعل الصح.', en: 'The subject decides which verb form you need.' }
                },
                reading: {
                  title: { ar: 'أول يوم في المدرسة', en: 'The first day at school' },
                  linesEn: ['It is Monday morning.', 'Anna is at school.', 'She sees a new student.', '"Hello! My name is Anna."', '"Hi, Anna! I am John. Nice to meet you."', 'They are friends now.'],
                  linesAr: ['إنه صباح يوم الاثنين.', 'آنا في المدرسة.', 'شافت طالب جديد.', '"أهلاً! اسمي آنا."', '"هاي يا آنا! أنا جون. فرصة سعيدة."', 'بقوا صحاب من ساعتها.'],
                  questions: [
                    { q: 'Where is Anna?', qMeaning: 'آنا فين؟', options: ['At school', 'At home', 'In the park'], answer: 0 },
                    { q: 'What is the new student\'s name?', qMeaning: 'اسم الطالب الجديد إيه؟', options: ['Anna', 'John', 'Sara'], answer: 1 }
                  ]
                },
                listening: [
                  ['How are you?', ['I am fine', 'How are you?', 'Goodbye'], 1, 'إزاي حالك؟'],
                  ['Nice to meet you.', ['Nice to meet you', 'Good night', 'Thank you'], 0, 'فرصة سعيدة.'],
                  ['Good morning, class!', ['Good morning', 'Good evening', 'See you'], 0, 'صباح الخير يا أولاد!']
                ],
                speaking: [
                  ['Hello! How are you?', 'أهلاً! إزاي حالك؟', 'هَلو! هاو آر يو'],
                  ['Nice to meet you.', 'فرصة سعيدة.', 'نايس تو ميت يو'],
                  ['Goodbye! See you tomorrow.', 'إلى اللقاء! أشوفك بكرة.', 'جود باي! سي يو تو مورو']
                ],
                conversation: {
                  setting: { ar: 'يوم أول لآنا في المدرسة', en: 'Anna\'s first day at school' },
                  lines: [
                    ['Anna', 'Hello!', 'أهلاً!', 'هَلو'],
                    ['John', 'Hi! How are you?', 'هاي! إزاي حالك؟', 'هاي! هاو آر يو'],
                    ['Anna', "I'm fine, thank you. How are you?", 'أنا بخير، شكراً. وأنت؟', 'آيم فاين، ثانك يو. هاو آر يو'],
                    ['John', "I'm good, thanks. I'm John.", 'أنا كويس، شكراً. أنا جون.', 'آيم جود، ثانكس. آيم جون'],
                    ['Anna', 'Nice to meet you, John.', 'فرصة سعيدة يا جون.', 'نايس تو ميت يو، جون'],
                    ['John', 'Nice to meet you too. See you later!', 'وأنا كذلك. أشوفك بعدين!', 'نايس تو ميت يو تو. سي يو ليتر'],
                    ['Anna', 'See you! Goodbye!', 'أشوفك! إلى اللقاء!', 'سي يو! جود باي']
                  ],
                  vocab: [['How are you?', 'إزاي حالك؟'], ['fine', 'بخير'], ['thanks', 'شكراً (عامية)'], ['later', 'بعدين'], ['Goodbye', 'إلى اللقاء']],
                  questions: [
                    { q: 'What is the boy\'s name?', qMeaning: 'اسم الولد إيه؟', options: ['John', 'Anna', 'Sara'], answer: 0 },
                    { q: 'How is Anna?', qMeaning: 'آنا حالتها إيه؟', options: ['She is fine', 'She is tired', 'She is sad'], answer: 0 },
                    { q: 'What does John say at the end?', qMeaning: 'جون قال إيه في الآخر؟', options: ['Good night', 'See you later', 'Thank you'], answer: 1 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
                  tasks: [
                    { ar: 'اكتب تحية واحدة صباحية وتحية واحدة مسائية.', en: 'Write one morning greeting and one evening greeting.' },
                    { ar: 'عرّف بنفسك في جملتين: اسمك + Nice to meet you.', en: 'Introduce yourself in two sentences: your name + Nice to meet you.' }
                  ]
                }
              },
              /* ---------------- Lesson 2 ---------------- */
              {
                id: 'en-a0-u1-l2', topic: 'Numbers', title: 'Numbers 1–10', titleMeaning: 'الأرقام من ١ لـ ١٠', minutes: 14,
                goals: { ar: ['تعدّ من ١ لـ ١٠', 'تسأل عن العمر والسن', 'تطلب رقم تليفون'],
                         en: ['Count from 1 to 10', 'Ask about age', 'Ask for a phone number'] },
                vocab: [
                  ['one', 'واحد (١)', 'وَنْ', 'I have one brother.', 'عندي أخ واحد.'],
                  ['two', 'اتنين (٢)', 'تو', 'Two cats are here.', 'فيه قطتين هنا.'],
                  ['three', 'تلاتة (٣)', 'ثري', 'I see three birds.', 'أنا شايف تلات عصافير.'],
                  ['four', 'أربعة (٤)', 'فور', 'There are four chairs.', 'فيه أربع كراسي.'],
                  ['five', 'خمسة (٥)', 'فايف', 'Five students are absent.', 'خمس طلاب غايبين.'],
                  ['six', 'ستة (٦)', 'سِكس', 'My sister is six.', 'أختي عندها ست سنين.'],
                  ['seven', 'سبعة (٧)', 'سِفِن', 'Seven days in a week.', 'سبعة أيام في الأسبوع.'],
                  ['eight', 'تمانية (٨)', 'إيت', 'I sleep eight hours.', 'أنا بنام تمن ساعات.'],
                  ['nine', 'تسعة (٩)', 'ناين', 'Nine pencils on the desk.', 'تسعة أقلام على المكتب.'],
                  ['ten', 'عشرة (١٠)', 'تِن', 'Ten fingers!', 'عشرة صوابع!']
                ],
                related: [
                  ['first', 'الأول', 'فِرست', 'This is my first lesson.', 'ده أول درس ليا.'],
                  ['second', 'التاني', 'سِكند', 'He is in the second grade.', 'هو في الصف التاني.'],
                  ['third', 'التالت', 'ثِرد', 'She finished third.', 'هي خلّصت في المركز التالت.'],
                  ['number', 'رقم', 'نَمبر', 'What is your number?', 'رقمك كام؟'],
                  ['how many?', 'كام؟ (للعدد)', 'هاو مِني', 'How many books?', 'كام كتاب؟'],
                  ['age', 'سِن', 'إيدج', 'What is your age?', 'سِنّك كام؟']
                ],
                expressions: [
                  ['How old are you?', 'عندك كام سنة؟', 'هاو أولد آر يو', 'How old are you, Sara?', 'عندك كام سنة يا سارة؟'],
                  ["I'm twenty years old", 'عندي عشرين سنة', 'آيم توِنتي ييرز أولد', "I'm twenty years old.", 'عندي عشرين سنة.'],
                  ['What is your phone number?', 'رقم تليفونك كام؟', 'وات إز يور فون نَمبر', 'What is your phone number?', 'رقم تليفونك كام؟'],
                  ['My phone number is ...', 'رقم تليفوني هو ...', 'ماي فون نَمبر إز', 'My phone number is 0100 000 0000.', 'رقم تليفوني هو ٠١٠٠ ٠٠٠ ٠٠٠٠.']
                ],
                examples: [
                  ['I have two sisters.', 'عندي أختين.', 'آي هاف تو سِسترز', ['I', 'have', 'two', 'sisters']],
                  ['How old is your brother?', 'أخوك عنده كام سنة؟', 'هاو أولد إز يور برَذر', ['How', 'old', 'is', 'your', 'brother']],
                  ['My number is seven.', 'رقمي هو سبعة.', 'ماي نَمبر إز سِفِن', ['My', 'number', 'is', 'seven']],
                  ['There are ten students.', 'فيه عشرة طلاب.', 'ذير آر تِن ستيودنتس', ['There', 'are', 'ten', 'students']]
                ],
                grammar: {
                  title: { ar: 'الأرقام كصفة والجمع', en: 'Numbers as adjectives and plurals' },
                  points: [
                    { ar: 'الرقم بييجي قبل الاسم: two books, three cars.', en: 'The number comes before the noun: two books.' },
                    { ar: 'مع أكثر من واحد الاسم بياخد s: one student → two students.', en: 'More than one → add s: student → students.' },
                    { ar: 'سؤال العُمر ثابت: How old are you? — والرد: I am + رقم.', en: 'Asking age is fixed: How old are you? → I am + number.' }
                  ],
                  table: [
                    { a: 'one book', b: 'two book(s)' },
                    { a: 'How old are you?', b: "I'm ten." },
                    { a: 'How many?', b: 'Three.' }
                  ],
                  note: { ar: 'خلي بالك: sheep و children استثناءات في الجمع.', en: 'Careful: some plurals are irregular, like children.' }
                },
                reading: {
                  title: { ar: 'في حديقة الحيوانات', en: 'At the zoo' },
                  linesEn: ['We are at the zoo.', 'I see three monkeys and four birds.', 'My sister counts: one, two, three.', '"How many elephants?" she asks.', '"Two elephants," I say.', 'We stay for two hours.'],
                  linesAr: ['إحنا في حديقة الحيوانات.', 'أنا شايف تلات قرود وأربع عصافير.', 'أختي بتعدّ: واحد، اتنين، تلاتة.', '"كام فيل؟" بتسأل.', '"فيلين،" بقول.', 'قعدنا ساعتين.'],
                  questions: [
                    { q: 'How many monkeys?', qMeaning: 'كام قرد؟', options: ['Three', 'Four', 'Two'], answer: 0 },
                    { q: 'How long do they stay?', qMeaning: 'قعدوا قد إيه؟', options: ['Two hours', 'Ten hours', 'One hour'], answer: 0 }
                  ]
                },
                listening: [
                  ['I have six pencils.', ['six', 'seven', 'ten'], 0, 'عندي ستة أقلام.'],
                  ['My sister is nine years old.', ['nine', 'five', 'four'], 0, 'أختي عندها تسع سنين.'],
                  ['How old are you?', ['How old are you?', 'How are you?', 'How many?'], 0, 'عندك كام سنة؟']
                ],
                speaking: [
                  ['I am ten years old.', 'عندي عشر سنين.', 'آي آم تِن ييرز أولد'],
                  ['How many books do you have?', 'عندك كام كتاب؟', 'هاو مِني بوكس دو يو هاف'],
                  ['My phone number is five, five, two, one.', 'رقم تليفوني خمسة، خمسة، اتنين، واحد.', 'ماي فون نَمبر إز فايف فايف تو وَنْ']
                ],
                conversation: {
                  setting: { ar: 'طفلين بيعرفوا بعض في الفصل', en: 'Two kids getting to know each other in class' },
                  lines: [
                    ['Sara', 'Hi Tom! How old are you?', 'هاي توم! عندك كام سنة؟', 'هاي توم! هاو أولد آر يو'],
                    ['Tom', "I'm nine. And you?", 'عندي تسع سنين. وأنت؟', 'آيم ناين. آند يو'],
                    ['Sara', "I'm ten. I have two brothers.", 'عندي عشر. عندي أخّين.', 'آيم تِن. آي هاف تو برَذرز'],
                    ['Tom', 'Two brothers! How many sisters?', 'أخّين! وكم أخت؟', 'تو برَذرز! هاو مِني سِسترز'],
                    ['Sara', 'One sister. She is six.', 'أخت واحدة. عندها ست سنين.', 'وَنْ سِستر. شي إز سِكس'],
                    ['Tom', 'Nice! What is your phone number?', 'حلو! رقم تليفونك كام؟', 'نايس! وات إز يور فون نَمبر'],
                    ['Sara', 'It is five, five, two, one.', 'هو خمسة، خمسة، اتنين، واحد.', 'إت إز فايف فايف تو وَنْ']
                  ],
                  vocab: [['How old', 'كام سنة'], ['years old', 'سنة (في العمر)'], ['brothers', 'إخوات (أولاد)'], ['sisters', 'أخوات (بنات)'], ['phone number', 'رقم التليفون']],
                  questions: [
                    { q: 'How old is Tom?', qMeaning: 'توم عنده كام سنة؟', options: ['Nine', 'Ten', 'Six'], answer: 0 },
                    { q: 'How many sisters does Sara have?', qMeaning: 'سارة عندها كام أخت؟', options: ['One', 'Two', 'Three'], answer: 0 },
                    { q: 'What does Sara share with Tom?', qMeaning: 'سارة شاركت توم في إيه؟', options: ['Her phone number', 'Her age only', 'Nothing'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
                  tasks: [
                    { ar: 'اكتب أعمار كل فرد في عيلتك بالأرقام الإنجليزية.', en: 'Write the ages of your family in English numbers.' },
                    { ar: 'اكتب جملتين فيهم أرقام: عندي ... وأخي عنده ...', en: 'Write two sentences with numbers: I have… / My brother is…' }
                  ]
                }
              },
              /* ---------------- Lesson 3 ---------------- */
              {
                id: 'en-a0-u1-l3', topic: 'Introductions', title: 'Introducing Yourself', titleMeaning: 'التعريف بنفسك', minutes: 13,
                goals: { ar: ['تسأل عن الاسم والبلد', 'تقول من فين أنت', 'تعرّف بنفسك في ٣ جمل'],
                         en: ['Ask about names and countries', 'Say where you are from', 'Introduce yourself in three sentences'] },
                vocab: [
                  ['name', 'اسم', 'نيم', 'My name is Omar.', 'اسمي عمر.'],
                  ['from', 'من (مكان)', 'فرُم', 'I am from Egypt.', 'أنا من مصر.'],
                  ['country', 'بلد', 'كَنستري', 'Which country?', 'أي بلد؟'],
                  ['city', 'مدينة', 'سِتي', 'Cairo is a big city.', 'القاهرة مدينة كبيرة.'],
                  ['teacher', 'مدرّس', 'تيتشر', 'She is my teacher.', 'هي مدرّستي.'],
                  ['student', 'طالب', 'ستيودِنت', 'I am a student.', 'أنا طالب.'],
                  ['friend', 'صاحب', 'فرِند', 'He is my friend.', 'هو صاحبي.']
                ],
                related: [
                  ['boy', 'ولد', 'بوي', 'The boy is tall.', 'الولد طويل.'],
                  ['girl', 'بنت', 'جِرل', 'The girl is happy.', 'البنت مبسوطة.'],
                  ['man', 'راجل', 'مان', 'That man is my father.', 'الراجل ده بابا.'],
                  ['woman', 'ست / مرأة', 'وُمن', 'The woman is a doctor.', 'الست دي دكتورة.'],
                  ["I'm", 'أنا (اختصار)', 'آيم', "I'm new here.", 'أنا جديد هنا.']
                ],
                expressions: [
                  ['What is your name?', 'اسمك إيه؟', 'وات إز يور نيم', 'What is your name, please?', 'اسمك إيه من فضلك؟'],
                  ['My name is ...', 'اسمي ...', 'ماي نيم إز', 'My name is Laila.', 'اسمي ليلى.'],
                  ['Where are you from?', 'أنت من فين؟', 'وير آر يو فرُم', 'Where are you from?', 'أنت من فين؟'],
                  ['I am from ...', 'أنا من ...', 'آي آم فرُم', 'I am from Egypt.', 'أنا من مصر.']
                ],
                examples: [
                  ['My name is Omar and I am a student.', 'اسمي عمر وأنا طالب.', 'ماي نيم إز عمر آند آي آم أ ستيودِنت', ['My', 'name', 'is', 'Omar', 'and', 'I', 'am', 'a', 'student']],
                  ['Where are you from?', 'أنت من فين؟', 'وير آر يو فرُم', ['Where', 'are', 'you', 'from']],
                  ['She is my English teacher.', 'هي مدرّسة الإنجليزي بتاعتي.', 'شي إز ماي إنجلش تيتشر', ['She', 'is', 'my', 'English', 'teacher']],
                  ['We are friends from school.', 'إحنا صحاب من المدرسة.', 'وي آر فرِندز فرُم سكول', ['We', 'are', 'friends', 'from', 'school']]
                ],
                grammar: {
                  title: { ar: 'a / an والضمائر', en: 'a / an and pronouns' },
                  points: [
                    { ar: 'بنستخدم a قبل الكلمة اللي تبدأ بصوت ساكن: a student.', en: 'Use a before a consonant sound: a student.' },
                    { ar: 'وبنستخدم an قبل صوت متحرك: an engineer, an apple.', en: 'Use an before a vowel sound: an engineer, an apple.' },
                    { ar: 'الضمائر: I / you / he / she / it / we / they بتحل مكان الاسم.', en: 'Pronouns replace names: I, you, he, she, it, we, they.' }
                  ],
                  table: [
                    { a: 'a teacher', b: 'an engineer' },
                    { a: 'I am Omar.', b: 'He is Omar.' }
                  ],
                  note: { ar: 'الـ a/an بتتحدد بالصوت مش بالحرف المكتوب.', en: 'a/an depend on the sound, not just the letter.' }
                },
                reading: {
                  title: { ar: 'طالبة جديدة', en: 'A new student' },
                  linesEn: ['A new girl is in the class.', '"What is your name?" asks the teacher.', '"My name is Mona. I am from Alexandria."', '"Welcome, Mona! This is Sara. She is your friend now."', '"Nice to meet you, Mona!"', 'Mona smiles. She is happy.'],
                  linesAr: ['فيه بنت جديدة في الفصل.', '"اسمك إيه؟" سألت المدرّسة.', '"اسمي منى. أنا من الإسكندرية."', '"أهلاً يا منى! دي سارة، هي صاحبتك من دلوقتي."', '"فرصة سعيدة يا منى!"', 'منى ابتسمت. هي مبسوطة.'],
                  questions: [
                    { q: 'Where is Mona from?', qMeaning: 'منى من فين؟', options: ['Alexandria', 'Cairo', 'Aswan'], answer: 0 },
                    { q: 'Who is Sara?', qMeaning: 'سارة مين؟', options: ['A new friend', 'The teacher', 'Mona\'s sister'], answer: 0 }
                  ]
                },
                listening: [
                  ['What is your name?', ['What is your name?', 'Where are you from?', 'How old are you?'], 0, 'اسمك إيه؟'],
                  ['I am from Egypt.', ['Egypt', 'England', 'Spain'], 0, 'أنا من مصر.'],
                  ['She is my friend.', ['friend', 'teacher', 'sister'], 0, 'هي صاحبتي.']
                ],
                speaking: [
                  ['My name is ... I am from ...', 'اسمي ... وأنا من ...', 'ماي نيم إز ... آي آم فرُم ...'],
                  ['Where are you from?', 'أنت من فين؟', 'وير آر يو فرُم'],
                  ['This is my friend.', 'ده صاحبي.', 'ذِس إز ماي فرِند']
                ],
                conversation: {
                  setting: { ar: 'أول يوم في نادي اللغات', en: 'First day at the language club' },
                  lines: [
                    ['Teacher', 'Hello! What is your name?', 'أهلاً! اسمك إيه؟', 'هَلو! وات إز يور نيم'],
                    ['Yara', 'My name is Yara.', 'اسمي يارة.', 'ماي نيم إز يارة'],
                    ['Teacher', 'Nice to meet you, Yara. Where are you from?', 'فرصة سعيدة يا يارة. أنتِ من فين؟', 'نايس تو ميت يو، يارة. وير آر يو فرُم'],
                    ['Yara', 'I am from Aswan, but I live in Cairo.', 'أنا من أسوان، بس ساكنة في القاهرة.', 'آي آم فرُم أسوان، بَت آي لِف إن كايرو'],
                    ['Teacher', 'Great! Are you a student?', 'جميل! أنتِ طالبة؟', 'جريت! آر يو أ ستيودِنت'],
                    ['Yara', 'Yes, I am a student. And this is my friend Lina.', 'أيوه، أنا طالبة. ودي صاحبتي لينا.', 'يِس، آي آم أ ستيودِنت. آند ذِس إز ماي فرِند لينا'],
                    ['Teacher', 'Welcome both of you!', 'أهلاً بيكم الاتنين!', 'وِلكَم بوث أوف يو']
                  ],
                  vocab: [['Where', 'فين'], ['from', 'من'], ['live', 'أسكن'], ['student', 'طالبة'], ['both', 'الاتنين']],
                  questions: [
                    { q: 'Where is Yara from?', qMeaning: 'يارة من فين؟', options: ['Aswan', 'Cairo', 'Giza'], answer: 0 },
                    { q: 'Where does she live?', qMeaning: 'هي ساكنة فين؟', options: ['Cairo', 'Aswan', 'Luxor'], answer: 0 },
                    { q: 'Who is Lina?', qMeaning: 'لينا مين؟', options: ['Yara\'s friend', 'The teacher', 'Yara\'s sister'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
                  tasks: [
                    { ar: 'اكتب ٣ جمل: اسمك، من فين، وإنك طالب.', en: 'Write three sentences: your name, where you are from, and that you are a student.' },
                    { ar: 'اكتب جملة عن صاحبك: He/She is my friend.', en: 'Write one sentence about your friend.' }
                  ]
                }
              },
              /* ---------------- Lesson 4 ---------------- */
              {
                id: 'en-a0-u1-l4', topic: 'Alphabet & Sounds', title: 'The Alphabet and Sounds', titleMeaning: 'الحروف والأصوات', minutes: 15,
                goals: { ar: ['تنطق الحروف الإنجليزية صح', 'تتهجّى اسمك', 'تفرّق بين الأصوات الطويلة والقصيرة'],
                         en: ['Pronounce the English alphabet', 'Spell your name', 'Hear long vs short vowels'] },
                vocab: [
                  ['A / a', 'حرف A', 'إيه', 'A is for apple.', 'A زي apple.'],
                  ['B / b', 'حرف B', 'بي', 'B is for book.', 'B زي book.'],
                  ['C / c', 'حرف C', 'سي', 'C is for cat.', 'C زي cat.'],
                  ['D / d', 'حرف D', 'دي', 'D is for dog.', 'D زي dog.'],
                  ['E / e', 'حرف E', 'إي', 'E is for egg.', 'E زي egg.'],
                  ['S / s', 'حرف S', 'إس', 'S is for sun.', 'S زي sun.'],
                  ['letter', 'حرف', 'ليتر', 'The word "cat" has three letters.', 'كلمة cat فيها تلات حروف.'],
                  ['word', 'كلمة', 'وِرد', 'Say the word slowly.', 'قول الكلمة بالراحة.']
                ],
                related: [
                  ['vowel', 'حرف متحرك', 'ڤاول', 'A, E, I, O, U are vowels.', 'A, E, I, O, U حروف متحركة.'],
                  ['sound', 'صوت', 'ساوند', 'Listen to the sound.', 'اسمع الصوت.'],
                  ['spell', 'يتهجّى', 'سبِل', 'Spell your name, please.', 'تهجّى اسمك من فضلك.'],
                  ['capital letter', 'حرف كابيتال', 'كابيتال ليتر', 'Names start with a capital letter.', 'الأسماء بتبدأ بحرف كابيتال.']
                ],
                expressions: [
                  ['How do you spell it?', 'بتتهجّاها إزاي؟', 'هاو دو يو سبِل إت', 'How do you spell your name?', 'بتتهجّى اسمك إزاي؟'],
                  ['Can you repeat, please?', 'تقدر تعيد من فضلك؟', 'كان يو رِبيت، بليز', 'Can you repeat, please?', 'تقدر تعيد من فضلك؟'],
                  ['Repeat after me.', 'ردّد ورايا.', 'رِبيت آفتر مي', 'Repeat after me: A, B, C.', 'ردّد ورايا: إيه، بي، سي.'],
                  ['Slowly, please.', 'بالراحة من فضلك.', 'سلولي، بليز', 'Slowly, please.', 'بالراحة من فضلك.']
                ],
                examples: [
                  ['My name is Sara: S-A-R-A.', 'اسمي سارة: S-A-R-A.', 'ماي نيم إز سارة', ['My', 'name', 'is', 'Sara', 'S', 'A', 'R', 'A']],
                  ['Apple starts with A.', 'كلمة apple بتبدأ بحرف A.', 'آبل ستارتس وِث إيه', ['Apple', 'starts', 'with', 'A']],
                  ['Can you repeat, please?', 'تقدر تعيد من فضلك؟', 'كان يو رِبيت، بليز', ['Can', 'you', 'repeat', 'please']]
                ],
                grammar: {
                  title: { ar: 'حروف الكابيتال والتنقيط', en: 'Capital letters and punctuation' },
                  points: [
                    { ar: 'أول الجملة بيبدأ بحرف كابيتال: My name is Ali.', en: 'A sentence begins with a capital letter.' },
                    { ar: 'أسماء الناس والبلدان دايمًا كابيتال: Sara, Egypt.', en: 'Names of people and countries are capitalised.' },
                    { ar: 'الجملة بتقف بنقطة . والسؤال بعلامة استفهام ?', en: 'A statement ends with a full stop; a question with a question mark.' }
                  ],
                  table: [
                    { a: 'my name is ali', b: 'My name is Ali.' },
                    { a: 'how old are you', b: 'How old are you?' }
                  ],
                  note: { ar: 'الحرف الكابيتال بيفرّق في المعنى — Turkey بلد، turkey ديك رومي!', en: 'Capitals can change meaning — Turkey vs turkey.' }
                },
                reading: {
                  title: { ar: 'لعبة الحروف', en: 'The letter game' },
                  linesEn: ['We play a letter game in class.', 'Each student says a letter and a word.', '"A," says Sara. "Apple!"', '"B," says Tom. "Book!"', '"C," I say. "Cat!"', 'We spell our names. It is fun.'],
                  linesAr: ['بنلعب لعبة حروف في الفصل.', 'كل طالب بيقول حرف وكلمة.', '"A" بتقول سارة. "Apple!"', '"B" بيقول توم. "Book!"', '"C" بقول أنا. "Cat!"', 'تهجّينا أسماءنا. اللعبة حلوة.'],
                  questions: [
                    { q: 'What game do they play?', qMeaning: 'بيلعبوا إيه؟', options: ['A letter game', 'A number game', 'A song'], answer: 0 },
                    { q: 'What word starts with B?', qMeaning: 'إيه الكلمة اللي بتبدأ بحرف B؟', options: ['Book', 'Apple', 'Cat'], answer: 0 }
                  ]
                },
                listening: [
                  ['Spell the word: B-O-O-K.', ['BOOK', 'LOOK', 'COOK'], 0, 'تهجّى الكلمة: B-O-O-K.'],
                  ['How do you spell your name?', ['How do you spell your name?', 'What is your name?', 'How old are you?'], 0, 'بتتهجّى اسمك إزاي؟'],
                  ['Repeat after me, please.', ['Repeat after me', 'Listen to me', 'Look at me'], 0, 'ردّد ورايا من فضلك.']
                ],
                speaking: [
                  ['A, B, C, D, E', 'إيه، بي، سي، دي، إي', 'إيه بي سي دي إي'],
                  ['How do you spell it?', 'بتتهجّاها إزاي؟', 'هاو دو يو سبِل إت'],
                  ['Can you repeat, please?', 'تقدر تعيد من فضلك؟', 'كان يو رِبيت بليز']
                ],
                conversation: {
                  setting: { ar: 'مدرّس بيساعد طالب يتهجّى اسمه', en: 'A teacher helping a student spell his name' },
                  lines: [
                    ['Teacher', 'Let\'s spell your name. How do you spell it?', 'يلا نتهجّى اسمك. بتتهجّاه إزاي؟', 'ليتس سبِل يور نيم. هاو دو يو سبِل إت'],
                    ['Student', 'My name is Youssef. Y-O-U-S-S-E-F.', 'اسمي يوسف. Y-O-U-S-S-E-F.', 'ماي نيم إز يوسف. واي-أو-يو-إس-إس-إي-إف'],
                    ['Teacher', 'Well done! Is it a capital Y?', 'برافو! بيبدأ بحرف كابيتال Y؟', 'ويل دَنْ! إز إت أ كابيتال واي'],
                    ['Student', 'Yes, names start with a capital letter.', 'أيوه، الأسماء بتبدأ بحرف كابيتال.', 'يِس، نيمز ستارت وِث أ كابيتال ليتر'],
                    ['Teacher', 'Correct! Now repeat after me: A, E, I, O, U.', 'صح! دلوقتي ردّد ورايا: A, E, I, O, U.', 'كرِكت! ناو رِبيت آفتر مي'],
                    ['Student', 'A, E, I, O, U. These are the vowels.', 'A, E, I, O, U. دول الحروف المتحركة.', 'إيه، إي، آي، أو، يو. ذيز آر ذَ ڤاولز'],
                    ['Teacher', 'Excellent work today!', 'شغل ممتاز النهاردة!', 'إكسِلِنت وِرك تو داي']
                  ],
                  vocab: [['Let\'s', 'يلا'], ['spell', 'يتهجّى'], ['Well done', 'برافو'], ['capital', 'كابيتال'], ['vowels', 'حروف متحركة']],
                  questions: [
                    { q: 'How does Youssef spell his name?', qMeaning: 'يوسف بيتهجّى اسمه إزاي؟', options: ['Y-O-U-S-S-E-F', 'Y-O-U-S-E-F', 'Y-O-U-S-S-F'], answer: 0 },
                    { q: 'Which letters are vowels?', qMeaning: 'إيه الحروف المتحركة؟', options: ['A, E, I, O, U', 'B, C, D, F, G', 'S, T, P, Q, R'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
                  tasks: [
                    { ar: 'اكتب اسمك بحروف كابيتال مفصولة بشرطات (زي S-A-R-A).', en: 'Write your name in capitals separated by dashes (like S-A-R-A).' },
                    { ar: 'اكتب ٣ كلمات إنجليزية بتبدأ بحروف مختلفة.', en: 'Write three English words starting with different letters.' }
                  ]
                }
              }
            ]
          },
          {
            title: 'Everyday Life', titleMeaning: 'الحياة اليومية',
            summary: { ar: 'العيلة، الألوان، والأشياء اللي حواليك.', en: 'Family, colours and the things around you.' },
            lessons: [
              /* ---------------- Lesson 5 ---------------- */
              {
                id: 'en-a0-u2-l5', topic: 'Family', title: 'My Family', titleMeaning: 'عيلتي', minutes: 13,
                goals: { ar: ['تسمّي أفراد العيلة', 'توصف عيلتك', 'تسأل أسئلة عن العيلة'],
                         en: ['Name family members', 'Describe your family', 'Ask questions about family'] },
                vocab: [
                  ['family', 'عيلة', 'فاميلي', 'My family is small.', 'عيلتي صغيرة.'],
                  ['mother', 'أم', 'مَذر', 'My mother is a teacher.', 'أمي مدرّسة.'],
                  ['father', 'أب', 'فاذر', 'My father works here.', 'أبويا بيشتغل هنا.'],
                  ['brother', 'أخ', 'برَذر', 'My brother is tall.', 'أخويا طويل.'],
                  ['sister', 'أخت', 'سِستر', 'My sister likes music.', 'أختي بتحب الموسيقى.'],
                  ['grandmother', 'جدة', 'جراند مَذر', 'My grandmother tells stories.', 'جدتي بتحكي حكايات.'],
                  ['grandfather', 'جد', 'جراند فاذر', 'My grandfather is kind.', 'جدي طيب.'],
                  ['baby', 'بيبي / طفل صغير', 'بيبي', 'The baby is sleeping.', 'البيبي نايم.']
                ],
                related: [
                  ['son', 'ابن', 'سَن', 'He is my son.', 'ده ابني.'],
                  ['daughter', 'ابنة', 'دَوتر', 'She is my daughter.', 'دي بنتي.'],
                  ['parents', 'الوالدين', 'بيرنتس', 'My parents are doctors.', 'أبويّا وأمي دكاترة.'],
                  ['cousin', 'ابن/بنت العم', 'كازِن', 'My cousin lives in Dubai.', 'ابن عمي ساكن في دبي.'],
                  ['uncle', 'عم / خال', 'أنكل', 'My uncle is funny.', 'عمي مضحك.'],
                  ['aunt', 'عمة / خالة', 'آنت', 'My aunt is a nurse.', 'خالتي ممرضة.']
                ],
                expressions: [
                  ['This is my mother.', 'دي أمي.', 'ذِس إز ماي مَذر', 'This is my mother, Mona.', 'دي أمي، منى.'],
                  ['I have two brothers.', 'عندي أخّين.', 'آي هاف تو برَذرز', 'I have two brothers and one sister.', 'عندي أخّين وأخت.'],
                  ['She is my sister.', 'دي أختي.', 'شي إز ماي سِستر', 'She is my older sister.', 'دي أختي الكبيرة.'],
                  ['Do you have any brothers or sisters?', 'عندك إخوات؟', 'دو يو هاف إني برَذرز أور سِسترز', 'Do you have any brothers or sisters?', 'عندك إخوات؟']
                ],
                examples: [
                  ['My family is small: my parents, my sister and me.', 'عيلتي صغيرة: أبويّا وأمي وأختي وأنا.', 'ماي فاميلي إز سمول', ['My', 'family', 'is', 'small']],
                  ['My father is a doctor.', 'أبويا دكتور.', 'ماي فاذر إز أ دوكتور', ['My', 'father', 'is', 'a', 'doctor']],
                  ['I do not have a brother.', 'معنديش أخ.', 'آي دو نات هاف أ برَذر', ['I', 'do', 'not', 'have', 'a', 'brother']],
                  ['We visit my grandmother every week.', 'بنزور جدتي كل أسبوع.', 'وي ڤيزِت ماي جراند مَذر إڤري ويك', ['We', 'visit', 'my', 'grandmother', 'every', 'week']]
                ],
                grammar: {
                  title: { ar: 'الملكية my / your / his / her', en: 'Possessives: my, your, his, her' },
                  points: [
                    { ar: 'my = بتاعي، your = بتاعك، his = بتاعه (ولد)، her = بتاعها (بنت).', en: 'my / your / his / her show who owns something.' },
                    { ar: 'بنحطّها قبل الاسم على طول: my book, her sister.', en: 'They go before the noun: my book, her sister.' },
                    { ar: 'have مع I/you/we/they و has مع he/she/it.', en: 'have with I/you/we/they; has with he/she/it.' }
                  ],
                  table: [
                    { a: 'I have a sister.', b: 'She has a sister.' },
                    { a: 'my father', b: 'her father' }
                  ],
                  note: { ar: 'مفيش s على my / her — الأسماء بس هي اللي بتاخد s.', en: 'No s on my/her — only the noun takes s.' }
                },
                reading: {
                  title: { ar: 'صورة العيلة', en: 'The family photo' },
                  linesEn: ['This is a photo of my family.', 'My father is on the left. He is a driver.', 'My mother is in the middle. She is a nurse.', 'My little sister is in front of them.', 'My grandmother is next to me.', 'I love my family.'],
                  linesAr: ['دي صورة عيلتي.', 'أبويا على الشمال. هو سوّاق.', 'أمي في النص. هي ممرضة.', 'أختي الصغيرة قدامهم.', 'جدتي جنبي.', 'أنا بحب عيلتي.'],
                  questions: [
                    { q: 'What is the mother\'s job?', qMeaning: 'أمهم شغلانتها إيه؟', options: ['A nurse', 'A driver', 'A teacher'], answer: 0 },
                    { q: 'Who is next to the writer?', qMeaning: 'مين جنب اللي بيكتب؟', options: ['The grandmother', 'The father', 'The sister'], answer: 0 }
                  ]
                },
                listening: [
                  ['I have one sister and two brothers.', ['two brothers', 'two sisters', 'one brother'], 0, 'عندي أخت واحدة وأخّين.'],
                  ['My mother is a teacher.', ['mother', 'father', 'sister'], 0, 'أمي مدرّسة.'],
                  ['Do you have any brothers or sisters?', ['Do you have any brothers or sisters?', 'How old are you?', 'Where are you from?'], 0, 'عندك إخوات؟']
                ],
                speaking: [
                  ['This is my family.', 'دي عيلتي.', 'ذِس إز ماي فاميلي'],
                  ['I have two brothers.', 'عندي أخّين.', 'آي هاف تو برَذرز'],
                  ['My mother is a teacher.', 'أمي مدرّسة.', 'ماي مَذر إز أ تيتشر']
                ],
                conversation: {
                  setting: { ar: 'صاحبين بيتكلموا عن عيلاتهم', en: 'Two friends talking about their families' },
                  lines: [
                    ['Nour', 'Is this your family photo?', 'دي صورة عيلتك؟', 'إز ذِس يور فاميلي فوتو'],
                    ['Hany', 'Yes! This is my father and my mother.', 'أيوه! ده أبويا وأمي.', 'يِس! ذِس إز ماي فاذر آند ماي مَذر'],
                    ['Nour', 'Do you have any brothers or sisters?', 'عندك إخوات؟', 'دو يو هاف إني برَذرز أور سِسترز'],
                    ['Hany', 'I have one sister. She is seven.', 'عندي أخت واحدة. عندها سبع سنين.', 'آي هاف وَنْ سِستر. شي إز سِفِن'],
                    ['Nour', 'And who is this woman?', 'ومين الست دي؟', 'آند هو إز ذِس وُمن'],
                    ['Hany', 'That is my grandmother. She lives with us.', 'دي جدتي. هي ساكنة معانا.', 'ذات إز ماي جراند مَذر. شي لِفز وِث أس'],
                    ['Nour', 'Your family is lovely!', 'عيلتك جميلة!', 'يور فاميلي إز لَڤلي']
                  ],
                  vocab: [['photo', 'صورة'], ['parents', 'الوالدين'], ['lives with us', 'ساكنة معانا'], ['lovely', 'جميلة'], ['any', 'أي']],
                  questions: [
                    { q: 'How many sisters does Hany have?', qMeaning: 'هاني عنده كام أخت؟', options: ['One', 'Two', 'None'], answer: 0 },
                    { q: 'Who lives with Hany\'s family?', qMeaning: 'مين ساكن مع عيلة هاني؟', options: ['His grandmother', 'His uncle', 'His cousin'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
                  tasks: [
                    { ar: 'اكتب ٣ جمل عن عيلتك (عدد الأفراد + شغلهم).', en: 'Write three sentences about your family.' },
                    { ar: 'اكتب جملة عن كل فرد: My ... is ...', en: 'Write one sentence per person: My … is …' }
                  ]
                }
              },
              /* ---------------- Lesson 6 ---------------- */
              {
                id: 'en-a0-u2-l6', topic: 'Colours', title: 'Colours and Things', titleMeaning: 'الألوان والأشياء', minutes: 12,
                goals: { ar: ['تسمّي الألوان الأساسية', 'توصف حاجة بلونها', 'تسأل عن اللون'],
                         en: ['Name the basic colours', 'Describe an object by colour', 'Ask about colour'] },
                vocab: [
                  ['red', 'أحمر', 'رِد', 'The apple is red.', 'التفاحة حمراء.'],
                  ['blue', 'أزرق', 'بلو', 'The sky is blue.', 'السما زرقاء.'],
                  ['green', 'أخضر', 'جرين', 'The tree is green.', 'الشجرة خضراء.'],
                  ['yellow', 'أصفر', 'يِللو', 'The sun is yellow.', 'الشمس صفراء.'],
                  ['black', 'أسود', 'بلاك', 'My cat is black.', 'قطتي سوداء.'],
                  ['white', 'أبيض', 'وايت', 'The wall is white.', 'الحيطة بيضاء.'],
                  ['colour', 'لون', 'كَلر', 'What colour is it?', 'لونه إيه؟'],
                  ['thing', 'حاجة / شيء', 'ثينج', 'What is this thing?', 'الحاجة دي إيه؟']
                ],
                related: [
                  ['orange', 'برتقالي', 'أورِنج', 'She has an orange bag.', 'عندها شنطة برتقالي.'],
                  ['pink', 'زهري / بمبي', 'بينك', 'Her dress is pink.', 'فستانها بمبي.'],
                  ['brown', 'بني', 'براون', 'The table is brown.', 'الترابيزة بني.'],
                  ['grey', 'رمادي', 'جري', 'The car is grey.', 'العربية رمادي.'],
                  ['light', 'فاتح (لون)', 'لايت', 'Light blue, please.', 'أزرق فاتح من فضلك.'],
                  ['dark', 'غامق (لون)', 'دارك', 'A dark green shirt.', 'قميص أخضر غامق.']
                ],
                expressions: [
                  ['What colour is it?', 'لونه إيه؟', 'وات كَلر إز إت', 'What colour is your bag?', 'شنطتك لونها إيه؟'],
                  ['It is red.', 'لونه أحمر.', 'إت إز رِد', 'It is red and white.', 'لونه أحمر وأبيض.'],
                  ['I like green.', 'أنا بحب الأخضر.', 'آي لايك جرين', 'I like green very much.', 'أنا بحب الأخضر جداً.'],
                  ['My favourite colour is ...', 'لوني المفضل هو ...', 'ماي فيڤرِت كَلر إز', 'My favourite colour is blue.', 'لوني المفضل أزرق.']
                ],
                examples: [
                  ['My favourite colour is blue.', 'لوني المفضل أزرق.', 'ماي فيڤرِت كَلر إز بلو', ['My', 'favourite', 'colour', 'is', 'blue']],
                  ['The car is black and white.', 'العربية سودا وبيضا.', 'ذَ كار إز بلاك آند وايت', ['The', 'car', 'is', 'black', 'and', 'white']],
                  ['I have a green pencil.', 'عندي قلم أخضر.', 'آي هاف أ جرين بِنسِل', ['I', 'have', 'a', 'green', 'pencil']],
                  ['What colour is your dress?', 'فستانك لونه إيه؟', 'وات كَلر إز يور درِس', ['What', 'colour', 'is', 'your', 'dress']]
                ],
                grammar: {
                  title: { ar: 'اللون صفة قبل الاسم', en: 'Colours come before the noun' },
                  points: [
                    { ar: 'في الإنجليزي الصفة بتتقدم: a red car (مش a car red).', en: 'Adjectives come first: a red car, not a car red.' },
                    { ar: 'الصفة مفيهاش جمع: two red cars — مش reds.', en: 'Adjectives never take s: two red cars.' },
                    { ar: 'بعد فعل be بنحط الصفة بعد الفاعل: The sky is blue.', en: 'After be, the adjective follows: The sky is blue.' }
                  ],
                  table: [
                    { a: 'a red car', b: 'The car is red.' },
                    { a: 'two blue pens', b: 'The pens are blue.' }
                  ],
                  note: { ar: 'لاحظ: هو بيقول colour بالإنجليزي البريطاني و color بالأمريكي.', en: 'British English writes colour; American English writes color.' }
                },
                reading: {
                  title: { ar: 'مدرسة ملوّنة', en: 'A colourful school' },
                  linesEn: ['My school is very colourful.', 'The door is blue and the walls are white.', 'We have a green garden with red flowers.', 'My bag is yellow.', 'My friend has an orange notebook.', 'I love these colours!'],
                  linesAr: ['مدرستي مليانة ألوان.', 'الباب أزرق والحيطان بيضا.', 'عندنا جنينة خضرا فيها ورد أحمر.', 'شنطتي صفرا.', 'صاحبي عنده كشكول برتقالي.', 'أنا بحب الألوان دي!'],
                  questions: [
                    { q: 'What colour is the door?', qMeaning: 'الباب لونه إيه؟', options: ['Blue', 'White', 'Red'], answer: 0 },
                    { q: 'What colour is the writer\'s bag?', qMeaning: 'شنطة الكاتب لونها إيه؟', options: ['Yellow', 'Orange', 'Green'], answer: 0 }
                  ]
                },
                listening: [
                  ['My bag is yellow.', ['yellow', 'white', 'red'], 0, 'شنطتي صفرا.'],
                  ['What colour is your car?', ['What colour is your car?', 'Where is your car?', 'Is this your car?'], 0, 'عربيتك لونها إيه؟'],
                  ['The flowers are red and pink.', ['red and pink', 'red and blue', 'green and yellow'], 0, 'الورد أحمر وبمبي.']
                ],
                speaking: [
                  ['My favourite colour is green.', 'لوني المفضل أخضر.', 'ماي فيڤرِت كَلر إز جرين'],
                  ['What colour is it?', 'لونه إيه؟', 'وات كَلر إز إت'],
                  ['It is black and white.', 'لونه أسود وأبيض.', 'إت إز بلاك آند وايت']
                ],
                conversation: {
                  setting: { ar: 'اتنين بيشتروا شنطة', en: 'Two friends shopping for a bag' },
                  lines: [
                    ['Seller', 'Hello! Can I help you?', 'أهلاً! أقدر أساعدك؟', 'هَلو! كان آي هيلب يو'],
                    ['Mona', 'Yes, please. I want a bag.', 'أيوه من فضلك. عايزة شنطة.', 'يِس، بليز. آي وانت أ باق'],
                    ['Seller', 'What colour do you like?', 'بتحبي أي لون؟', 'وات كَلر دو يو لايك'],
                    ['Mona', 'I like blue. Do you have a blue bag?', 'أنا بحب الأزرق. عندك شنطة زرقا؟', 'آي لايك بلو. دو يو هاف أ بلو باق'],
                    ['Seller', 'Yes, this one is blue and this one is green.', 'أيوه، دي زرقا ودي خضرا.', 'يِس، ذِس وَنْ إز بلو آند ذِس وَنْ إز جرين'],
                    ['Mona', 'The blue one is beautiful. How much is it?', 'الزرقا حلوة. بكام؟', 'ذَ بلو وَنْ إز بيوتِفُل. هاو مَتش إز إت'],
                    ['Seller', 'It is fifty pounds.', 'خمسين جنيه.', 'إت إز فيفتي باوندز']
                  ],
                  vocab: [['want', 'عايز'], ['one', 'واحدة (بدل الاسم)'], ['beautiful', 'حلوة'], ['How much?', 'بكام؟'], ['Help you', 'أساعدك']],
                  questions: [
                    { q: 'What colour does Mona like?', qMeaning: 'منى بتحب أي لون؟', options: ['Blue', 'Green', 'Yellow'], answer: 0 },
                    { q: 'How much is the bag?', qMeaning: 'الشنطة بكام؟', options: ['Fifty pounds', 'Fifteen pounds', 'Five pounds'], answer: 0 },
                    { q: 'Which bag is beautiful?', qMeaning: 'أي شنطة حلوة؟', options: ['The blue one', 'The green one', 'Both'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
                  tasks: [
                    { ar: 'اكتب ألوان ٥ حاجات حواليك: The ... is ...', en: 'Write the colours of five things around you.' },
                    { ar: 'اكتب لونك المفضل وجملة عن حاجة باللون ده.', en: 'Write your favourite colour and one object of that colour.' }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* ================================ A1 ================================ */
      A1: {
        label: { ar: 'مبتدئ', en: 'Beginner' },
        units: [
          {
            title: 'Daily Life', titleMeaning: 'الحياة اليومية',
            summary: { ar: 'روتينك اليومي، الوقت، والمشتريات الصغيرة.', en: 'Your daily routine, time and small shopping.' },
            lessons: [
              {
                id: 'en-a1-u1-l1', topic: 'Daily Routine', title: 'My Day', titleMeaning: 'يومي', minutes: 15,
                goals: { ar: ['تحكي روتينك بالترتيب', 'تستخدم المضارع البسيط', 'تسأل عن الوقت'],
                         en: ['Describe your routine in order', 'Use the present simple', 'Ask and tell the time'] },
                vocab: [
                  ['wake up', 'أصحى من النوم', 'ويك آب', 'I wake up at seven.', 'أنا بصحى السابعة.'],
                  ['get up', 'أقوم من السرير', 'جِت آب', 'He gets up early.', 'هو بيقوم بدري.'],
                  ['have breakfast', 'أفطر', 'هاف برِكفست', 'We have breakfast together.', 'بنفطر مع بعض.'],
                  ['go to school', 'أروح المدرسة', 'جو تو سكول', 'I go to school by bus.', 'بروح المدرسة بالأتوبيس.'],
                  ['study', 'أدرس', 'ستَدي', 'I study English every day.', 'بدرس إنجليزي كل يوم.'],
                  ['homework', 'واجب', 'هوم وِرك', 'I do my homework at five.', 'بعمل واجبي الخمسة.'],
                  ['go to bed', 'أنام', 'جو تو بِد', 'She goes to bed at ten.', 'هي بتنام العشرة.'],
                  ['usually', 'عادةً', 'يوجوالي', 'I usually walk to school.', 'عادةً بروح المدرسة ماشي.']
                ],
                related: [
                  ['always', 'دايماً', 'ألوِيز', 'He always helps me.', 'هو دايماً بيساعدني.'],
                  ['sometimes', 'أحياناً', 'سَمتايمز', 'Sometimes I read at night.', 'أحياناً بقرأ بالليل.'],
                  ['never', 'أبداً / عمري ما', 'نِڤر', 'I never watch TV in the morning.', 'عمري ما بتفرّج تلفزيون الصبح.'],
                  ['early', 'بدري', 'إرلي', 'I wake up early.', 'بصحى بدري.'],
                  ['late', 'متأخر', 'ليت', 'Do not be late!', 'متتأخرش!'],
                  ['o\'clock', 'الساعة بالظبط', 'أو كلاَك', 'It is eight o\'clock.', 'الساعة تمانية بالظبط.']
                ],
                expressions: [
                  ['What time do you wake up?', 'بتصحى الساعة كام؟', 'وات تايم دو يو ويك آب', 'What time do you wake up?', 'بتصحى الساعة كام؟'],
                  ['I wake up at seven.', 'بصحى الساعة سبعة.', 'آي ويك آب آت سِفِن', 'I wake up at seven in the morning.', 'بصحى الساعة سبعة الصبح.'],
                  ['What is the time?', 'الساعة كام؟', 'وات إز ذَ تايم', 'Excuse me, what is the time?', 'لو سمحت، الساعة كام؟'],
                  ['It is half past eight.', 'الساعة تمانية والنص.', 'إت إز هاف باست إيت', 'It is half past eight now.', 'الساعة تمانية والنص دلوقتي.']
                ],
                examples: [
                  ['I wake up at seven and have breakfast.', 'بصحى الساعة سبعة وبفطر.', 'آي ويك آب آت سِفِن آند هاف برِكفست', ['I', 'wake', 'up', 'at', 'seven', 'and', 'have', 'breakfast']],
                  ['She usually studies in the evening.', 'هي عادةً بتدرس بالمسا.', 'شي يوجوالي ستَديز إن ذي إڤنينج', ['She', 'usually', 'studies', 'in', 'the', 'evening']],
                  ['We go to bed at ten o\'clock.', 'بننام الساعة عشرة.', 'وي جو تو بِد آت تِن أو كلاَك', ['We', 'go', 'to', 'bed', 'at', 'ten']],
                  ['I never forget my homework.', 'عمري ما بنسى واجبي.', 'آي نِڤر فورجِت ماي هوم وِرك', ['I', 'never', 'forget', 'my', 'homework']]
                ],
                grammar: {
                  title: { ar: 'المضارع البسيط والترتيب', en: 'Present simple and word order' },
                  points: [
                    { ar: 'بنستخدم المضارع البسيط للعادات: I study every day.', en: 'Use the present simple for habits: I study every day.' },
                    { ar: 'مع he / she / it بنزود s: she studies، he goes.', en: 'he/she/it add s: she studies, he goes.' },
                    { ar: 'ظروف التكرار (always, usually, sometimes, never) بتيجي قبل الفعل.', en: 'Adverbs of frequency go before the verb.' },
                    { ar: 'السؤال والنفي بنستخدم do / does: Do you study? She does not study.', en: 'Questions and negatives use do/does.' }
                  ],
                  table: [
                    { a: 'I go', b: 'He goes' },
                    { a: 'Do you study?', b: 'She does not study.' },
                    { a: 'always / usually', b: 'before the verb' }
                  ],
                  note: { ar: 'لو الجملة فيها does، الفعل الرئيسي بيبقى بدون s.', en: 'After does, the main verb loses its s.' }
                },
                reading: {
                  title: { ar: 'يوم مريم', en: 'Mariam\'s day' },
                  linesEn: ['Mariam wakes up at six thirty every morning.', 'She has breakfast with her family, then she goes to school.', 'She usually takes the bus, but sometimes she walks.', 'In the afternoon she does her homework and studies English.', 'In the evening she reads or listens to music.', 'She goes to bed at ten o\'clock.'],
                  linesAr: ['مريم بتصحى كل يوم ٦:٣٠.', 'بتفطر مع عيلتها، وبعدها بتروح المدرسة.', 'العادة بتروح بالأتوبيس، بس أحياناً بتمشي.', 'بعد الظهر بتعمل واجبها وبتدرس إنجليزي.', 'بالليل بتقرأ أو تسمع موسيقى.', 'بتنام الساعة عشرة.'],
                  questions: [
                    { q: 'What time does Mariam wake up?', qMeaning: 'مريم بتصحى الساعة كام؟', options: ['Six thirty', 'Seven', 'Ten'], answer: 0 },
                    { q: 'What does she do in the evening?', qMeaning: 'بتعمل إيه بالليل؟', options: ['Reads or listens to music', 'Goes to school', 'Plays football'], answer: 0 }
                  ]
                },
                listening: [
                  ['I wake up at six o\'clock.', ['six', 'seven', 'ten'], 0, 'بصحى الساعة ستة.'],
                  ['She goes to bed at ten.', ['ten', 'two', 'twelve'], 0, 'هي بتنام الساعة عشرة.'],
                  ['What time do you have breakfast?', ['What time do you have breakfast?', 'What do you have for breakfast?', 'Where do you have breakfast?'], 0, 'بتفطر الساعة كام؟']
                ],
                speaking: [
                  ['I wake up at seven every day.', 'بصحى الساعة سبعة كل يوم.', 'آي ويك آب آت سِفِن إڤري داي'],
                  ['What time do you go to school?', 'بتروح المدرسة الساعة كام؟', 'وات تايم دو يو جو تو سكول'],
                  ['I usually study in the evening.', 'العادة بدرس بالمسا.', 'آي يوجوالي ستَدي إن ذي إڤنينج']
                ],
                conversation: {
                  setting: { ar: 'صاحبين بيسألوا عن روتينهم', en: 'Two friends comparing daily routines' },
                  lines: [
                    ['Karim', 'What time do you wake up every day?', 'بتصحى الساعة كام كل يوم؟', 'وات تايم دو يو ويك آب إڤري داي'],
                    ['Hoda', 'I wake up at six thirty. And you?', 'بصحى ٦:٣٠. وأنت؟', 'آي ويك آب آت سِكس ثِرتي. آند يو'],
                    ['Karim', 'I wake up at seven, but I never have breakfast.', 'أنا بصحى سبعة، بس عمري ما بفطر.', 'آي ويك آب آت سِفِن، بَت آي نِڤر هاف برِكفست'],
                    ['Hoda', 'Really? That is not healthy!', 'بجد؟ ده مش صحي!', 'ريلي؟ ذات إز نات هيلثي'],
                    ['Karim', 'I know. I usually eat at school.', 'عارف. العادة باكل في المدرسة.', 'آي نو. آي يوجوالي إيت آت سكول'],
                    ['Hoda', 'What time do you go to bed?', 'بتنام الساعة كام؟', 'وات تايم دو يو جو تو بِد'],
                    ['Karim', 'At eleven. What about you?', 'الساعة حداشر. وأنتي؟', 'آت إلِڤِن. وات أبا-وت يو'],
                    ['Hoda', 'At nine! I like to sleep early.', 'التسعة! أنا بحب أنام بدري.', 'آت ناين! آي لايك تو سليب إرلي']
                  ],
                  vocab: [['really', 'بجد'], ['healthy', 'صحي'], ['eat', 'آكل'], ['What about you?', 'وأنت؟'], ['sleep', 'نوم']],
                  questions: [
                    { q: 'What time does Hoda wake up?', qMeaning: 'هدى بتصحى الساعة كام؟', options: ['Six thirty', 'Seven', 'Nine'], answer: 0 },
                    { q: 'What does Karim never do?', qMeaning: 'كريم عمره ما بيعمل إيه؟', options: ['Have breakfast', 'Go to school', 'Sleep'], answer: 0 },
                    { q: 'What time does Hoda go to bed?', qMeaning: 'هدى بتنام الساعة كام؟', options: ['Nine', 'Eleven', 'Ten'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Write a little' },
                  tasks: [
                    { ar: 'اكتب روتينك اليومي في ٥ جمل بالترتيب.', en: 'Write your daily routine in five ordered sentences.' },
                    { ar: 'اكتب جملتين بظرف تكرار (usually / never).', en: 'Write two sentences with always/usually/never.' }
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
