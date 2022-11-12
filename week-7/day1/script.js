
const myFunc1 = (x, y) => {
  console.log(x + y);
}

myFunc1(6,7)

const age = (year) => {
  return (year > 2000 ? "You are in the 21st century" : "You live in the Middle Age" )
}

console.log(age(1991))

const calculator = (a, operator, b) => {
  return (operator == "+" ? a+b : operator == "*" ? a*b : operator == "-" ? a-b : null );
}

console.log(`string text ${calculator(5,"*", 6)} string text`)

let myArr = [10,11,12,15,20];

myArr.forEach((el, i , myArr) => {
  (el % 2 == 0 ? "" : myArr.splice(i,1))
});

console.log(myArr)

let myArr2 = ["hello","hey","hola"];

myArr2.every((element) => {
   return element.includes("h") 
});

let myArr3 = ["wow","hey","bye"];

myArr3.some((element) => { 
  return (element.charAt(0) == "h")

});
