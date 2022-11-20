const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//array of all the strings - ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

const country = "USA";
console.log([...country]);
// ['U','S','A']

let newArray = [...[,,]];
console.log(newArray);
//[undefined, undefined]

//🌟 Exercise 2 : Employees

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(item => "Hello " + item.firstName)
console.log(welcomeStudents)

const fullStackers = users.filter(item => item.role == "Full Stack Resident")
console.log(fullStackers)

//only the lastName of the Full Stack Residents.
const lastNames = fullStackers.map(item => item.lastName)
console.log(lastNames)

//Exercise 3 : Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const story = epic.reduce((one, two) => {
  return one + " " + two;
})

console.log(story)

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

//Using the filter() method, create a new array, containing the students that passed the course.


//Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

let stringOfCongrats = "";
const passed = students.filter(student => student.isPassed == true).forEach(student => {
  stringOfCongrats += `congrats ${student.name} you passed the course in ${student.course}, `
});

console.log(stringOfCongrats)