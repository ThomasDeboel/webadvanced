//  Calculator

const add = document.querySelector('button:nth-child(1)');
const subract = document.querySelector('button:nth-child(2)');
const multiply = document.querySelector('button:nth-child(3)');
const divide = document.querySelector('button:nth-child(4)');

add.addEventListener('click', () => {
    const number1 = parseInt(document.getElementById('number1').value, 10);
    const number2 = parseInt(document.getElementById('number2').value, 10);
    document.getElementById('result').innerHTML = number1 + number2;
});
subract.addEventListener('click', () => {
    const number1 = parseInt(document.getElementById('number1').value, 10);
    const number2 = parseInt(document.getElementById('number2').value, 10);
    document.getElementById('result').innerHTML = number1 - number2;
});
multiply.addEventListener('click', () => {
    const number1 = parseInt(document.getElementById('number1').value, 10);
    const number2 = parseInt(document.getElementById('number2').value, 10);
    document.getElementById('result').innerHTML = number1 * number2;
});
divide.addEventListener('click', () => {
    const number1 = parseInt(document.getElementById('number1').value, 10);
    const number2 = parseInt(document.getElementById('number2').value, 10);
    document.getElementById('result').innerHTML = number1 / number2;
});
