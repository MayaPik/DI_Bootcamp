

//Using a DOM property, retrieve the h1 and console.log it.

let h1 = document.getElementsByTagName('h1')[0];

console.log(h1);

//Using DOM methods, remove the last paragraph in the <article> tag.



let allAr = document.getElementsByTagName('article')[0];
let lastChild = allAr.lastElementChild

allAr.removeChild(lastChild);

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2 = document.querySelectorAll('h2')[0];

h2.addEventListener("click", bgColor);

function bgColor(e) {
  e.target.style.backgroundColor = "red";

}

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3 = document.getElementsByTagName('h3')[0];

h3.addEventListener("click", display);

function display(e) {
  e.target.style.display = "none";
}

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let buttonn = document.createElement('button');
buttonn.style.backgroundColor= 'purple'
buttonn.style.height= '30px'
buttonn.style.color= 'white'
let text = "<b>Press here to turn everything to bold</b>"
buttonn.innerHTML = text;
allAr.appendChild(buttonn)

buttonn.addEventListener("click", bold);

function bold() {
  allAr.style.fontWeight = 'bold'

}

//BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)


h1.addEventListener("mouseover", random);

function random(e) {
  e.target.style.fontSize = Math.random()*100;
}


h1.addEventListener("mouseout", regular);

function regular(e) {
  e.target.style.fontSize = "x-large";
}
//BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

let allP = document.querySelectorAll('p');
let pLast = allP[allP.length-1]


pLast.addEventListener("mouseover", pass);

function pass(e) {
  e.target.classList.add("fadeOut");
}

pLast.addEventListener("mouseout", noPass);

function noPass(e) {
  e.target.classList.remove("fadeOut");
}