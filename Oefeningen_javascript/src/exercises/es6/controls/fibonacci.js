// Fibonacci
const start = 0;
const stop = 50;
let n1 = 0;
let n2 = 1;
let sum = 0;

for (let i = start; i <= stop; i++) {
    document.querySelector('ul').innerHTML += `<li>${n1}</li>`;
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
}
