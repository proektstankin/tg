
const dishes = [

    {
        id: "d1",
        name: "Овсяная каша с ягодами",
        difficulty: "Легко",
        time: "15 минут",
        ingredients: ["Овсяные хлопья", "Молоко/Вода", "Ягоды (свежие/замороженные)", "Мед/Сахар"],
        calories: 250,
        tags: ["завтрак"],
    },
    {
        id: "d2",
        name: "Яичница с тостами и авокадо",
        difficulty: "Легко",
        time: "10 минут",
        ingredients: ["Яйца", "Хлеб для тостов", "Авокадо", "Соль", "Перец"],
        calories: 350,
        tags: ["завтрак"],
    },
    {
        id: "d11",
        name: "Сырники со сметаной",
        difficulty: "Средне",
        time: "25 минут",
        ingredients: ["Творог", "Яйцо", "Мука", "Сахар", "Сметана", "Ванилин"],
        calories: 380,
        tags: ["завтрак"],
    },
    {
        id: "d12",
        name: "Панкейки с кленовым сиропом",
        difficulty: "Средне",
        time: "20 минут",
        ingredients: ["Мука", "Молоко", "Яйцо", "Сахар", "Разрыхлитель", "Кленовый сироп"],
        calories: 420,
        tags: ["завтрак"],
    },
    {
        id: "d13",
        name: "Фруктовый смузи с йогуртом",
        difficulty: "Легко",
        time: "5 минут",
        ingredients: ["Банан", "Ягоды", "Йогурт", "Молоко/Вода", "Мед"],
        calories: 200,
        tags: ["завтрак", "десерты"],
    },
    {
        id: "d14",
        name: "Омлет с сыром и грибами",
        difficulty: "Легко",
        time: "15 минут",
        ingredients: ["Яйца", "Молоко", "Сыр", "Шампиньоны", "Лук", "Соль", "Перец"],
        calories: 300,
        tags: ["завтрак"],
    },
    {
        id: "d15",
        name: "Тосты с арахисовой пастой и бананом",
        difficulty: "Легко",
        time: "5 минут",
        ingredients: ["Тостовый хлеб", "Арахисовая паста", "Банан", "Мед (по желанию)"],
        calories: 320,
        tags: ["завтрак"],
    },
    {
        id: "d16",
        name: "Круассаны с джемом",
        difficulty: "Легко",
        time: "10 минут (если круассаны готовы)",
        ingredients: ["Круассаны", "Любимый джем"],
        calories: 280,
        tags: ["завтрак"],
    },
    {
        id: "d17",
        name: "Рисовая каша на молоке с изюмом",
        difficulty: "Легко",
        time: "30 минут",
        ingredients: ["Рис", "Молоко", "Сахар", "Соль", "Изюм", "Сливочное масло"],
        calories: 310,
        tags: ["завтрак"],
    },
    {
        id: "d18",
        name: "Гранола с йогуртом и фруктами",
        difficulty: "Легко",
        time: "5 минут",
        ingredients: ["Гранола", "Натуральный йогурт", "Свежие фрукты"],
        calories: 290,
        tags: ["завтрак"],
    },



    {
        id: "d3",
        name: "Курица Терияки с рисом и брокколи",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Куриное филе", "Соус Терияки", "Рис", "Брокколи", "Кунжут"],
        calories: 600,
        tags: ["основное блюдо"],
    },
    {
        id: "d4",
        name: "Паста Карбонара",
        difficulty: "Средне",
        time: "30 минут",
        ingredients: ["Спагетти", "Бекон", "Яйца", "Пармезан", "Черный перец"],
        calories: 750,
        tags: ["основное блюдо"],
    },
    {
        id: "d9",
        name: "Гречневая каша с грибами",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Гречневая крупа", "Грибы (шампиньоны или другие)", "Лук", "Морковь", "Растительное масло"],
        calories: 320,
        tags: ["основное блюдо", "завтрак"],
    },
    {
        id: "d10",
        name: "Салат Цезарь с курицей",
        difficulty: "Средне",
        time: "20 минут",
        ingredients: ["Куриное филе", "Листья салата Ромэн", "Сухарики", "Пармезан", "Соус Цезарь"],
        calories: 480,
        tags: ["основное блюдо"],
    },
    {
        id: "d19",
        name: "Плов с курицей",
        difficulty: "Средне",
        time: "60 минут",
        ingredients: ["Рис", "Курица", "Морковь", "Лук", "Растительное масло", "Зира", "Барбарис"],
        calories: 550,
        tags: ["основное блюдо"],
    },
    {
        id: "d20",
        name: "Лазанья Болоньезе",
        difficulty: "Сложно",
        time: "90 минут",
        ingredients: ["Листы лазаньи", "Фарш", "Томатная паста", "Молоко", "Мука", "Сыр"],
        calories: 800,
        tags: ["основное блюдо"],
    },
    {
        id: "d21",
        name: "Жареная рыба с овощами",
        difficulty: "Легко",
        time: "25 минут",
        ingredients: ["Филе рыбы", "Кабачки", "Морковь", "Перец", "Лимон", "Масло"],
        calories: 420,
        tags: ["основное блюдо"],
    },
    {
        id: "d22",
        name: "Котлеты по-Киевски",
        difficulty: "Сложно",
        time: "45 минут",
        ingredients: ["Куриное филе", "Сливочное масло", "Яйца", "Сухари", "Мука", "Зелень"],
        calories: 650,
        tags: ["основное блюдо"],
    },
    {
        id: "d23",
        name: "Чечевичный суп-пюре",
        difficulty: "Легко",
        time: "35 минут",
        ingredients: ["Красная чечевица", "Морковь", "Лук", "Картофель", "Томаты", "Бульон"],
        calories: 320,
        tags: ["супы", "основное блюдо"],
    },
    {
        id: "d24",
        name: "Рататуй",
        difficulty: "Средне",
        time: "60 минут",
        ingredients: ["Баклажаны", "Кабачки", "Перец", "Томаты", "Лук", "Чеснок", "Тимьян"],
        calories: 300,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d25",
        name: "Голубцы ленивые",
        difficulty: "Средне",
        time: "70 минут",
        ingredients: ["Фарш", "Капуста", "Рис", "Морковь", "Лук", "Томатный соус"],
        calories: 520,
        tags: ["основное блюдо"],
    },
    {
        id: "d26",
        name: "Фрикадельки в томатном соусе",
        difficulty: "Легко",
        time: "35 минут",
        ingredients: ["Фарш", "Рис", "Томатный соус", "Лук", "Чеснок", "Зелень"],
        calories: 450,
        tags: ["основное блюдо"],
    },
    {
        id: "d27",
        name: "Котлеты из индейки с овощным пюре",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Фарш индейки", "Хлеб", "Молоко", "Картофель", "Морковь", "Горошек"],
        calories: 490,
        tags: ["основное блюдо"],
    },
    {
        id: "d28",
        name: "Пюре с сосисками",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Картофель", "Молоко", "Масло", "Сосиски"],
        calories: 500,
        tags: ["основное блюдо", "быстро"],
    },
    {
        id: "d29",
        name: "Рис с овощами и яйцом",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Рис", "Морковь", "Горошек", "Кукуруза", "Яйцо", "Соевый соус"],
        calories: 380,
        tags: ["основное блюдо", "быстро", "вегетарианское"],
    },
    {
        id: "d30",
        name: "Шашлык куриный в духовке",
        difficulty: "Средне",
        time: "50 минут",
        ingredients: ["Куриное филе", "Лук", "Кефир/Майонез", "Специи", "Перец"],
        calories: 580,
        tags: ["основное блюдо"],
    },
    {
        id: "d31",
        name: "Запеченный картофель с розмарином",
        difficulty: "Легко",
        time: "40 минут",
        ingredients: ["Картофель", "Оливковое масло", "Розмарин", "Соль", "Чеснок"],
        calories: 300,
        tags: ["основное блюдо", "гарнир", "вегетарианское"],
    },
    {
        id: "d32",
        name: "Тушеная капуста с колбасками",
        difficulty: "Средне",
        time: "45 минут",
        ingredients: ["Капуста", "Колбаски", "Лук", "Морковь", "Томатная паста"],
        calories: 550,
        tags: ["основное блюдо"],
    },
    {
        id: "d33",
        name: "Пицца Маргарита (домашняя)",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Тесто для пиццы", "Томатный соус", "Моцарелла", "Базилик", "Оливковое масло"],
        calories: 700,
        tags: ["основное блюдо"],
    },
    {
        id: "d34",
        name: "Мясо по-французски",
        difficulty: "Средне",
        time: "60 минут",
        ingredients: ["Свинина/Говядина", "Картофель", "Лук", "Майонез", "Сыр"],
        calories: 850,
        tags: ["основное блюдо"],
    },
    {
        id: "d35",
        name: "Овощное карри с рисом",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Овощи (цветная капуста, морковь, горошек)", "Кокосовое молоко", "Паста карри", "Рис"],
        calories: 450,
        tags: ["основное блюдо", "вегетарианское"],
    },


    {
        id: "d5",
        name: "Крем-суп из шампиньонов",
        difficulty: "Легко",
        time: "25 минут",
        ingredients: ["Шампиньоны", "Лук", "Сливки", "Бульон", "Чеснок"],
        calories: 300,
        tags: ["супы"],
    },
    {
        id: "d6",
        name: "Борщ",
        difficulty: "Сложно",
        time: "90 минут",
        ingredients: ["Свекла", "Капуста", "Картофель", "Мясо", "Морковь", "Томатная паста"],
        calories: 450,
        tags: ["супы"],
    },
    {
        id: "d36",
        name: "Куриный суп с лапшой",
        difficulty: "Легко",
        time: "40 минут",
        ingredients: ["Курица", "Лапша", "Морковь", "Лук", "Картофель", "Зелень"],
        calories: 300,
        tags: ["супы"],
    },
    {
        id: "d37",
        name: "Щи из свежей капусты",
        difficulty: "Средне",
        time: "70 минут",
        ingredients: ["Капуста", "Мясо", "Картофель", "Морковь", "Лук", "Томатная паста"],
        calories: 400,
        tags: ["супы"],
    },
    {
        id: "d38",
        name: "Томатный суп с базиликом",
        difficulty: "Легко",
        time: "30 минут",
        ingredients: ["Помидоры (консервированные/свежие)", "Бульон", "Чеснок", "Базилик", "Сливки"],
        calories: 280,
        tags: ["супы", "вегетарианское"],
    },
    {
        id: "d39",
        name: "Суп Харчо",
        difficulty: "Сложно",
        time: "120 минут",
        ingredients: ["Говядина", "Рис", "Томатная паста", "Грецкие орехи", "Хмели-сунели", "Чеснок"],
        calories: 550,
        tags: ["супы"],
    },
    {
        id: "d40",
        name: "Минестроне",
        difficulty: "Средне",
        time: "45 минут",
        ingredients: ["Фасоль", "Макароны", "Овощи (кабачок, морковь, сельдерей)", "Томаты", "Песто"],
        calories: 350,
        tags: ["супы", "вегетарианское"],
    },
    {
        id: "d41",
        name: "Рыбный суп (уха)",
        difficulty: "Средне",
        time: "50 минут",
        ingredients: ["Рыба (филе)", "Картофель", "Морковь", "Лук", "Лавровый лист", "Зелень"],
        calories: 380,
        tags: ["супы"],
    },
    {
        id: "d42",
        name: "Гаспачо (холодный суп)",
        difficulty: "Легко",
        time: "20 минут (плюс охлаждение)",
        ingredients: ["Помидоры", "Огурцы", "Перец", "Лук", "Чеснок", "Оливковое масло", "Уксус"],
        calories: 200,
        tags: ["супы", "вегетарианское"],
    },
    {
        id: "d43",
        name: "Солянка мясная",
        difficulty: "Сложно",
        time: "90 минут",
        ingredients: ["Различные виды мяса/колбас", "Огурцы соленые", "Маслины", "Томатная паста", "Лимон", "Сметана"],
        calories: 600,
        tags: ["супы"],
    },

    {
        id: "d7",
        name: "Чизкейк Нью-Йорк",
        difficulty: "Средне",
        time: "60 минут (плюс охлаждение)",
        ingredients: ["Сливочный сыр", "Печенье", "Сливочное масло", "Сахар", "Яйца", "Ваниль"],
        calories: 400,
        tags: ["десерты"],
    },
    {
        id: "d8",
        name: "Фруктовый салат",
        difficulty: "Легко",
        time: "10 минут",
        ingredients: ["Различные фрукты (яблоко, банан, апельсин, киви)", "Йогурт (по желанию)"],
        calories: 180,
        tags: ["десерты", "завтрак"],
    },
    {
        id: "d44",
        name: "Яблочный пирог (Шарлотка)",
        difficulty: "Легко",
        time: "50 минут",
        ingredients: ["Яблоки", "Мука", "Сахар", "Яйца", "Корица"],
        calories: 350,
        tags: ["десерты"],
    },
    {
        id: "d45",
        name: "Шоколадный брауни",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Шоколад", "Мука", "Сахар", "Яйца", "Масло", "Какао"],
        calories: 450,
        tags: ["десерты"],
    },
    {
        id: "d46",
        name: "Тирамису",
        difficulty: "Сложно",
        time: "30 минут (плюс охлаждение)",
        ingredients: ["Маскарпоне", "Кофе", "Печенье савоярди", "Яйца", "Сахар", "Какао"],
        calories: 500,
        tags: ["десерты"],
    },
    {
        id: "d47",
        name: "Панна-котта с ягодным соусом",
        difficulty: "Средне",
        time: "20 минут (плюс охлаждение)",
        ingredients: ["Сливки", "Сахар", "Желатин", "Ваниль", "Ягоды"],
        calories: 320,
        tags: ["десерты"],
    },
    {
        id: "d48",
        name: "Морковный торт",
        difficulty: "Сложно",
        time: "70 минут",
        ingredients: ["Морковь", "Мука", "Сахар", "Яйца", "Масло", "Корица", "Крем-чиз"],
        calories: 480,
        tags: ["десерты"],
    },
    {
        id: "d49",
        name: "Банановый хлеб",
        difficulty: "Легко",
        time: "60 минут",
        ingredients: ["Бананы", "Мука", "Сахар", "Яйца", "Масло", "Сода"],
        calories: 300,
        tags: ["десерты", "завтрак"],
    },
    {
        id: "d50",
        name: "Лимонный тарт",
        difficulty: "Средне",
        time: "50 минут",
        ingredients: ["Мука", "Масло", "Сахар", "Лимоны", "Яйца"],
        calories: 380,
        tags: ["десерты"],
    },
    {
        id: "d51",
        name: "Печенье овсяное с изюмом",
        difficulty: "Легко",
        time: "25 минут",
        ingredients: ["Овсяные хлопья", "Мука", "Масло", "Сахар", "Яйцо", "Изюм"],
        calories: 220,
        tags: ["десерты"],
    },


    {
        id: "d52",
        name: "Куриные наггетсы домашние",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Куриное филе", "Яйцо", "Сухари панировочные", "Масло для жарки"],
        calories: 400,
        tags: ["основное блюдо", "быстро"],
    },
    {
        id: "d53",
        name: "Греческий салат",
        difficulty: "Легко",
        time: "15 минут",
        ingredients: ["Помидоры", "Огурцы", "Перец", "Фета", "Оливки", "Красный лук", "Оливковое масло", "Орегано"],
        calories: 280,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d54",
        name: "Бургер с говяжьей котлетой",
        difficulty: "Средне",
        time: "30 минут",
        ingredients: ["Булочка для бургера", "Говяжий фарш", "Сыр", "Салат", "Помидор", "Соус"],
        calories: 700,
        tags: ["основное блюдо"],
    },
    {
        id: "d55",
        name: "Домашние пельмени",
        difficulty: "Сложно",
        time: "90 минут",
        ingredients: ["Мука", "Вода", "Яйцо", "Фарш (любой)", "Лук", "Специи"],
        calories: 600,
        tags: ["основное блюдо"],
    },
    {
        id: "d56",
        name: "Кебаб на сковороде",
        difficulty: "Средне",
        time: "30 минут",
        ingredients: ["Фарш", "Лук", "Зелень", "Специи", "Лаваш"],
        calories: 550,
        tags: ["основное блюдо"],
    },
    {
        id: "d57",
        name: "Овощное рагу",
        difficulty: "Легко",
        time: "45 минут",
        ingredients: ["Картофель", "Морковь", "Кабачок", "Перец", "Томатная паста", "Зелень"],
        calories: 300,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d58",
        name: "Куриная грудка, запеченная с травами",
        difficulty: "Легко",
        time: "30 минут",
        ingredients: ["Куриная грудка", "Оливковое масло", "Чеснок", "Травы (розмарин, тимьян)", "Соль", "Перец"],
        calories: 350,
        tags: ["основное блюдо", "пп"],
    },
    {
        id: "d59",
        name: "Салат Коул Слоу",
        difficulty: "Легко",
        time: "10 минут",
        ingredients: ["Капуста", "Морковь", "Майонез", "Уксус", "Сахар", "Соль"],
        calories: 200,
        tags: ["гарнир", "салат"],
    },
    {
        id: "d60",
        name: "Макароны с сыром (Мак энд чиз)",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Макароны", "Молоко", "Сыр (чеддер)", "Мука", "Масло"],
        calories: 600,
        tags: ["основное блюдо", "быстро"],
    },
    {
        id: "d61",
        name: "Блинчики с творогом",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Мука", "Молоко", "Яйца", "Сахар", "Творог", "Изюм"],
        calories: 400,
        tags: ["завтрак", "десерты"],
    },
    {
        id: "d62",
        name: "Грибной жульен",
        difficulty: "Средне",
        time: "30 минут",
        ingredients: ["Шампиньоны", "Куриное филе", "Лук", "Сливки", "Сыр"],
        calories: 420,
        tags: ["основное блюдо"],
    },
    {
        id: "d63",
        name: "Тефтели в сливочном соусе",
        difficulty: "Средне",
        time: "45 минут",
        ingredients: ["Фарш", "Рис", "Лук", "Сливки", "Бульон", "Соль", "Перец"],
        calories: 500,
        tags: ["основное блюдо"],
    },
    {
        id: "d64",
        name: "Суши-сет (домашний)",
        difficulty: "Сложно",
        time: "90 минут",
        ingredients: ["Рис для суши", "Нори", "Рыба (лосось/тунец)", "Огурцы", "Авокадо", "Соевый соус", "Васаби"],
        calories: 700,
        tags: ["основное блюдо"],
    },
    {
        id: "d65",
        name: "Куриный шницель",
        difficulty: "Легко",
        time: "25 минут",
        ingredients: ["Куриное филе", "Яйцо", "Мука", "Панировочные сухари", "Масло для жарки"],
        calories: 450,
        tags: ["основное блюдо"],
    },
    {
        id: "d66",
        name: "Запеченный перец с начинкой",
        difficulty: "Средне",
        time: "50 минут",
        ingredients: ["Сладкий перец", "Фарш/Рис", "Овощи", "Томатный соус", "Сыр"],
        calories: 480,
        tags: ["основное блюдо"],
    },
    {
        id: "d67",
        name: "Фаршированная рыба",
        difficulty: "Сложно",
        time: "80 минут",
        ingredients: ["Целая рыба (карп, щука)", "Лук", "Морковь", "Рис", "Зелень", "Лимон"],
        calories: 550,
        tags: ["основное блюдо"],
    },
    {
        id: "d68",
        name: "Пюре из цветной капусты",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Цветная капуста", "Молоко", "Масло", "Соль", "Перец"],
        calories: 150,
        tags: ["гарнир", "пп", "вегетарианское"],
    },
    {
        id: "d69",
        name: "Грибной плов (вегетарианский)",
        difficulty: "Средне",
        time: "50 минут",
        ingredients: ["Рис", "Грибы", "Морковь", "Лук", "Зира", "Растительное масло"],
        calories: 400,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d70",
        name: "Фалафель с соусом тахини",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Нут", "Зелень", "Лук", "Чеснок", "Специи", "Тахини", "Лимон"],
        calories: 450,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d71",
        name: "Картофельные дольки по-деревенски",
        difficulty: "Легко",
        time: "35 минут",
        ingredients: ["Картофель", "Паприка", "Сушеный чеснок", "Масло", "Соль", "Перец"],
        calories: 300,
        tags: ["гарнир", "вегетарианское"],
    },
    {
        id: "d72",
        name: "Стейк из лосося на гриле",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Стейк лосося", "Оливковое масло", "Лимон", "Соль", "Перец"],
        calories: 450,
        tags: ["основное блюдо", "пп"],
    },
    {
        id: "d73",
        name: "Курица по-мексикански",
        difficulty: "Средне",
        time: "45 минут",
        ingredients: ["Куриное филе", "Кукуруза", "Фасоль", "Перец", "Томатный соус", "Специи"],
        calories: 520,
        tags: ["основное блюдо"],
    },
    {
        id: "d74",
        name: "Омлет с овощами и зеленью",
        difficulty: "Легко",
        time: "15 минут",
        ingredients: ["Яйца", "Перец", "Помидор", "Лук", "Шпинат", "Зелень"],
        calories: 280,
        tags: ["завтрак", "пп"],
    },
    {
        id: "d75",
        name: "Сырный суп с гренками",
        difficulty: "Легко",
        time: "30 минут",
        ingredients: ["Плавленый сыр", "Картофель", "Морковь", "Лук", "Куриный бульон", "Гренки"],
        calories: 350,
        tags: ["супы"],
    },
    {
        id: "d76",
        name: "Пастуший пирог",
        difficulty: "Средне",
        time: "60 минут",
        ingredients: ["Фарш", "Картофельное пюре", "Лук", "Морковь", "Зеленый горошек", "Бульон"],
        calories: 680,
        tags: ["основное блюдо"],
    },
    {
        id: "d77",
        name: "Рулет из лаваша с начинкой",
        difficulty: "Легко",
        time: "15 минут",
        ingredients: ["Лаваш", "Сливочный сыр", "Слабосоленый лосось/ветчина", "Огурцы", "Зелень"],
        calories: 300,
        tags: ["завтрак", "быстро"],
    },
    {
        id: "d78",
        name: "Манты с мясом",
        difficulty: "Сложно",
        time: "70 минут (плюс тесто)",
        ingredients: ["Мука", "Вода", "Фарш (баранина/говядина)", "Лук", "Тыква (по желанию)"],
        calories: 650,
        tags: ["основное блюдо"],
    },
    {
        id: "d79",
        name: "Салат с тунцом и яйцом",
        difficulty: "Легко",
        time: "10 минут",
        ingredients: ["Консервированный тунец", "Яйца", "Свежие огурцы", "Салатные листья", "Майонез/Йогурт"],
        calories: 320,
        tags: ["основное блюдо", "салат", "быстро"],
    },
    {
        id: "d80",
        name: "Кабачковые оладьи со сметаной",
        difficulty: "Легко",
        time: "25 минут",
        ingredients: ["Кабачки", "Яйцо", "Мука", "Зелень", "Сметана"],
        calories: 280,
        tags: ["завтрак", "основное блюдо", "вегетарианское"],
    },

    {
        id: "d81",
        name: "Курица по-индийски (чикен тикка масала)",
        difficulty: "Сложно",
        time: "60 минут",
        ingredients: ["Курица", "Йогурт", "Имбирь", "Чеснок", "Томаты", "Специи (гарам масала, куркума)"],
        calories: 620,
        tags: ["основное блюдо"],
    },
    {
        id: "d82",
        name: "Овощной плов с нутом",
        difficulty: "Средне",
        time: "45 минут",
        ingredients: ["Рис", "Нут", "Морковь", "Лук", "Перец", "Зира", "Куркума"],
        calories: 400,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d83",
        name: "Тыквенный крем-суп",
        difficulty: "Легко",
        time: "35 минут",
        ingredients: ["Тыква", "Морковь", "Лук", "Картофель", "Сливки", "Бульон", "Имбирь"],
        calories: 300,
        tags: ["супы", "вегетарианское"],
    },
    {
        id: "d84",
        name: "Салат Капрезе",
        difficulty: "Легко",
        time: "10 минут",
        ingredients: ["Моцарелла", "Помидоры", "Базилик", "Оливковое масло", "Бальзамический уксус"],
        calories: 250,
        tags: ["салат", "вегетарианское", "быстро"],
    },
    {
        id: "d85",
        name: "Грибные котлеты (вегетарианские)",
        difficulty: "Средне",
        time: "35 минут",
        ingredients: ["Шампиньоны", "Рис/Манка", "Лук", "Яйцо", "Мука", "Зелень"],
        calories: 320,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d86",
        name: "Кесадилья с курицей и сыром",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Тортилья", "Куриное филе", "Сыр", "Перец", "Кукуруза", "Фасоль"],
        calories: 480,
        tags: ["основное блюдо", "быстро"],
    },
    {
        id: "d87",
        name: "Крем-брюле",
        difficulty: "Сложно",
        time: "45 минут (плюс охлаждение)",
        ingredients: ["Сливки", "Яичные желтки", "Сахар", "Ваниль"],
        calories: 420,
        tags: ["десерты"],
    },
    {
        id: "d88",
        name: "Ленивые вареники с вишней",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Творог", "Мука", "Яйцо", "Сахар", "Вишня (свежая/замороженная)"],
        calories: 380,
        tags: ["завтрак", "десерты"],
    },
    {
        id: "d89",
        name: "Суп-пюре из брокколи",
        difficulty: "Легко",
        time: "25 минут",
        ingredients: ["Брокколи", "Картофель", "Лук", "Сливки", "Бульон", "Чеснок"],
        calories: 280,
        tags: ["супы", "вегетарианское"],
    },
    {
        id: "d90",
        name: "Перец, фаршированный рисом и овощами (вегетарианский)",
        difficulty: "Средне",
        time: "50 минут",
        ingredients: ["Сладкий перец", "Рис", "Морковь", "Лук", "Кукуруза", "Томатный соус"],
        calories: 380,
        tags: ["основное блюдо", "вегетарианское"],
    },
    {
        id: "d91",
        name: "Картофельный гратен",
        difficulty: "Средне",
        time: "60 минут",
        ingredients: ["Картофель", "Сливки", "Молоко", "Чеснок", "Сыр", "Мускатный орех"],
        calories: 450,
        tags: ["гарнир", "вегетарианское"],
    },
    {
        id: "d92",
        name: "Тартар из лосося с авокадо",
        difficulty: "Средне",
        time: "20 минут",
        ingredients: ["Свежий лосось", "Авокадо", "Огурцы", "Лимонный сок", "Соевый соус", "Кунжут"],
        calories: 350,
        tags: ["салат", "основное блюдо"],
    },
    {
        id: "d93",
        name: "Французские тосты",
        difficulty: "Легко",
        time: "15 минут",
        ingredients: ["Хлеб для тостов", "Яйца", "Молоко", "Корица", "Сахар", "Фрукты/Сироп"],
        calories: 330,
        tags: ["завтрак"],
    },
    {
        id: "d94",
        name: "Суп-пюре из чечевицы (Красная чечевица)",
        difficulty: "Легко",
        time: "30 минут",
        ingredients: ["Красная чечевица", "Морковь", "Лук", "Томатная паста", "Бульон/Вода", "Кинза"],
        calories: 280,
        tags: ["супы", "вегетарианское", "пп"],
    },
    {
        id: "d95",
        name: "Куриные рулетики с сыром и грибами",
        difficulty: "Средне",
        time: "40 минут",
        ingredients: ["Куриное филе", "Сыр", "Шампиньоны", "Лук", "Сливки"],
        calories: 550,
        tags: ["основное блюдо"],
    },
    {
        id: "d96",
        name: "Панцанелла (итальянский хлебный салат)",
        difficulty: "Легко",
        time: "20 минут",
        ingredients: ["Черствый хлеб", "Помидоры", "Огурцы", "Красный лук", "Базилик", "Оливковое масло", "Уксус"],
        calories: 300,
        tags: ["салат", "вегетарианское"],
    },
    {
        id: "d97",
        name: "Шоколадный фондан",
        difficulty: "Средне",
        time: "25 минут",
        ingredients: ["Шоколад", "Масло", "Сахар", "Яйца", "Мука", "Какао"],
        calories: 480,
        tags: ["десерты"],
    },
    {
        id: "d98",
        name: "Фриттата с овощами и фетой",
        difficulty: "Легко",
        time: "30 минут",
        ingredients: ["Яйца", "Цукини", "Перец", "Шпинат", "Фета", "Лук", "Травы"],
        calories: 320,
        tags: ["завтрак", "основное блюдо", "вегетарианское"],
    },
    {
        id: "d99",
        name: "Мясные зразы с яйцом",
        difficulty: "Сложно",
        time: "60 минут",
        ingredients: ["Фарш", "Яйца (вареные)", "Лук", "Хлеб", "Сметана"],
        calories: 600,
        tags: ["основное блюдо"],
    },
    {
        id: "d100",
        name: "Крем-суп из цветной капусты с карри",
        difficulty: "Легко",
        time: "30 минут",
        ingredients: ["Цветная капуста", "Картофель", "Лук", "Бульон", "Кокосовое молоко", "Карри"],
        calories: 330,
        tags: ["супы", "вегетарианское"],
    },
];

module.exports = { dishes };


