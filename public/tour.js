const intro = introJs();

intro.setOptions({
    steps: [
        {
            title: 'Добро пожаловать',
            intro: "Данный сайт сделал студент группы М33061 Севастьянов Юрий"
        },
        {
            element: "header",
            // title: "Хедер",
            intro: "Это хедер"
        },
        {
            element: ".logo",
            title: "Логотип",
            intro: "Картинка из интернета"
        },
        {
            element: ".menu",
            intro: "Навигационное меню"
        },
        {
            element: "#article-about",
            title: "Обо мне",
            intro: "Содержит информацию о биографии, трудоустройстве, качествах и т. д."
        },
        {
            element: "#article-projects",
            title: "Мои проекты",
            intro: "Информация о проектах - текущие и завершенные"
        },
        {
            element: "#article-contacts",
            title: "Мои контакты",
            intro: "Телефон, соцсети, почта"
        },
        {
            element: ".cat-gallery",
            title: "Галерея с котиками",
            intro: "Количество столбцов может варьироваться"
        },
        {
            element: ".series-table",
            title: "Числовой ряд",
            intro: "Последовательный числовой ряд"
        },
        {
            element: "footer",
            title: "Футер",
            intro: "Авторские права и время загрузки страницы"
        },
        {
            title: "Тур закончен",
            intro: "Спасибо за внимание"
        }
    ],
    scrollTo: "tooltip"
});
// console.log(intro)
// intro.start();

const buttonStart = document.querySelector(".tour");

buttonStart.addEventListener("click", (event) => {
    intro.start();
});