// Change background color (basic)
const buttons = document.querySelectorAll('main div button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        body.style.backgroundColor = button.innerHTML;
    });
});
