// Moon and earth movement
let i = 0;
let interval;
const simulation = document.getElementById('image');
const delay = document.getElementById('delay');
function showNextImage(){
    i = (i + 1) % 24;
    simulation.src = `../../../assets/moonEarth/IMG${i.toString().padStart(2, '0')}.gif`;
}
function startSimulation() {
    interval = setInterval(showNextImage, delay.value);
}

function updateDelay() {
    clearInterval(interval);
    startSimulation();
}

delay.addEventListener('input', updateDelay);

startSimulation();
