/* ==========================================================================
   LingoBloom — expansión del currículo · ESPAÑOL (contenido nativo)
   ========================================================================== */
(function () {
  if (!LB.addUnits) return;

  LB.addUnits('es', 'A1', [
    {
      title: 'Mi casa', titleMeaning: 'بيتي',
      summary: { ar: 'أوض البيت، الأثاث، والوصف بالإسباني.', en: 'Rooms, furniture and describing your home.' },
      lessons: [
        {
          id: 'es-a1-u2-l1', topic: 'Vivienda', title: 'Mi casa', titleMeaning: 'بيتي', minutes: 14,
          goals: { ar: ['تسمّي أوض البيت بالإسباني', 'تقول ساكن فين', 'تستخدم hay بسهولة'],
                   en: ['Name rooms in Spanish', 'Say where you live', 'Use “hay” easily'] },
          vocab: [
            ['la casa', 'بيت', 'لا كاسا', 'Vivo en una casa grande.', 'ساكن في بيت كبير.'],
            ['el piso', 'شقة', 'إل پيسو', 'Mi piso es pequeño.', 'شقتي صغيرة.'],
            ['la cocina', 'المطبخ', 'لا كوسينا', 'Mamá está en la cocina.', 'ماما في المطبخ.'],
            ['el dormitorio', 'أوضة النوم', 'إل دورميتوريو', 'Mi dormitorio está arriba.', 'أوضة نومي فوق.'],
            ['el baño', 'الحمّام', 'إل بانيو', 'El baño está a la derecha.', 'الحمّام على اليمين.'],
            ['el salón', 'الصالة', 'إل سالون', 'Vemos la tele en el salón.', 'بنتفرج على التلفزيون في الصالة.'],
            ['la puerta', 'الباب', 'لا پويرتا', 'Cierra la puerta, por favor.', 'اقفل الباب لو سمحت.'],
            ['la ventana', 'الشباك', 'لا ڤينتانا', '¡Abre la ventana!', 'افتح الشباك!']
          ],
          related: [
            ['la mesa', 'طربيزة', 'لا ميسا', 'El libro está en la mesa.', 'الكتاب على الطربيزة.'],
            ['la silla', 'كرسي', 'لا سيّا', 'Coge una silla.', 'خد كرسي.'],
            ['la cama', 'سرير', 'لا كاما', 'El gato duerme en la cama.', 'القطة نايمة على السرير.'],
            ['el sofá', 'كنبة', 'إل صوفا', 'El sofá es nuevo.', 'الكنبة جديدة.'],
            ['el jardín', 'جنينة', 'إل خاردين', 'Hay un jardín detrás.', 'في جنينة ورا.'],
            ['las llaves', 'المفاتيح', 'لاس يّاڤيس', '¿Dónde están las llaves?', 'المفاتيح فين؟']
          ],
          expressions: [
            ['¿Dónde vives?', 'إنت ساكن فين؟', 'دوندي ڤيڤيس', '¿Dónde vives, Pablo?', 'إنت ساكن فين يا پابلو؟'],
            ['Vivo en Madrid.', 'أنا ساكن في مدريد.', 'ڤيڤو إن مدريد', 'Vivo en Madrid, cerca del parque.', 'ساكن في مدريد، جنب الجنينة.'],
            ['¡Pasa, por favor!', 'اتفضل ادخل!', 'پاسا پور فاڤور', '¡Pasa, por favor! Estás en tu casa.', 'اتفضل ادخل! البيت بيتك.'],
            ['Está en el primer piso.', 'ده في الدور الأول.', 'إستا إن إل پريمير پيسو', 'El dormitorio está en el primer piso.', 'أوضة النوم في الدور الأول.']
          ],
          examples: [
            ['En el salón hay un sofá grande.', 'في الصالة كنبة كبيرة.', 'إن إل سالون أي أن صوفا جراندي', ['En', 'el', 'salón', 'hay', 'un', 'sofá', 'grande']],
            ['La cocina está al lado del baño.', 'المطبخ جنب الحمّام.', 'لا كوسينا إستا آل لادو دِل بانيو', ['La', 'cocina', 'está', 'al', 'lado', 'del', 'baño']],
            ['Hay dos ventanas en el dormitorio.', 'في شباكين في أوضة النوم.', 'أي دوس ڤينتاناس إن إل دورميتوريو', ['Hay', 'dos', 'ventanas', 'en', 'el', 'dormitorio']],
            ['No hay balcón.', 'مفيش بلكونة.', 'نو أي بالكون', ['No', 'hay', 'balcón']]
          ],
          grammar: {
            title: { ar: 'hay + حروف المكان', en: 'hay + prepositions of place' },
            points: [
              { ar: 'hay = فيه، وبتفضل زي ما هي مع المفرد والجمع.', en: '“hay” means there is/there are — the form never changes.' },
              { ar: 'حروف المكان: en (جوه)، sobre (فوق)، debajo de (تحت)، al lado de (جنب)، detrás de (ورا).', en: 'en, sobre, debajo de, al lado de, detrás de.' },
              { ar: 'estar بنستخدمها لتحديد مكان حاجة معروفة: El baño está allí.', en: 'Use “estar” to locate a known thing: El baño está allí.' }
            ],
            table: [
              { a: 'hay un sofá', b: 'Hay un sofá en el salón.' },
              { a: 'al lado de', b: 'La cocina está al lado del baño.' },
              { a: 'debajo de', b: 'El gato está debajo de la mesa.' },
              { a: 'no hay', b: 'No hay jardín.' }
            ],
            note: { ar: 'de + el = del، وأنت لازم تدمجهم دايماً.', en: '“de + el” always contracts to “del”.' }
          },
          reading: {
            title: { ar: 'بيت العيلة في مدريد', en: 'La casa de la familia en Madrid' },
            linesEn: ['Pablo vive en un piso en Madrid.', 'Hay tres habitaciones: un salón, una cocina y dos dormitorios.', 'En el salón hay un sofá azul y una ventana grande.', 'Su madre prepara la cena en la cocina.', 'Su hermano estudia en su dormitorio.', 'Por la noche, la familia cena junta en el salón.'],
            linesAr: ['پابلو ساكن في شقة في مدريد.', 'فيه تلات أوض: صالة ومطبخ وأوضتين.', 'في الصالة كنبة زرقا وشباك كبير.', 'مامته بتحضّر العشا في المطبخ.', 'أخوه بيدرس في أوضته.', 'بالليل العيلة بتعشى مع بعض في الصالة.'],
            questions: [
              { q: '¿Cuántos dormitorios hay?', qMeaning: 'فيه كام أوضة نوم؟', options: ['Dos', 'Tres', 'Uno'], answer: 0 },
              { q: '¿De qué color es el sofá?', qMeaning: 'لون الكنبة إيه؟', options: ['Azul', 'Rojo', 'Verde'], answer: 0 }
            ]
          },
          listening: [
            ['¿Dónde vives?', ['¿Dónde vives?', '¿Dónde trabajas?', '¿Dónde vas?'], 0, 'إنت ساكن فين؟'],
            ['La cocina está a la derecha.', ['La cocina está a la derecha', 'La cocina está a la izquierda', 'La cocina está arriba'], 0, 'المطبخ على اليمين.'],
            ['Hay dos sillas.', ['Dos sillas', 'Dos habitaciones', 'Dos mesas'], 0, 'في كرسيين.']
          ],
          speaking: [
            ['Vivo en un piso con mi familia.', 'ساكن في شقة مع عيلتي.', 'ڤيڤو إن أن پيسو كون مي فاميليا'],
            ['Hay un salón grande en mi casa.', 'عندي صالة كبيرة.', 'أي أن سالون جراندي إن مي كاسا'],
            ['Las llaves están en la mesa.', 'المفاتيح على الطربيزة.', 'لاس يّاڤيس إستان إن لا ميسا']
          ],
          conversation: {
            setting: { ar: 'پابلو بيزور شقة صاحبه خافيير', en: 'Pablo visita el piso de su amigo Javier' },
            lines: [
              ['Javier', '¡Hola, Pablo! Pasa, por favor.', 'هاي يا پابلو! اتفضل ادخل.', 'أولا پابلو! پاسا پور فاڤور'],
              ['Pablo', '¡Gracias! Tu piso es muy bonito.', 'شكراً! شقتك حلوة أوي.', 'جراسياس! تو پيسو إس موي بونيتو'],
              ['Javier', 'Este es el salón. Hay una ventana nueva.', 'دي الصالة. فيها شباك جديد.', 'إستي إس إل سالون. أي أونا ڤينتانا نوِيڤا'],
              ['Pablo', '¡Qué luminoso! ¿Y la cocina?', 'منوّرة! والمطبخ؟', 'كه لومينوسو! إي لا كوسينا'],
              ['Javier', 'La cocina está al lado del baño.', 'المطبخ جنب الحمّام.', 'لا كوسينا إستا آل لادو دِل بانيو'],
              ['Pablo', '¿Tenéis balcón?', 'عندكم بلكونة؟', 'تِنيس بالكون'],
              ['Javier', 'No, pero hay un jardín pequeño detrás.', 'لأ، بس فيه جنينة صغيرة ورا.', 'نو، پيرو أي أن خاردين پيكينيو دِتراس']
            ],
            vocab: [['Pasa', 'ادخل'], ['bonito', 'حلو'], ['luminoso', 'منوّر'], ['al lado de', 'جنب'], ['detrás', 'ورا']],
            questions: [
              { q: '¿Qué hay en el salón?', qMeaning: 'فيه إيه في الصالة؟', options: ['Una ventana nueva', 'Una cama grande', 'Un balcón'], answer: 0 },
              { q: '¿Tiene Javier balcón?', qMeaning: 'خافيير عنده بلكونة؟', options: ['No', 'Sí, dos', 'Sí, uno pequeño'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Escribe un poco' },
            tasks: [
              { ar: 'اوصف بيتك في ٤ جمل بـ hay.', en: 'Describe your home in four sentences with “hay”.' },
              { ar: 'اكتب ٣ جمل بحروف المكان (sobre / debajo de / al lado de).', en: 'Write three sentences with sobre / debajo de / al lado de.' }
            ]
          }
        },
        {
          id: 'es-a1-u2-l2', topic: 'Comidas', title: 'Las comidas', titleMeaning: 'الوجبات', minutes: 15,
          goals: { ar: ['تسمّي الوجبات والأكل', 'تطلب بأسلوب مؤدّب', 'تعبر عن اللي بتحبه'],
                   en: ['Name meals and food', 'Order politely', 'Express likes and dislikes'] },
          vocab: [
            ['el desayuno', 'الفطار', 'إل ديسايونو', 'Desayuno a las siete.', 'بفطر الساعة سبعة.'],
            ['el almuerzo', 'الغدا', 'إل ألمويرزو', 'El almuerzo es a mediodía.', 'الغدا الضهر.'],
            ['la cena', 'العشا', 'لا سينا', 'La cena es a las ocho.', 'العشا الساعة تمانية.'],
            ['el pan', 'عيش', 'إل بان', 'Me gusta el pan fresco.', 'بحب العيش الطازة.'],
            ['el agua', 'مية', 'إل أگوا', 'Bebo agua sin gas.', 'بشرب مية سادة.'],
            ['el queso', 'جبنة', 'إل كيسو', 'El queso español es delicioso.', 'الجبنة الإسبانية لذيذة.'],
            ['el pollo', 'فراخ', 'إل پويو', 'Comemos pollo los domingos.', 'بناكل فراخ يوم الحد.'],
            ['las verduras', 'خضار', 'لاس ڤيردوراس', '¡Come tus verduras!', 'كل الخضار!']
          ],
          related: [
            ['un huevo', 'بيضة', 'أن وِيڤو', 'Quiero dos huevos.', 'عايز بيضتين.'],
            ['una manzana', 'تفاحة', 'أونا مانزانا', 'Una manzana, por favor.', 'تفاحة لو سمحت.'],
            ['el pescado', 'سمك', 'إل پيسكادو', 'El pescado está fresco.', 'السمك طازة.'],
            ['una bebida', 'مشروب', 'أونا بِبيدا', '¿Qué bebida quieres?', 'عايز أنهي مشروب؟'],
            ['tengo hambre', 'أنا جعان', 'تينگو أمبرِ', 'Tengo hambre, ¡vamos a comer!', 'أنا جعان، يلا ناكل!'],
            ['tengo sed', 'أنا عطشان', 'تينگو سيد', 'Tengo sed. ¿Un vaso de agua?', 'أنا عطشان. كوباية مية؟']
          ],
          expressions: [
            ['Quisiera…', 'عايز…', 'كيسييرا', 'Quisiera un café, por favor.', 'عايز قهوة لو سمحت.'],
            ['¿Qué quieres comer?', 'عايز تاكل إيه؟', 'كه كييريس كومير', '¿Qué quieres comer esta noche?', 'عايز تاكل إيه النهاردة بالليل؟'],
            ['¡Está delicioso!', 'دي حاجة لذيذة!', 'إستا ديليسوسو', '¡Esta paella está deliciosa!', 'الپاييا دي لذيذة!'],
            ['No me gusta…', 'أنا مباحبش…', 'نو مي گوستا', 'No me gusta la cebolla.', 'مباحبش البصل.']
          ],
          examples: [
            ['En el desayuno como pan y queso.', 'في الفطار بآكل عيش وجبنة.', 'إن إل ديسايونو كومو بان إي كيسو', ['En', 'el', 'desayuno', 'como', 'pan', 'y', 'queso']],
            ['Bebemos té después de la cena.', 'بنشرب شاي بعد العشا.', 'بِڤيموس تي دِسپويس دِ لا سينا', ['Bebemos', 'té', 'después', 'de', 'la', 'cena']],
            ['Mi hermano no come pescado.', 'أخويا مبياكلش سمك.', 'مي إرمانو نو كومي پيسكادو', ['Mi', 'hermano', 'no', 'come', 'pescado']],
            ['¿Quieres una bebida?', 'تحب مشروب؟', 'كييريس أونا بِبيدا', ['¿Quieres', 'una', 'bebida']]
          ],
          grammar: {
            title: { ar: 'me gusta / me gustan', en: 'me gusta / me gustan' },
            points: [
              { ar: 'me gusta + مفرد، me gustan + جمع.', en: '“me gusta” + singular noun, “me gustan” + plural noun.' },
              { ar: 'للنفي نضيف no قبل: No me gusta el café.', en: 'Negative: “no me gusta…”' },
              { ar: 'الأسماء غير المعدودة (agua, pan) مالهاش جمع.', en: 'Uncountable nouns (agua, pan) have no plural.' }
            ],
            table: [
              { a: 'me gusta', b: 'Me gusta la paella.' },
              { a: 'me gustan', b: 'Me gustan las manzanas.' },
              { a: 'no me gusta', b: 'No me gusta el pescado.' },
              { a: 'mucho / poco', b: 'Me gusta mucho el queso.' }
            ],
            note: { ar: 'me gusta معناها حرفياً “بيعجبني”، فالفاعل هو الأكل مش أنت.', en: '“me gusta” literally means “it pleases me” — the food is the subject.' }
          },
          reading: {
            title: { ar: 'فطار يوم الحد', en: 'El desayuno del domingo' },
            linesEn: ['Los domingos la familia desayuna junta.', 'La abuela prepara té y huevos.', 'Pablo come pan con queso y bebe leche.', 'Su hermana toma una manzana y un zumo de naranja.', 'Después del desayuno, limpian la cocina juntos.', 'Luego van al mercado a comprar verduras.'],
            linesAr: ['يوم الحد العيلة بتفطر مع بعض.', 'الجدة بتعمل شاي وبيض.', 'پابلو بياكل عيش بالجبنة وبيشرب لبن.', 'أخته بتاخد تفاحة وعصير برتقان.', 'بعد الفطار بينضّفوا المطبخ مع بعض.', 'وبعدين بيروحوا السوق يشتروا خضار.'],
            questions: [
              { q: '¿Qué bebe Pablo?', qMeaning: 'پابلو بيشرب إيه؟', options: ['Leche', 'Té', 'Zumo'], answer: 0 },
              { q: '¿Adónde van después del desayuno?', qMeaning: 'بيروحوا فين بعد الفطار؟', options: ['Al mercado', 'A la escuela', 'Al parque'], answer: 0 }
            ]
          },
          listening: [
            ['Quisiera un café, por favor.', ['Un café', 'Un té', 'Agua'], 0, 'عايز قهوة لو سمحت.'],
            ['No me gusta el pescado.', ['No le gusta el pescado', 'Le gusta el pescado', 'Quiere pescado'], 0, 'أنا مباحبش السمك.'],
            ['La cena es a las ocho.', ['A las ocho', 'A las siete', 'A mediodía'], 0, 'العشا الساعة تمانية.']
          ],
          speaking: [
            ['Tengo hambre. Quisiera pan.', 'أنا جعان. عايز عيش.', 'تينگو أمبرِ. كيسييرا بان'],
            ['¡Está delicioso, gracias!', 'دي حاجة لذيذة، شكراً!', 'إستا ديليسوسو، جراسياس'],
            ['No como carne.', 'أنا مبآكلش لحمة.', 'نو كومو كارنِ']
          ],
          conversation: {
            setting: { ar: 'پابلو وأخته في المطبخ الصبح', en: 'Pablo y su hermana en la cocina por la mañana' },
            lines: [
              ['Pablo', 'Tengo hambre. ¿Qué hay para el desayuno?', 'أنا جعان. فيه إيه في الفطار؟', 'تينگو أمبرِ. كه أي پارا إل ديسايونو'],
              ['Lucía', 'Hay huevos y pan.', 'فيه بيض وعيش.', 'أي وِيڤوس إي بان'],
              ['Pablo', 'Quisiera queso también.', 'عايز جبنة كمان.', 'كيسييرا كيسو تامبيين'],
              ['Lucía', 'Vale. ¿Quieres té o leche?', 'تمام. عايز شاي ولا لبن؟', 'ڤالِ. كييريس تي أو ليتشِ'],
              ['Pablo', 'Leche, por favor. ¿Dónde está mamá?', 'لبن لو سمحت. ماما فين؟', 'ليتشِ، پور فاڤور. دوندي إستا ماما'],
              ['Lucía', 'En el jardín. ¡El desayuno está listo!', 'في الجنينة. الفطار جاهز!', 'إن إل خاردين. إل ديسايونو إستا ليستو']
            ],
            vocab: [['también', 'كمان'], ['Vale', 'تمام'], ['listo', 'جاهز'], ['leche', 'لبن'], ['jardín', 'جنينة']],
            questions: [
              { q: '¿Qué quiere beber Pablo?', qMeaning: 'پابلو عايز يشرب إيه؟', options: ['Leche', 'Té', 'Zumo'], answer: 0 },
              { q: '¿Dónde está mamá?', qMeaning: 'ماما فين؟', options: ['En el jardín', 'En la cocina', 'En el trabajo'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Escribe un poco' },
            tasks: [
              { ar: 'اكتب فطارك في ٣ جمل.', en: 'Write your breakfast in three sentences.' },
              { ar: 'اكتب حاجتين بتحبهم وحاجة مبتحبهاش بـ me gusta / me gustan.', en: 'Write two likes and one dislike with me gusta / me gustan.' }
            ]
          }
        }
      ]
    },
    {
      title: 'Vida diaria', titleMeaning: 'الحياة اليومية',
      summary: { ar: 'التسوّق والمقارنة بين الأسعار بالإسباني.', en: 'Shopping and comparing prices.' },
      lessons: [
        {
          id: 'es-a2-u1-l1', topic: 'Compras', title: 'De compras', titleMeaning: 'التسوّق', minutes: 16,
          goals: { ar: ['تسأل عن السعر', 'تقارن بين حاجتين', 'تشتري ودفع بثقة'],
                   en: ['Ask about price', 'Compare two items', 'Buy and pay confidently'] },
          vocab: [
            ['la tienda', 'محل', 'لا تييندا', 'La tienda abre a las nueve.', 'المحل بيفتح الساعة تسعة.'],
            ['el precio', 'السعر', 'إل پريسّيو', 'El precio está en la etiqueta.', 'السعر على اللافتة.'],
            ['barato', 'رخيص', 'باراتو', 'Este bolso es barato.', 'الشنطة دي رخيصة.'],
            ['caro', 'غالي', 'كارو', 'Esa chaqueta es muy cara.', 'الجاكيت ده غالي أوي.'],
            ['la talla', 'المقاس', 'لا تايّا', '¿Qué talla usas?', 'بتلبس مقاس كام؟'],
            ['el recibo', 'إيصال', 'إل ريسيبو', 'Guarde el recibo, por favor.', 'خد الإيصال لو سمحت.'],
            ['el descuento', 'خصم', 'إل ديسكوينتو', '¿Hay descuento hoy?', 'فيه خصم النهاردة؟'],
            ['en efectivo', 'نقدي', 'إن إفيكتيڤو', 'Pago en efectivo.', 'هدفع كاش.']
          ],
          related: [
            ['el mercado', 'السوق', 'إل ميركادو', 'Vamos al mercado el sábado.', 'بنروح السوق السبت.'],
            ['el dependiente', 'البائع', 'إل دِپينديينتِ', 'El dependiente es amable.', 'البائع لطيف.'],
            ['el cambio', 'الباقي / فكة', 'إل كامبيو', 'Aquí tiene su cambio.', 'ده الباقي بتاع حضرتك.'],
            ['la caja', 'الكاشير', 'لا كاخا', 'Pague en la caja.', 'ادفع عند الكاشير.'],
            ['una bolsa', 'شنطة', 'أونا بولسا', '¿Necesita una bolsa?', 'محتاج شنطة؟'],
            ['una talla más', 'مقاس أكبر', 'أونا تايّا ماس', '¿Tiene una talla más?', 'عندك مقاس أكبر؟']
          ],
          expressions: [
            ['¿Cuánto cuesta?', 'ده بكام؟', 'كوانتو كوستا', 'Perdone, ¿cuánto cuesta este bolso?', 'لو سمحت، الشنطة دي بكام؟'],
            ['¿Puedo probármelo?', 'ممكن أقيسه؟', 'پويدو پروبارمِلو', '¿Puedo probármelo, por favor?', 'ممكن أقيسه لو سمحت؟'],
            ['Es demasiado caro para mí.', 'ده غالي عليّا.', 'إس ديماسيادو كارو پارا مي', 'Es demasiado caro para mí, lo siento.', 'غالي عليّا، آسف.'],
            ['Me lo llevo.', 'هاخده.', 'مي لو يِّڤو', 'La talla es perfecta, me lo llevo.', 'المقاس مظبوط، هاخده.']
          ],
          examples: [
            ['Esta camisa es más cara que la azul.', 'القميص ده أغلى من الأزرق.', 'إستا كاميسا إس ماس كارا كه لا أزول', ['Esta', 'camisa', 'es', 'más', 'cara', 'que', 'la', 'azul']],
            ['Busco un regalo para mi madre.', 'بدور على هدية لماما.', 'بوسكو أن رِگالو پارا مي مادرِ', ['Busco', 'un', 'regalo', 'para', 'mi', 'madre']],
            ['¿Tienen otro color?', 'عندكم لون تاني؟', 'تيينين أوترو كولور', ['¿Tienen', 'otro', 'color']],
            ['Pago con tarjeta.', 'هدفع بالكارت.', 'پاگو كون تارخيتا', ['Pago', 'con', 'tarjeta']]
          ],
          grammar: {
            title: { ar: 'المقارنة: más … que / menos … que', en: 'Comparatives: más … que / menos … que' },
            points: [
              { ar: 'más + صفة + que = أكثر من، menos + صفة + que = أقل من.', en: 'más + adjective + que = more than; menos … que = less than.' },
              { ar: 'صفة “bueno” بتبقى mejor مش más bueno.', en: '“bueno” becomes “mejor”, not “más bueno”.' },
              { ar: 'أعلى درجة: el más / la más + صفة.', en: 'Superlative: el más / la más + adjective.' }
            ],
            table: [
              { a: 'más caro que', b: 'Este es más caro que ese.' },
              { a: 'menos grande que', b: 'Mi cuarto es menos grande que el tuyo.' },
              { a: 'mejor', b: 'Este pan es mejor.' },
              { a: 'el más', b: 'Es el regalo más bonito.' }
            ],
            note: { ar: 'الصفة بتطابق الاسم في النوع: más caro / más cara.', en: 'Adjectives agree in gender: más caro / más cara.' }
          },
          reading: {
            title: { ar: 'هدية عيد ميلاد', en: 'Un regalo de cumpleaños' },
            linesEn: ['Elena quiere comprar un regalo para su madre.', 'Entra en una tienda pequeña cerca del mercado.', 'Ve una bufanda morada. Es bonita pero cara.', 'El dependiente le muestra una azul, más barata y más suave.', 'Elena pide un descuento y paga en efectivo.', 'Sale de la tienda con el recibo y una sonrisa.'],
            linesAr: ['إيلينا عايزة تشتري هدية لمامتها.', 'دخلت محل صغير جنب السوق.', 'شافت إيشارب بنفسجي. حلو بس غالي.', 'البائع ورّاها إيشارب أزرق، أرخص وأنعم.', 'إيلينا طلبت خصم ودفعت كاش.', 'خرجت من المحل بالإيصال وبابتسامة.'],
            questions: [
              { q: '¿Para quién es el regalo?', qMeaning: 'الهدية لمين؟', options: ['Su madre', 'Su hermana', 'Su amiga'], answer: 0 },
              { q: '¿Por qué elige la bufanda azul?', qMeaning: 'ليه اختارت الإيشارب الأزرق؟', options: ['Es más barata', 'Es más grande', 'Es nueva'], answer: 0 }
            ]
          },
          listening: [
            ['¿Cuánto cuesta?', ['¿Cuánto cuesta?', '¿Dónde estás?', '¿Quién es?'], 0, 'ده بكام؟'],
            ['¿Puedo probármelo?', ['Probármelo', 'Lavarlo', 'Llevarlo'], 0, 'ممكن أقيسه؟'],
            ['Pago en efectivo.', ['En efectivo', 'Con tarjeta', 'En línea'], 0, 'هدفع كاش.']
          ],
          speaking: [
            ['Perdone, ¿cuánto cuesta este bolso?', 'لو سمحت، الشنطة دي بكام؟', 'پِردونِ، كوانتو كوستا إستي بولسو'],
            ['¿Puedo probármelo, por favor?', 'ممكن أقيسه لو سمحت؟', 'پويدو پروبارمِلو، پور فاڤور'],
            ['Es demasiado caro. ¿Hay descuento?', 'غالي أوي. فيه خصم؟', 'إس ديماسيادو كارو. أي ديسكوينتو']
          ],
          conversation: {
            setting: { ar: 'إيلينا بتشتري إيشارب من محل', en: 'Elena compra una bufanda en una tienda' },
            lines: [
              ['Dependiente', '¡Buenos días! ¿Puedo ayudarle?', 'صباح الخير! أقدر أساعدك؟', 'بوينوس ديياس! پويدو أيودارلِ'],
              ['Elena', 'Sí, busco una bufanda.', 'أيوه، بدور على إيشارب.', 'سي، بوسكو أونا بوفاندا'],
              ['Dependiente', 'Tenemos moradas y azules.', 'عندنا بنفسجي وأزرق.', 'تينيموس موراداس إي أزولِس'],
              ['Elena', '¿Cuánto cuesta la morada?', 'البنفسجي بكام؟', 'كوانتو كوستا لا مورادا'],
              ['Dependiente', 'Treinta euros.', 'تلاتين يورو.', 'ترينتا يوروس'],
              ['Elena', 'Es demasiado caro para mí. ¿Hay descuento?', 'غالي عليّا. فيه خصم؟', 'إس ديماسيادو كارو پارا مي. أي ديسكوينتو'],
              ['Dependiente', 'Sí, diez por ciento hoy.', 'أيوه، عشرة في المية النهاردة.', 'سي، دييِز پور سينتو أوي'],
              ['Elena', 'Perfecto, me la llevo. El recibo, por favor.', 'تمام، هاخده. الإيصال لو سمحت.', 'پِرفيكتو، مي لا يِّڤو. إل ريسيبو، پور فاڤور']
            ],
            vocab: [['ayudar', 'يساعد'], ['bufanda', 'إيشارب'], ['descuento', 'خصم'], ['recibo', 'إيصال'], ['Perfecto', 'تمام']],
            questions: [
              { q: '¿Qué bufanda mira primero Elena?', qMeaning: 'إيلينا بصّت على أنهي إيشارب الأول؟', options: ['La morada', 'La azul', 'La roja'], answer: 0 },
              { q: '¿Cuánto es el descuento?', qMeaning: 'الخصم كام؟', options: ['Diez por ciento', 'Veinte por ciento', 'Ninguno'], answer: 0 }
            ]
          },
          writing: {
            title: { ar: 'اكتب مع نفسك', en: 'Escribe un poco' },
            tasks: [
              { ar: 'اكتب حوار قصير في محل (٤ أدوار).', en: 'Write a short shop dialogue (four turns).' },
              { ar: 'قارن بين حاجتين بـ más / menos … que.', en: 'Compare two things with más / menos … que.' }
            ]
          }
        }
      ]
    }
  ], { ar: 'متوسط', en: 'Elementary' });
})();
