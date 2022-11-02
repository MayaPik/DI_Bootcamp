//Add a “light blue” background color and some padding to the <div>.
let lightBlue = document.getElementsByTagName("div")[0];

lightBlue.style.backgroundColor = "lightBlue";


//Do not display the <li> that contains the text node “John”.
let theList = document.getElementsByTagName("li");

for (let m=0; m< theList.length ; m++) { 
    if (document.getElementsByTagName("li")[m].innerText == "John") {
      let john = document.getElementsByTagName("li")[m];
      john.style.display = "none";
    }
    if (document.getElementsByTagName("li")[m].innerText == "Pete") {
      let pete = document.getElementsByTagName("li")[m];
      pete.style.border = "1px solid black";
    }
  }
  
  
  //Change the font size of the whole body.
  
  let everything = document.getElementsByTagName("*")[0];
  
  everything.style.fontSize = "32px";
  
  
  //Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
  
    let x = document.getElementsByTagName("li")[0].innerText;
    let y = document.getElementsByTagName("li")[1].innerText;
  if (lightBlue.style.backgroundColor = "lightBlue") {
    alert("hello " + x + " and " +y);
  }