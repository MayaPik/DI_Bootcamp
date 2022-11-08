//In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, 
//when the button is clicked on.
let animateBox = document.getElementById("animate");
let containerBox = document.getElementById("container");


function myMove() { //when pressed
let movingInterval = setInterval(move, 1);
let i = 0;
function move() {
  if (animateBox.style.left === '350px') {
    clearInterval(movingInterval)
  } else {
    animateBox.style.left = i + "px"
    i++
  }

}}