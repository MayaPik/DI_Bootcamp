const find = document.getElementById('find')
const space = document.getElementById('space')
let idNum = 0;
find.addEventListener('click', genarateOne)

async function genarateOne() {
  let name = document.getElementById('name')
  let id = document.getElementById('id')
  let height = document.getElementById('height')
  let weight = document.getElementById('weight')
  let type = document.getElementById('type')

  name.innerHTML = ""
  id.innerHTML = ""
  height.innerHTML = `<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>`
  weight.innerHTML = "loading..."
  type.innerHTML = ""

  try {
  var num = Math.round(Math.random() * 807)
  idNum = num
  let promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
  let person = await promise.json()
  console.log(person)
  name.innerHTML = person.name;
  id.innerHTML = "Pokemon n° " + person.id;
  height.innerHTML = "Height: " + person.height + "CM";
  weight.innerHTML = "Weight: " + person.weight + " KG";
  type.innerHTML = "Type: " + person.types[0].type.name;
  document.body.style.backgroundImage=`url(${person.sprites.front_default})`; 
  }
  catch(err) {
    console.log(err)
    space.innerHTML = "Oh No! This POKEMON isn't available"

  }
  

}



let previous = document.getElementById("previous");
previous.addEventListener('click', previousPoke)

async function previousPoke() {
  let name = document.getElementById('name')
  let id = document.getElementById('id')
  let height = document.getElementById('height')
  let weight = document.getElementById('weight')
  let type = document.getElementById('type')

  try {
  idNum = idNum-1
  let promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${idNum}/`);
  let person = await promise.json()
  console.log(person)
  name.innerHTML = person.name;
  id.innerHTML = "Pokemon n° " + person.id;
  height.innerHTML = "Height: " + person.height + "CM";
  weight.innerHTML = "Weight: " + person.weight + " KG";
  type.innerHTML = "Type: " + person.types[0].type.name;
  document.body.style.backgroundImage=`url(${person.sprites.front_default})`; 
  }
  catch(err) {
    console.log(err)
    space.innerHTML = "Oh No! This POKEMON isn't available"

  }
  

}
let next = document.getElementById("next");
next.addEventListener('click', nextPoke)

async function nextPoke() {
  let name = document.getElementById('name')
  let id = document.getElementById('id')
  let height = document.getElementById('height')
  let weight = document.getElementById('weight')
  let type = document.getElementById('type')

  try {
  idNum = idNum+1
  let promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${idNum}/`);
  let person = await promise.json()
  console.log(person)
  name.innerHTML = person.name;
  id.innerHTML = "Pokemon n° " + person.id;
  height.innerHTML = "Height: " + person.height + "CM";
  weight.innerHTML = "Weight: " + person.weight + " KG";
  type.innerHTML = "Type: " + person.types[0].type.name;
  document.body.style.backgroundImage=`url(${person.sprites.front_default})`; 
  }
  catch(err) {
    console.log(err)
    space.innerHTML = "Oh No! This POKEMON isn't available"

  }
  

}