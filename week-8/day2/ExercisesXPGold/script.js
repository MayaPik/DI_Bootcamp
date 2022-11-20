[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });

  //[2,4,6]

  [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );

  //[1, 2, 0, 1, 2, 3]

//Exercise 3 : Analyze This Code

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    //alert(num);
    return num * 2;
})

//1,2,3....
//the return is being ignored

//Exercise 4 : Nested Arrays
const array = [[1],[2],[3],[[[4]]],[[[5]]]]

const newArray2 = array.reduce((a, b) => { return a.concat(...b)})
console.log(newArray2)

//Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 
//and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; 

const newGreeting =greeting.map((array) => {
    return array.toString().replace(",", " ")
})

console.log(newGreeting)

//Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.

const newString = newGreeting.toString().replaceAll("," , " ").replace("!", "")


//Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]*/

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] ;

let arr = [];
arr.push(Number(trapped.toString()));
console.log(arr)

