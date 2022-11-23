//Exercise 1 : Print Full Name
function printFullName(studentObj) {
  let objValues = Object.values(studentObj).toString().replace(",", " ")
  return `Your full name is ${objValues}`
}


printFullName({first: 'Elie', last:'Schoppik'}) 

// 'Your full name is Elie Schoppik`
//Destructure this object DIRECTLY from the parameters (ie. Look at the Advanced Object lesson - Part II :
//Object destructuring used as an assignment to a function)


//Exercise 2 : Keys And Values

function keysAndValues(obj) {
  let newArr = []
  let objKeys = Object.keys(obj)
  let objValues = Object.values(obj)
  newArr.push(objKeys,objValues)
  return newArr
}
keysAndValues({ a: 1, b: 2, c: 3 })
//[["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
// [["key1", "key2", "key3"], [true, false, undefined]]

//Exercise 3 : Counter Class
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment(); //count = 2

const counterTwo = counterOne;
counterTwo.increment(); //count = 3

console.log(counterOne.count); //3
