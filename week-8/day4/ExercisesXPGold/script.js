let landscapeArrow = () => {
    let result = "";
    let flat = (x) => {
      for (let count = 0; count < x; count++) {
        result = result + "_";
      }
    };
    let mountain = (x) => {
      result = result + "/";
      for (let counter = 0; counter < x; counter++) {
        result = result + "'";
      }
      result = result + "\\";
    };

    flat(4);
    mountain(4);
    flat(4);
    return result;
  };
  landscapeArrow();



//Exercise 2 : Closure
const addTo = x => y => x + y; 
const addToTen = addTo(10); // 10 + y
addToTen(3); //10+3 = 13

//Exercise 3 : Currying

const curriedSum = (a) => (b) => a + b 
curriedSum(30)(1) // 31

//Exercise 4 : Currying
const curriedSum2 = (a) => (b) => a + b 
const add5 = curriedSum2(5) //5+ b
add5(12) //5+12 =17

//Exercise 5 : Composing
const compose = (f, g) => (a) => f(g(a)); 
const add1 = (num) => num + 1;
const add5o = (num) => num + 5;
compose(add1, add5o)(10)
// add1(add5o(10))
//add1(15)
//16