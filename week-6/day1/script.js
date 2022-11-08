/*Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.
let banner = document.querySelector('div');
let button = document.querySelector('button');


banner.style.display = 'none';

function jumpBanner() {
  banner.style.display = 'flex';
  banner.style.justifyContent = 'center';
  banner.style.alignItems = 'center';

}


const timeLimit = setTimeout(jumpBanner, 5000)

function myStopFunction(){
clearTimeout(timeLimit)
}


let id = setInterval(buttonSize, 200);

let pos = 100;
function buttonSize() {
  if (pos == 120) {
    clearInterval(id)
  } else {
  pos++;
  button.style.width = pos + 'px'
  button.style.height = pos + 'px'

  }
}
let timer = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
  document.getElementById("demo").innerHTML = time;
}

  function stopTheTime() {
    clearInterval(timer);
  }


*/
let train = document.getElementById('train');

train.addEventListener('click', trainMoving);

function trainMoving() {
  let startDate = Date.now()

let time = setInterval(function() {
  let passed = Date.now() - startDate;
  console.log(passed)
  train.style.left = (passed / 5) + 'px';
  if (passed > 2000) {
    clearInterval(time);
  }
}, 20);
}


let banner = document.getElementsByClassName('banner')[0];


var countItDown = function() {
  var currentTime = parseFloat(banner.innerHTML)
  if (currentTime > 0) {
    banner.textContent = currentTime - 1 + " SECONDS";   
  } else {
    window.clearInterval(timer)

  }
}
var timer = window.setInterval(countItDown, 1000);