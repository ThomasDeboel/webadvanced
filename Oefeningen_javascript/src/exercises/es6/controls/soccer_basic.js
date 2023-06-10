// A soccer game (basic)
/*const score = ['Belgium', 'Spain', 'Spain', 'Belgium', 'Spain', 'Belgium', 'Belgium', 'Belgium'];
const tbody = document.querySelector('tbody');
let scoreBE = 0;
let scoreS = 0;
score.forEach((goal) => {
    if (goal === 'Belgium') {
        scoreBE += 1;
        tbody.innerHTML += `<tr><td data-label="Belgium">${scoreBE}</td><td data-label="Spain">${scoreS}</td></tr>`;
    } else {
        scoreS += 1;
        tbody.innerHTML += `<tr><td data-label="Belgium">${scoreBE}</td><td data-label="Spain">${scoreS}</td></tr>`;
    }
});*/
const score = ['Belgium', 'Spain', 'Spain', 'Belgium', 'Spain', 'Belgium', 'Belgium', 'Belgium'];
const tbody = document.querySelector('tbody');
let scoreBE = 0;
let scoreS = 0;
score.forEach((goal) => {
    const tr = document.createElement('tr');
    const tdBE = document.createElement('td');
    tdBE.setAttribute('data-label', 'Belgium');
    const tdS = document.createElement('td');
    tdS.setAttribute('data-label', 'Spain');
    if (goal === 'Belgium') {
        scoreBE += 1;
        tdBE.textContent = scoreBE;
        tdS.textContent = scoreS;
    } else {
        scoreS += 1;
        tdBE.textContent = scoreBE;
        tdS.textContent = scoreS;
    }
    tr.appendChild(tdBE);
    tr.appendChild(tdS);
    tbody.appendChild(tr);
});
