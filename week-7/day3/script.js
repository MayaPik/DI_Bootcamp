function say(name) {
  alert("Hello " + name);
}         

say("Sarah"); 

(function (name) {
  alert("hello" + name);
})("sarah")

const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
          unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(2)

function add() { //parent function
  let counter = 0;
  function plus() {
      counter += 1;
      console.log(counter) ;
  }
  plus();  //console log 1
}

add() //console log 1



function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

console.log(outside(3)(5)); // returns 8


function newAdd() {
  let counter = 0;
    function calculus() {
    counter += 1; 
    return counter
    }
    console.log(calculus());
}

newAdd();

const add2 = a => b => a + b;
const result = add2(2)(3)

const multiply = (n, m) => (n * m);
const curryedMultiply = (n) => (m) => multiply(n, m)
let triple = curryedMultiply(3)
triple(4)

const g = n => n + 1;
const f = n => n * 2;

const h = x => f(g(x)); //2*(21)

h(20);  //42

let myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar.color); // undefined
console.log(myCar['year']); // 1969
console.log(myCar.year); // 1969

let myObj = new Object(),
    str = 'myString',
    rand = Math.random(),
    obj = new Object();

myObj.type              = 'Dot syntax';
myObj['date created']   = 'String with space';
myObj[str]              = 'String value';
myObj[rand]             = 'Random Number';
myObj[obj]              = 'Object';
myObj['']               = 'Even an empty string';

console.log(myObj)
// output}


let user = makeUser("John", 30);
alert(user.name + user.age); // John

// The same as
function makeUser(name, age) {
  return {
    name, // same as name: name
    age,  // same as age: age
    // ...
  };
}

function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}`;
    }
  }
  return result;
}

showProps(myCar, "myCar")

const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}