const numbers = [1,2,3,4,5];

const doubles = numbers.map(double)

function double(value,index,array){
  return value*2;
}

console.log(doubles)

myArr = [10,20,30,40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

console.log(newArr)

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

let sum1 = array1.reduce(reducer ,6);
console.log(sum1)

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]
let one = party.filter(el => el.desert != 'Apple Pie').map((val, index, arr) => {
  return val.calories
});

let final = one.reduce((one, two) => {
  return one+ two;
});

console.log(final)

let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);