//Exercise 2 : Ternary Operator
const winBattle = () => { 
    return true;
};

let experiencePoints = null;
(winBattle() ? experiencePoints = 10: experiencePoints = 1)

console.log(experiencePoints);



//Exercise 3 : Is It A String ?
const isString = (element) => {
    return (typeof(element) == 'string')
}
console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false



//Exercise 4 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//Write a JavaScript program that displays the colors in the following order :
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

colors.forEach((color, i) => { 
    console.log(`${(i+1)}# choise is ${color}`)
}); 


//Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
//Hint : Use the array methods taught in class. Look at the lesson Array Methods.

(colors.some((x) => { 
    return (x == 'Violet')
}) ? console.log("Yeah"): console.log("No...")) 



//Exercise 5 : Colors #2

const ordinals = ["th","st","nd","rd"];

colors.forEach((color, i) => { 
    console.log(`${(i+1) + add(i)} choise is ${color}`)
}); 

function add(i, ordinal) {
    (i === 0 ? ordinal = ordinals[1]: i === 1 ? ordinal = ordinals[2]: i=== 2 ? ordinal = ordinals[3] : ordinal = ordinals[0])
    return ordinal;
  }

//Exercise 6 : Bank Details

let bankAmount = 2000;
var tax = 1.17;
let monthlyEx =  ["+200", "-100", "+146", "+167", "+2900"]

monthlyEx.forEach((number, i, arr) => {
    arr[i] = number*tax
    bankAmount += arr[i];
})

console.log(monthlyEx)
console.log(bankAmount)

