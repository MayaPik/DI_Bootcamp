//Retrieve the div and console.log it

let one = document.getElementsByTagName('div')[0].textContent;
console.log(one);


//Change the name “Pete” to “Richard”.

document.getElementsByTagName('li')[1].textContent = "Richard";

//Change each first name of the two <ul>'s to your name.
let firstOnes = document.querySelectorAll('ul > li:first-child');

for (let elem of firstOnes)
 {
  elem.textContent = "Maya";
}


//Delete the <li> that contains the text node “Sarah”.

let theList = document.getElementsByTagName("li");

for (let i = 0; i < theList.length; i++) {
  if (theList[i].textContent == "Sarah") {
    theList[i].remove();
    }
  }

//Add a class called student_list to both of the <ul>'s.

let universityNew = document.getElementsByClassName("list")[0];
universityNew.classList.add("student_list");

let newDiv = document.getElementsByClassName("list")[1];
newDiv.classList.add("student_list");
 
