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
/*
checkbox.forEach((box) => {
    box.addEventListener('change', () => {
        console.log(box.checked);
        if (box.getAttribute('id') === 'bold') {
            if (box.checked) {
                document.getElementById('paragraphs').style.fontWeight = box.id;
            } else {
                document.getElementById('paragraphs').style.fontWeight = null;
            }
        } else if (box.getAttribute('id') === 'italic') {
            if (box.checked) {
                document.getElementById('paragraphs').style.fontStyle = box.id;
            } else {
                document.getElementById('paragraphs').style.fontStyle = null;
            }
        }
    });
});*/

const button = document.querySelector('div button');

button.addEventListener('click', () => {
    console.log('clicked');
    if (button.innerHTML === 'Dark theme') {
        div.style.backgroundColor = '#111';
        div.style.color = '#f8f8f8';
        button.innerHTML = 'Light theme';
    } else {
        div.style.backgroundColor = null;
        div.style.color = null;
        button.innerHTML = 'Dark theme';
    }
});
