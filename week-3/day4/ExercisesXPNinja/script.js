//Exercise 1 : Age Difference

let oldName = prompt("The name of the older person", ) ;
let oldAge = prompt("The year in witch the older one was born", ) ;
let youngName = prompt("The name of the younger person", ) ;
let youngAge = prompt("The year in witch the younger one was born", ) ;
let answer;

/* answer - x = 2 * (answer - y)
answer - x = 2 * answer - 2y
2y - x = answer */

answer = 2*youngAge - oldAge;

console.log("In " + answer + " the age of " + youngName + " will be half of " + oldName + "'s age");

//Exercise 2 : Zip Codes

let zip = prompt("Plese enter zip code", );
let zipNum = parseInt(zip);

if (zipNum.toString().length == 5 && zip.indexOf(' ') < 0 && typeof(zipNum) == 'number') {
    console.log ("success");
} else {
    console.log ("error");

}

let nonDigit = (zip.match(/\D/g));

if ( nonDigit == null && zip.length == 5) {
    console.log ("success using Regular Expressions");
} else {    
    console.log ("error using Regular Expressions");
}


//Exercise 3 : Secret Word

let word = prompt("Give me a word", );

console.log(word.replace(/[aeiou]/gi, ""));


let newWord = word.replace(/a/gi, "1").replace(/e/gi, "2").replace(/i/gi, "3").replace(/o/gi, "4").replace(/u/gi, "5");

console.log(newWord);

/* Bonus: Replace the vowels with another character and console.log the result
a = 1
e = 2
i = 3
o = 4
u = 5 */