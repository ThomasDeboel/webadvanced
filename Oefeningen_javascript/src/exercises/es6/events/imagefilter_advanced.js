// Image filter (advanced)
const images = document.querySelectorAll('main img');

images.forEach((image) => {
    image.classList.add('sepia');
    image.addEventListener('click', () => {
        images.forEach((img) => {
            img.classList.add('sepia');
        });
        image.classList.remove('sepia');
    });
});
