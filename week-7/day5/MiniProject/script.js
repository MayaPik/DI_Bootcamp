const quotes = [
  {
    id: 0,
    author: "Emma Goldman",
    quote: "People have only as much liberty as they have the intelligence to want and the courage to take."
  },
  {
    id: 1,
    author: "Tacitus",
    quote: "If you would know who controls you see who you may not criticise."
  },
  {
    id: 2,
    author: "Cormac McCarthy",
    quote: "At one time in the world there were woods that no one owned"
  },
  {
    id: 3,
    author: "Lysander Spooner",
    quote: "A man is no less a slave because he is allowed to choose a new master once in a term of years."
  },
  {
    id: 4,
    author: "George Orwell",
    quote: "If I had understood the situation a bit better I should probably have joined the Anarchists."
  },
  {
    id: 5,
    author: "Emma Goldman",
    quote: "The most violent element in society is ignorance."
  },

]

//When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// When clicking on the button, make sure you don’t display the same quote twice in a row.
let lastQuote = -1;

const space = document.getElementById('quotes')

let quoteSpot = document.createElement('h1')
space.appendChild(quoteSpot)
let authorSpot = document.createElement('h3')
space.appendChild(authorSpot)

const button = document.getElementById('generate')

const generator = () => {
    let randomNumber  = (Math.round(Math.random() * (quotes.length-1))) 
    if(lastQuote === randomNumber) {
      generator();
  } else {
      lastQuote = randomNumber;
      let randomQuote = quotes[randomNumber]
      quoteSpot.innerText = randomQuote.quote
      authorSpot.innerText = randomQuote.author
  }
}

button.addEventListener('click', generator)

let addingForm = document.getElementById('addQuote')
let quoteInput = document.getElementById('quote')
let authorInput = document.getElementById('author')


const addNewOne = (e) => {
  e.preventDefault()
  let quote = {
    id : quotes.length,
    author: authorInput.value,
    quote : quoteInput.value
  }
  quotes.push(quote)
}

addingForm.addEventListener('submit', addNewOne);
