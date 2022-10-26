let numbers = [123, 8409, 100053, 333333333, 7];

function checkTheFun(numbers, i) {
    if (numbers % 3 === 0) {
    console.log(true)
} else {
    console.log(false)
}
}
numbers.forEach(checkTheFun);

//Exercise 2 : Attendance

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let userName = prompt("What is your name?", );
if (userName in guestList) {
    console.log("Hi! I'm " + userName +", and I'm from " + guestList[userName] + ".")
} else {
    console.log("Hi! I'm a guest.")

}

//Prompt the student for their name. If the name is in the object, console.log the name of the student and the country they come from.
//If the name is not in the object, console.log: "Hi! I'm a guest."


//Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];
let sum = 0;
let highAge = 0;

for (let i=0; i < age.length; i++) {
    sum += age[i];
    if (highAge < age[i]) {
        highAge = age[i]
    }
}

console.log(sum);
console.log(highAge);

//1. Console.log the sum of all the numbers in the age array.
//2. Console.log the highest age in the array.
