//Exercise 1 : Menu
const menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]
const isThereDesert = menu.some((value, i)=> { return (menu[i].type == 'dessert'); })

const allStarter = menu.every((value)=> { return (value.type == 'starter'); });

(menu.some((value, i)=> { return (menu[i].type == 'main'); }) ? "" : menu.push({type: "main" , name: "pasta"}));


const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

menu.forEach((dish) => {
  let dishLower = dish.name.toLowerCase();
  ((vegetarian.some((value) => {return (dishLower.includes(value))}) ? dish.vegetarian = true : dish.vegetarian = false))
 })

 //Exercise 2 : Chop Into Chunks
 let choppedArray = [];

 const string_chop = (str, num) => {
  let first = 0;
  for (let i=0; i < Math.ceil(str.length/num) ; i++) {
  newOne = str.slice(first, first + num);
  choppedArray.push(newOne) 
  first += num
  }
 }

 console.log(string_chop('developers',3)); 


 //The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.

 console.log(search_word('The quick brown fox', 'fox')); 

 function search_word(str, word) {
  let numberOfWord = 0;
  let words = str.split (' ')
  for (let i=0; i< words.length; i++) {
    if (words[i] == word) {
      numberOfWord +=1
    }
  } 
  return (`${word} was found ${numberOfWord} times.`)
}
console.log(reverseArray([1,2,3,4,5]));

function reverseArray(array) {  
  const reversed = array.reverse();
  return reversed;
}
