// Random image
function randomMinMax10(min, max) {
    const getal = Math.floor((Math.random() * (max - min + 1) + min) / 10) * 10;
    console.clear();
    console.log(getal);
    return getal;
}
function randomImage() {
    //genereer random image
    const width = randomMinMax10(100, 800);
    const height = randomMinMax10(100, 400);
    console.log(width, height);
    const url = `https://picsum.photos/${width}/${height}`;
    document.querySelector('figure h3').innerHTML = url;
    document.querySelector('figure img').src = url;
}
setInterval(randomImage, 2000);
