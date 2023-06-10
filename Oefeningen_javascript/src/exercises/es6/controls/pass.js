// Did I pass?
const result = 16;
const check = document.querySelector('i.fa-check');
const circle = document.querySelector('i.fa-times-circle');
if (result >= 10) {
    check.style.display = 'block';
} else {
    circle.style.display = 'block';
}
