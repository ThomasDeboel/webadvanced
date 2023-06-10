// Image gallery
const thumbnails = document.querySelectorAll('figure#thumbnails img');
const image = document.getElementById('fullImage');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        thumbnails.forEach((restOfThumbnail) => {
            restOfThumbnail.classList.remove('border');
        });
        thumbnail.classList.add('border');
        image.setAttribute('src', `https://picsum.photos/id/${thumbnail.getAttribute('data-id')}/600/400 `);
    });
});
