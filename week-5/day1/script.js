
//how to find the div DOM :
document.body.firstElementChild 
document.querySelector('div')
document.getElementsByTagName('div')[0]

//ul
document.body.children[1]
document.querySelector('ul')

//li- "pete"
document.body.children[1].lastElementChild​ ;
document.querySelectorAll('li')[1];


//Returns the element with the specific id
element.getElementById() 

//Returns an array of all the items with the same class name. //elements! tell which one [index]
element.getElementsByClassName()

//Returns an array of all the items with the same tag name. //elements! tell which one [index]
element.getElementsByTagName()

//Returns the first Element within the document that matches the specified selector
element.querySelector()

//Returns all elements (a list) matching the given CSS selector.
element.querySelectorAll()


//getElementById: To access elements and attributes whose id is set.
//innerHTML: To access the content of an element.


//example
let text = document.getElementById("one").innerHTML;

//tell which one [index] The special string “*”represents all elements.
document.getElementsByTagName('div')[0].innerText  //Users:
document.getElementsByTagName('*')["0"].innerText  //'Users:\nJohn\nPete'


let newDiv = document.createElement('div');

let newTextNode = document.createTextNode('Here I am');


//Accessing / Changing The HTML Content Of An Element: InnerHTML
document.getElementsByTagName("div")[0].innerHTML = "<h1>Hello World!</h1>"

document.body.appendChild(newDiv);

//delete
let childElem = document.getElementById("hint");
parentElem.removeChild(childElem);

document.getElementsByTagName('div')[0].style.color = "green";

//1
let oneDiv = document.getElementById('container').innerText;
let twoDiV = document.getElementsByTagName('div')[0].innerText;

//2

let elements = document.querySelectorAll('ul > li');
let list = "";
for (let elem of elements) {
        console.log(elem.innerHTML);
      }

for (let l=0; l<2; l++) {
    for (let m=0; m<2; m++) {

console.log(document.getElementsByClassName('list')[l].getElementsByTagName('li')[m].textContent)
    }
}

//3

for (let l=0; l<2; l++) {
    console.log(document.getElementsByClassName('list')[l].getElementsByTagName('li')[0].innerText)
}


let elements2 = document.querySelectorAll('ul > li:first-child');
for (let elem of elements2) {
        console.log(elem.innerHTML);
      }


jesus.setAttribute('style', "color:blue; background-Color:pink;");  

document.getElementsByTagName('img')[0].src = "test.jpeg";


//


let newInput= document.getElementById("dI");
 
document.getElementsByClassName("name")[0].textContent = newInput.getAttribute('href');
document.getElementsByClassName("name")[1].textContent = newInput.getAttribute('hreflang');
document.getElementsByClassName("name")[2].textContent = newInput.getAttribute('rel');
document.getElementsByClassName("name")[3].textContent = newInput.getAttribute('target');
document.getElementsByClassName("name")[3].textContent = newInput.getAttribute('type');

newInput.style.color = "red";
//

let newInput= document.getElementById("elem");
 
 newInput.classList.remove("foo");
 
 document.getElementsByClassName("name")[0].textContent = newInput.getAttribute('class');
 
  newInput.classList.add("fofa", "adda");
  
  document.getElementsByClassName("name")[1].textContent = newInput.getAttribute('class');


  newInput.classList.replace("fofa", "mamo");
    document.getElementsByClassName("name")[2].textContent = newInput.getAttribute('class');


  document.getElementsByClassName("name")[3].textContent = newInput.classList.contains("mamo");



//


let pink = document.getElementById('text');


pink.setAttribute('style', "color:blue; background-Color:pink; font-size:42px; font-style:italic");  
