const quotes = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  }
];

const btn = document.querySelector(".btn");

function randomQuote() {
  const i = Math.floor(Math.random() * quotes.length);
  const quoteInfo = quotes[i];
  const quote = quoteInfo.quote;
  const author = quoteInfo.author;

  document.querySelector(".quote").textContent = quote;
  document.querySelector(".author").textContent = "- " + author;
}


window.addEventListener("DOMContentLoaded", randomQuote);


btn.addEventListener("click", randomQuote);