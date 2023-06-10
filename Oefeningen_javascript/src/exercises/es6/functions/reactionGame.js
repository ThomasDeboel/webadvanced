// Reaction Game
const delay = 750;
const blocks = document.querySelectorAll('main div div div');
let lastNumber = 4;
let score =0 ;
function randomMinMax10() {
    const min = 0;
    const max = 2;
    const getal = Math.floor(Math.random() * (max - min + 1) + min);
    console.clear();
    console.log(getal);
    return getal;
}
function nextBlock() {
    let number = randomMinMax10();
    if (number === lastNumber) {
        number = randomMinMax10();
    }
    blocks.forEach((block) => {
        block.classList.remove('green');
        block.classList.remove('red');
        block.innerText = '';
    });
    blocks.item(number).classList.add('red');
    lastNumber = number;
}
blocks.forEach((block) => {
    block.addEventListener('click', () => {
        if (block.classList.contains('red')) {
            block.classList.add('green');
            score++;
            if (score >= 0) {
                block.innerText = score;
            }
        }
    });
});

function startgame() {
    setInterval(nextBlock, delay);
}
startgame();
