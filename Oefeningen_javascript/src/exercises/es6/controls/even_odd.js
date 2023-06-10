// Even or odd?
const start = 1;
const stop = 100;

const even = document.querySelector('.border-green ul');
const odd = document.querySelector('.border-red ul');
const prime = document.querySelector('.border-blue ul');

for (let i = start; i <= stop; i++) {
    let isPrime = true;
    const number = `<li>${i}</li>`;

    if (i === 1) {
        isPrime = true;
    } else if (i > 1) {
        for (let e = 2; e < i; e++) {
            if (i % e === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        prime.innerHTML += number;
        if (i % 2 === 0) {
            even.innerHTML += number;
        } else {
            odd.innerHTML += number;
        }
    } else if (i % 2 === 0) {
        even.innerHTML += number;
    } else {
        odd.innerHTML += number;
    }
}
