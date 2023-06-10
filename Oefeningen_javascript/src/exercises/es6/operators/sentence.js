// Make a valid sentence
const a = 'accidentally';
const b = 'server';
const c = 'He';
const d = "company's";
const e = 'had';
const f = 'hacked';
const g = 'into';
const h = 'his';

const sentence = `${c} ${e} ${a} ${f} ${g} ${h} ${d} ${b}.`;

document.querySelector('p').innerHTML = sentence;
