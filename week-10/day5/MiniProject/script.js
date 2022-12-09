const find = document.getElementById('find')
const space = document.getElementById('space')

let name = document.getElementById('name')
let height = document.getElementById('height')
let gender = document.getElementById('gender')
let birthyear = document.getElementById('birthyear')
let homeWorld = document.getElementById('homeWorld')

find.addEventListener('click', genarateOne)

async function genarateOne() {
  let name = document.getElementById('name')
  let height = document.getElementById('height')
  let gender = document.getElementById('gender')
  let birthyear = document.getElementById('birthYear')
  let homeWorld = document.getElementById('homeWorld')
  name.innerHTML = ""
  height.innerHTML = ""
  gender.innerHTML = `<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>`
  birthyear.innerHTML = "loading..."
  homeWorld.innerHTML = ""

  try {
  let num = Math.round(Math.random() * 83)
  let promise = await fetch(`https://www.swapi.tech/api/people/${num}`)
  let data = await promise.json()
  const person = data.result.properties
  console.log(person)

  name.innerHTML = person.name
    height.innerHTML = "Height: " + person.height
    gender.innerHTML = "Gender: " + person.gender
    birthyear.innerHTML = "Birth Year: " + person.birth_year
      let planet = await fetch(person.homeworld)
      let planetData = await planet.json()
      homeWorld.innerHTML = "Home World: " + planetData.result.properties.name
  }
  catch(err) {
    console.log(err)
    gender.innerHTML = "Oh No! That person isn't available"

  }

}

