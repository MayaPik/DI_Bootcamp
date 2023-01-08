let input = document.getElementById('input')
let root = document.getElementById('root')
function searchUser() {
    root.innerHTML = ''
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
    data.filter(each => each.name.includes(input.value)).forEach(each => {
        buildaBox(each)
    });
    });
}

function buildaBox(obj) {
  let box = document.createElement('div')  
//  let img = document.createElement('img')
  let name = document.createElement('h1')
  name.innerHTML = obj.name
  let user = document.createElement('h2')
  user.innerHTML = obj.username
  let email = document.createElement('h3')
  email.innerHTML = obj.email
 // box.appendChild(img)
  box.appendChild(name)
  box.appendChild(user)
  box.appendChild(email)
  root.appendChild(box)
}