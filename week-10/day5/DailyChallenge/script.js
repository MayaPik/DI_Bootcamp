let values = []

async function getValues() {
let promise = await fetch ("https://v6.exchangerate-api.com/v6/c2598086548ce6b5454f865d/codes")
let supported_codes = await promise.json()
values = supported_codes.supported_codes
let from = document.getElementById("from");
let to = document.getElementById("to");

values.forEach(value => {
let option = document.createElement("option")
option.text = value[0] + " " + value[1]
option.value = value[0]
from.add(option)

})

values.forEach(value => {
  let option = document.createElement("option")
  option.text = value[0] + " " + value[1]
  option.value = value[0]
  to.add(option)
  
  })
}

getValues()

let switchC = document.getElementById("switch");
    switchC.addEventListener('click', switching)

  function switching() {
    console.log('switch')
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    let toO = to.options[to.selectedIndex]
    let fromO = from.options[from.selectedIndex]

    from.options[from.selectedIndex] = toO
    to.options[to.selectedIndex] = fromO

  }

let change = document.getElementById('change')
change.addEventListener('submit', converting)

async function converting(e) {
  e.preventDefault()
  let from = document.getElementById("from");
  let to = document.getElementById("to");
  let amount = document.getElementById("amount");

    
  let promise = await fetch(`https://v6.exchangerate-api.com/v6/c2598086548ce6b5454f865d/pair/${from.options[from.selectedIndex].value}/${to.options[to.selectedIndex].value}/${amount.value}`)
  let data = await promise.json()

  let converted = document.getElementById("converted");

  converted.innerHTML = data.conversion_result + " " + to.options[to.selectedIndex].value
   
}