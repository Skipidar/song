const artists = [
    {
        name: "5'nizza",
        song: "Нева",
        variations: [
            { label: "minus 2", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Нева-(minus-2).mp3" },
            { label: "minus 3", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Нева-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Нева.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "5'nizza",
        song: "Солдат",
        variations: [
            { label: "minus 3", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Солдат-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Солдат.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Алла Пугачева",
        song: "На Тихорецкую",
        variations: [
            { label: "minus 2", file: "assets/Music/А.Пугачева---На-Тихорецкую/Алла-Пугачёва---На-Тихорецкую-(minus-2)-+0-semitone.mp3" }
        ],
        lyrics: "assets/Music/А.Пугачева---На-Тихорецкую/Алла-Пугачёва---На-Тихорецкую.txt",
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
        lyrics: "assets/Music/Дорогой-дневник-Этажи/ЭТАЖИ---Дорогой-Дневник.txt",
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
        lyrics: "assets\Music\Любэ---Конь\Любэ-конь.txt",
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
            { label: "minus", file: "assets/Music/Макс-Корж---Пламенный-свет-эндорфин/Макс-Корж---Пламенный-свет-(minus).mp3" }
        ],
        lyrics: "assets/Music/Макс-Корж---Пламенный-свет-эндорфин/Макс-Корж---Пламенный-свет.txt",
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
        lyrics: "assets/Music/Максим--Отпускаю/МакSим---Отпускаю.txt",
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
        lyrics: "assets/Music/Оксана-Джелиева-Больно--я-улыбаюсь/Оксана-Джелиева-—-Больно.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Alec Benjamin",
        song: "Let Me Down Slowly",
        variations: [
            { label: "minus 3", file: "assets/Music/Alec-Benjamin--Let-me-down-slowly/Alec-Benjamin---Let-Me-Down-Slowly-(minus-3)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Alec-Benjamin--Let-me-down-slowly/Alec-Benjamin---Let-Me-Down-Slowly.txt",
        category: "English",
        listens: 0
    },
    {
        name: "ANIKV feat. SALUKI",
        song: "Меня не будет",
        variations: [
            { label: "acoustic", file: "assets/Music/ANIKV--Меня-не-будет/ANIKV-feat.-SALUKI---Меня-не-будет-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/ANIKV--Меня-не-будет/ANIKV-feat.-SALUKI---Меня-не-будет-(acoustic).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Animal ДжаZ",
        song: "Три полоски",
        variations: [
            { label: "minus", file: "assets/Music/Animal-ДжаZ--3-полоски/Animal-ДжаZ---Три-полоски-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Animal-ДжаZ--3-полоски/Animal-ДжаZ---Три-полоски.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Bebe",
        song: "Siempre Me Quedará",
        variations: [
            { label: "minus", file: "assets/Music/Bebe--Siempre-mi-quedara/Bebe---Siempre-me-quedara-(minus).mp3" }
        ],
        lyrics: "assets/Music/Bebe--Siempre-mi-quedara/Bebe---Siempre-me-quedara.txt",
        category: "Español",
        listens: 0
    },
    {
        name: "Carla Morrison",
        song: "Disfruto",
        variations: [
            { label: "minus", file: "assets/Music/Carla-Morrison--Disfruto/Carla-Morrison---Disfruto-(minus).mp3" }
        ],
        lyrics: "assets/Music/Carla-Morrison--Disfruto/Carla-Morrison---Disfruto.txt",
        category: "Español",
        listens: 0
    },
    {
        name: "Chris Isaak",
        song: "Wicked Game",
        variations: [
            { label: "minus 2", file: "assets/Music/Chris-Isaak--Wicked-game/Chris-Isaak---Wicked-Game-(Piano)-(minus-2).mp3" },
            { label: "minus", file: "assets/Music/Chris-Isaak--Wicked-game/Chris-Isaak---Wicked-Game-(Gavriil65)-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Chris-Isaak--Wicked-game/Chris-Isaak---Wicked-Game-(Gavriil65).txt",
        category: "English",
        listens: 0
    },
    {
        name: "Ed Sheeran",
        song: "Perfect",
        variations: [
            { label: "minus 7", file: "assets/Music/Ed-Sheeran---Perfect/Ed-Sheeran---Perfect-(minus-7)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Ed-Sheeran---Perfect/Ed-Sheeran---Perfect.txt",
        category: "English",
        listens: 0
    },
    {
        name: "Escape",
        song: "Игрушка",
        variations: [
            { label: "minus", file: "assets/Music/Escape--Игрушка/Escape---Игрушка-(minus)-+4-semitones.mp3" }
        ],
        lyrics: "assets/Music/Escape--Игрушка/Escape---Игрушка.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Feduk",
        song: "Хлорья летят наверх",
        variations: [
            { label: "minus", file: "assets/Music/Feduk--Хлорья-летят-наверх/FEDUK---Хлопья-летят-наверх-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Feduk--Хлорья-летят-наверх/FEDUK---Хлопья-летят-наверх.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Gafur",
        song: "Атом",
        variations: [
            { label: "minus 2", file: "assets/Music/Gafur--Атом/Gafur---Атом-(minus-2)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Gafur--Атом/Gafur---Атом.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Green Apelsin",
        song: "Охота на лисицу",
        variations: [
            { label: "minus 2", file: "assets/Music/Green-Apelsin--Охота-на-лисицу/Green-Apelsin---Охота-на-лисицу-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Green-Apelsin--Охота-на-лисицу/Green-Apelsin---Охота-на-лисицу.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Green Apelsin",
        song: "Северный ветер",
        variations: [
            { label: "minus 2", file: "assets/Music/Green-Apelsin--Северный-ветер/Green-Apelsin---Северный-ветер-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Green-Apelsin--Северный-ветер/Green-Apelsin---Северный-ветер.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Hensy",
        song: "Поболело и прошло",
        variations: [
            { label: "minus", file: "assets/Music/Hensy--Поболело-и-прошло/Hensy---Поболело-и-прошло-(minus).mp3" }
        ],
        lyrics: "assets/Music/Hensy--Поболело-и-прошло/Hensy---Поболело-и-прошло.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Inna",
        song: "Tequila",
        variations: [
            { label: "minus", file: "assets/Music/Inna--tequila/Tequila-INNA-.mp3" }
        ],
        lyrics: "assets/Music/Inna--tequila/inna-tequila.txt",
        category: "English",
        listens: 0
    },
    {
        name: "Inwhite",
        song: "Спокойных снов",
        variations: [
            { label: "minus", file: "assets/Music/Inwhite--Спокойных-снов/Inwhite---Спокойных-снов-(minus).mp3" }
        ],
        lyrics: "assets/Music/Inwhite--Спокойных-снов/Inwhite---Спокойных-снов.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Ivan Valeev",
        song: "Новелла",
        variations: [
            { label: "minus", file: "assets/Music/Ivan-Valeev--Новелла/Ivan-Valeev---Novella-(minus).mp3" }
        ],
        lyrics: "assets/Music/Ivan-Valeev--Новелла/Ivan-Valeev---Novella.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Jennifer Paige",
        song: "Crush",
        variations: [
            { label: "minus", file: "assets/Music/Jennifer-Paige--Crush/Jennifer-Paige---Crush-(minus).mp3" }
        ],
        lyrics: "assets/Music/Jennifer-Paige--Crush/Jennifer-Paige---Crush.txt",
        category: "English",
        listens: 0
    },
    {
        name: "Jony",
        song: "Аллея",
        variations: [
            { label: "minus", file: "assets/Music/Jony--Аллея/Jony---Аллея-(minus).mp3" }
        ],
        lyrics: "assets/Music/Jony--Аллея/Jony---Аллея.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Jony",
        song: "Комета",
        variations: [
            { label: "minus", file: "assets/Music/Jony--Комета/Jony---Комета-(minus).mp3" }
        ],
        lyrics: "assets/Music/Jony--Комета/Jony---Комета.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Jony",
        song: "Пустота",
        variations: [
            { label: "minus 2", file: "assets/Music/Jony--Пустота/Jony---Пустота-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Jony--Пустота/Jony---Пустота.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Julieta Venegas",
        song: "Pa' Bailar (Siempre Quiero Más)",
        variations: [
            { label: "Filtered Instrumental", file: "assets/Music/Julieta-Venegas--Pa’-Bailar-(Siempre-Quiero-Más)/Bajofondo-feat.-Julieta-Venegas---Pa-Bailar-(Filtered-Instrumental)-(MDX-v2-Voc-FT)-(1).mp3" }
        ],
        lyrics: "assets/Music/Julieta-Venegas--Pa’-Bailar-(Siempre-Quiero-Más)/Pa'-bailar-.txt",
        category: "Español",
        listens: 0
    },
    {
        name: "Kambulat",
        song: "Томас Шелби",
        variations: [
            { label: "minus 3 +1 semitone", file: "assets/Music/Kambulat--Томас-Шелби/Kambulat---Томас-Шелби-(minus-3)-+1-semitone.mp3" },
            { label: "minus 3 +3 semitones", file: "assets/Music/Kambulat--Томас-Шелби/Kambulat---Томас-Шелби-(minus-3)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Kambulat--Томас-Шелби/Kambulat---Томас-Шелби.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Karnaval",
        song: "Ромашки",
        variations: [
            { label: "minus", file: "assets/Music/Karnaval-Ромашки/Валя-Карнавал---Ромашки-(minus).mp3" }
        ],
        lyrics: "assets/Music/Karnaval-Ромашки/Валя-Карнавал---Ромашки.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Lana Del Rey",
        song: "Love",
        variations: [
            { label: "minus 4", file: "assets/Music/Lana-Del-Rey---Love/Lana-Del-Rey---Love-(minus-4).mp3" }
        ],
        lyrics: "assets/Music/Lana-Del-Rey---Love/Lana-Del-Rey---Love.txt",
        category: "English",
        listens: 0
    },
    {
        name: "Lana Del Rey",
        song: "Young and Beautiful",
        variations: [
            { label: "minus", file: "assets/Music/Lana-Del-Rey--Young-and-beautiful/Lana-Del-Rey---Young-and-Beautiful-(minus).mp3" }
        ],
        lyrics: "assets/Music/Lana-Del-Rey--Young-and-beautiful/Lana-Del-Rey---Young-and-Beautiful.txt",
        category: "English",
        listens: 0
    },
    {
        name: "LASCALA",
        song: "Пульс",
        variations: [
            { label: "minus", file: "assets/Music/LASCALA--Пульс/LaScala---Пульс-(minus).mp3" }
        ],
        lyrics: "assets/Music/LASCALA--Пульс/LaScala---Пульс.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Lila Downs",
        song: "La Bamba",
        variations: [
            { label: "wav", file: "assets/Music/Lila-Downs--La-Bamba/La-BAMBA-.mp3" }
        ],
        lyrics: "assets/Music/Lila-Downs--La-Bamba/La-Bamba.txt",
        category: "Español",
        listens: 0
    },
    {
        name: "Liza Evans",
        song: "Ревную",
        variations: [
            { label: "minus", file: "assets/Music/Liza-Evans--Ревную/Liza-Evans---Ревную-(minus).mp3" }
        ],
        lyrics: "assets/Music/Liza-Evans--Ревную/Liza-Evans---Ревную.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Lx24",
        song: "Уголёк",
        variations: [
            { label: "minus 2", file: "assets/Music/Lx24--Уголёк/Lx24---Уголёк-(minus-2)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Lx24--Уголёк/Lx24---Уголёк.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Miyagi",
        song: "Патрон",
        variations: [
            { label: "minus", file: "assets/Music/Miyagi--Патрон/MiyaGi---Патрон-(minus)--2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Miyagi--Патрон/MiyaGi---Патрон.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Natalia Doco",
        song: "Quedate Luna",
        variations: [
            { label: "mp4", file: "assets/Music/Natalia-Doco--quedate-luna/Караоке-испанскаяя-песня.mp4" }
        ],
        lyrics: "",
        category: "Español",
        listens: 0
    },
    {
        name: "NLO",
        song: "Холодно",
        variations: [
            { label: "minus", file: "assets/Music/NLO--Холодно/NLO---Холодно-(minus)-+4-semitones.mp3" }
        ],
        lyrics: "assets/Music/NLO--Холодно/NLO---Холодно.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Princesse Angine",
        song: "Фантастический вальс",
        variations: [
            { label: "minus 2", file: "assets/Music/Princesse-Angine--Фантастический-вальс/Принцесса-Ангина---Фантастический-вальс-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Princesse-Angine--Фантастический-вальс/Принцесса-Ангина---Фантастический-вальс.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Radiohead",
        song: "Creep",
        variations: [
            { label: "Piano minus", file: "assets/Music/Radiohead--Creep/Radiohead---Creep-(Piano)-(minus).mp3" }
        ],
        lyrics: "assets/Music/Radiohead--Creep/Radiohead---Creep-(Piano).txt",
        category: "English",
        listens: 0
    },
    {
        name: "Rauf & Fauk",
        song: "Закат и Рассвет",
        variations: [
            { label: "minus 1 semitone", file: "assets/Music/Rauf&Fauk--Закат-и-Рассвет/Rauf-and-Faik---Закат-и-рассвет-(minus)-+1-semitone.mp3" },
            { label: "minus 2 semitones", file: "assets/Music/Rauf&Fauk--Закат-и-Рассвет/Rauf-and-Faik---Закат-и-рассвет-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Rauf&Fauk--Закат-и-Рассвет/Rauf-&-Faik---Закат-и-рассвет.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "RSAC",
        song: "NBA не мешай",
        variations: [
            { label: "minus", file: "assets/Music/Rsac--NBA-не-мешай/RSAC---Не-мешай-(NBA)-(minus).mp3" }
        ],
        lyrics: "assets/Music/Rsac--NBA-не-мешай/RSAC---Не-мешай-(NBA).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Si-se",
        song: "Mariposa en Havana",
        variations: [
            { label: "minus", file: "assets/Music/Si-se--Mariposa-en-Havana/SiS_-_Mariposa_En_Havana_(mp3.xmuz.pro)-(Backing-Track)-(MDX-v2-Voc-FT).mp3" }
        ],
        lyrics: "assets/Music/Si-se--Mariposa-en-Havana/Mariposa-en-Havana.txt",
        category: "Español",
        listens: 0
    },
    {
        name: "Slava Marlow",
        song: "Снова я напиваюсь",
        variations: [
            { label: "minus", file: "assets/Music/Slava-Marlow--Снова-я-напиваюсь/Slava-Marlow---Снова-я-напиваюсь-(by-Studio-Man'2020)-(minus).mp3" }
        ],
        lyrics: "assets/Music/Slava-Marlow--Снова-я-напиваюсь/Slava-Marlow---Снова-я-напиваюсь-(by-Studio-Man'2020).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "The Beatles",
        song: "Yesterday",
        variations: [
            { label: "minus 2", file: "assets/Music/The-Beatles--Yesterday/Beatles,-The---Yesterday-(minus-2)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/The-Beatles--Yesterday/Beatles,-The---Yesterday.txt",
        category: "English",
        listens: 0
    },
    {
        name: "Yasmin Levy",
        song: "Me Voy",
        variations: [
            { label: "minus", file: "assets/Music/Yasmin-Levy---Me-Voy/Yasmin-Levy---Me-Voy-(minus).mp3" }
        ],
        lyrics: "assets/Music/Yasmin-Levy---Me-Voy/Yasmin-Levy---Me-Voy.txt",
        category: "Español",
        listens: 0
    },
    {
        name: "Zivert",
        song: "Life",
        variations: [
            { label: "minus", file: "assets/Music/Zivert-Life/Zivert---Life-(minus).mp3" }
        ],
        lyrics: "assets/Music/Zivert-Life/Zivert---Life.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Алла Пугачева",
        song: "На Тихорецкую",
        variations: [],
        lyrics: "assets/Music/А.Пугачева---На-Тихорецкую/Алла-Пугачёва---На-Тихорецкую.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Дабро",
        song: "На часах ноль-ноль",
        variations: [
            { label: "minus 3 semitones", file: "assets/Music/Дабро--На-часах-ноль-ноль/Dabro---На-часах-ноль-ноль-(minus)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Дабро--На-часах-ноль-ноль/Dabro---На-часах-ноль-ноль.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Мёртвые дельфины",
        song: "На моей луне",
        variations: [
            { label: "minus +2 semitones", file: "assets/Music/Мёртвые-дельфины--На-моей-луне/Мёртвые-Дельфины---На-моей-луне-(minus)-+2-semitones.mp3" },
            { label: "minus", file: "assets/Music/Мёртвые-дельфины--На-моей-луне/Мёртвые-Дельфины---На-моей-луне-(minus).mp3" }
        ],
        lyrics: "assets/Music/Мёртвые-дельфины--На-моей-луне/Мёртвые-Дельфины---На-моей-луне.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Мираж",
        song: "Музыка нас связала",
        variations: [
            { label: "minus 12", file: "assets/Music/Мираж--Музыка-нас-связала/Мираж---Музыка-нас-связала-(minus-12).mp3" }
        ],
        lyrics: "assets/Music/Мираж--Музыка-нас-связала/Мираж---Музыка-нас-связала.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Михаил Боярский",
        song: "Зеленоглазое такси",
        variations: [
            { label: "minus 3", file: "assets/Music/Михаил-Боярский--Зеленоглазое-такси/Михаил-Боярский---Зеленоглазое-такси-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/Михаил-Боярский--Зеленоглазое-такси/Михаил-Боярский---Зеленоглазое-такси.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Монокини",
        song: "Дотянуться до солнца",
        variations: [
            { label: "minus", file: "assets/Music/Монокини--Дотянуться-до-солнца/Монокини---Дотянуться-до-солнца-(minus).mp3" }
        ],
        lyrics: "assets/Music/Монокини--Дотянуться-до-солнца/Монокини---Дотянуться-до-солнца.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Моя Мишель",
        song: "Зима в сердце",
        variations: [
            { label: "minus 3", file: "assets/Music/Моя-Мишель--Зима-в-сердце/Моя-Мишель---Зима-в-сердце-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/Моя-Мишель--Зима-в-сердце/Моя-Мишель---Зима-в-сердце-(1).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Мумий Тролль",
        song: "Утекай",
        variations: [
            { label: "minus 4", file: "assets/Music/Мумий-Тролль--Утекай/Мумий-Тролль-_-Илья-Лагутенко---Утекай-(minus-4).mp3" }
        ],
        lyrics: "assets/Music/Мумий-Тролль--Утекай/Мумий-Тролль-_-Илья-Лагутенко---Утекай.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Надежда Кадышева",
        song: "Широка река",
        variations: [
            { label: "minus", file: "assets/Music/Н.-Кадышева--Широка-река/Надежда-Кадышева-и-«Золотое-кольцо»---Широка-река-(minus).mp3" }
        ],
        lyrics: "assets/Music/Н.-Кадышева--Широка-река/Надежда-Кадышева-и-«Золотое-кольцо»---Широка-река.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Николай Носков",
        song: "Это здорово",
        variations: [
            { label: "minus 3 semitones", file: "assets/Music/Н.-Носков--Это-здорово/Николай-Носков---Это-здорово-(minus-3)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Н.-Носков--Это-здорово/Николай-Носков---Это-здорово.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Наталья Штурм",
        song: "Школьный роман",
        variations: [
            { label: "minus", file: "assets/Music/Н.-Штурм--Школьный-роман/Наталья-Штурм---Школьный-роман-(minus).mp3" }
        ],
        lyrics: "assets/Music/Н.-Штурм--Школьный-роман/Наталья-Штурм---Школьный-Роман-(1).txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Наутилиус Помпилиус",
        song: "Дыхание (кавер)",
        variations: [
            { label: "minus 2 semitones", file: "assets/Music/Наутилиус-Помпилиус--Дыхание-кавер/Sirotkin---Дыхание-(minus)--2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Наутилиус-Помпилиус--Дыхание-кавер/Sirotkin---Дыхание.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Нервы",
        song: "Слишком влюблен",
        variations: [
            { label: "minus 2", file: "assets/Music/Нервы--Слишком-влюблен/Нервы---Слишком-влюблен-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Нервы--Слишком-влюблен/Нервы---Слишком-влюблен.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Нина Бродская",
        song: "Звенит январская вьюга",
        variations: [
            { label: "minus", file: "assets/Music/Нина-Бродская--Звенит-январская-вьюга/Из-кинофильмов---Звенит-январская-вьюга-(minus).mp3" }
        ],
        lyrics: "assets/Music/Нина-Бродская--Звенит-январская-вьюга/Из-кинофильмов---Звенит-январская-вьюга.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Оскар",
        song: "Между мной и тобой",
        variations: [
            { label: "minus 2 semitones", file: "assets/Music/Оскар--Между-мной-и-тобой/Оскар---Между-мной-и-тобой-(minus-2)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Оскар--Между-мной-и-тобой/Оскар---Между-мной-и-тобой.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Полина Гагарина",
        song: "Колыбельная",
        variations: [
            { label: "minus 2", file: "assets/Music/Полина-Гагарина--Колыбельная/Полина-Гагарина---Колыбельная-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Полина-Гагарина--Колыбельная/Полина-Гагарина---Колыбельная.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Порнофильмы",
        song: "Я так соскучился",
        variations: [
            { label: "minus 3 semitones", file: "assets/Music/Порнофильмы--Я-так-соскучился/Порнофильмы---Я-так-соскучился-(minus)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Порнофильмы--Я-так-соскучился/Порнофильмы---Я-так-соскучился.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Серебро",
        song: "Сломана",
        variations: [
            { label: "minus 2", file: "assets/Music/Серебро--Сломана/Serebro-(Серебро)---Сломана-(minus-2)-+0-semitone.mp3" }
        ],
        lyrics: "assets/Music/Серебро--Сломана/Serebro-(Серебро)---Сломана.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Скриптонит",
        song: "Это любовь",
        variations: [
            { label: "minus 1 semitone", file: "assets/Music/Скриптонит--Это-любовь/Скриптонит---Это-любовь-(minus)-+1-semitone.mp3" }
        ],
        lyrics: "assets/Music/Скриптонит--Это-любовь/Скриптонит---Это-любовь.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Сплин",
        song: "Мое сердце остановилось",
        variations: [
            { label: "minus 3 semitones", file: "assets/Music/Сплин--Мое-сердце-остановилось/Сплин---Мое-сердце-(minus)-+3-semitones-(1).mp3" }
        ],
        lyrics: "assets/Music/Сплин--Мое-сердце-остановилось/Сплин---Мое-сердце.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Сплин",
        song: "Романс",
        variations: [
            { label: "minus", file: "assets/Music/Сплин--Романс/Сплин---Романс-(minus).mp3" }
        ],
        lyrics: "assets/Music/Сплин--Романс/Сплин---Романс.txt",
        category: "Русские",
        listens: 0
    },
    {
        name: "Виктор Цой",
        song: "Восьмиклассница",
        variations: [
            { label: "minus 3 semitones", file: "assets/Music/Цой--Восьмиклассница/Кино-_-Виктор-Цой---Восьмиклассница-(minus)-+3-semitones.mp3" }
        ],
        lyrics: "assets/Music/Цой--Восьмиклассница/Кино-_-Виктор-Цой---Восьмиклассница.txt",
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

    // Добавляем фильтр для категорий English и Español
    const filteredArtists = artists.filter(artist => {
        if (category === 'Английские') {
            return artist.language === 'English';
        } else if (category === 'Испанские') {
            return artist.language === 'Español';
        } else {
            return artist.category === category;
        }
    });

    renderArtists(filteredArtists); // Отображаем отфильтрованные песни
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