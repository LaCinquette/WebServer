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

async function getPosts(skip, take){
    const blog = document.getElementById('blog')
    const rows = await fetch('/blog/get?' + new URLSearchParams({
        skip,
        take
    }))

    console.log(rows.json())
    for (row in rows){
        let card = document.createElement('div').classList.add('card');
        blog.appendChild(card)
        card.appendChild(document.createElement('h2').classList.add('title').innerText = row.title)
        card.appendChild(document.createElement('h5').classList.add('date').innerText = row.date)
        card.appendChild(document.createElement('div').classList.add('text').innerText = row.text)
        let reactions = document.createElement('reactions').classList.add('reactions')
        reactions.appendChild('div').classList.add('likes').innerText = row.likes
        reactions.appendChild('i').classList.add('material-icons', 'like-button').innerText = favourite
        card.appendChild(reactions)
    }
}

getPosts(0, 5)