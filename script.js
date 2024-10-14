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
const backBtn = document.getElementById('back-btn');
const topBackBtn = document.getElementById('top-back-btn');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');
const variationsDiv = document.getElementById('variations');
const categoriesDiv = document.getElementById('categories');
const categoryInfoDiv = document.getElementById('category-info');
const pitchDisplay = document.getElementById('pitch-display');
const speedDisplay = document.getElementById('speed-display');
const lyricsDiv = document.getElementById('lyrics');
const playPauseBtn = document.getElementById('play-pause');
const rewindBtn = document.getElementById('rewind');
const forwardBtn = document.getElementById('forward');
const playButton = document.getElementById('play-button');
const volumeControl = document.getElementById('volume-control');
const currentVolumeDisplay = document.getElementById('current-volume');
const progressBar = document.getElementById('progress-bar');
const currentTimeDisplay = document.getElementById('current-time');
const totalDurationDisplay = document.getElementById('total-duration');

let currentCategory = '';
let currentSortType = '';
let currentTrackIndex = 0;
let currentVariationIndex = 0;
let currentPitch = 0; // in semitones, from -6 to +6

// Инициализация WaveSurfer
let wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple',
    height: 80,
    barWidth: 2,
    cursorWidth: 1,
    hideScrollbar: true,
});

// Функция для форматирования времени
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Функция для обновления прогресс-бара и времени
function updateProgressBar() {
    const currentTime = wavesurfer.getCurrentTime();
    const duration = wavesurfer.getDuration();
    if (duration > 0) {
        const progress = (currentTime / duration) * 100;
        progressBar.value = progress;
        currentTimeDisplay.textContent = formatTime(currentTime);
        totalDurationDisplay.textContent = formatTime(duration);
    }
}

// Привязка обработчиков событий
wavesurfer.on('audioprocess', updateProgressBar);
wavesurfer.on('seek', updateProgressBar);
wavesurfer.on('finish', () => {
    playButton.textContent = 'Play';
    playPauseBtn.textContent = '⏯';
});

// Обработчик перемотки через прогресс-бар
progressBar.addEventListener('input', () => {
    const duration = wavesurfer.getDuration();
    const time = (progressBar.value / 100) * duration;
    wavesurfer.setCurrentTime(time);
});

// Функция для загрузки трека
function loadTrack(index, variationIndex = 0) {
    if (index < 0 || index >= artists.length) return;

    currentTrackIndex = index;
    currentVariationIndex = variationIndex;

    const artist = artists[currentTrackIndex];
    const variation = artist.variations[currentVariationIndex];

    if (!variation) {
        console.error('Нет доступных вариаций для этого трека.');
        return;
    }

    songTitle.textContent = `${artist.name} - ${artist.song}`;

    // Останавливаем и очищаем предыдущий трек
    wavesurfer.stop();
    wavesurfer.empty();

    // Сбрасываем тональность и темп
    wavesurfer.setPlaybackRate(1.0);
    speedDisplay.textContent = '1.0x';
    currentPitch = 0;
    pitchDisplay.textContent = '0';

    // Загружаем трек
    wavesurfer.load(variation.file);

    // Обновляем вариации
    renderVariations(artist.variations);

    // Обновляем текст песни
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

    // Обновляем количество прослушиваний
    artist.listens++;
    saveListensToCookies();

    // Обновляем UI
    songDetails.style.display = 'block';
    artistsList.style.display = 'none';
    categoriesDiv.style.display = 'none';
    searchInput.style.display = 'none';
    topBackBtn.style.display = 'inline-block';

    // Обновляем состояние кнопок при готовности трека
    wavesurfer.on('ready', () => {
        playButton.textContent = 'Play';
        playPauseBtn.textContent = '⏯';
        updateProgressBar(); // Обновляем прогресс-бар при готовности
    });

    // Обработка ошибок при загрузке трека
    wavesurfer.on('error', (e) => {
        console.error('Ошибка загрузки трека:', e);
        alert('Не удалось загрузить трек. Проверьте путь к файлу.');
    });
}

// Кнопка Play в верхней части
playButton.addEventListener('click', () => {
    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        playButton.textContent = 'Play';
        playPauseBtn.textContent = '⏯';
    } else {
        wavesurfer.play();
        playButton.textContent = 'Pause';
        playPauseBtn.textContent = '⏸';
    }
});

// Кнопка воспроизведения/паузы в нижнем плеере
playPauseBtn.addEventListener('click', () => {
    if (wavesurfer.isPlaying()) {
        wavesurfer.pause();
        playButton.textContent = 'Play';
        playPauseBtn.textContent = '⏯';
    } else {
        wavesurfer.play();
        playButton.textContent = 'Pause';
        playPauseBtn.textContent = '⏸';
    }
});

