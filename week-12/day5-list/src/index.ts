let startInput = document.getElementById('start') as HTMLFormElement;
  let endInput = document.getElementById('end') as HTMLFormElement;
  let submitButton = document.getElementById('submit') as HTMLButtonElement;

  let compare = () => {
    let startValue = (new Date(startInput.value)).getTime();
    let endValue = (new Date(endInput.value)).getTime();

    if (endValue < startValue) {
      submitButton.disabled = true;
      submitButton.title = "Start date must be before end date!"
    } else {
      submitButton.disabled = false;
      submitButton.title= ''

    }
  };

  startInput.addEventListener('change', compare);
  endInput.addEventListener('change', compare);

class Item {
    name:string;
    description:string;
    start:Date
    end:Date
    isCompleted:boolean;
     constructor(name:string, description:string, start:Date, end:Date
     , isCompleted:boolean) {
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.isCompleted = isCompleted;
    }
  }
  
  let list: Item[] = getFromLocal();

  function getFromLocal(): Item[] {
    let itemsFromLocalStorage = JSON.parse(localStorage.getItem("listItem"));
    if (itemsFromLocalStorage) {
      itemsFromLocalStorage = itemsFromLocalStorage.map((item: Item) => {
        if (!(item.start instanceof Date)) {
          item.start = new Date(item.start);
        }
        return item;
      });
      itemsFromLocalStorage = itemsFromLocalStorage.sort((a:Item, b:Item) => a.start.getTime() - b.start.getTime());
    }
    return itemsFromLocalStorage ? itemsFromLocalStorage : [];
  }
  
  
  
  let form = document.getElementById('form') as HTMLFormElement; 
  
  form.addEventListener('submit', saveData)
  
  function saveData(event: { preventDefault: any; }) {
    event.preventDefault;
    let name = (document.getElementById('name') as HTMLFormElement).value ;
    let description = (document.getElementById('description') as HTMLFormElement).value;
    const startValue = startInput.value;
      var tommrowDate = new Date();
      tommrowDate.setDate(tommrowDate.getDate() + 1);
    const endValue = endInput.value;
    let start = startValue ? new Date(startValue) : new Date();
    let end = endValue ? new Date(endValue) : tommrowDate;
    //let start = new Date((document.getElementById('start') as HTMLFormElement).value);
    //let end = new Date((document.getElementById('end') as HTMLFormElement).value);
    list.push(new Item(name, description, start, end, false));
    localStorage.setItem('listItem', JSON.stringify(list))
    createList(list)
  }


  let clearAll = document.getElementById('delete') as HTMLFormElement; 
  clearAll.addEventListener('click', clearData)

  let root = document.getElementById('root') as HTMLCanvasElement;

  function clearData() {
    var dialog = confirm("Delete all?");
          if (dialog) {
            root.innerHTML = ""
            list = []
            localStorage.clear()
          }
          else {
              console.log('Nothing was deleted')
          }
}

  createList(list)

  function createList(arr:[]) {
    let root = document.getElementById('root') as HTMLCanvasElement;
    list.sort((a: Item, b: Item) => {
      if (a.start instanceof Date && b.start instanceof Date) {
        return a.start.getTime() - b.start.getTime();
      }
      return 0;  // Return a default value if the start property is not a Date object
    });
    
      arr.forEach((one:Item) => {
        let box = document.createElement('div')
        let name = document.createElement('h1')
        name.innerText = one.name
        name.style.width = '200px'
        name.style.margin = '30px'
        let description = document.createElement('h2')
        description.classList.add('description')
        description.style.width = '400px'
        description.style.margin = '30px'
        description.innerHTML = one.description;
        let startDate = document.createElement('h3')
        startDate.innerText = "Start Date: " + new Date(one.start).toDateString()
        startDate.style.width = '300px'
        startDate.style.margin = '30px'
        let difference_In_Time = new Date(one.end).getTime() - new Date().getTime()
        let difference_In_Days = Math.round(difference_In_Time / (1000 * 3600 * 24));
        let daysuntil = document.createElement('h3')
        daysuntil.innerText = "Days to finish the task: " + difference_In_Days
        daysuntil.style.width = '200px'
        daysuntil.style.margin = '30px'        
        if (difference_In_Days < 0) {
        box.style.backgroundColor = 'red'

        }
        box.classList.add('box')
        box.addEventListener('click', openDescription)

        function openDescription() {
          if (description.style.display === 'none') {
            description.style.display = 'block';
          } else {
            description.style.display = 'none';
          }
          }
    
        let isDone = document.createElement('input');
        isDone.type = 'checkbox';
        isDone.style.width = '40px'
        isDone.style.margin = '30px'
       
        let deleteTask = document.createElement('button');
        deleteTask.innerHTML = 'X'
        deleteTask.addEventListener('click', deleteTheTask)
        deleteTask.style.width = '30px'
        deleteTask.style.margin = '30px'

        function deleteTheTask() {
          var dialog = confirm("Delete " + one.name + "?");
          if (dialog) {
            let index = list.indexOf(one)
            if (index > -1) {
              list.splice(index, 1);
              localStorage.setItem('listItem', JSON.stringify(list))
            }
            root.removeChild(box)

          }
          else {
              console.log('Nothing was deleted')
          }
        
        }


        let editTask = document.createElement('button');
        editTask.innerHTML = 'Edit'
        editTask.addEventListener('click', editTheTask)
        editTask.style.width = '70px'
        editTask.style.margin = '30px'

        function editTheTask(event: { stopPropagation: () => void; }) {
          event.stopPropagation();
          let i = list.indexOf(one)
          description.style.display === 'none'
          box.style.opacity = '0.5';
          (document.getElementById('name') as HTMLFormElement).value = one.name;
          (document.getElementById('description') as HTMLFormElement).value = one.description;
          (document.getElementById('start') as HTMLFormElement).value = one.start.toISOString().slice('T',10);
          (document.getElementById('end') as HTMLFormElement).value = one.start.toISOString().slice('T',10);
          let btn = document.getElementById('submit') as HTMLFormElement;
          btn.textContent = 'Save';
          btn.setAttribute('onclick', 'save(' + i + ')');
          }

        isDone.addEventListener('change', () => {
          description.style.display = 'none';
          if (isDone.checked) {
            one.isCompleted = true;
            box.style.backgroundColor = 'green'
          } else {
            one.isCompleted = false;
            box.style.backgroundColor = 'red'

          }
        });
        box.appendChild(isDone);
        box.appendChild(name);
        box.appendChild(description);
        box.appendChild(startDate);
        box.appendChild(daysuntil);
        box.appendChild(deleteTask);
        box.appendChild(editTask);
        root.appendChild(box);


      });
  }
  
  
  function save(index:number) {
    if (index > -1) {
   list[index].name = (document.getElementById('name') as HTMLFormElement).value;
   list[index].description = (document.getElementById('description') as HTMLFormElement).value
   list[index].start = (document.getElementById('start') as HTMLFormElement).value
   list[index].end = (document.getElementById('end') as HTMLFormElement).value
   localStorage.setItem('listItem', JSON.stringify(list))
 }
         }        