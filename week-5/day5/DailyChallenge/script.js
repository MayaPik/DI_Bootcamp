const tasks = [
];

let i = 0;
let form = document.getElementById('todo');
let add = document.getElementById('newTask');
let list = document.getElementsByClassName('listTasks')[0];

form.addEventListener('submit', addTask);


function addTask(event) {
    if (add.value !== "") {
        let done = false
        let task_id = i
        let text =add.value;
       tasks.push({task_id, text, done});

       let x = document.createElement('button')
       x.addEventListener('click', deleteTask);

        let xFont = document.createElement('i')
        xFont.setAttribute('class', 'fa-solid fa-x');
        x.appendChild(xFont)

       let newOne = document.createElement('div')
       newOne.appendChild(x)
       x.style.marginRight = '20px'

       list.appendChild(newOne);
       newOne.innerHTML += add.value;

       let checkBox = document.createElement('input')
       checkBox.setAttribute('type', 'checkbox');
       checkBox.setAttribute('data-task-id', i)
       newOne.appendChild(checkBox);

        newOne.setAttribute('class', 'eachLine')
        i++;


    }
    event.preventDefault();
    
}

list.addEventListener('click', event => {
    let number = event.target.dataset.taskId;
    if (tasks[number].task_id == number) {
        tasks[number].done = !tasks[number].done ;
        list.getElementsByTagName('div')[number].classList.toggle('todo-complete');
    } 
   
});

//Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

function deleteTask(event) {
    console.log(event)
    }