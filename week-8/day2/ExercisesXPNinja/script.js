const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];


//Use a loop to find the sum of all the dog’s ages in dog years.
let sumDog = 0;

data.forEach(animal => {
  if (animal.type == 'dog') {
    sumDog += animal.age*7
  };
}) 
console.log(sumDog)

//Using the reduce() method, find the sum of all the dog’s ages in dog years.

const sumDog2 = data.reduce((acc, cur) => {
  if (cur.type == 'dog') {
    let doubled = cur.age * 7;
    return Number(acc + doubled);
  }
  return acc
},[]);

console.log(sumDog2)

//Clean up this email to have no whitespaces. Do it in a single line (return a new string).

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '

console.log(userEmail3.replace(" ", ""))

//Exercise 3 : Employees #3

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

//Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.

let newUsers = []
newUsers.push(users.map(({ firstName, lastName }, index) => ({[firstName + " " + lastName] : users[index].role})));

console.log(newUsers)

//Example: { 'Bradley Bouley': 'Full Stack Resident' }

//Exercise 4 : Array To Object

const letters = ['x', 'y', 'z', 'z'];

//Use a for loop to get this output { x: 1, y: 1, z: 2 };

const obj = {}

letters.forEach((elem) => {
  obj[elem] = (obj[elem] || 0) + 1;
})

console.log(obj)

//Use the reduce() method to get this output { x: 1, y: 1, z: 2 };


const count = letters.reduce((acc, val) => {
  return {...acc, [val]: (acc[val] || 0) + 1};
}, {});

console.log(count)
