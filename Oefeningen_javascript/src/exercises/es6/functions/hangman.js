// Hangman
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const words = ['JAZZ', 'TEST', 'FIVE', 'VISUAL', 'WONDER', 'BEFORE', 'STUDENTS', 'BACHELOR', 'UMBRELLA'];

let aantalGokken = 0;
let aantalFouten = 0;

for (let i = 0; i < alphabet.length; i++) {
    document.getElementById('buttonDiv').innerHTML += `<button class="tertiary">${alphabet.charAt(i)}</button>`;
}
function randomMinMax() {
    const getal = Math.floor(Math.random() * (9 + 1));
    return getal;
}
const word = words.at(randomMinMax());
for (let y = 0; y < word.length; y++) {
    const span = document.createElement('span');
    span.innerHTML += `&#160;`;
    document.getElementById('playDiv').appendChild(span);
}
function disableButtons(){
    document.querySelectorAll('button').forEach((button) => {
        button.disabled = true;
    });
}
function checkStatus() {
    if (aantalFouten >= 6) {
        disableButtons()
        for (let x = 0; x < word.length; x++) {
            document.querySelectorAll(`div#playDiv span`)[x].innerHTML = word.charAt(x);
            document.querySelectorAll(`div#playDiv span`)[x].style.borderColor = 'red';
            document.querySelectorAll(`div#playDiv span`)[x].style.color = 'red';
        }

        document.querySelector('figcaption').innerHTML = 'YOU lost :-(';
    } else if (aantalGokken - aantalFouten === word.length) {
        disableButtons()
        document.querySelector('figcaption').innerHTML = 'YOU WON :-)';
    }
}

function checkLetter(letter) {
    aantalGokken++;
    aantalFouten++;
    for (let z = 0; z < word.length; z++) {
        if (word.charAt(z) === letter) {
            document.querySelectorAll(`div#playDiv span`)[z].innerHTML = letter;
            document.querySelectorAll(`div#playDiv span`)[z].style.borderColor = 'green';
            aantalFouten--;
        }
    }
    checkStatus();
    document.querySelector('figure img').src = `../../../assets/hangman/Hangman-${aantalFouten}.png`;
}

document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
        button.disabled = true;
        checkLetter(button.innerHTML);
    });
});
console.log(word);
