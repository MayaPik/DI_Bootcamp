const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let firstName = urlParams.get('name');
let lastName = urlParams.get('lastName');

let answer= document.getElementById('output')
answer.innerHTML = `Your first name is ${firstName} and your last name is ${lastName}`
