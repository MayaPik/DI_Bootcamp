let button = document.getElementById('add-box')

button.addEventListener('click', addBox)

function addBox() {
  let newBox = document.createElement('div');
  newBox.classList.add('box')
  let backgroundColor = Math.floor(Math.random()*16777215).toString(16);
  newBox.style.backgroundColor = "#" + backgroundColor
  console.log(backgroundColor);
  document.body.appendChild(newBox)
}