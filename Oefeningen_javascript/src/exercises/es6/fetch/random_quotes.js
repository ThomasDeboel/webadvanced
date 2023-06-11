// random quotes
const quotesUrl = 'https://goquotes-api.herokuapp.com/api/v1/random?count=5';
const result = document.getElementById('result');
// // eslint-disable-next-line import/no-extraneous-dependencies
// const fetch = require('node-fetch');

async function getRandomQuotes() {
    const response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=5');
    const data = await response.json();
    const quotes = data.quotes;
    quotes.forEach((quote) => {
        console.log(`"${quote.text}" - ${quote.author}`);
    });
}

getRandomQuotes();
