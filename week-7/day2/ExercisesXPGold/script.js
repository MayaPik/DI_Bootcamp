//Exercise 1: Sum Elements
let numbers = [4,2,3,5,7,8,9,10,9,2,5,4,2,4,6,2];
let sum = null;

numbers.forEach((number) => {
    sum += number
})

//Exercise 2 : Remove Duplicates
let uniqueNumbers = [];
numbers.forEach((number) => {
 (!uniqueNumbers.includes(number) ? uniqueNumbers.push(number) : "")
});

console.log(uniqueNumbers);


let sampleArray = [ NaN, 0, 15, false, -22, '', undefined, 47, null ];
let unWanted = [0, false, '', undefined, null, NaN];
let newArray =[];
sampleArray.forEach((digit, i) => {
    if( sampleArray[i] === sampleArray[i] ) {
    (    unWanted.some((value) =>  { return (value === digit) }) ? "" : newArray.push(digit))
    }
});

sampleArray = newArray;

//Exercise 4 : Repeat Please !

const repeat = (str, num) => {
    let output = "";
    for (let i=0; i< num; i++) {
        output += str
    }
    return output
}

console.log(repeat('Ha!',7));

//Exercise 5 : Turtle & Rabbit

const startLine = '     ||<- Start line';
let turtle = '🐢'
let rabbit = '🐇'
const shorten = startLine.trimStart()
const numOfSpaces = startLine.length - shorten.length + 2;

turtle = turtle.padStart(numOfSpaces+turtle.length );
rabbit = rabbit.padStart(numOfSpaces+rabbit.length);
//turtle = turtle.trim().padEnd(9, '=');

console.log(startLine);
console.log(turtle);
console.log(rabbit);
