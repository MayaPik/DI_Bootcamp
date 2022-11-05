let shoppingList=[];
let div = document.getElementById('root')
//Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.

let form = document.createElement('form');
let textinput = document.createElement('input')
let button = document.createElement('button');

button.innerText = "Add Item"
button.classList.add("AddItem");


form.appendChild(textinput);
form.appendChild(button);
div.appendChild(form);

//Type what you need to buy in the text input field,
//then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).

button.addEventListener("click", addItem);

function addItem(e) {
    shoppingList.push(textinput.value);
    textinput.value ="";

    e.preventDefault();
}


//Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
let clear = document.createElement('button');

clear.innerText = "Clear All"
clear.classList.add("ClearAll");

form.appendChild(clear);

clear.addEventListener("click", clearAll);
//Create a function named clearAll() that should clear out all the items in the shopping list.
function clearAll() {
    shoppingList=[];
 }

