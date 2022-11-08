// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.

let box = document.getElementById('box')
let target = document.getElementById('target')

box.setAttribute('draggable', 'true');

box.addEventListener('dragstart', dragStart);
function dragStart(event) {
    //set the data to be dragged
    event.dataTransfer.setData("text", event.target.id);
}

target.addEventListener('drop', dragDrop);

function dragDrop(event) {

event.preventDefault();
  
let data = event.dataTransfer.getData("text");
  
let box = document.getElementById(data)
event.target.appendChild(box);
}




target.addEventListener('dragover', allowDrop);
function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
  }
  
//style the dash
target.addEventListener('dragenter', allowEnter)
function allowEnter(event) {
    event.target.classList.add('over');
  }

//remove dashes
target.addEventListener('dragleave', allowLeave);
function allowLeave(event) {
    event.target.classList.remove('over');
  }