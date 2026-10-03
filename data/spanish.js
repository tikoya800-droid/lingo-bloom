/* ==========================================================================
   LingoBloom — ESPAÑOL (contenido original)
   Forma compacta: [palabra, significado(ar), pronunciación(ar), ejemplo, traducción]
   ========================================================================== */
(function () {
  LB.addLanguage(
    { code: 'es', name: 'Español', native: 'Aprender español', meaning: 'الإسبانية',
      flag: '🇪🇸', speech: 'es-ES', tone: 'peach', scene: '75%',
      blurb: { ar: 'أكتر لغة بتتعلّم في العالم — وقريبة من العربي في كتير.', en: 'The world\'s most-studied language — and close to Arabic in many ways.' } },
    {
      A0: {
        label: { ar: 'مبتدئ تماماً', en: 'Absolute beginner' },
        units: [
          {
            title: 'Los básicos', titleMeaning: 'الأساسيات',
            summary: { ar: 'التحية، الأرقام، والتعريف بنفسك بالإسباني.', en: 'Greetings, numbers and introducing yourself in Spanish.' },
            lessons: [
              {
                id: 'es-a0-u1-l1', topic: 'Saludos', title: 'Los saludos', titleMeaning: 'التحيات', minutes: 12,
                goals: { ar: ['تسلّم وتودّع بالإسباني', 'تفرّق بين tú و usted', 'تسأل عن الحال'],
                         en: ['Greet and say goodbye in Spanish', 'Tell tú from usted', 'Ask how someone is'] },
                vocab: [
                  ['Hola', 'هاي / أهلاً', 'أولا', '¡Hola, Ana!', 'أهلاً يا آنا!'],
                  ['Buenos días', 'صباح الخير', 'بوينوس ديياس', 'Buenos días, señora.', 'صباح الخير يا مدام.'],
                  ['Buenas tardes', 'طاب مساؤك (بعد الظهر)', 'بويناس تارديس', 'Buenas tardes, clase.', 'طاب مساء الفصل.'],
                  ['Buenas noches', 'مساء الخير / تصبح على خير', 'بويناس نوتشيس', 'Buenas noches, familia.', 'تصبحوا على خير يا عيلة.'],
                  ['Adiós', 'إلى اللقاء', 'أديوس', '¡Adiós, hasta mañana!', 'إلى اللقاء، لبكرة!'],
                  ['Gracias', 'شكراً', 'جراسياس', '¡Gracias!', 'شكراً!'],
                  ['Por favor', 'من فضلك', 'بور فاڤور', 'Un café, por favor.', 'قهوة من فضلك.'],
                  ['¿Cómo estás?', 'إزيك؟', 'كومو إستاس', '¡Hola! ¿Cómo estás?', 'أهلاً! إزيك؟']
                ],
                related: [
                  ['Bienvenido', 'أهلاً وسهلاً', 'بيينڤينيدو', '¡Bienvenido a Madrid!', 'أهلاً بيك في مدريد!'],
                  ['Perdón', 'آسف / لو سمحت', 'بيردون', 'Perdón, ¿puedo pasar?', 'لو سمحت، أقدر أعدي؟'],
                  ['Señor / Señora', 'سيد / مدام', 'سينيور / سينيورا', 'Buenos días, señor.', 'صباح الخير يا سيد.'],
                  ['Hasta luego', 'أشوفك بعدين', 'أستا لويجو', '¡Hasta luego, amigo!', 'أشوفك بعدين يا صاحبي!'],
                  ['Mucho gusto', 'فرصة سعيدة', 'موتشو جوستو', 'Mucho gusto, María.', 'فرصة سعيدة يا ماريا.']
                ],
                expressions: [
                  ['¿Cómo está usted?', 'إزي حضرتك؟ (رسمي)', 'كومو إستا أوستيد', 'Buenos días, ¿cómo está usted?', 'صباح الخير، إزي حضرتك؟'],
                  ['Estoy bien, gracias', 'أنا بخير، شكراً', 'إستوي بيين، جراسياس', 'Estoy bien, gracias. ¿Y usted?', 'أنا بخير شكراً. وحضرتك؟'],
                  ['¿Cómo te llamas?', 'اسمك إيه؟', 'كومو تي ياماس', '¡Hola! ¿Cómo te llamas?', 'أهلاً! اسمك إيه؟'],
                  ['Me llamo ...', 'اسمي ...', 'مي يامو', 'Me llamo Sofía.', 'اسمي صوفيا.']
                ],
                examples: [
                  ['¡Hola! Me llamo Sofía.', 'أهلاً! اسمي صوفيا.', 'أولا! مي يامو صوفيا', ['Hola', 'Me', 'llamo', 'Sofía']],
                  ['¿Cómo estás hoy?', 'إزيك النهاردة؟', 'كومو إستاس أوي', ['Cómo', 'estás', 'hoy']],
                  ['Estoy bien, gracias. ¿Y tú?', 'أنا بخير شكراً. وأنت؟', 'إستوي بيين، جراسياس. إي تو', ['Estoy', 'bien', 'gracias', 'Y', 'tú']],
                  ['Mucho gusto, hasta luego.', 'فرصة سعيدة، أشوفك بعدين.', 'موتشو جوستو، أستا لويجو', ['Mucho', 'gusto', 'hasta', 'luego']]
                ],
                grammar: {
                  title: { ar: 'tú و usted — وعلامات السؤال', en: 'tú and usted — and question marks' },
                  points: [
                    { ar: 'الإسباني فيه اتنين "أنت": tú مع الأصحاب و usted مع الرسمي.', en: 'Spanish has tú (friends) and usted (formal).' },
                    { ar: 'الإسباني بيفتح السؤال بعلامة ¿ ويقفله بـ ? — الاتنين مطلوبين.', en: 'Spanish opens questions with ¿ and closes with ?.' },
                    { ar: 'الفعل estar للحالة: Estoy bien / Estoy cansado.', en: 'estar shows state: Estoy bien.' },
                    { ar: 'الحروف المتحركة قصيرة وواضحة — كل حرف بيتقرأ تقريباً.', en: 'Vowels are short and clear — every letter is pronounced.' }
                  ],
                  table: [
                    { a: 'yo estoy', b: 'أنا' },
                    { a: 'tú estás', b: 'أنت (صاحبك)' },
                    { a: 'usted está', b: 'حضرتك' }
                  ],
                  note: { ar: 'tú (بحرف كابيتال) = أنت، و tu (صغير) = بتاعك.', en: 'tú means "you"; tu means "your".' }
                },
                reading: {
                  title: { ar: 'في مقهى في مدريد', en: 'En una cafetería de Madrid' },
                  linesEn: ['Sofía entra en una cafetería.', '« ¡Buenos días! » dice.', '« Buenos días, señora. ¿Cómo está? »', '« Estoy bien, gracias. Un café, por favor. »', '« ¡Ahora mismo! »', 'Sofía sonríe. Madrid es preciosa por la mañana.'],
                  linesAr: ['صوفيا دخلت مقهى.', '"صباح الخير!" بتقول.', '"صباح الخير يا مدام. إزي حضرتك؟"', '"أنا بخير شكراً. قهوة من فضلك."', '"حالاً!"', 'صوفيا ابتسمت. مدريد حلوة الصبح.'],
                  questions: [
                    { q: '¿Dónde está Sofía?', qMeaning: 'صوفيا فين؟', options: ['En una cafetería', 'En la escuela', 'En casa'], answer: 0 },
                    { q: '¿Qué pide?', qMeaning: 'طلبت إيه؟', options: ['Un café', 'Un té', 'Agua'], answer: 0 }
                  ]
                },
                listening: [
                  ['Buenos días, ¿cómo está?', ['Buenos días, ¿cómo está?', 'Buenas tardes, ¿cómo estás?', '¡Adiós!'], 0, 'صباح الخير، إزي حضرتك؟'],
                  ['Muchas gracias.', ['Muchas gracias', 'Perdón', 'Hola'], 0, 'شكراً جزيلاً.'],
                  ['¡Hasta luego!', ['Hasta luego', 'Buenos días', 'Por favor'], 0, 'أشوفك بعدين!']
                ],
                speaking: [
                  ['¡Buenos días! ¿Cómo está?', 'صباح الخير! إزي حضرتك؟', 'بوينوس ديياس! كومو إستا'],
                  ['Me llamo Sofía.', 'اسمي صوفيا.', 'مي يامو صوفيا'],
                  ['Mucho gusto, adiós.', 'فرصة سعيدة، إلى اللقاء.', 'موتشو جوستو، أديوس']
                ],
                conversation: {
                  setting: { ar: 'طفلة بتسلّم على جارها الجديد', en: 'A girl greets her new neighbour' },
                  lines: [
                    ['Sofía', '¡Hola! Me llamo Sofía.', 'أهلاً! اسمي صوفيا.', 'أولا! مي يامو صوفيا'],
                    ['Diego', '¡Hola Sofía! Yo soy Diego.', 'أهلاً يا صوفيا! أنا دييجو.', 'أولا صوفيا! يو سوي دييجو'],
                    ['Sofía', '¡Mucho gusto! ¿Cómo estás?', 'فرصة سعيدة! إزيك؟', 'موتشو جوستو! كومو إستاس'],
                    ['Diego', 'Muy bien, gracias. ¿Y tú?', 'كويس جداً شكراً. وأنتِ؟', 'موي بيين، جراسياس. إي تو'],
                    ['Sofía', 'Bien. ¿Vives aquí?', 'كويسة. ساكن هنا؟', 'بيين. ڤيڤيس أكي'],
                    ['Diego', 'Sí, en el segundo piso.', 'أيوه، في الدور التاني.', 'سي، إن إل سيجوندو بيسو'],
                    ['Sofía', '¡Perfecto! ¡Hasta luego!', 'تمام! أشوفك!', 'بيرفكتو! أستا لويجو'],
                    ['Diego', '¡Adiós, hasta pronto!', 'سلام، قريب!', 'أديوس، أستا برونتو']
                  ],
                  vocab: [['Vives', 'تسكن'], ['piso', 'دور'], ['muy bien', 'كويس جداً'], ['hasta pronto', 'قريب'], ['perfecto', 'تمام']],
                  questions: [
                    { q: '¿Dónde vive Diego?', qMeaning: 'دييجو ساكن فين؟', options: ['En el segundo piso', 'En el primer piso', 'En la planta baja'], answer: 0 },
                    { q: '¿Cómo está Diego?', qMeaning: 'دييجو حالته إيه؟', options: ['Muy bien', 'Mal', 'Cansado'], answer: 0 },
                    { q: '¿Qué dice Sofía al final?', qMeaning: 'صوفيا قالت إيه في الآخر؟', options: ['Hasta luego', 'Buenos días', 'Gracias'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Escribe un poco' },
                  tasks: [
                    { ar: 'اكتب تحية رسمية وتحية بين الأصحاب.', en: 'Write one formal and one informal greeting.' },
                    { ar: 'عرّف بنفسك: Me llamo ... Mucho gusto.', en: 'Introduce yourself: Me llamo … Mucho gusto.' }
                  ]
                }
              },
              {
                id: 'es-a0-u1-l2', topic: 'Números', title: 'Los números del 1 al 10', titleMeaning: 'الأرقام من ١ لـ ١٠', minutes: 14,
                goals: { ar: ['تعدّ بالإسباني', 'تسأل عن العمر', 'تنطق حرف j و ñ صح'],
                         en: ['Count 1–10 in Spanish', 'Ask about age', 'Pronounce j and ñ'] },
                vocab: [
                  ['uno', 'واحد (١)', 'أونو', 'un libro', 'كتاب واحد'],
                  ['dos', 'اتنين (٢)', 'دوس', 'dos amigos', 'صاحبين'],
                  ['tres', 'تلاتة (٣)', 'تريس', 'tres cafés', 'تلات قهوة'],
                  ['cuatro', 'أربعة (٤)', 'كواترو', 'cuatro gatos', 'أربع قطط'],
                  ['cinco', 'خمسة (٥)', 'سينكو', 'cinco minutos', 'خمس دقايق'],
                  ['seis', 'ستة (٦)', 'سيس', 'seis años', 'ست سنين'],
                  ['siete', 'سبعة (٧)', 'سييتي', 'siete días', 'سبع أيام'],
                  ['ocho', 'تمانية (٨)', 'أوتشو', 'ocho horas', 'تمن ساعات'],
                  ['nueve', 'تسعة (٩)', 'نويڤي', 'nueve personas', 'تسع أشخاص'],
                  ['diez', 'عشرة (١٠)', 'دييس', 'diez euros', 'عشر يورو']
                ],
                related: [
                  ['primero', 'الأول', 'بريميرو', 'el primer día', 'اليوم الأول'],
                  ['número', 'رقم', 'نوميرو', '¿Cuál es tu número?', 'رقمك كام؟'],
                  ['¿cuántos?', 'كام؟', 'كوانتوس', '¿Cuántos libros?', 'كام كتاب؟'],
                  ['edad', 'سِن', 'إيداد', '¿Cuál es tu edad?', 'سِنّك كام؟'],
                  ['años', 'سنين', 'أنيوس', 'Tengo diez años.', 'عندي عشر سنين.']
                ],
                expressions: [
                  ['¿Cuántos años tienes?', 'عندك كام سنة؟', 'كوانتوس أنيوس تيينيس', '¿Cuántos años tienes, Pablo?', 'عندك كام سنة يا بابلو؟'],
                  ['Tengo diez años', 'عندي عشر سنين', 'تينجو دييس أنيوس', 'Tengo diez años hoy.', 'عندي عشر سنين النهاردة.'],
                  ['¿Cuál es tu número?', 'رقمك كام؟', 'كوال إس تو نوميرو', '¿Cuál es tu número de teléfono?', 'رقم تليفونك كام؟'],
                  ['Mi número es ...', 'رقمي هو ...', 'مي نوميرو إس', 'Mi número es el 6 12 34.', 'رقمي هو ٦ ١٢ ٣٤.']
                ],
                examples: [
                  ['Tengo dos hermanos y tres hermanas.', 'عندي أخّين وتلات أخوات.', 'تينجو دوس إرمانوس إي تريس إرماناس', ['Tengo', 'dos', 'hermanos', 'y', 'tres', 'hermanas']],
                  ['Mi hermana tiene ocho años.', 'أختي عندها تمن سنين.', 'مي إرمانا تييني أوتشو أنيوس', ['Mi', 'hermana', 'tiene', 'ocho', 'años']],
                  ['Hay cinco estudiantes.', 'فيه خمس طلاب.', 'آي سينكو إستوديانتيس', ['Hay', 'cinco', 'estudiantes']],
                  ['Mi número es nueve, siete.', 'رقمي تسعة وسبعة.', 'مي نوميرو إس نويڤي، سييتي', ['Mi', 'número', 'es', 'nueve']]
                ],
                grammar: {
                  title: { ar: 'العمر بـ tener والجمع', en: 'Age with tener and plurals' },
                  points: [
                    { ar: 'الإسباني بيقول العمر بـ tener: Tengo diez años — "عندي عشر سنين".', en: 'Spanish uses tener for age: Tengo diez años.' },
                    { ar: 'الجمع: الاسم اللي يقف بـ o → os، واللي يقف بـ a → as: hermano → hermanos.', en: 'Plural: -o → -os; -a → -as.' },
                    { ar: 'hay معناها "فيه" للمفرد والجمع مع بعض.', en: 'hay means both "there is" and "there are".' },
                    { ar: 'حرف j بيتنطق خاء قوية، وحرف ñ زي "نْيَ".', en: 'j sounds like a strong h; ñ sounds like ny.' }
                  ],
                  table: [
                    { a: 'Tengo ocho años', b: 'عندي تمن سنين' },
                    { a: 'Tiene veinte años', b: 'عنده عشرين سنة' },
                    { a: 'hay', b: 'فيه (مفرد وجمع)' }
                  ],
                  note: { ar: 'tener فعل شاذ: tengo, tienes, tiene, tenemos.', en: 'tener is irregular: tengo, tienes, tiene.' }
                },
                reading: {
                  title: { ar: 'عيد ميلاد بابلو', en: 'El cumpleaños de Pablo' },
                  linesEn: ['Hoy es el cumpleaños de Pablo.', 'Pablo tiene nueve años.', 'Su hermana tiene seis años y su hermano tiene diez.', 'Hay nueve velas en la tarta.', '« ¿Cuántos años tienes? » pregunta su amigo.', '« ¡Tengo nueve años! » responde Pablo.'],
                  linesAr: ['النهاردة عيد ميلاد بابلو.', 'بابلو عنده تسع سنين.', 'أخته عندها ست سنين وأخوه عنده عشر.', 'على التورتة فيه تسع شمعات.', '"عندك كام سنة؟" سأله صاحبه.', '"عندي تسع سنين!" رد بابلو.'],
                  questions: [
                    { q: '¿Cuántos años tiene Pablo?', qMeaning: 'بابلو عنده كام سنة؟', options: ['Nueve', 'Seis', 'Diez'], answer: 0 },
                    { q: '¿Cuántas velas hay?', qMeaning: 'كام شمعة؟', options: ['Nueve', 'Seis', 'Diez'], answer: 0 }
                  ]
                },
                listening: [
                  ['Tengo siete años.', ['siete', 'seis', 'nueve'], 0, 'عندي سبع سنين.'],
                  ['¿Cuántos años tienes?', ['¿Cuántos años tienes?', '¿Cómo estás?', '¿Quién eres?'], 0, 'عندك كام سنة؟'],
                  ['Hay cinco flores.', ['cinco', 'dos', 'diez'], 0, 'فيه خمس زهور.']
                ],
                speaking: [
                  ['Tengo diez años.', 'عندي عشر سنين.', 'تينجو دييس أنيوس'],
                  ['¿Cuántos hermanos tienes?', 'عندك كام أخ؟', 'كوانتوس إرمانوس تيينيس'],
                  ['Mi número es el seis, dos.', 'رقمي ستة واتنين.', 'مي نوميرو إس إل سيس، دوس']
                ],
                conversation: {
                  setting: { ar: 'مدرّسة بتسأل الأولاد', en: 'A teacher asking the children' },
                  lines: [
                    ['Maestra', '¡Buenos días, niños! ¿Cuántos años tenéis?', 'صباح الخير يا أولاد! عندكم كام سنة؟', 'بوينوس ديياس، نيينيوس! كوانتوس أنيوس تينيس'],
                    ['Lucía', 'Tengo ocho años, señora.', 'عندي تمن سنين يا مدام.', 'تينجو أوتشو أنيوس، سينيورا'],
                    ['Mateo', 'Yo tengo nueve años. Tengo dos hermanos.', 'عندي تسع سنين. عندي أخّين.', 'يو تينجو نويڤي أنيوس. تينجو دوس إرمانوس'],
                    ['Maestra', '¡Muy bien, Mateo! ¿Y tú, Lucía?', 'تمام يا ماتيو! وأنتِ يا لوسيا؟', 'موي بيين، ماتيو! إي تو، لوسيا'],
                    ['Lucía', 'Tengo una hermana y un gato.', 'عندي أخت وقطة.', 'تينجو أونا إرمانا إي أون جاتو'],
                    ['Mateo', '¿Cuál es tu número de teléfono?', 'ورقم تليفونك كام؟', 'كوال إس تو نوميرو دي تيليفونو'],
                    ['Lucía', 'Mi número es el seis, tres, siete.', 'رقمي ستة، تلاتة، سبعة.', 'مي نوميرو إس إل سيس، تريس، سييتي'],
                    ['Maestra', '¡Excelente, niños!', 'ممتاز يا أولاد!', 'إكسيلينتي، نيينيوس']
                  ],
                  vocab: [['niños', 'أولاد'], ['maestra', 'مدرّسة'], ['gato', 'قطة'], ['tenéis', 'عندكم'], ['Excelente', 'ممتاز']],
                  questions: [
                    { q: '¿Cuántos años tiene Lucía?', qMeaning: 'لوسيا عندها كام سنة؟', options: ['Ocho', 'Nueve', 'Seis'], answer: 0 },
                    { q: '¿Cuántos hermanos tiene Mateo?', qMeaning: 'ماتيو عنده كام أخ؟', options: ['Dos', 'Uno', 'Tres'], answer: 0 },
                    { q: '¿Qué da Lucía?', qMeaning: 'لوسيا أدّت إيه؟', options: ['Su número', 'Su edad', 'Nada'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Escribe un poco' },
                  tasks: [
                    { ar: 'اكتب أعمار عيلتك بالأرقام الإسبانية.', en: 'Write your family\'s ages in Spanish numbers.' },
                    { ar: 'اكتب جملتين بـ tener: Tengo ... / Tiene ...', en: 'Write two sentences with tener.' }
                  ]
                }
              },
              {
                id: 'es-a0-u1-l3', topic: 'Presentarse', title: 'Presentarse', titleMeaning: 'التعريف بنفسك', minutes: 13,
                goals: { ar: ['تعرّف بنفسك بالاسم والعمر والبلد', 'تسأل حد عن نفسه', 'تستخدم ser و estar'],
                         en: ['Introduce yourself with name, age, country', 'Ask others about themselves', 'Use ser and estar'] },
                vocab: [
                  ['me llamo', 'اسمي', 'مي يامو', 'Me llamo Lucía.', 'اسمي لوسيا.'],
                  ['soy', 'أنا (أكون)', 'سوي', 'Soy egipcio.', 'أنا مصري.'],
                  ['egipcio / egipcia', 'مصري / مصرية', 'إخيبسيو', 'Ella es egipcia.', 'هي مصرية.'],
                  ['español / española', 'إسباني / إسبانية', 'إسبانيول', 'Él es español.', 'هو إسباني.'],
                  ['vivo', 'أعيش / أسكن', 'ڤيڤو', 'Vivo en El Cairo.', 'أنا ساكن في القاهرة.'],
                  ['hablo', 'بتكلم', 'أبلو', 'Hablo un poco de español.', 'بتكلم إسباني شوية.'],
                  ['aprendo', 'بتعلّم', 'أبريندو', 'Aprendo español.', 'بتعلّم إسباني.'],
                  ['estudiante', 'طالب', 'إستوديانتي', 'Soy estudiante.', 'أنا طالب.']
                ],
                related: [
                  ['ciudad', 'مدينة', 'سيوداد', '¿En qué ciudad?', 'في أي مدينة؟'],
                  ['país', 'بلد', 'باييس', '¿De qué país?', 'من أي بلد؟'],
                  ['idioma', 'لغة', 'إيديoma', 'Hablo dos idiomas.', 'بتكلم لغتين.'],
                  ['también', 'كمان / برضه', 'تامبيين', '¡Yo también!', 'وأنا كمان!'],
                  ['un poco', 'شوية', 'أون بوكو', 'Un poco, por favor.', 'شوية من فضلك.']
                ],
                expressions: [
                  ['Me llamo ... y tengo ... años.', 'اسمي ... وعندي ... سنة.', 'مي يامو ... إي تينجو ... أنيوس', 'Me llamo Omar y tengo doce años.', 'اسمي عمر وعندي اتناشر سنة.'],
                  ['Soy egipcio/a.', 'أنا مصري / مصرية.', 'سوي إخيبسيو/أ', 'Soy egipcia, de El Cairo.', 'أنا مصرية، من القاهرة.'],
                  ['Vivo en ...', 'أنا ساكن في ...', 'ڤيڤو إن', 'Vivo en Alejandría.', 'أنا ساكنة في الإسكندرية.'],
                  ['¿Cómo te llamas?', 'اسمك إيه؟', 'كومو تي ياماس', 'Perdón, ¿cómo te llamas?', 'لو سمحت، اسمك إيه؟']
                ],
                examples: [
                  ['Me llamo Lucía y soy española.', 'اسمي لوسيا وأنا إسبانية.', 'مي يامو لوسيا إي سوي إسبانيولا', ['Me', 'llamo', 'Lucía', 'y', 'soy', 'española']],
                  ['Vivo en Madrid con mi familia.', 'أنا ساكنة في مدريد مع عيلتي.', 'ڤيڤو إن مدريد كون مي فاميليا', ['Vivo', 'en', 'Madrid', 'con', 'mi', 'familia']],
                  ['Hablo inglés y un poco de español.', 'بتكلم إنجليزي وشوية إسباني.', 'أبلو إنجليس إي أون بوكو دي إسبانيول', ['Hablo', 'inglés', 'y', 'un', 'poco', 'de', 'español']],
                  ['¿Cómo te llamas?', 'اسمك إيه؟', 'كومو تي ياماس', ['Cómo', 'te', 'llamas']]
                ],
                grammar: {
                  title: { ar: 'ser و estar — الفرق المهم', en: 'ser vs estar — the key difference' },
                  points: [
                    { ar: 'ser للشيء الثابت: الجنسية، الشكل، الهوية. Soy egipcio.', en: 'ser for permanent things: identity, nationality. Soy egipcio.' },
                    { ar: 'estar للحالة المؤقتة أو المكان: Estoy cansado / Estoy en casa.', en: 'estar for temporary states and location.' },
                    { ar: 'الصفة بتتطابق: egipcio → egipcia، español → española.', en: 'Adjectives agree: egipcio → egipcia.' },
                    { ar: 'أسماء اللغات والجنسيات بحروف صغيرة في الإسباني.', en: 'Languages and nationalities are lowercase.' }
                  ],
                  table: [
                    { a: 'soy egipcio', b: 'أنا مصري (هوية)' },
                    { a: 'estoy bien', b: 'أنا كويس (حالة)' },
                    { a: 'estoy en casa', b: 'أنا في البيت (مكان)' }
                  ],
                  note: { ar: 'قاعدة سريعة: ser = هو أصلاً، estar = هو دلوقتي.', en: 'Quick rule: ser = what it is; estar = how/where it is now.' }
                },
                reading: {
                  title: { ar: 'طالبة جديدة في برشلونة', en: 'Una estudiante nueva en Barcelona' },
                  linesEn: ['Lucía es nueva en la clase.', 'Es egipcia y vive en Barcelona.', '« Me llamo Lucía. Tengo trece años. »', '« ¡Bienvenida! ¿Hablas español? »', '« Sí, un poco. Aprendo español. »', 'Los estudiantes están contentos.'],
                  linesAr: ['لوسيا جديدة في الفصل.', 'هي مصرية وساكنة في برشلونة.', '"اسمي لوسيا. عندي تلتاشر سنة."', '"أهلاً! بتتكلمي إسباني؟"', '"أيوه، شوية. أنا بتعلّم إسباني."', 'الطلاب مبسوطين.'],
                  questions: [
                    { q: '¿Dónde vive Lucía?', qMeaning: 'لوسيا ساكنة فين؟', options: ['En Barcelona', 'En El Cairo', 'En Madrid'], answer: 0 },
                    { q: '¿Cuántos años tiene?', qMeaning: 'عندها كام سنة؟', options: ['Trece', 'Tres', 'Doce'], answer: 0 }
                  ]
                },
                listening: [
                  ['Me llamo Lucía.', ['Lucía', 'Sofía', 'Ana'], 0, 'اسمي لوسيا.'],
                  ['Vivo en El Cairo.', ['El Cairo', 'Madrid', 'Barcelona'], 0, 'أنا ساكن في القاهرة.'],
                  ['¿Cómo te llamas?', ['¿Cómo te llamas?', '¿Cómo estás?', '¿Cuántos años tienes?'], 0, 'اسمك إيه؟']
                ],
                speaking: [
                  ['Me llamo ... y soy egipcio/a.', 'اسمي ... وأنا مصري/مصرية.', 'مي يامو ... إي سوي إخيبسيو/أ'],
                  ['¿Cómo te llamas?', 'اسمك إيه؟', 'كومو تي ياماس'],
                  ['Aprendo español.', 'أنا بتعلّم إسباني.', 'أبريندو إسبانيول']
                ],
                conversation: {
                  setting: { ar: 'يوم أول في كورس الإسباني', en: 'First day at a Spanish course' },
                  lines: [
                    ['Pablo', '¡Hola! ¿Cómo te llamas?', 'أهلاً! اسمك إيه؟', 'أولا! كومو تي ياماس'],
                    ['Lucía', 'Me llamo Lucía. ¿Y tú?', 'اسمي لوسيا. وأنت؟', 'مي يامو لوسيا. إي تو'],
                    ['Pablo', 'Yo soy Pablo. ¿Eres española?', 'أنا بابلو. إنتِ إسبانية؟', 'يو سوي بابلو. إريس إسبانيولا'],
                    ['Lucía', 'No, soy egipcia. Vivo en El Cairo.', 'لأ، أنا مصرية. ساكنة في القاهرة.', 'نو، سوي إخيبسيا. ڤيڤو إن إل كايرو'],
                    ['Pablo', '¡Interesante! Hablas bien español.', 'ممتع! بتتكلمي إسباني كويس.', 'إنترسانتي! أبلاس بيين إسبانيول'],
                    ['Lucía', '¡Gracias! Aprendo español desde hace un año.', 'شكراً! بتعلّم إسباني من سنة.', 'جراسياس! أبريندو إسبانيول ديسدي أسي أون أنيو'],
                    ['Pablo', '¿Eres estudiante?', 'إنتِ طالبة؟', 'إريس إستوديانتي'],
                    ['Lucía', 'Sí, estudio en la universidad.', 'أيوه، بدرس في الجامعة.', 'سي، إستوديو إن لا يونيڤرسيداد']
                  ],
                  vocab: [['desde hace', 'من (مدة)'], ['universidad', 'جامعة'], ['interesante', 'ممتع'], ['bien', 'كويس'], ['No', 'لأ']],
                  questions: [
                    { q: '¿Cuál es la nacionalidad de Lucía?', qMeaning: 'جنسية لوسيا إيه؟', options: ['Egipcia', 'Española', 'Italiana'], answer: 0 },
                    { q: '¿Desde cuándo aprende español?', qMeaning: 'بتتعلم إسباني من قد إيه؟', options: ['Desde hace un año', 'Desde hace dos años', 'Desde hace un mes'], answer: 0 },
                    { q: '¿Dónde estudia?', qMeaning: 'بتدرس فين؟', options: ['En la universidad', 'En el colegio', 'En casa'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Escribe un poco' },
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
            title: 'Vida diaria', titleMeaning: 'الحياة اليومية',
            summary: { ar: 'يومك، الساعات، والعادات.', en: 'Your day, the clock and habits.' },
            lessons: [
              {
                id: 'es-a1-u1-l1', topic: 'Rutina', title: 'Mi día', titleMeaning: 'يومي', minutes: 15,
                goals: { ar: ['تحكي يومك بالترتيب', 'تستخدم الأفعال الضميرية', 'تقول الساعة'],
                         en: ['Describe your day in order', 'Use reflexive verbs', 'Tell the time'] },
                vocab: [
                  ['despertarse', 'يصحى', 'ديسبيرتارسي', 'Me despierto a las siete.', 'بصحى الساعة سبعة.'],
                  ['levantarse', 'يقوم من السرير', 'ليڤانتارسي', 'Me levanto temprano.', 'بقوم بدري.'],
                  ['desayunar', 'يفطر', 'ديسايونار', 'Desayuno a las ocho.', 'بفطر الساعة تمانية.'],
                  ['ir a la escuela', 'يروح المدرسة', 'إير آ لا إسكوييلا', 'Voy a la escuela andando.', 'بروح المدرسة ماشي.'],
                  ['trabajar', 'يشتغل', 'تراباخار', 'Trabajo por la mañana.', 'بشتغل الصبح.'],
                  ['los deberes', 'الواجب', 'لوس ديبييريس', 'Hago los deberes a las cinco.', 'بعمل الواجب الخمسة.'],
                  ['cenar', 'يتعشى', 'سينار', 'Cenamos a las ocho.', 'بنتعشى التمانية.'],
                  ['acostarse', 'ينام', 'أكوستارسي', 'Me acuesto a las diez.', 'بنام الساعة عشرة.']
                ],
                related: [
                  ['siempre', 'دايماً', 'سييمبري', 'Siempre llega tarde.', 'هو دايماً بيوصل متأخر.'],
                  ['a menudo', 'كتير', 'آ مينودو', 'Leo a menudo.', 'بقرأ كتير.'],
                  ['a veces', 'أحياناً', 'آ ڤيسيس', 'A veces camino.', 'أحياناً بمشي.'],
                  ['nunca', 'أبداً', 'نونكا', 'Nunca fumo.', 'عمري ما بدخّن.'],
                  ['temprano', 'بدري', 'تيمبرانو', 'Me levanto temprano.', 'بقوم بدري.'],
                  ['tarde', 'متأخر', 'تاردي', '¡No llegues tarde!', 'متتأخرش!']
                ],
                expressions: [
                  ['¿A qué hora te despiertas?', 'بتصحى الساعة كام؟', 'آ كي أورا تي ديسبيرتاس', '¿A qué hora te despiertas?', 'بتصحى الساعة كام؟'],
                  ['Me despierto a las siete.', 'بصحى الساعة سبعة.', 'مي ديسبيرتو آ لاس سييتي', 'Me despierto a las siete de la mañana.', 'بصحى الساعة سبعة الصبح.'],
                  ['¿Qué hora es?', 'الساعة كام؟', 'كي أورا إس', 'Perdón, ¿qué hora es?', 'لو سمحت، الساعة كام؟'],
                  ['Son las ocho y media.', 'الساعة تمانية والنص.', 'سون لاس أوتشو إي ميديا', 'Son las ocho y media.', 'الساعة تمانية والنص.']
                ],
                examples: [
                  ['Me despierto a las siete y desayuno.', 'بصحى الساعة سبعة وبفطر.', 'مي ديسبيرتو آ لاس سييتي إي ديسايونو', ['Me', 'despierto', 'a', 'las', 'siete']],
                  ['Luego voy a la escuela en autobús.', 'بعدها بروح المدرسة بالأتوبيس.', 'لويجو ڤوي آ لا إسكوييلا إن أوتوبوس', ['Luego', 'voy', 'a', 'la', 'escuela']],
                  ['Por la noche ceno con mi familia.', 'بالليل بتعشى مع عيلتي.', 'بور لا نوتشي سينو كون مي فاميليا', ['Por', 'la', 'noche', 'ceno', 'con', 'mi', 'familia']],
                  ['Nunca me acuesto tarde.', 'عمري ما بنام متأخر.', 'نونكا مي أكويستو تاردي', ['Nunca', 'me', 'acuesto', 'tarde']]
                ],
                grammar: {
                  title: { ar: 'الأفعال الضميرية والمضارع', en: 'Reflexive verbs and the present' },
                  points: [
                    { ar: 'أفعال الروتين إسباني ضميرية: me despierto، te levantas، se acuesta.', en: 'Routine verbs are reflexive: me despierto, te levantas.' },
                    { ar: 'المضارع بيمثّل الحاضر والمستمر: Leo = بقرأ / I am reading.', en: 'The present covers simple and continuous.' },
                    { ar: 'ظرف التكرار بييجي بعد الفعل: Voy siempre.', en: 'Frequency adverbs follow the verb.' },
                    { ar: 'الساعة بـ ser وليها جمع: Son las dos، ومفرد: Es la una.', en: 'Time uses ser: son las dos, es la una.' }
                  ],
                  table: [
                    { a: 'me despierto', b: 'أنا بصحى' },
                    { a: 'nos levantamos', b: 'إحنا بنقوم' },
                    { a: 'son las ocho', b: 'الساعة تمانية' }
                  ],
                  note: { ar: 'الإسباني كتير بيشيل الضمير: (Yo) trabajo كل يوم.', en: 'Subject pronouns are usually dropped.' }
                },
                reading: {
                  title: { ar: 'يوم لوسيا', en: 'El día de Lucía' },
                  linesEn: ['Lucía se despierta a las seis y media.', 'Desayuna con su madre.', 'Luego va a la escuela en autobús.', 'Por la tarde hace los deberes y lee un libro.', 'Por la noche cena con la familia a las ocho.', 'Se acuesta a las diez.'],
                  linesAr: ['لوسيا بتصحى ٦:٣٠.', 'بتفطر مع مامتها.', 'بعدين بتروح المدرسة بالأتوبيس.', 'بعد الضهر بتعمل واجبها وبتقرأ كتاب.', 'بالليل بتتعشى مع العيلة التمانية.', 'وبتنام الساعة عشرة.'],
                  questions: [
                    { q: '¿A qué hora se despierta Lucía?', qMeaning: 'لوسيا بتصحى الساعة كام؟', options: ['A las seis y media', 'A las siete', 'A las diez'], answer: 0 },
                    { q: '¿Cómo va a la escuela?', qMeaning: 'بتروح المدرسة إزاي؟', options: ['En autobús', 'Andando', 'En coche'], answer: 0 }
                  ]
                },
                listening: [
                  ['Me acuesto a las diez.', ['diez', 'dos', 'doce'], 0, 'بنام الساعة عشرة.'],
                  ['Me levanto temprano.', ['temprano', 'tarde', 'siempre'], 0, 'بقوم بدري.'],
                  ['¿A qué hora desayunas?', ['¿A qué hora desayunas?', '¿Dónde desayunas?', '¿Qué desayunas?'], 0, 'بتفطر الساعة كام؟']
                ],
                speaking: [
                  ['Me despierto a las siete.', 'بصحى الساعة سبعة.', 'مي ديسبيرتو آ لاس سييتي'],
                  ['¿A qué hora te acuestas?', 'بتنام الساعة كام؟', 'آ كي أورا تي أكويستاس'],
                  ['Trabajo por la mañana.', 'بشتغل الصبح.', 'تراباخو بور لا مانيانا']
                ],
                conversation: {
                  setting: { ar: 'صاحبين بيقارنوا يومهم', en: 'Two friends comparing their days' },
                  lines: [
                    ['Ana', '¿A qué hora te despiertas?', 'بتصحى الساعة كام؟', 'آ كي أورا تي ديسبيرتاس'],
                    ['Luis', 'A las seis y media. ¿Y tú?', '٦:٣٠. وأنتِ؟', 'آ لاس سيس إي ميديا. إي تو'],
                    ['Ana', 'A las siete. Siempre desayuno.', 'الساعة سبعة. أنا دايماً بفطر.', 'آ لاس سييتي. سييمبري ديسايونو'],
                    ['Luis', '¡Yo nunca! No tengo tiempo.', 'وأنا أبداً! معنديش وقت.', 'يو نونكا! نو تينجو تييمبو'],
                    ['Ana', '¿Y a qué hora te acuestas?', 'وبتنام الساعة كام؟', 'إي آ كي أورا تي أكويستاس'],
                    ['Luis', 'Sobre la medianoche. Trabajo mucho.', 'حوالي نص الليل. بشتغل كتير.', 'سوبري لا ميديانوتشي. تراباخو موتشو'],
                    ['Ana', '¡Es muy tarde! Duerme temprano hoy.', 'ده متأخر أوي! نام بدري النهاردة.', 'إس موي تاردي! دويرمي تيمبرانو أوي'],
                    ['Luis', 'Tienes razón. ¡Buenas noches!', 'عندك حق. تصبح على خير!', 'تيينيس راثون. بويناس نوتشيس']
                  ],
                  vocab: [['sobre', 'حوالي'], ['medianoche', 'نص الليل'], ['mucho', 'كتير'], ['muy tarde', 'متأخر أوي'], ['Tienes razón', 'عندك حق']],
                  questions: [
                    { q: '¿A qué hora se despierta Luis?', qMeaning: 'لويس بيصحى الساعة كام؟', options: ['Seis y media', 'Siete', 'Medianoche'], answer: 0 },
                    { q: '¿Por qué Luis no desayuna?', qMeaning: 'لويس بيفطرش ليه؟', options: ['No tiene tiempo', 'No le gusta', 'Está enfermo'], answer: 0 },
                    { q: '¿A qué hora se acuesta?', qMeaning: 'بينام الساعة كام؟', options: ['Sobre la medianoche', 'A las diez', 'A las ocho'], answer: 0 }
                  ]
                },
                writing: {
                  title: { ar: 'اكتب مع نفسك', en: 'Escribe un poco' },
                  tasks: [
                    { ar: 'اكتب يومك في ٥ جمل مع الساعات.', en: 'Write your day in five sentences with times.' },
                    { ar: 'اكتب جملتين بظرف تكرار (siempre / nunca).', en: 'Write two sentences with siempre / nunca.' }
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
