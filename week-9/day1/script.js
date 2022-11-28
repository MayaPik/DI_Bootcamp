let select = document.getElementById('select')
console.log(select)

let option = new Option("Text", "value");
select.appendChild(option);

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let jsonStudent = JSON.stringify(student, null,1);

console.log(jsonStudent);
//{"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}