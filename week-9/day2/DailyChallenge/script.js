document.querySelector('form').addEventListener('submit', printOut)

function printOut(e) {

  e.preventDefault()
  formData = new FormData(e.target);
  let jsonData = JSON.stringify(Object.fromEntries(formData))
  document.body.innerHTML = jsonData

}
