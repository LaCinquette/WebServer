 const likeButton = document.getElementsByClassName('like-button');

Array.from(likeButton).forEach(function(element) {
    element.addEventListener('click', function() {
        element.style.color = 'Red';

        // Код для связи с сервером писать здесь
    });
});

const pageButton = document.getElementsByClassName('page');

Array.from(pageButton).forEach(function(element) {
    element.addEventListener('click', function() {
        // if (element.innerHTML === '1'){
        //     console.log('yes')
        // }

        // Код для связи с сервером писать здесь
    });
});