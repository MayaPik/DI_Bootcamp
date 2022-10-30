//Exercise 1: Random Number


function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

let x = getRandomInt();


for (let i=0; i<=x; i++) {
  console.log(i);

}

//Get a random number between 1 and 100. Console.log all even numbers from 0 to the random number.


//Exercise 2: Capitalized Letters

function capitalize(string) {
  let firstString = "";
  let secondString = "";
  for (let j = 0; j < string.length; j ++) {
    if (j%2 === 0) {
    firstString += string[j].toUpperCase();
  } else {
    firstString += string[j];
  }
}
  for (let k = 0; k < string.length; k ++) {
    if (k%2 != 0) {
    secondString += string[k].toUpperCase();
    } else {
      secondString += string[k];
    }
}
  return [firstString, secondString];

}

console.log(capitalize("abcdef")) ;


//Exercise 3 : Is Palindrome?

function palindromeChecker(string) {

  for (let m=0; m<string.length; m++) {
    if (string[m] == string.charAt((string.length - m - 1))) {
          continue
  } else {
    return "not a palidrome";
  }
}
return "a palindrome";

}

console.log(palindromeChecker("mamam"));



//Exercise 4 : Biggest Number
function biggestNumberInArray(arrayNumber)  {


for (let m=0; m < arrayNumber.length -1; m++) {
    for(let j = 0; j < ( arrayNumber.length - m -1); j++){
        if(arrayNumber[j] > arrayNumber[j+1]){
        let newNum = arrayNumber[j]
        arrayNumber[j] = arrayNumber[j + 1]
        arrayNumber[j+1] = newNum;
        } 
    }
}
return (arrayNumber[arrayNumber.length-1]);
}
const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
const array2 = ['a', 3, 'm', 4, 2]; // should return 4 
const array3 = []; // should return 0


console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));


//Exercise 5: Unique Elements

function unique(list) {
  let newArray = [];
  for (let k = 0; k < list.length; k ++) {
    if (newArray.includes(list[k]) === false) {
    let newLetter = list[k];
    newArray.push(newLetter);
  }
    
  }
  return newArray;

} 
console.log(unique([1,2,3,3,3,3,4,5]));