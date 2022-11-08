let type = document.getElementById('typing')

type.addEventListener('keydown', checkLetter) 

function checkLetter(event) {
  if (event.keyCode < 65 || event.keyCode > 90) {
    event.preventDefault();
 } 
}
