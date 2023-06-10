// String functions
const word = 'ihznduq hmpibnughpimhg yfawozhbduqzg dlwbubkbauk';

document.querySelector('div.block').innerHTML = word.charAt(word.indexOf('w') + 1).toUpperCase();
document.querySelector('div.block:nth-child(2)').innerHTML = word.lastIndexOf('w');
if (word.indexOf('x') >= 0) {
    document.querySelector('div.block:nth-child(3)').innerHTML = 'true';
} else {
    document.querySelector('div.block:nth-child(3)').innerHTML = 'false';
}
document.querySelector('div.block:nth-child(4)').innerHTML = word.length;
document.querySelector('div.block:nth-child(5)').innerHTML = word.replaceAll(' ', '').length;
