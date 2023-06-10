// Centimeters to Feet
const cm = document.getElementById('cm');
const feet = document.getElementById('feet');

cm.addEventListener('input', function (e) {
    feet.innerHTML = (cm.value * 0.0328084).toFixed(2);
});
cm.dispatchEvent(new Event('input'));
