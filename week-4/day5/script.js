/*
for (let m = 0; m <= 15; m++) {
    if ((m%2) === 0) {
        console.log(m + "is even");
    } else {
        console.log(m + "is odd");
    }
}

let names= ["john", "sarah", 23, "Rudolf",34];

for(let k=0; k < names.length; k++) {
    if (typeof names[k] === "string") {
        const uppercase = names[k][0].toUpperCase();
        console.log(uppercase + names[k].slice(1,));
    }
}

//2. Write a JavaScript for loop that will go through the variable names


for(let n= 0; n < names.length; n++) {
    if (typeof names[n] != "string") {
        break;
    } else {
        console.log(names[n]);
    }
} //if the item is not a string, go out of the loop.- if the item is a string, display it.

let myAge= 0;

function myFun(myAge) {
    console.log("My mom is " + myAge*2);
    console.log("My dad is " + Math.round(1.2*(myAge*2)));
}

myFun(23);



function myFun2(userAge) {
    let result= userAge*2;
    return result;
}

let momAge = myFun2(22);
console.log(momAge); 

*/




// Exercise 1 : List Of People


const people = ["Greg", "Mary", "Devon", "James"];

people.shift(); //Write code to remove “Greg” from the people array.

for(let i=0; i < people.length; i++) {
    people[i] = people[i].replace("James","Jason");
   }
   // Write code to replace “James” to “Jason”.

people.push("Maya"); //Write code to add your name to the end of the people array.



console.log(people.indexOf("Mary")); //Write code that console.logs Mary’s index. take a look at the indexOf method on Google.



let newPeople = people.slice(1,3); //Write code to make a copy of the people array using the slice method.- The copy should NOT include “Mary” or your name.



console.log(people.indexOf("Foo")); //Write code that gives the index of “Foo”. Why does it return -1 ?

let last = people.slice((people.length-1)); //Create a variable called last which value is the last element of the array.
console.log(last);
//Part II - Loops

console.log("Part 2")

for(let j=0; j < people.length; j++) {
    console.log(people[j]);
   } //Using a loop, iterate through the people array and console.log each person.

   console.log("Part 3")


for(let m=0; m < people.length; m++) {
    console.log(people[m]);

    if ( m===2 ) {
        break; 
    }
   } //Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .



// Exercise 2 : Your Favorite Colors

let colors = [["purple", "pink", "yellow", "blue", "green"],["st", "nd", "rd", "th", "th"]];

for (let m = 0; m < colors[0].length; m++) {
    console.log("My " + (m+1) + colors[1][m] + " choice is " + colors[0][m])
}

// Create an array called colors where the value is a list of your five favorite colors. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… . Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.


//Exercise 3 : Repeat The Question

let newNumber = parseInt(prompt("Give me a number above 10", ));

while (isNaN(newNumber) || newNumber < 10) {
      newNumber = parseInt(prompt("Give me a number above 10", ));

}

// Prompt the user for a number. While the number is smaller than 10 continue asking the user for a new number.


//Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor); //Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor); //Console.log how many apartments are on the floors 1 and 3.

console.log(building.nameOfTenants[1] + "- "  + building.numberOfRoomsAndRent.dan[0] +" rooms"); //Console.log the name of the second tenant and the number of rooms he has in his apartment.

    let sarahRent = building.numberOfRoomsAndRent.sarah[1];
    let danRent = building.numberOfRoomsAndRent.dan[1];
    let davidRent = building.numberOfRoomsAndRent.david[1];

    if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    }

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


//Exercise 5 : Family

let family = {
    location: "Ramat Gan",
    namesOfMembers: ["Samo", "Maya",],
}

  for (let key in family) {
    // keys
    console.log("Key - " + key);
  }

  for (let key in family) {
    //values
  console.log("Value - " + family[key]);
  }

// Create an object called family with a few key value pairs.- Using a for in loop, console.log the keys of the object.
//Using a for in loop, console.log the values of the object.


//Exercise 6 : Rudolf
 let text = "";
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

for (let x in details) {
    text += (x + " "+ details[x] + " ");
  
  }
  console.log(text);

//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”


//Exercise 7 : Secret Group

const namesNew = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
namesNew.sort();


let societyName = "";
for (let y=0; y<namesNew.length; y++) {
    societyName += namesNew[y][0];
  }

  console.log(societyName);

/*A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS”
*/