// Кнопки перемотки
rewindBtn.addEventListener('click', () => {
    let currentTime = wavesurfer.getCurrentTime();
    let newTime = currentTime - 5;
    if (newTime < 0) newTime = 0;
    wavesurfer.setCurrentTime(newTime);
});

forwardBtn.addEventListener('click', () => {
    let currentTime = wavesurfer.getCurrentTime();
    let newTime = currentTime + 5;
    if (newTime > wavesurfer.getDuration()) newTime = wavesurfer.getDuration();
    wavesurfer.setCurrentTime(newTime);
});

// Регулировка громкости
volumeControl.addEventListener('input', () => {
    const volume = parseFloat(volumeControl.value);
    wavesurfer.setVolume(volume);
    currentVolumeDisplay.textContent = Math.round(volume * 100) + '%';
});

// Устанавливаем начальную громкость
wavesurfer.setVolume(parseFloat(volumeControl.value));

// Функция для отображения вариаций
function renderVariations(variations) {
    variationsDiv.innerHTML = '';
    variations.forEach((variation, index) => {
        const variationBtn = document.createElement('button');
        variationBtn.textContent = variation.label;
        variationBtn.classList.add('btn', 'variation-btn');
        variationBtn.addEventListener('click', () => {
            currentVariationIndex = index;
            wavesurfer.load(variation.file);
            // Обновляем заголовок песни
            const artist = artists[currentTrackIndex];
            songTitle.textContent = `${artist.name} - ${artist.song} (${variation.label})`;
        });
        variationsDiv.appendChild(variationBtn);
    });
}

// Отображение списка треков
function renderArtistsList() {
    artistsList.innerHTML = '';
    artists.forEach((artist, index) => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');

        // Создаём контейнер для названия песни и исполнителя
        const artistInfoDiv = document.createElement('div');
        artistInfoDiv.classList.add('artist-info');
        artistInfoDiv.textContent = `${artist.name} - ${artist.song}`;

        // Создаём элемент для количества прослушиваний
        const listensDiv = document.createElement('div');
        listensDiv.classList.add('listens-count');
        listensDiv.textContent = `Прослушиваний: ${artist.listens}`;

        // Добавляем элементы в artistDiv
        artistDiv.appendChild(artistInfoDiv);
        artistDiv.appendChild(listensDiv);

        // Добавляем обработчик события
        artistDiv.addEventListener('click', () => {
            loadTrack(index);
        });

        artistsList.appendChild(artistDiv);
    });
}

// Фильтрация по категории
function filterByCategory(category) {
    currentCategory = category;
    categoryInfoDiv.style.display = 'block';
    categoryInfoDiv.textContent = `Категория: ${category}`;
    const filteredArtists = artists.filter(artist => artist.category === category);
    renderArtists(filteredArtists);
}

// Функция для отображения отфильтрованных треков
function renderArtists(artistsArray) {
    artistsList.innerHTML = '';
    artistsArray.forEach((artist) => {
        const artistDiv = document.createElement('div');
        artistDiv.classList.add('artist');

        // Создаём контейнер для названия песни и исполнителя
        const artistInfoDiv = document.createElement('div');
        artistInfoDiv.classList.add('artist-info');
        artistInfoDiv.textContent = `${artist.name} - ${artist.song}`;

        // Создаём элемент для количества прослушиваний
        const listensDiv = document.createElement('div');
        listensDiv.classList.add('listens-count');
        listensDiv.textContent = `Прослушиваний: ${artist.listens}`;

        // Добавляем элементы в artistDiv
        artistDiv.appendChild(artistInfoDiv);
        artistDiv.appendChild(listensDiv);

        // Находим индекс артиста в оригинальном массиве
        const index = artists.findIndex(a => a.name === artist.name && a.song === artist.song);
        if (index !== -1) {
            artistDiv.addEventListener('click', () => {
                loadTrack(index);
            });
        } else {
            console.error('Артист не найден в оригинальном массиве artists.');
        }

        artistsList.appendChild(artistDiv);
    });
}

// Сортировка по имени
function sortByName() {
    const collator = new Intl.Collator('ru', { sensitivity: 'base' });
    artists.sort((a, b) => {
        const nameA = a.name ? a.name.toLowerCase() : '';
        const nameB = b.name ? b.name.toLowerCase() : '';

        // Проверяем, начинается ли имя на кириллице
        const isCyrillicA = /^[а-яё]/i.test(nameA);
        const isCyrillicB = /^[а-яё]/i.test(nameB);

        if (isCyrillicA && !isCyrillicB) return -1;
        if (!isCyrillicA && isCyrillicB) return 1;

        return collator.compare(nameA, nameB);
    });
    if (currentCategory) {
        filterByCategory(currentCategory);
    } else {
        renderArtistsList();
    }
}

