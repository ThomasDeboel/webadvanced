// Style the paragraphs
const div = document.querySelector('div#paragraphs');
const font = document.getElementById('font');

div.style.fontFamily = `${font.value},sans-serif`;
font.addEventListener('change', () => {
    div.style.fontFamily = `${font.value},sans-serif`;
});

const radioButtons = document.querySelectorAll('input[name="fontsize"]');

radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        div.style.fontSize = document.querySelector('input[name="fontsize"]:checked').value;
    });
});

const checkbox = document.querySelectorAll('input[type=checkbox]');
checkbox.forEach((check) => {
    check.addEventListener('change', () => {
        if (check.checked) {
            if (check.id === 'bold') {
                div.style.fontWeight = check.id;
            } else {
                div.style.fontStyle = check.id;
            }
        } else if (check.id === 'bold') {
            div.style.fontWeight = '';
        } else {
            div.style.fontStyle = '';
        }
    });
});


