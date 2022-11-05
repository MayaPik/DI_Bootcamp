//Work With Forms

//Retrieve the form and console.log it.

let form = document.forms[0];
console.log(form);

//Retrieve the inputs by their id and console.log them.

let firstName = document.getElementById('fname');
console.log(firstName.value);

let lastName = document.getElementById('lname');
console.log(lastName.value);

//Retrieve the inputs by their name attribute and console.log them.

firstName = form.elements.fname;
console.log(firstName.value);

lastName = form.elements.lname;
console.log(lastName.value);

/*
When the user submits the form (ie. submit event listener)
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
The output should be :

<ul class="usersAnswer">
    <li>first name of the user</li>
    <li>last name of the user</li>
</ul>*/

let submitB = document.getElementsByTagName('form')[0];

submitB.addEventListener("submit", values);

function values(event) {

firstName = form.elements.fname;
lastName = form.elements.lname;

  let liAnswer = document.getElementsByClassName('usersAnswer')[0];

  let fName = document.createElement('li');
  fName.innerText = firstName.value;
  let lName = document.createElement('li')
  lName.textContent = lastName.value;

  liAnswer.appendChild(fName)
  liAnswer.appendChild(lName)

  event.preventDefault()

}