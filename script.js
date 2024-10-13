const artists = [
    {
        name: "5'nizza",
        song: "Нева",
        variations: [
            { label: "(minus 2)", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Нева-(minus-2).mp3" },
            { label: "(minus 3)", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Нева-(minus-3).mp3" }
        ],
        lyrics: ""
    },
    {
        name: "5'nizza",
        song: "Солдат",
        variations: [
            { label: "(minus 3)", file: "assets/Music/(5)Пятницца/5'nizza-(Пятница)---Солдат-(minus-3).mp3" }
        ],
        lyrics: ""
    },
    {
        name: "А.Пугачева",
        song: "На Тихорецкую",
        variations: [
            { label: "(minus 2)", file: "assets/Music/А.Пугачева---На-Тихорецкую/Алла-Пугачёва---На-Тихорецкую-(minus-2)-+0-semitone.mp3" }
        ],
        lyrics: ""
    },
    {
        name: "А.Пугачева",
        song: "Миллион алых роз",
        variations: [
            { label: "(minus)", file: "assets/Music/А.Пугачева--Миллион-алых-роз/Алла-Пугачёва---Миллион-алых-роз-(minus).mp3" },
            { label: "(minus +2 semitones)", file: "assets/Music/А.Пугачева--Миллион-алых-роз/Алла-Пугачёва---Миллион-алых-роз-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/А.Пугачева--Миллион-алых-роз/Алла-Пугачёва---Миллион-алых-роз.txt"
    },
    {
        name: "Аида Ведищева",
        song: "Лесной олень",
        variations: [
            { label: "(minus)", file: "assets/Music/Аида-Ведищева---Лесной-олень/Из-мультфильмов---Лесной-олень-(minus).mp3" }
        ],
        lyrics: "assets/Music/Аида-Ведищева---Лесной-олень/Из-мультфильмов---Лесной-олень.txt"
    },
    {
        name: "Аида Ведищева",
        song: "Песенка о медведях",
        variations: [
            { label: "(minus 2)", file: "assets/Music/Аида-Ведищева---Песенка-о-медведях/Аида-Ведищева---Песенка-о-медведях-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Аида-Ведищева---Песенка-о-медведях/Аида-Ведищева---Песенка-о-медведях.txt"
    },
    {
        name: "Альви и И. Альтемиров",
        song: "Тишина",
        variations: [
            { label: "(minus +2 semitones)", file: "assets/Music/Альви-и-И.-Альтемиров---Тишина/Альви-и-Игорь-Шиянов---Тишина-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Альви-и-И.-Альтемиров---Тишина/Альви-и-Игорь-Шиянов---Тишина.txt"
    },
    {
        name: "Андрей Державин",
        song: "Не плачь, Алиса!",
        variations: [
            { label: "(minus +4 semitones)", file: "assets/Music/Андрей-Державин---Алиса/Андрей-Державин---Не-плачь,-Алиса-!-(minus)-+4-semitones.mp3" }
        ],
        lyrics: "assets/Music/Андрей-Державин---Алиса/Андрей-Державин---Не-плачь,-Алиса.txt"
    },
    {
        name: "Андрей Миронов",
        song: "Остров невезения",
        variations: [
            { label: "(minus)", file: "assets/Music/Андрей-Миронов---Остров-невезения/Андрей-Миронов---Остров-Невезения-(minus).mp3" }
        ],
        lyrics: "assets/Music/Андрей-Миронов---Остров-невезения/Андрей-Миронов---Остров-Невезения.txt"
    },
    {
        name: "Анет Сай",
        song: "Не моя правда",
        variations: [
            { label: "(minus)", file: "assets/Music/Анет-Сай---Не-моя-правда/Анет-Сай---Не-моя-правда-(minus).mp3" }
        ],
        lyrics: "assets/Music/Анет-Сай---Не-моя-правда/не-моя-правда.txt"
    },
    {
        name: "Анет Сай",
        song: "Слёзы",
        variations: [
            { label: "(minus 3)", file: "assets/Music/Анет-Сай--Слезы/Анет-Сай---Слёзы-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/Анет-Сай--Слезы/Анет-Сай---Слёзы.txt"
    },
    {
        name: "Анна Герман",
        song: "Надежда",
        variations: [
            { label: "(minus)", file: "assets/Music/Анна-Герман---Надежда/Анна-Герман---Надежда-(minus).mp3" }
        ],
        lyrics: "assets/Music/Анна-Герман---Надежда/Анна-Герман---Надежда.txt"
    },
    {
        name: "Анна Герман",
        song: "Эхо любви",
        variations: [
            { label: "(minus)", file: "assets/Music/Анна-Герман---Эхо/Анна-Герман---Эхо-любви-(minus).mp3" }
        ],
        lyrics: "assets/Music/Анна-Герман---Эхо/Анна-Герман---Эхо-любви.txt"
    },
    {
        name: "Асия",
        song: "Лампочка",
        variations: [
            { label: "(minus 2)", file: "assets/Music/Асия---Лампочка/Асия---Лампочка-(minus-2).mp3" }
        ],
        lyrics: "assets/Music/Асия---Лампочка/Асия---Лампочка.txt"
    },
    {
        name: "Бумбокс",
        song: "Вахтерам",
        variations: [
            { label: "(minus +2 semitones)", file: "assets/Music/Бумбокс--Вахтерам/Бумбокс---Вахтерам-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Бумбокс--Вахтерам/Бумбокс---Вахтерам.txt"
    },
    {
        name: "В. Дмитриенко",
        song: "Венера-Юпитер",
        variations: [
            { label: "(minus 2 +2 semitones)", file: "assets/Music/В.-Дмитриенко--Венера-Юпитер/Ваня-Дмитриенко---Венера-Юпитер-(minus-2)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/В.-Дмитриенко--Венера-Юпитер/Ваня-Дмитриенко---Венера-Юпитер.txt"
    },
    {
        name: "В. Салтыков",
        song: "Белая ночь",
        variations: [
            { label: "(minus 9 +2 semitones)", file: "assets/Music/В.-Салтыков---Белая-ночь/Форум---Белая-ночь-(minus-9)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/В.-Салтыков---Белая-ночь/Форум---Белая-ночь.txt"
    },
    {
        name: "В. Стрыкало",
        song: "Яхта парус",
        variations: [
            { label: "(minus 3)", file: "assets/Music/В.Стрыкало--Яхта-Праус/Валентин-Стыкало---Яхта-парус-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/В.Стрыкало--Яхта-Праус/Валентин-Стыкало---Яхта-парус.txt"
    },
    {
        name: "Валентина Толкунова",
        song: "Кабы не было зимы",
        variations: [
            { label: "(minus)", file: "assets/Music/Валентина-Толкунова---Кабы-не-было-зимы/Валентина-Толкунова---Кабы-не-было-зимы-(minus).mp3" }
        ],
        lyrics: "assets/Music/Валентина-Толкунова---Кабы-не-было-зимы/Валентина-Толкунова---Кабы-не-было-зимы.txt"
    },
    {
        name: "Вера Брежнева",
        song: "Реальная жизнь",
        variations: [
            { label: "(minus)", file: "assets/Music/Вера-Брежнева---Реальная-жизнь/Вера-Брежнева---Реальная-жизнь-(minus).mp3" }
        ],
        lyrics: "assets/Music/Вера-Брежнева---Реальная-жизнь/Вера-Брежнева---Реальная-жизнь.txt"
    },
    {
        name: "Винтаж",
        song: "Ева",
        variations: [
            { label: "(minus +2 semitones)", file: "assets/Music/Винтаж---Ева/Винтаж---Ева-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Винтаж---Ева/Винтаж---Ева.txt"
    },
    {
        name: "Винтаж",
        song: "Знак водолея",
        variations: [
            { label: "(minus 3)", file: "assets/Music/Винтаж---Знак-Водолея/Винтаж---Знак-водолея-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/Винтаж---Знак-Водолея/Винтаж---Знак-водолея.txt"
    },
    {
        name: "Звери",
        song: "Всё, что тебя касается",
        variations: [
            { label: "(minus 4 +2 semitones)", file: "assets/Music/Звери---Все-что-тебя-касается/Звери---Всё,-что-тебя-касается-(minus-4)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Звери---Все-что-тебя-касается/Звери---Всё,-что-тебя-касается.txt"
    },
    {
        name: "Земфира",
        song: "Жить в твоей голове",
        variations: [
            { label: "(minus +2 semitones)", file: "assets/Music/Земфира--Жить-в-твоей-голове/Земфира---Жить-в-твоей-голове-(minus)-+2-semitones.mp3" }
        ],
        lyrics: "assets/Music/Земфира--Жить-в-твоей-голове/Земфира---Жить-в-твоей-голове.txt"
    },
    {
        name: "К. Орбакайте",
        song: "Тучи в голубом",
        variations: [
            { label: "(minus 6)", file: "assets/Music/К-Орбакайте---Тучи-в-голубом/Кристина-Орбакайте---Тучи-в-голубом-(minus-6).mp3" }
        ],
        lyrics: "assets/Music/К-Орбакайте---Тучи-в-голубом/Кристина-Орбакайте---Тучи-в-голубом.txt"
    },
    {
        name: "Меладзе",
        song: "Красиво",
        variations: [
            { label: "(minus 7)", file: "assets/Music/Меладзе---Красиво/Валерий-Меладзе---Красиво-(minus-7).mp3" }
        ],
        lyrics: "assets/Music/Меладзе---Красиво/Валерий-Меладзе---Красиво.txt"
    },
    {
        name: "Марк Бернес",
        song: "Темная ночь",
        variations: [
            { label: "(minus 3)", file: "assets/Music/Марк-Бернес-Темная-ночь/Марк-Бернес---Тёмная-ночь-(minus-3).mp3" }
        ],
        lyrics: "assets/Music/Марк-Бернес-Темная-ночь/Марк-Бернес---Тёмная-ночь.txt"
    }
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
let currentFontSize = 16; // Начальный размер шрифта

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
        artistDiv.textContent = `${artist.name} - ${artist.song}`;
        artistDiv.addEventListener('click', () => {
            showSongDetails(artist);
        });
        artistsList.appendChild(artistDiv);
    });
}

// Функция для отображения деталей трека
function showSongDetails(artist) {
    songTitle.textContent = `${artist.name} - ${artist.song}`;
    audioPlayer.src = artist.variations[0].file;
    
    const variationsHTML = artist.variations.map(variation => `<div>${variation.label}</div>`).join('');
    document.getElementById('variations').innerHTML = variationsHTML;

    if (artist.lyrics) {
        fetch(artist.lyrics)
            .then(response => response.text())
            .then(text => {
                lyricsDiv.textContent = text;
            });
    } else {
        lyricsDiv.textContent = "Текста нет.";
    }

    artistsList.style.display = 'none';
    songDetails.style.display = 'block';
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
        artistDiv.textContent = `${artist.name} - ${artist.song}`;
        artistDiv.addEventListener('click', () => {
            showSongDetails(artist);
        });
        artistsList.appendChild(artistDiv);
    });
}

// Управление выравниванием текста
function setTextAlign(alignment) {
    lyricsDiv.style.textAlign = alignment;
}

// Управление размером шрифта
function changeFontSize(action) {
    if (action === 'increase') {
        currentFontSize += 2;
    } else if (action === 'decrease') {
        currentFontSize -= 2;
    }
    lyricsDiv.style.fontSize = `${currentFontSize}px`;
}

// Функция для загрузки новых треков
function uploadNewTrack() {
    const inputFile = document.getElementById('track-upload');
    const inputName = document.getElementById('track-name');
    const inputSong = document.getElementById('song-name');
    const inputLyrics = document.getElementById('lyrics-upload');

    inputFile.addEventListener('change', function () {
        const newArtist = {
            name: inputName.value,
            song: inputSong.value,
            file: URL.createObjectURL(inputFile.files[0]),
            lyrics: inputLyrics.files.length > 0 ? URL.createObjectURL(inputLyrics.files[0]) : ""
        };
        artists.push(newArtist);
        renderArtistsList(); // Обновляем список после добавления нового трека
    });
}
// Функция для создания снежинок
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Генерация случайных размеров, позиций и времени падения снежинок
    const size = Math.random() * 5 + 5 + 'px';
    const leftPosition = Math.random() * window.innerWidth + 'px';
    const fallDuration = Math.random() * 5 + 5 + 's';

    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = leftPosition;
    snowflake.style.animationDuration = fallDuration;

    document.body.appendChild(snowflake);

    // Удаление снежинки после того, как она упадет
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(fallDuration) * 1000); // Удаление через время падения
}

// Интервал для создания снежинок
setInterval(createSnowflake, 800); // Каждые 800 мс создается новая снежинка

// Вызвать функцию для рендеринга списка при загрузке страницы
renderArtistsList();
