//  Sales
const Trousers = 85;
const Sweater = 62;
const Coat = 120;
const Shirt = 25;
const Shoes = 105;
const discount = 70;

const bill = Math.round(((Trousers + Sweater + Coat + Shirt + Shoes) * (100 - discount)) / 100);

document.getElementById('bill').innerHTML = bill;
