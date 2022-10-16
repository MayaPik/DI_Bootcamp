//Exercise 1
    //Evaluation- the first comment is prediction and the second one is the actual

5 >= 1 //true //true
0 === 1 //false //false
4 <= 1 //false //false
1 != 1 //false //false
"A" > "B" //false //false
"B" < "C" //true //true
"a" > "A" //false //true
"b" < "A" //true //false
true === false //false //false
true != true //false //false

//Exercise 2 
    //Ask For Numbers

let myString =prompt ("string of numbers separated by commas", );

let myArray = myString.split(" ");

console.log(parseInt(myArray[0]) + parseInt(myArray[1]) + parseInt(myArray[2]));  

//Exercise 3
    //Find Nemo

let userString = prompt("type a sentence containing the word “Nemo”", );

let userArray = userString.split(" ");


if (userArray.includes('nemo')) {
    console.log("I found Nemo at " + userArray.indexOf('nemo'));
} else {
    console.log("I can't find Nemo");
}

//Exercise 4 
    //Boom

let userAnswer =prompt ("Enter your number", );

let userNum = parseInt(userAnswer);
boomFun(userNum);


function boomFun() {

if (userNum < 2 && userNum % 2 === 0 && userNum % 5 === 0) {
    return "BOOM!";
} else if (userNum < 2 && userNum % 2 === 0){
    return ("boom!");
} else if (userNum < 2 && userNum % 5 === 0){
    return ("BOOMM"); 
} else if (userNum < 2) {
    return ("boom");
} else if (userNum > 2 && userNum % 2 === 0 && userNum % 5 === 0){
    return ("B" + "O".repeat(userNum) + "M!");
} else if (userNum > 2 && userNum % 2 === 0){
    return ("b" + "o".repeat(userNum) + "m!");
} else if (userNum > 2 && userNum % 5 === 0){
    return ("B" + "O".repeat(userNum) + "M"); 
} else if (userNum > 2) {
    return ("b" + "o".repeat(userNum) + "m");
}
}

console.log(boomFun(userNum));
