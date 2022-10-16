//Exercise 1: Simple If/Else Statement

let x = 5;
let y = 2;

if (x > y) {
    console.log("x is the biggest number");
} else if (y > x) {
    console.log("y is the biggest number");

} else {
    console.log("y and x are even");

}

//Exercise 2: Chihuahua

let newDog = "Chihuahua";

console.log(newDog.length);

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog = "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I dont care, I prefer cats");
}

// Exercise 3: Even Or Odd

let xNum = prompt("type a number", );

if (xNum % 2 === 0) {
    console.log("x is an even number")
} else {
    console.log("x is an odd number")

}

//Exercise 4: Group Chat

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length == 0) {
    console.log("no one is online");
} else if (users.length == 1) {
    console.log(users[0] + " is online");
} else if (users.length == 2) {
    console.log(users[0] + " and " + users[1] + " is online");
} else if (users.length > 2) {
    console.log(users[0] + " and " + users[1] + " and " + (users.length -2 )+ " more are online");
}
