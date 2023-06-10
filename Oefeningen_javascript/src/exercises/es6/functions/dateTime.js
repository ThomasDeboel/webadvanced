// Date - time
function clock() {
    // make new Date-object containing the current date/time
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    let hours = now.getHours(); // convert 24 hours to 12 hours
    const slider = parseInt(document.getElementById('extra').value, 10);
    hours += slider;
    if (hours >= 24) {
        hours -= 24;
    }
    if (hours < 10) {
        document.getElementById('h0').src = '../../../assets/display/number0.svg';
    } else {
        document.getElementById('h0').src = `../../../assets/display/number${(hours - (hours % 10)) / 10}.svg`;
    }
    if (minutes < 10) {
        document.getElementById('m0').src = '../../../assets/display/number0.svg';
    } else {
        document.getElementById('m0').src = `../../../assets/display/number${(minutes - (minutes % 10)) / 10}.svg`;
    }
    if (seconds < 10) {
        document.getElementById('s0').src = '../../../assets/display/number0.svg';
    } else {
        document.getElementById('s0').src = `../../../assets/display/number${(seconds - (seconds % 10)) / 10}.svg`;
    }
    document.getElementById('h1').src = `../../../assets/display/number${hours % 10}.svg`;
    document.getElementById('m1').src = `../../../assets/display/number${minutes % 10}.svg`;
    document.getElementById('s1').src = `../../../assets/display/number${seconds % 10}.svg`;
    if (hours >= 6 && hours < 10) {
        document.querySelector('h2').innerHTML = 'Good morning';
        document.querySelector('main div div img').src = '../../../assets/dateTime/morning.png';
    } else if (hours >= 10 && hours < 21) {
        document.querySelector('h2').innerHTML = 'Good day';
        document.querySelector('main div div img').src = '../../../assets/dateTime/day.png';
    } else if (hours < 6 || hours >= 21) {
        document.querySelector('h2').innerHTML = 'Good night';
        document.querySelector('main div div img').src = '../../../assets/dateTime/night.png';
    }
}
clock(); // start clock() immediately
setInterval(clock, 1000); // execute clock() repeatedly (every second = 1000ms)
