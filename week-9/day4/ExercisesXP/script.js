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


//🌟 Exercise 5 : Dog Class
class Dog {
  constructor(name) {
    this.name = name;
  }
};
//Analyze the options below. Which constructor will successfully extend the Dog class?

  // 2
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};


//🌟 Exercise 6 : Challenges
//Evaluate these (ie True or False)

[2] === [2] //flase => [2] != [2]
//{} === {} //flase => {} !== {} 

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) //{ number: 4 }
console.log(object3.number) //{ number: 4 }
console.log(object4.number) //{ number: 5 }

//Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
  constructor(name,type,color) {
    this.name = name,
    this.type = type,
    this.color = color
  }
}

//Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().
//This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) 
//as well as the sound it makes.

class Mamal extends Animal {
  constructor(name, type,color) {
    super(name,type,color);
  }

  soundAnimal(sound) {
    return  `This is a ${this.type} named ${this.name} color ${this.color} and does ${sound}`
  
  }
}

//Create a farmerCow object that is an instance of the class Mamal. 
//The object accepts a name, a type and a color and calls the sound method that “moos” her information.
//For example: Moooo I'm a cow, named Lily and I'm brown and white

let farmerCow = new Mamal("Lily", "Cow", "White")

console.log(farmerCow.soundAnimal('Muuu'));
