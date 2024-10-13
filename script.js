const artists = [
    {
        name: "5'nizza",
        song: "Нева",
        variations: [
            { label: "minus 2", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Нева-(minus-2).mp3" },
            { label: "minus 3", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Нева-(minus-3).mp3" }
        ],
        lyrics: "",
        category: "Русские",
        listens: 0
    },
    {
        name: "5'nizza",
        song: "Солдат",
        variations: [
            { label: "minus 3", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Солдат-(minus-3).mp3" }
        ],
        lyrics: "",
        category: "Русские",
        listens: 0
    },
    {
        name: "Алла Пугачева",
        song: "На Тихорецкую",
        variations: [
            { label: "minus 2", file: "assets/Music/А.Пугачева---На-Тихорецкую/Алла-Пугачёва---На-Тихорецкую-(minus-2)-+0-semitone.mp3" }
        ],
        lyrics: "",
        category: "Русские",
        listens: 0
    },
    {
        name: "Алла Пугачева",
        song: "Миллион алых роз",
        variations: [
            { label: "minus 2", file: "assets/Music/А.Пугачева--Миллион-алых-роз/Алла-Пугачёва---Миллион-алых-роз-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/А.Пугачева--Миллион-алых-роз/Алла-Пугачёва---Миллион-алых-роз-(minus).mp3" }
        ],
        lyrics: "assets/Music/А.Пугачева--Миллион-алых-роз/Алла-Пугачёва---Миллион-алых-роз.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Аида Ведищева",
        song: "Лесной олень",
        variations: [
            { label: "minus 2", file: "assets/Music/Аида-Ведищева---Лесной-олень/Из-мультфильмов---Лесной-олень-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/Аида-Ведищева---Лесной-олень/Из-мультфильмов---Лесной-олень-(minus).mp3" }
        ],
        lyrics: "assets/Music/Аида-Ведищева---Лесной-олень/Из-мультфильмов---Лесной-олень.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Аида Ведищева",
        song: "Песенка о медведях",
        variations: [
            { label: "minus 2", file: "assets/Music/Аида-Ведищева---Песенка-о-медведях/Аида-Ведищева---Песенка-о-медведях-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Аида-Ведищева---Песенка-о-медведях/Аида-Ведищева---Песенка-о-медведях.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Альви и Игорь Шиянов",
        song: "Тишина",
        variations: [
            { label: "minus 2", file: "assets/Music/Альви-и-И.-Альтемиров---Тишина/Альви-и-Игорь-Шиянов---Тишина-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Альви-и-И.-Альтемиров---Тишина/Альви-и-Игорь-Шиянов---Тишина.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Андрей Державин",
        song: "Не плачь, Алиса!",
        variations: [
            { label: "minus 4", file: "assets/Music/Андрей-Державин---Алиса/Андрей-Державин---Не-плачь,-Алиса-!-(minus)-+4-semitones.mp3" },
            { label: "minus 2", file: "assets/Music/Андрей-Державин---Алиса/Андрей-Державин---Не-плачь,-Алиса-(minus)-+2-semitones.mp3" },
            { label: "minus 3", file: "assets/Music/Андрей-Державин---Алиса/Андрей-Державин---Не-плачь,-Алиса-(minus)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Андрей-Державин---Алиса/Андрей-Державин---Не-плачь,-Алиса.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Андрей Миронов",
        song: "Остров невезения",
        variations: [
            { label: "minus", file: "assets/Music/Андрей-Миронов---Остров-невезения/Андрей-Миронов---Остров-Невезения-(minus).mp3" }
        ],
        lyrics: "assets/Music/Андрей-Миронов---Остров-невезения/Андрей-Миронов---Остров-Невезения.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Анна Герман",
        song: "Надежда",
        variations: [
            { label: "minus", file: "assets/Music/Анна-Герман---Надежда/Анна-Герман---Надежда-(minus).mp3" }
        ],
        lyrics: "assets/Music/Анна-Герман---Надежда/Анна-Герман---Надежда.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Анна Герман",
        song: "Эхо любви",
        variations: [
            { label: "minus", file: "assets/Music/Анна-Герман---Эхо/Анна-Герман---Эхо-любви-(minus).mp3" }
        ],
        lyrics: "assets/Music/Анна-Герман---Эхо/Анна-Герман---Эхо-любви.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Асия",
        song: "Лампочка",
        variations: [
            { label: "minus 2", file: "assets/Music/Асия---Лампочка/Асия---Лампочка-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Асия---Лампочка/Асия---Лампочка.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Бумбокс",
        song: "Вахтерам",
        variations: [
            { label: "minus 2", file: "assets/Music/Бумбокс--Вахтерам/Бумбокс---Вахтерам-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Бумбокс--Вахтерам/Бумбокс---Вахтерам.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Валентина Толкунова",
        song: "Кабы не было зимы",
        variations: [
            { label: "minus", file: "assets/Music/Валентина-Толкунова---Кабы-не-было-зимы/Валентина-Толкунова---Кабы-не-было-зимы-(minus).mp3" }
        ],
        lyrics: "assets/Music/Валентина-Толкунова---Кабы-не-было-зимы/Валентина-Толкунова---Кабы-не-было-зимы.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Вера Брежнева",
        song: "Реальная жизнь",
        variations: [
            { label: "minus 2", file: "assets/Music/Вера-Брежнева---Реальная-жизнь/Вера-Брежнева---Реальная-жизнь-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/Вера-Брежнева---Реальная-жизнь/Вера-Брежнева---Реальная-жизнь-(minus).mp3" }
        ],
        lyrics: "assets/Music/Вера-Брежнева---Реальная-жизнь/Вера-Брежнева---Реальная-жизнь.txt",
        category: "Русские",
        listens: 0
    },

    {
        name: "Винтаж",
        song: "Ева",
        variations: [
            { label: "minus 2", file: "assets/Music/Винтаж---Ева/Винтаж---Ева-(minus)-+2-semitones.mp3" },
            { label: "minus 3", file: "assets/Music/Винтаж---Ева/Винтаж---Ева-(minus)-+3-semitones.mp3" },
            { label: "minus", file: "assets/Music/Винтаж---Ева/Винтаж---Ева-(minus).mp3" }
        ],
        lyrics: "assets/Music/Винтаж---Ева/Винтаж---Ева.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Винтаж",
        song: "Знак Водолея",
        variations: [
            { label: "minus 3", file: "assets/Music/Винтаж---Знак-Водолея/Винтаж---Знак-водолея-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/Винтаж---Знак-Водолея/Винтаж---Знак-водолея.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "ДДТ",
        song: "Что такое осень",
        variations: [
            { label: "minus", file: "assets/Music/ДДТ--Осень/ДДТ---Что-такое-осень-(minus).mp3" }
        ],
        lyrics: "assets/Music/ДДТ--Осень/ДДТ---Что-такое-осень.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Enrasta",
        song: "Джованна",
        variations: [
            { label: "minus 2", file: "assets/Music/ДЖОВАННА/Enrasta---Джованна-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/ДЖОВАННА/Enrasta---Джованна-(minus).mp3" }
        ],
        lyrics: "assets/Music/ДЖОВАННА/Новый-текстовый-документ.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Дорогой дневник",
        song: "Этажи",
        variations: [
            { label: "filtered instrumental", file: "assets/Music/Дорогой-дневник-Этажи/Dorogojj_Dnevnik_-_JEtazhi_(patefon.org)-(Filtered-Instrumental-with-BV)-(1).mp3" }
        ],
        lyrics: "",
        category: "Русские",
        listens: 0
    },
    {
        name: "Демо",
        song: "Солнышко",
        variations: [
            { label: "minus 4", file: "assets/Music/Дэмо---Солнышко/Демо---Солнышко-(minus-4).mp3" }
        ],
        lyrics: "assets/Music/Дэмо---Солнышко/Демо---Солнышко.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Ёлка",
        song: "Будь моим берегом",
        variations: [
            { label: "minus 2", file: "assets/Music/Ёлка---Будь-моим-берегом/Ёлка-(ЯАVЬ)---Берегом-(minus)-+2-semitones.mp3" },
            { label: "minus 3", file: "assets/Music/Ёлка---Будь-моим-берегом/Ёлка-(ЯАVЬ)---Берегом-(minus)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Ёлка---Будь-моим-берегом/Ёлка-(ЯАVЬ)---Берегом.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Звери",
        song: "Все, что тебя касается",
        variations: [
            { label: "minus 4", file: "assets/Music/Звери---Все-что-тебя-касается/Звери---Всё,-что-тебя-касается-(minus-4)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Звери---Все-что-тебя-касается/Звери---Всё,-что-тебя-касается.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Звери",
        song: "Районы кварталы",
        variations: [
            { label: "minus 2", file: "assets/Music/Звери---Районы-кварталы/Звери---Районы-кварталы-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/Звери---Районы-кварталы/Звери---Районы-кварталы-(minus).mp3" }
        ],
        lyrics: "assets/Music/Звери---Районы-кварталы/Звери---Районы-кварталы.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Звонкий и Рем Дигга",
        song: "Из окон",
        variations: [
            { label: "minus 2", file: "assets/Music/Звонкий---Из-окон/Звонкий-and-Рем-Дигга---Из-окон-(minus-2)-+2-semitones.mp3" },
            { label: "minus 3", file: "assets/Music/Звонкий---Из-окон/Звонкий-and-Рем-Дигга---Из-окон-(minus-2)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Звонкий---Из-окон/Звонкий-&-Рем-Дигга---Из-окон.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Зелимхан Темирсултанов",
        song: "В сигаретном дыму",
        variations: [
            { label: "minus 2 +1 semitone", file: "assets/Music/Зелимхан---В-сигаретном-дыму/Зелимхан-Темирсултанов---В-сигаретном-дыму-(minus-2)-+1-semitone.mp3" },
            { label: "minus 2 +2 semitones", file: "assets/Music/Зелимхан---В-сигаретном-дыму/Зелимхан-Темирсултанов---В-сигаретном-дыму-(minus-2)-+2-semitones.mp3" },
            { label: "minus 2 +5 semitones", file: "assets/Music/Зелимхан---В-сигаретном-дыму/Зелимхан-Темирсултанов---В-сигаретном-дыму-(minus-2)-+5-semitones.mp3" },
            { label: "minus 2", file: "assets/Music/Зелимхан---В-сигаретном-дыму/Зелимхан-Темирсултанов---В-сигаретном-дыму-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Зелимхан---В-сигаретном-дыму/Зелимхан-Темирсултанов---В-сигаретном-дыму.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Земфира",
        song: "Жить в твоей голове",
        variations: [
            { label: "minus 2", file: "assets/Music/Земфира--Жить-в-твоей-голове/Земфира---Жить-в-твоей-голове-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Земфира--Жить-в-твоей-голове/Земфира---Жить-в-твоей-голове.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Кристина Орбакайте",
        song: "Тучи в голубом",
        variations: [
            { label: "minus 6", file: "assets/Music/К-Орбакайте---Тучи-в-голубом/Кристина-Орбакайте---Тучи-в-голубом-(minus-6).mp3" }
        ],
        lyrics: "assets/Music/К-Орбакайте---Тучи-в-голубом/Кристина-Орбакайте---Тучи-в-голубом.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Константин Меладзе",
        song: "Опять метель",
        variations: [
            { label: "minus 2", file: "assets/Music/К.-Меладзе---Опять-метель/Константин-Меладзе---Опять-метель-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/К.-Меладзе---Опять-метель/Константин-Меладзе---Опять-метель.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Канги",
        song: "Просто услышь меня",
        variations: [
            { label: "minus 3", file: "assets/Music/Канги---Просто-услышь-меня/Канги---Просто-услышь-меня-(minus-3)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Канги---Просто-услышь-меня/Канги---Просто-услышь-меня.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Король и Шут",
        song: "Утренний рассвет",
        variations: [
            { label: "minus 2", file: "assets/Music/КИШ---Утренний-рассвет/Король-и-Шут---Утренний-рассвет-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/КИШ---Утренний-рассвет/Король-и-Шут---Утренний-рассвет.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Кравц",
        song: "Обнуляй",
        variations: [
            { label: "minus 2", file: "assets/Music/Кравц---Обнуляй/Кравц---Обнуляй-(minus-2)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Кравц---Обнуляй/Кравц---Обнуляй.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Ласковый май",
        song: "Белые розы",
        variations: [
            { label: "minus", file: "assets/Music/Ласковый-май---Белые-розы/Юрий-Шатунов-_-Ласковый-май---Белые-розы-(minus).mp3" },
            { label: "minus 2", file: "assets/Music/Ласковый-май---Белые-розы/Юрий-Шатунов-_-Ласковый-май---Белые-розы-(minus)-+2-semitones-(1).mp3" }
        ],
        lyrics: "assets/Music/Ласковый-май---Белые-розы/Михаил-Шуфутинский---Белые-розы-(1).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Любэ",
        song: "Конь",
        variations: [],
        lyrics: "",
        category: "Русские",
        listens: 0
    },
    {
        name: "Любэ и Никита Михалков",
        song: "Не для меня",
        variations: [
            { label: "Казачья народная песня", file: "assets/Music/Любэ---не-для-меня/Казачья-народная-песня---Не-для-меня-(minus).mp3" },
            { label: "minus", file: "assets/Music/Любэ---не-для-меня/Любэ-и-Никита-Михалков---Не-для-меня-(minus).mp3" }
        ],
        lyrics: "assets/Music/Любэ---не-для-меня/Любэ-и-Никита-Михалков---Не-для-меня.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Макс Корж",
        song: "Горы по колено",
        variations: [
            { label: "minus 2", file: "assets/Music/Макс-Корж---Горы-по-колено/Макс-Корж---Горы-по-колено-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/Макс-Корж---Горы-по-колено/Макс-Корж---Горы-по-колено-(minus).mp3" }
        ],
        lyrics: "assets/Music/Макс-Корж---Горы-по-колено/Макс-Корж---Горы-по-колено.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Макс Корж",
        song: "Неважно",
        variations: [
            { label: "Acoustic minus 2", file: "assets/Music/Макс-Корж---Неважно/Макс-Корж---Неважно-(Acoustic)-(minus-2)-+2-semitones.mp3" },
            { label: "Acoustic", file: "assets/Music/Макс-Корж---Неважно/Макс-Корж---Неважно-(Acoustic)-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Макс-Корж---Неважно/Макс-Корж---Неважно-(Acoustic).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Макс Корж",
        song: "Пламенный свет",
        variations: [
            { label: "minus", file: "assets/Music/Макс-Корж---Пламенный-свет-эндорфин/Макс-Корж---Пламенный-свет-(minus).mp3" },
            { label: "Эндорфин", file: "assets/Music/Макс-Корж---Пламенный-свет-эндорфин/Макс-Корж---Эндорфин-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "",
        category: "Русские",
        listens: 0
    },
    {
        name: "Макс Корж",
        song: "Тает дым",
        variations: [
            { label: "minus", file: "assets/Music/Макс-Корж---Тает-дым/Макс-Корж---Тает-дым-(minus).mp3" },
            { label: "minus 2", file: "assets/Music/Макс-Корж---Тает-дым/Макс-Корж---Тает-дым-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Макс-Корж---Тает-дым/Макс-Корж---Тает-дым.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Макс Корж",
        song: "Шантаж",
        variations: [
            { label: "minus", file: "assets/Music/Макс-Корж---Шантаж/Макс-Корж---Шантаж-(minus).mp3" }
        ],
        lyrics: "assets/Music/Макс-Корж---Шантаж/Макс-Корж---Шантаж.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "МакSим",
        song: "Дорога",
        variations: [
            { label: "minus", file: "assets/Music/Максим---Дорога/МакSим---Дорога-(minus).mp3" }
        ],
        lyrics: "assets/Music/Максим---Дорога/МакSим---Дорога-(1).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "МакSим",
        song: "Знаешь ли ты",
        variations: [
            { label: "minus 6", file: "assets/Music/Максим---Знаешь-ли-ты/МакSим---Знаешь-ли-ты-(minus-6).mp3" }
        ],
        lyrics: "assets/Music/Максим---Знаешь-ли-ты/МакSим---Знаешь-ли-ты.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "МакSим",
        song: "Отпускаю",
        variations: [
            { label: "minus", file: "assets/Music/Максим--Отпускаю/МакSим---Отпускаю-(minus).mp3" }
        ],
        lyrics: "",
        category: "Русские",
        listens: 0
    },
    {
        name: "Марк Бернес",
        song: "Любимый город",
        variations: [
            { label: "minus", file: "assets/Music/Марк-Бернес--Любимый-город/Марк-Бернес---Любимый-город-(minus).mp3" }
        ],
        lyrics: "assets/Music/Марк-Бернес--Любимый-город/Марк-Бернес---Любимый-город.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Марк Бернес",
        song: "Тёмная ночь",
        variations: [
            { label: "minus 3", file: "assets/Music/Марк-Бернес-Темная-ночь/Марк-Бернес---Тёмная-ночь-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/Марк-Бернес-Темная-ночь/Марк-Бернес---Тёмная-ночь.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Валерий Меладзе",
        song: "Красиво",
        variations: [
            { label: "minus 7", file: "assets/Music/Меладзе---Красиво/Валерий-Меладзе---Красиво-(minus-7).mp3" }
        ],
        lyrics: "assets/Music/Меладзе---Красиво/Валерий-Меладзе---Красиво.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Mona Songz",
        song: "Салют, Вера",
        variations: [
            { label: "minus 3", file: "assets/Music/Меладзе---Салют-Вера/Mona-Songz---Салют,-Вера-(minus)-+3-semitones.mp3" },
            { label: "minus 4", file: "assets/Music/Меладзе---Салют-Вера/Mona-Songz---Салют,-Вера-(minus)-+4-semitones.mp3" }
        ],
        lyrics: "assets/Music/Меладзе---Салют-Вера/Mona-Songz---Салют,-Вера.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Валерий Меладзе",
        song: "Сэра",
        variations: [
            { label: "minus 2", file: "assets/Music/Меладзе---Сэра/Валерий-Меладзе---Сэра-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/Меладзе---Сэра/Валерий-Меладзе---Сэра-(minus).mp3" }
        ],
        lyrics: "assets/Music/Меладзе---Сэра/Валерий-Меладзе---Сэра.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Валерий Меладзе",
        song: "Самба белого мотылька",
        variations: [
            { label: "minus 2", file: "assets/Music/Меладзе--Самбо-белого-мотылька/Валерий-Меладзе---Самба-белого-мотылька-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Меладзе--Самбо-белого-мотылька/Валерий-Меладзе---Самба-белого-мотылька-(1).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Мельница",
        song: "Лента в волосах",
        variations: [
            { label: "minus +2 semitones", file: "assets/Music/Мельница--Лента-в-волосах/Мельница---Лента-в-волосах-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/Мельница--Лента-в-волосах/Мельница---Лента-в-волосах-(minus).mp3" }
        ],
        lyrics: "assets/Music/Мельница--Лента-в-волосах/Мельница---Лента-в-волосах.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Оксана Джелиева",
        song: "Больно, а я улыбаюсь",
        variations: [
            { label: "Filtered Instrumental", file: "assets/Music/Оксана-Джелиева-Больно--я-улыбаюсь/Оксана-Джелиева---Больно-а-я-улыбаюсь-(Filtered-Instrumental)_B♭_minor__bpm_130.mp3" }
        ],
        lyrics: "",
        category: "Русские",
        listens: 0
    }
    
    
    // Добавь сюда остальные песни и их вариации по аналогии
];


// DOM-элементы
const artistsList = document.getElementById('artists-list');
const songDetails = document.getElementById('song-details');
const songTitle = document.getElementById('song-title');
const audioPlayer = document.getElementById('audio-player');
const lyricsDiv = document.getElementById('lyrics');
const backBtn = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');
const variationsDiv = document.getElementById('variations');

// Смена темы
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
});

// Отобразить список песен
function renderArtistsList() {
    artistsList.innerHTML = ''; // Очищаем список перед рендером
    artists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.textContent = `${artist.name} - ${artist.song} (Прослушиваний: ${artist.listens})`;
        artistDiv.addEventListener('click', () => {
            showSongDetails(artist);
        });
        artistsList.appendChild(artistDiv);
    });
}

// Функция для отображения деталей трека и его вариаций
function showSongDetails(artist) {
    songTitle.textContent = `${artist.name} - ${artist.song}`;
    audioPlayer.src = artist.variations[0].file; // Загружаем первую вариацию по умолчанию без воспроизведения
    artist.listens++; // Увеличиваем счётчик прослушиваний
    renderVariations(artist.variations); // Рендерим кнопки для вариаций

    if (artist.lyrics) {
        fetch(artist.lyrics)
            .then(response => response.text())
            .then(text => {
                lyricsDiv.textContent = text;
            })
            .catch(() => {
                lyricsDiv.textContent = "Ошибка загрузки текста.";
            });
    } else {
        lyricsDiv.textContent = "Текста нет.";
    }

    artistsList.style.display = 'none';
    songDetails.style.display = 'block';
    saveListensToLocalStorage(); // Сохраняем обновлённые данные прослушиваний
}

// Функция для отображения вариаций песни
function renderVariations(variations) {
    variationsDiv.innerHTML = ''; // Очищаем вариации перед рендером
    variations.forEach(variation => {
        const variationBtn = document.createElement('button');
        variationBtn.textContent = variation.label;
        variationBtn.classList.add('btn', 'variation-btn');
        variationBtn.addEventListener('click', () => {
            audioPlayer.src = variation.file; // Загружаем выбранную вариацию без воспроизведения
        });
        variationsDiv.appendChild(variationBtn);
    });
}

// Вернуться к списку песен
backBtn.addEventListener('click', () => {
    songDetails.style.display = 'none';
    artistsList.style.display = 'flex';
});

// Поиск по песням
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredArtists = artists.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm) || artist.song.toLowerCase().includes(searchTerm)
    );
    renderFilteredArtistsList(filteredArtists);
});

// Рендер отфильтрованного списка песен
function renderFilteredArtistsList(filteredArtists) {
    artistsList.innerHTML = ''; // Очищаем список перед рендером
    filteredArtists.forEach(artist => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');
        artistDiv.textContent = `${artist.name} - ${artist.song} (Прослушиваний: ${artist.listens})`;
        artistDiv.addEventListener('click', () => {
            showSongDetails(artist);
        });
        artistsList.appendChild(artistDiv);
    });
}

// Сохранение данных прослушиваний в localStorage
function saveListensToLocalStorage() {
    const listensData = artists.map(artist => ({
        name: artist.name,
        song: artist.song,
        listens: artist.listens
    }));
    localStorage.setItem('songListens', JSON.stringify(listensData));
}

// Загрузка данных прослушиваний из localStorage при загрузке страницы
function loadListensFromLocalStorage() {
    const storedData = JSON.parse(localStorage.getItem('songListens'));
    if (storedData) {
        storedData.forEach(storedArtist => {
            const artist = artists.find(a => a.name === storedArtist.name && a.song === storedArtist.song);
            if (artist) {
                artist.listens = storedArtist.listens;
            }
        });
    }
}

// Вызвать функцию для загрузки данных прослушиваний при загрузке страницы
loadListensFromLocalStorage();

// Вызвать функцию для рендеринга списка при загрузке страницы
renderArtistsList();

// Функция для создания снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Генерация случайного положения и размера
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';
    
    // Удаляем снежинку после того, как она пролетела
    snowflake.style.animationDuration = Math.random() * 10 + 10 + 's'; // Скорость падения
    snowflake.style.opacity = Math.random();
    
    document.getElementById('snowflakes-container').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Убираем снежинку после завершения анимации
}

// Запуск создания снежинок через интервалы
setInterval(createSnowflake, 500);
