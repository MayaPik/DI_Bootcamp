// Inline Event Handler : Set In HTML With An Attribute Onevent

function inform(){
  alert("You clicked me")
}

//DOM Property: Set A Handler Using A DOM Property Onevent.

//document.getElementById('button') = function() {
//  alert('click');
// };


// Important  Event Handler
//onclick()	
// upon clicking (a link, or form boxes)

//onload()
//invoke JavaScript after the page or an image has finished loading.
//onmouseover()	
//invoke JavaScript if the mouse passes by some link

//onmouseout()	
//invoke JavaScript if the mouse goes pass some link

//onunload() 
//invoke JavaScript right after someone leaves this page.



function insertRow(){
  let table = document.getElementById('sampleTable').getElementsByTagName('tbody')[0];
  let row = table.insertRow()
  let newCell = row.insertCell();
  let newCell2 = row.insertCell();


  let newText1 = document.createTextNode('one')
  let newText2 = document.createTextNode('two')


  newCell.appendChild(newText1)
  newCell2.appendChild(newText2)
 


}
//AddEventListener(): Multiple Events On The Same Element
//The addEventListener event listens to DOM events that’s trigger and runs the callback function that you pass into it when the event happens.

//element.addEventListener(DOM events, callback function);

//The callback function has one argument which contains the details of the event that was triggered : the event object that we will see soon.

//The removeEventListener() method removes an event handler that has been attached with the addEventListener() method.

//Note: To remove event handlers, the function specified with the addEventListener() method must be an external function.


        let x = document.getElementById("btn")
        let y = document.getElementById("btn1")

        y.addEventListener("click", RespondClick);
        y.addEventListener("mouseover", RespondMouseOver);

        x.addEventListener("click", RespondClick); 
        x.addEventListener("mouseover", RespondMouseOver); 
        x.addEventListener("mouseout", RespondMouseOut); 

        function RespondClick() { 
            alert("Button Clicked")
        } 

        function RespondMouseOut() { 
            alert("My mouse is out of the btn")
        }     
        function RespondMouseOver(e) { 
            console.log("e", e) 
            // all the properties of the event object
            console.log("My mouse is over the btn named " + e.target.innerHTML)
            console.log("e.type: ", e.type)
            // e.type: mouseover
            console.log("e.target: ", e.target)
            // e.target:  <button id=​"btn1">​Hey Hey​</button>​
        } 






        let divB = document.getElementById("div");
        let styleB = document.getElementById("jsstyle");

        styleB.addEventListener("click", changeBgColor);
        divB.addEventListener("click", alertHello);

        styleB.addEventListener("mouseover", changeSize);
        styleB.addEventListener("mouseout", returnSize);


        function changeBgColor(e) {
          styleB.style.backgroundColor = "pink";
         // e.stopPropagation()

        }

        function changeSize() {
          styleB.style.height = "100px";
          styleB.style.width = "100px";

        }
        
        function returnSize() {
          styleB.style.height = "auto"
          styleB.style.width = "auto";

        }

        function alertHello() {
          alert("hello");
          console.log("div");

        }


//The Event Is First Captured And Handled By The Innermost Element And Then Propagated To Outer Elements.

//Add a click event listener to the div

//Add a few event listeners to the button. With at least one click event. The event listeners should change the style of the button

//Check how the propagation works and try to prevent it

let myForm = document.forms[0];

myForm.addEventListener("submit", getvalue)

function getvalue(e) {
let first = myForm.elements.fname
alert(first.value);
e.preventDefault()
let last = myForm.elements.lname
alert(last.value);
e.preventDefault()

}

////////////

//get the select form
let dropdown = document.getElementById('select1')


  console.log(dropdown[1].value) // "Pear"



  let newOp = document.createElement("option")
  newOp.value = "Work"
  newOp.text = "Work"
  dropdown.add(newOp);


  let FirstOp = document.createElement("option")
  FirstOp.value =  'Primary School'
  FirstOp.text =  'Primary School'
  dropdown.add(FirstOp,0);



  function choise() {
    let dropdown = document.getElementById('select1')
    let chosen = dropdown.options[dropdown.selectedIndex].text;
    alert(chosen)
  }




  let myFormNew = document.forms[1];

  function getvalue2() {

  let aging = myFormNew.elements.age;

  for (let input of aging) {
    alert( input.value + ': ' + input.checked );
  }
}

let form = document.forms.my;

form.addEventListener("submit", test)

function test(e){
  alert('submit ! ')
  e.preventDefault()
}