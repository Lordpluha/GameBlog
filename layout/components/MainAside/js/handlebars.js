document.addEventListener("DOMContentLoaded", function () {
    var source = document.getElementById("category-template").innerHTML;
    var template = Handlebars.compile(source);

    var data = {
        categories: [
            { id: "checkbox0", name: "PC", class: "checkbox__input"},
            { id: "checkbox1", name: "Playstation 5", class: "checkbox__input" },
            { id: "checkbox2", name: "Playstation 4", class: "checkbox__input" },
            { id: "checkbox3", name: "Playstation 3", class: "checkbox__input" },
            { id: "checkbox4", name: "Xbox Series X|S", class: "checkbox__input" },
            { id: "checkbox5", name: "Xbox One", class: "checkbox__input" },
            { id: "checkbox6", name: "Xbox 360", class: "checkbox__input" },
            { id: "checkbox7", name: "VR", class: "checkbox__input" },
            { id: "checkbox8", name: "Steam Deck", class: "checkbox__input" },
            { id: "checkbox9", name: "Nintendo Switch", class: "checkbox__input" },
            { id: "checkbox10", name: "Индустрия", class: "checkbox__input" },
            { id: "checkbox11", name: "Кино", class: "checkbox__input" },
            { id: "checkbox12", name: "ММО", class: "checkbox__input" },
            { id: "checkbox13", name: "E3", class: "checkbox__input" },
            { id: "checkbox14", name: "Gamescom", class: "checkbox__input" },
            { id: "checkbox15", name: "Киберспорт", class: "checkbox__input" },
            { id: "checkbox16", name: "Железо", class: "checkbox__input" },
            { id: "checkbox17", name: "Мобильные", class: "checkbox__input" },
            { id: "checkbox18", name: "Stadia", class: "checkbox__input" },
            { id: "checkbox19", name: "Социальные", class: "checkbox__input" },
            { id: "checkbox20", name: "Фановые", class: "checkbox__input" },
            { id: "checkbox21", name: "PS Vita", class: "checkbox__input" },
            { id: "checkbox22", name: "Wii U", class: "checkbox__input" }
        ]
    };

    var html = template(data);
    document.getElementById("panel-news").innerHTML = html;
});



document.addEventListener("DOMContentLoaded", function () {
    var source = document.getElementById("category-template").innerHTML;
    var template = Handlebars.compile(source);

    var data = {
        categories: [
            { id: "checkbox999", name: "Первая полос", class: "checkbox__input-articles" },
            { id: "checkbox888", name: "Подборки игр", class: "checkbox__input-articles" },
            { id: "checkbox777", name: "Интервью", class: "checkbox__input-articles" },
            { id: "checkbox666", name: "Обзоры", class: "checkbox__input-articles" },
            { id: "checkbox555", name: "Превью", class: "checkbox__input-articles" }
        ]
    };

    var html = template(data);
    document.getElementById("panel-articles").innerHTML = html;
});



document.addEventListener("DOMContentLoaded", function () {
    var source = document.getElementById("category-template").innerHTML;
    var template = Handlebars.compile(source);

    var data = {
        categories: [
            { id: "checkbox0000", name: "Железо", class: "checkbox__input-blogs"},
            { id: "checkbox1111", name: "Личные блоги", class: "checkbox__input-blogs" },
            { id: "checkbox2222", name: "Кино и сериалы", class: "checkbox__input-blogs" },
            { id: "checkbox3333", name: "Обзоры и рассуждения", class: "checkbox__input-blogs" },
            { id: "checkbox4444", name: "Эй, StopGame", class: "checkbox__input-blogs" },
            { id: "checkbox5555", name: "Gamedev", class: "checkbox__input-blogs" },
            { id: "checkbox6666", name: "Общеигровое", class: "checkbox__input-blogs" },
            { id: "checkbox7777", name: "Ретро", class: "checkbox__input-blogs" },
            { id: "checkbox8888", name: "Оффтоп", class: "checkbox__input-blogs" },
            { id: "checkbox9999", name: "Видео", class: "checkbox__input-blogs" },
            { id: "checkbox1010", name: "Экстремемная", class: "checkbox__input-blogs" },
            { id: "checkbox1121", name: "Блог StopGame", class: "checkbox__input-blogs" }
        ]
    };

    var html = template(data);
    document.getElementById("panel-blogs").innerHTML = html;
});



document.addEventListener("DOMContentLoaded", function () {
    var source = document.getElementById("category-template").innerHTML;
    var template = Handlebars.compile(source);

    var data = {
        categories: [
            { id: "checkbox0990", name: "Инфакт", class: "checkbox__input-videos" },
            { id: "checkbox1991", name: "Обзоры", class: "checkbox__input-videos"  },
            { id: "checkbox2992", name: "Превью", class: "checkbox__input-videos"  },
            { id: "checkbox3993", name: "Видеорепортажи", class: "checkbox__input-videos" },
            { id: "checkbox4994", name: "Страшно, вырубай!", class: "checkbox__input-videos" },
            { id: "checkbox5995", name: "История серии", class: "checkbox__input-videos" },
            { id: "checkbox6996", name: "Уэс и Флинн", class: "checkbox__input-videos" },
            { id: "checkbox7997", name: "Мобильный Уэс", class: "checkbox__input-videos" },
            { id: "checkbox8998", name: "Спидран в деталях", class: "checkbox__input-videos" },
            { id: "checkbox9009", name: "Ретрозор", class: "checkbox__input-videos"  },
            { id: "checkbox6776", name: "Рефанд?!", class: "checkbox__input-videos"  },
            { id: "checkbox8787", name: "Разбор полётов", class: "checkbox__input-videos"  },
            { id: "checkbox9898", name: "Другое", class: "checkbox__input-videos"  },
            { id: "checkbox9393", name: "Нарезки стримов", class: "checkbox__input-videos"  },
            { id: "checkbox4565", name: "Записи стримов", class: "checkbox__input-videos"  }
        ]
    };

    var html = template(data);
    document.getElementById("panel-video").innerHTML = html;
});
