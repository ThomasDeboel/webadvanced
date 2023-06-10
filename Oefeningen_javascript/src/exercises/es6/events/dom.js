// Basic DOM manipulation
const li1 = document.querySelector('ol li:first-child');
const h1 = document.querySelector('h1');
const li2 = document.querySelector('ol li:nth-child(2)');
const li3 = document.querySelector('ol li:nth-child(3)');
const button = document.querySelector('ol li button');

li1.addEventListener('click', (e) => {
    h1.textContent = 'Lorem ipsum dolor';
});
li2.addEventListener('mouseenter', (e) => {
    h1.classList.add('orange');
});
li2.addEventListener('mouseleave', (e) => {
    h1.classList.remove('orange');
});
li3.addEventListener('dblclick', (e) => {
    if (h1.classList.contains('green')) {
        h1.classList.remove('green');
    } else {
        h1.classList.add('green');
    }
});
button.addEventListener('click', (e) => {
    h1.style.transform = 'rotate(180deg)';
});
button.addEventListener('dblclick', (e) => {
    h1.style.transform = 'rotate(0deg)';
});
