//Exercise 1 : Find The Sum
//Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

let sum = (a, b) => (a + b)



//Exercise 2 : Kg And Grams
//Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

function weightCalc(kilo){
    console.log(kilo*1000)
};
  weightCalc(32);

let weightCalc2 = function(kilo) {
  console.log(kilo*1000)
}(33);

//this is an anonymus function - you can't do : weightCalc2(32);


let weightCalc3 = (kilo) => (kilo*1000)
console.log(weightCalc3(23))

//Exercise 3 : Fortune Teller
//Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.

let sentenceFunction = function(num, name, location, title) {
  let newOne = document.createElement('div');
  newOne.innerHTML = `You will be a ${title} in ${location}, and married to ${name} with ${num} kids.`
  document.body.appendChild(newOne)
}(23, 'Orlo', 'Tel Aviv', 'Police officer');


//Exercise 4 : Welcome
//John has just signed in to your website and you want to welcome him.

const user = {
  name: "John",
  imgUrl: 'http://i.stack.imgur.com/KUvWS.jpg'
}

let welcome = function(name){
  let newOne = document.createElement('div');
  newOne.innerHTML = name;
  newOne.setAttribute('class','navbar-brand text-white')
  let img = document.createElement('img');
  img.src = user.imgUrl;
  img.style.width = '50px'
  img.style.height = '50px'
  img.style.borderRadius = '5px'
  let nav = document.getElementById('container')

  nav.prepend(img);
  nav.prepend(newOne)
}(user.name);

//Exercise 5 : Juice Bar

const makeJuice = function(size) {
  let ingredients = [];
  const addIngredients = function(first, second, third) {
      ingredients.push(first ,second ,third )
      }
      addIngredients('banana ', 'milk ', 'sugar ')
      addIngredients('orange ','apples ', 'strawberry ')

  const displayJuice = function() { 
    let newOne = document.createElement('div');
    newOne.innerHTML = `The client wants a ${size} juice, containing ${ingredients}.`
    document.body.appendChild(newOne)

    }
    displayJuice()
};

makeJuice('small')
