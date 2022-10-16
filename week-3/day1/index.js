console.log('hello world');
// We use a variable to store data temporarily
// value inside label outside

// if you was a reserve keyword you will get an error
// meaningful names- cannot start with a number
// no space or hyphen (-) insted:

let firstName;
//case-sensetive

const interestRate = 0.3;
console.log(interestRate);
// const = you can't change the value


// two types: 1)Primitve/value and 2)Reference

//Primitives: 
let name = 'Maya'; // String
let age = '22' //Number
let isApproved = true; //boolean without ''
let lastName = null; //When we want to clear the value

//JavaScript is a dynamic language - the types of the varibles can change if the value changed
// all numbers are kind of numbers

//Reference:
//object

let person = {
    name: 'Maya',
    age: '22' //those are keys
};

console.log(person);


//dot
person.name = 'John';

//bracket
//person['name'] = 'Mary'

console.log(person.name);

//Arrays- we use to represent a list on items

let selectedColors = ['red', 'blue']
selectedColors[2] = 1;

console.log(selectedColors)
//index of the first element 0 , second element 1

console.log(selectedColors.length)

//functions

//PERFORMING A TASK:

function greet(name, lastName) {
    //body of the function
    console.log('Hello ' + name + ' ' +lastName)
} // dont need ;

//call the function --->
greet('Maya', 'Pik');


//Calculating the value
function square(number) {
    return number*number;
}

let number= square(5);
console.log(number);

//console.log is a function log