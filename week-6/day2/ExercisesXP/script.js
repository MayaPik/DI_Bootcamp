// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

setTimeout(alertHello, 2000)

function alertHello() {
  alert("Hello World");
}

// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


setTimeout(addHello, 2000)

function addHello() {
  let div = document.getElementById('container')
  let newP = document.createElement('p');
  newP.innerText = "Hello World";
  div.appendChild(newP)

}

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

let typing = setInterval(newFunction, 2000);
let count = 0;
function newFunction() {
  let div = document.getElementById('container')
  let newP = document.createElement('p');
  newP.innerText = "Hello World";
  div.appendChild(newP)
  count++
  let button = document.getElementById('clear');
  button.addEventListener('click', function() {
    clearInterval(typing);
  })
  if (count === 5 ) {
    clearInterval(typing);
  }
}