// Сортировка по рейтингу
function sortByRating() {
    artists.sort((a, b) => b.listens - a.listens);
    if (currentCategory) {
        filterByCategory(currentCategory);
    } else {
        renderArtistsList();
    }
}

// Вернуться к списку песен
function backToList() {
    songDetails.style.display = 'none';
    artistsList.style.display = 'flex';
    categoriesDiv.style.display = 'block';
    searchInput.style.display = 'block';
    topBackBtn.style.display = 'none';
    categoryInfoDiv.style.display = 'none';
    currentCategory = '';
    playButton.textContent = 'Play';
    playPauseBtn.textContent = '⏯';
    wavesurfer.stop();
}

// Привязываем обработчики к кнопкам "Назад"
backBtn.addEventListener('click', backToList);
topBackBtn.addEventListener('click', backToList);

// Управление темпом
function changeSpeed(amount) {
    let currentRate = wavesurfer.getPlaybackRate();
    let newRate = currentRate + amount;
    if (newRate < 0.5) newRate = 0.5;
    if (newRate > 2.0) newRate = 2.0;
    wavesurfer.setPlaybackRate(newRate);
    speedDisplay.textContent = newRate.toFixed(1) + 'x';
}

// Управление тональностью
function changePitch(amount) {
    // amount is in cents (100 cents = 1 semitone)
    let newPitchCents = currentPitch * 100 + amount;
    let newPitchSemitones = newPitchCents / 100;

    // Ограничиваем диапазон от -600 до +600 cents (-6 до +6 semitones)
    if (newPitchCents < -600) {
        newPitchCents = -600;
        newPitchSemitones = -6;
    }
    if (newPitchCents > 600) {
        newPitchCents = 600;
        newPitchSemitones = 6;
    }

    currentPitch = newPitchSemitones;
    pitchDisplay.textContent = currentPitch;

    if (wavesurfer.backend.source) {
        wavesurfer.backend.source.detune.value = newPitchCents;
    } else {
        // Если источник еще не создан, устанавливаем detune после загрузки
        wavesurfer.on('ready', () => {
            wavesurfer.backend.source.detune.value = newPitchCents;
        });
    }
}

// Смена темы
themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
});

// Поиск по песням
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        if (currentCategory) {
            filterByCategory(currentCategory);
        } else {
            renderArtistsList();
        }
    } else {
        const filteredArtists = artists.filter(artist => {
            const name = artist.name.toLowerCase();
            const song = artist.song.toLowerCase();
            return name.includes(query) || song.includes(query);
        });
        renderArtists(filteredArtists);
    }
});

// Инициализация
loadListensFromCookies();
renderArtistsList();

// Функции для работы с куки
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires="+ date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// Сохранение прослушиваний в куки
function saveListensToCookies() {
    const listensData = artists.map(artist => ({
        name: artist.name,
        song: artist.song,
        listens: artist.listens
    }));
    setCookie('songListens', JSON.stringify(listensData), 365); // 365 дней
}

// Загрузка прослушиваний из куки
function loadListensFromCookies() {
    const storedData = getCookie('songListens');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        parsedData.forEach(storedArtist => {
            const artist = artists.find(a => a.name === storedArtist.name && a.song === storedArtist.song);
            if (artist) {
                artist.listens = storedArtist.listens;
            }
        });
    }
}

// Анимация снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.width = snowflake.style.height = Math.random() * 10 + 5 + 'px';
    snowflake.style.animationDuration = Math.random() * 10 + 10 + 's';
    snowflake.style.opacity = Math.random();
    document.getElementById('snowflakes-container').appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Запуск создания снежинок
setInterval(createSnowflake, 500);

// Функция для установки выравнивания текста
function setTextAlign(alignment) {
    lyricsDiv.style.textAlign = alignment;
}

// Функция для изменения размера шрифта
function changeFontSize(action) {
    const currentSize = parseFloat(window.getComputedStyle(lyricsDiv, null).getPropertyValue('font-size'));
    if (action === 'increase') {
        lyricsDiv.style.fontSize = (currentSize + 2) + 'px';
    } else if (action === 'decrease') {
        lyricsDiv.style.fontSize = (currentSize - 2) + 'px';
    }
}

// Функция для загрузки нового трека (заглушка)
function uploadNewTrack() {
    alert('Функция загрузки трека пока не реализована.');
}