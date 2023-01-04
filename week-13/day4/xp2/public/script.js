fetch('http://localhost:4000/answer')
  .then(response => response.json())
  .then(data => {
    console.log(data);
const div = document.getElementById('div');
div.innerHTML = `Firstname: ${data.firstname}<br>Lastname: ${data.lastname}`
});

alert('hello')