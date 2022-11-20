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
  {
    id: 6,
    author: "George Orwell",
    quote: "If liberty means anything at all, it means the right to tell people what they do not want to hear"
  },

]

quotes.forEach(object => {
  object.likes = 0;
});
//When the “Generate Quote” button is pressed, retrieve randomly a quote (ie. an object), and display it in the DOM - like the image above.
// When clicking on the button, make sure you don’t display the same quote twice in a row.
let lastQuote = -1;

const space = document.getElementById('quotes')

let quoteSpot = document.createElement('h1')
space.appendChild(quoteSpot)
let authorSpot = document.createElement('h3')
space.appendChild(authorSpot)

const mainButton = document.getElementById('generate')
const buttonWithSpaces = document.getElementById('charactersWithSpaces')
const buttonWithoutSpaces = document.getElementById('charactersNoSpaces')
const buttonNumOfWords = document.getElementById('numberOfWords')
const likeButton = document.getElementById('like')


let wordsResult = document.getElementById('wordsResult')
let noSpacesResult = document.getElementById('noSpacesResult')
let spacesResult = document.getElementById('spacesResult')
let likesResult = document.getElementById('likesResult')



const generator = () => {

    let randomNumber  = (Math.round(Math.random() * (quotes.length-1))) 
    if(lastQuote === randomNumber) {
      generator();
  } else {
      lastQuote = randomNumber;
      let randomQuote = quotes[randomNumber]
      quoteSpot.innerText = randomQuote.quote
      authorSpot.innerText = randomQuote.author
      spacesResult.innerText = ""
      noSpacesResult.innerText = ""
      wordsResult.innerText = ""
      likesResult.innerText = 0;
      likesResult.value = randomQuote.likes 

  }
}

mainButton.addEventListener('click', generator)


//A button that gives the number of character inside each quote (space included)
buttonWithSpaces.addEventListener('click', withSpaces)

function withSpaces() {
  spacesResult.innerText = ( quoteSpot.innerHTML.length )
}

//A button that gives the number of character inside each quote (space NOT included)

buttonWithoutSpaces.addEventListener('click', withOutSpaces)

function withOutSpaces() {
  noSpacesResult.innerText = (quoteSpot.innerHTML.replace(/\s/g, '').length )
}

//A button that gives the number of words in each quote


buttonNumOfWords.addEventListener('click', numOfWords)
function numOfWords() {
  wordsResult.innerText =  (quoteSpot.innerHTML.split(" ").length)
}  

//A button “Like” for the user to like a quote. Hint : add a new key to each object that will represent the number of “likes”.


likeButton.addEventListener('click', toLike)
function toLike() {
  likesResult.value ++;
  likesResult.innerText = likesResult.value
}  


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

let searchForm = document.getElementById('search')
let nextButton = document.getElementById('next')
let previousButton = document.getElementById('previous')


searchForm.addEventListener('submit', byAuthor)

let nameOfAuthor = document.getElementById('name')
let place = document.getElementById('quotesbyauthor')
function byAuthor(e) {
  let n = 0;
  const spesific = quotes.filter(each => each.author == nameOfAuthor.value);
    let newDisplay = document.createElement('div')
    newDisplay.innerHTML = spesific[n].quote;
    console.log(spesific.length)
    place.appendChild(newDisplay)
    nextButton.addEventListener('click', function() {
      if (n < spesific.length-1) {
      n +=1;
      newDisplay.innerHTML = spesific[n].quote;
      }
      
    })
    previousButton.addEventListener('click', function() {
      if (n > 0) {
      n-=1
      newDisplay.innerHTML = spesific[n].quote;
      }
    })
  e.preventDefault()
}