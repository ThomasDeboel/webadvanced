// Lottery
const knop = document.getElementById('drawBallsButton');
function randomMinMax10(min, max) {
    const getal = Math.floor(Math.random() * (max - min + 1) + min);
    console.clear();
    console.log(getal);
    return getal;
}

knop.addEventListener('click', () => {
    for (let i = 1; i < 7; i++) {
        document.querySelector(`div.ball:nth-child(${i})`).innerHTML = randomMinMax10(1, 45);
    }
});
