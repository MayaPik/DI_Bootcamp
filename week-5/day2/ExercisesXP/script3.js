//In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

let social = document.getElementById('navBar');

social.setAttribute('id', "socialNetworkNavigation");

//We are going to add a new <li> to the <ul>.
//First, create a new <li> tag (use the createElement method).


let newDiv = document.createElement('li');


//Create a new text node with “Logout” as its specified text.

let textNode = document.createTextNode("Logout");

//Append the text node to the newly created list node (<li>).

newDiv.appendChild(textNode);

//Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

document.getElementsByTagName('ul')[0].appendChild(newDiv);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

let elements = document.getElementsByTagName('ul')[0];
elements.setAttribute('id', "elementsID");

console.log(document.getElementById('elementsID').firstElementChild.textContent);
console.log(document.getElementById('elementsID').lastElementChild.textContent);