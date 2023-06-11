// A soccer game (advanced)
const score = [
    { time: 14, team: 'Belgium', scorer: 'E. Hazard' },
    { time: 18, team: 'Spain', scorer: 'F. Torres' },
    { time: 32, team: 'Spain', scorer: 'D. Olmo' },
    { time: 44, team: 'Belgium', scorer: 'R. Lukaku' },
    { time: 56, team: 'Spain', scorer: 'F. Torres' },
    { time: 72, team: 'Belgium', scorer: 'R. Lukaku' },
    { time: 74, team: 'Belgium', scorer: 'D. Mertens' },
    { time: 89, team: 'Belgium', scorer: 'M. Batshuayi' },
];
const tbody = document.querySelector('tbody');
let scoreBE = 0;
let scoreS = 0;

score.forEach((goal) => {
    const tr = document.createElement('tr');
    const tdBE = document.createElement('td');
    tdBE.setAttribute('data-label', 'Belgium');
    const tdS = document.createElement('td');
    tdS.setAttribute('data-label', 'Spain');
    if (goal.team === 'Belgium') {
        scoreBE += 1;
        tdBE.innerHTML = `<b>${scoreBE}</b> (${goal.time}m: ${goal.scorer})`;
        tdS.innerHTML = scoreS;
    } else {
        scoreS += 1;
        tdBE.innerHTML = scoreBE;
        tdS.innerHTML = `<b>${scoreS}</b> (${goal.time}: ${goal.scorer})`;
    }
    tr.appendChild(tdBE);
    tr.appendChild(tdS);
    tbody.appendChild(tr);
});
