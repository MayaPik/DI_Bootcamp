const tasks = [
];

let i = 0;
let form = document.getElementById('todo');
let add = document.getElementById('newTask');
let list = document.getElementsByClassName('listTasks')[0];

form.addEventListener('submit', addTask);


function addTask(event) {
    event.preventDefault();

    if (add.value !== "") {
        let done = false
        let task_id = i
        let text =add.value;
       tasks.push({task_id, text, done});

       let x = document.createElement('input')
       x.setAttribute('type', 'button')
       x.setAttribute('data-task-id', i)

        let xFont = document.createElement('i')
        xFont.setAttribute('class', 'fa-solid fa-x');
        x.appendChild(xFont)

       let newOne = document.createElement('div')
       newOne.setAttribute('data-task-id', i)

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
    
}

    list.addEventListener('click', event => {
        let number = event.target.dataset.taskId;
        if (event.target.type === 'checkbox') {
            if (tasks[number].task_id == number) {
                tasks[number].done = !tasks[number].done ;
                list.getElementsByTagName('div')[number].classList.toggle('todo-complete');
            }
        } else if(event.target.type === 'button') {
            deleteTask(number);
        }
    });

//Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

function deleteTask(number) {
    let taskToDelete = document.querySelector(`div[data-task-id="${number}"]`);
    taskToDelete.remove();
    for (let j=0; j< tasks.length; j++) {
    if (tasks[j].task_id == number) {
    tasks.splice(j,1);
    }
}
    }
