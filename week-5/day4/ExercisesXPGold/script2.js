//Add a click event listener to the <input type="button">.
// When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

let button = document.getElementsByTagName('input')[0];
button.addEventListener("click", removeColor);

function removeColor(element) {
let options = document.getElementById('colorSelect');

let number = options.selectedIndex;

options.removeChild(options[number]);
}