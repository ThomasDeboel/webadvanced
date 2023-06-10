// Slideshow
const ul = document.querySelector('ul');

function toTheBack() {
    const first = document.querySelector('ul#album li:first-child');
    const lastitem = document.createElement('li');
    lastitem.innerHTML = first.innerHTML;
    ul.append(lastitem);
    ul.removeChild(first);
}
function startgame() {
    setInterval(toTheBack, 2000);
}
startgame();
