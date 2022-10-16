//Exercise 1 
    // Favorite Color

    let sentence = ["my","favorite","color","is","blue"];
    console.log(sentence[0] + " " +  sentence[1] + " " + sentence[2] + " " + sentence[3] + " " + sentence[4]) ;

//Exercise 2
    // MixUp

let str1 = "mix";
let str2 = "pod";


console.log(str1[0] + str1[1] +str2.slice(2));
console.log(str2[0] + str2[1] +str1.slice(2));

let sumUp = (str1[0] + str1[1] +str2.slice(2)) + " " + (str2[0] + str2[1] +str1.slice(2));

console.log(sumUp);

//Exercise 3
    // Calculator

let num1= parseInt(prompt ("Enter the first Number", ));
let num2= parseInt(prompt ("Enter the second Number", ));

alert("Sum:" + (num1 + num2));
alert("Subtract:" + (num1 - num2));
alert("Multiply:" + (num1 * num2));
alert("Divide:" + (num1 / num2));

