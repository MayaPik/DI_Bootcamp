//Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
let newForm = document.getElementById('MyForm');
newForm.addEventListener("submit", calVol);

function calVol(event) {
  let radiusElement = document.getElementById('radius').value;

  let volumeValue = (4/3) * Math.PI *  Math.pow(radiusElement, 3);
  let volumeLocation = document.getElementById('volume');
  volumeLocation.value = volumeValue;

  event.preventDefault();
}
