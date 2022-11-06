let tasks = [];

let i = 0;
let form = document.getElementById('todo');
let add = document.getElementById('newTask');
let list = document.getElementsByClassName('listTasks')[0];

form.addEventListener('submit', addTask);


function addTask(event) {
  if (add.value !== "") {
    let done = false
    let taskId = i
    let text = add.value;
    tasks.push({
      taskId,
      text,
      done
    });

    let x = document.createElement('button')
    x.innerHTML = 'delete';
    x.addEventListener('click', deleteTask);

    let xFont = document.createElement('i')
    xFont.setAttribute('class', 'fa-solid fa-x');
    x.appendChild(xFont)

    let newOne = document.createElement('div')
    newOne.appendChild(x)
    newOne.dataset.taskId = i;
    x.style.marginRight = '20px'

    list.appendChild(newOne);
    newOne.innerHTML += add.value;

    let checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox');
    checkBox.dataset.taskId = i;
    newOne.appendChild(checkBox);
    newOne.style.display = 'flex'
    //newOne.style.justifyContent = 'space-around'
    i++;


  }
  event.preventDefault();

}

list.addEventListener('click', deleteTask);

//Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

function deleteTask(event) {
  const div = event.target.parentElement;
  let dataset = div.dataset;
  const i = tasks.indexOf(t => t.taskId === dataset.taskId)
  tasks = tasks.splice(i, 1);
  div.remove();
}
