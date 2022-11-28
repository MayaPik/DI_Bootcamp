var employee = {    // Object we want to destructure
  firstname: 'Jon',
  lastname: 'Snow',
  dateofbirth: '1990'
};

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
    lastname = 'default lastname', 
    country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);


console.log(Object.entries(employee));

let myObj = {
  name : "John",
  lastName : "Doe",
  age : 25,
  friends : ["Mark", "Lucie", "Ana"]
}

//Count how many keys and values are in the object below

console.log(`There are ${(Object.keys(myObj).length)} keys, and ${(Object.values(myObj).length)} values`);

let numof = (Object.entries(myObj).length)
let i=0 
 for (let [key, value] of Object.entries(myObj)) {
    console.log(`the ${i} keys is ${key} and the ${i} value is ${value}`);
    i++
  }
