//🌟 Exercise 1 : Location

const person = {
  name: 'John Doe',
  age: 25,
  location: {
      country: 'Canada',
      city: 'Vancouver',
      coordinates: [49.2827, -123.1207]
  }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//🌟 Exercise 2: Display Student Info

function displayStudentInfo(objUser){
  const {first, last} = objUser
  return `your full name is ${first} ${last}`
  //destructuring
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});


//Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

//🌟 Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 }

//Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//FYI : The number is their ID number.
function usersToArray(obj) {
  return Object.entries(obj)
}

usersToArray(users)
//Modify the outcome of part 1, by multipling the user’s ID by 2.
//Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

function usersToDoubleArray(obj) {

  return Object.fromEntries(
    Object.entries(obj).map(([ key, val ]) => [ key, val * 2 ])
)}
usersToDoubleArray(users)

//Exercise 4 : Person Class
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
// object - person {name: John}
