//Create an array which value is the planets of the solar system.
let planet = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let moons = [0,0, 1,2, 80, 83, 27,14]


//For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let section = document.getElementsByClassName("listPlanets")[0];

planet.forEach(element => {
  let elementFull = document.createElement('div');
  elementFull.className = "planet";

  let text = document.createTextNode(element);
  elementFull.appendChild(text);
  //Finally append each div to the <section> in the HTML (presented below).
  section.appendChild(elementFull);
});

//Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
let first = document.getElementsByTagName('div');
let color = '';
for (let m=0; m<first.length; m++){

switch (m) {
  case 0:
  color = 'pink';
  break;
  case 1:
  color = 'red';
  break;
  case 2:
  color = 'green';
  break;
  case 3:
  color = 'yellow';
  break;
  case 4:
  color = 'white';
  break;
  case 5:
  color = 'lightGreen';
  break;
  case 6:
  color = 'lightBlue';
  break;
  case 7:
  color = 'orange';
  break;
}
first[m].style.background = color;

}

/*
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?

*/

let arrayOfObject = planet.map(function (value, i){
  return [value, moons[i]]
});

console.log(arrayOfObject);


for (let j=0; j< arrayOfObject.length; j++){
  let number = (arrayOfObject[j][1]);
  let star = document.getElementsByClassName('planet')[j]
  for (let i=0; i <number; i++) {
    let moonFull = document.createElement('div');
    moonFull.className = "moon";
    moonFull.style.left = Math.random()*70 + 'px';
    moonFull.style.bottom = Math.random()*50 + 'px';

    star.appendChild(moonFull);
  }
}
