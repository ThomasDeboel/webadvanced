// Change background color (advanced)
const buttons = document.querySelectorAll('main div button');
const div = document.querySelector('div.border-gray');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.innerHTML === 'reset') {
            div.style.backgroundColor = '';
        }
        div.style.backgroundColor = button.innerHTML;
    });
});
