let form = document.getElementById('form');
let inputMail = document.createElement("input")
inputMail.setAttribute("type", "email")

form.appendChild(inputMail)

let button = document.createElement("input")
button.setAttribute("type", "submit")

button.value = "Check if the email is Valid"
form.appendChild(button)
let div = document.createElement('div')
div.setAttribute("id", "validation")
div.style.display = 'none';

document.body.appendChild(div);

form.addEventListener("submit", checkemail)

function checkemail(e) {

if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputMail.value)) {
    div.innerHTML = "Valid"
    div.style.display = 'block';

} else {
    div.innerText = "Not Valid"
    div.style.display = 'block';
}

e.preventDefault();
}


