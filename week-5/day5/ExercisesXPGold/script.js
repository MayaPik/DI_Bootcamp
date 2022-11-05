//Display the value of the selected option.

let options = document.getElementById('genres');
console.log(options.value)

//Add an additional option to the select tag:

let newOne = document.createElement('option');
newOne.setAttribute("value", "classic")
newOne.innerText = "Classic"
options.appendChild(newOne);


//The newly added option should be selected by default.
options.value = 'classic'