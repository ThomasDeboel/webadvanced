// Image filter (basic)
const images = document.querySelectorAll('main img');
//console.log(images);
images.forEach((image) => {
    image.addEventListener('mouseenter', (e) => {
        image.classList.add('grayscale');
    });
    image.addEventListener('mouseleave', (e) => {
        image.classList.remove('grayscale');
    });
});
