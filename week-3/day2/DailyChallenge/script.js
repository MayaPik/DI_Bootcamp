//Exercise 1:
    //Using this array :

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.shift();

fruits.sort();

fruits.push("Kiwi");

fruits.splice(0, 1);

fruits.reverse();


//Exercise 2:
    //Using this array :

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1]);