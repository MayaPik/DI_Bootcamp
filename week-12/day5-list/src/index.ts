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
    let tommrowDate = new Date();
    tommrowDate.setDate(tommrowDate.getDate() + 1);
    const endValue = endInput.value;
    let start = startValue ? new Date(startValue) : new Date();
    let end = endValue ? new Date(endValue) : tommrowDate;
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
            window.location.reload()
          }
          else {
              console.log('Nothing was deleted')
          }
}

  createList(list);

  function createList(arr:[]) {
    list.sort((a: Item, b: Item) => {
      if (a.start instanceof Date && b.start instanceof Date) {
        return a.start.getTime() - b.start.getTime();
      }
      return 0;  // Return a default value if the start property is not a Date object
    });
    
      arr.forEach((one:Item) => {
        let box = document.createElement('div')
        let name = document.createElement('h2')
        name.innerText = one.name
        name.style.width = '10vw'
        name.style.margin = '30px'
        let description = document.createElement('h2')
        description.classList.add('description')
        description.style.width = '10vw'
        description.style.margin = '30px'
        description.innerHTML = one.description;
        let startDate = document.createElement('h3')
        startDate.innerText = "Start: " + new Date(one.start).toDateString()
        startDate.style.width = '10vw'
        startDate.style.margin = '30px'
        let difference_In_Time = new Date(one.end).getTime() - new Date().getTime()
        let difference_In_Days = Math.round(difference_In_Time / (1000 * 3600 * 24));
        let daysuntil = document.createElement('h3')
        daysuntil.innerText = "Days to finish: " + difference_In_Days
        daysuntil.style.width = '10vw'
        daysuntil.style.margin = '30px'        
        if (difference_In_Days < 0) {
        box.style.backgroundColor = 'red'
        }
        
        
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
        isDone.style.width = '5vw'
        isDone.style.margin = '30px'

        if (one.isCompleted) {
          box.style.backgroundColor = 'green'
          isDone.checked = true;
        }

                            isDone.addEventListener('change', () => {
                              description.style.display = 'none';
                              if (isDone.checked) {
                                one.isCompleted = true;
                                box.style.backgroundColor = 'green'
                                window.location.reload()
                              } else {
                                one.isCompleted = false;
                                window.location.reload()

                                if (difference_In_Days < 0) {
                                  box.style.backgroundColor = 'red'
                                  }
                                  else {
                                box.style.backgroundColor = 'moccasin'
                                  }

                              }
                              localStorage.setItem('listItem', JSON.stringify(list))
                         
                            });                    
                          
                            let deleteTask = document.createElement('button');
                            deleteTask.id = String(list.indexOf(one));
                            deleteTask.innerHTML = 'X'
                            deleteTask.addEventListener('click', deleteTheTask)
                            deleteTask.style.width = '4vw'
                            deleteTask.style.height = '4vh'
                            deleteTask.style.margin = '40px'

                            let editTask = document.createElement('button');
                            editTask.id = String(list.indexOf(one));
                            editTask.innerHTML = 'Edit'
                            editTask.addEventListener('click', editTheTask)
                            editTask.style.width = '6vw'
                            editTask.style.height = '4vh'
                            editTask.style.margin = '40px'

        box.appendChild(isDone);
        box.appendChild(name);
        box.appendChild(description);
        box.appendChild(startDate);
        box.appendChild(daysuntil);
        box.appendChild(deleteTask);
        box.appendChild(editTask);
        root.appendChild(box);
        box.classList.add('box')

      });
  }

  function deleteTheTask(event: { target: { id: number; }; }) {
    let i = event.target.id;
    var dialog = confirm("Delete " + list[i].name + "?");
    if (dialog) {
      if (i > -1) {
        list.splice(i, 1);
        localStorage.setItem('listItem', JSON.stringify(list))
      }
      window.location.reload();
    }
    else {
        console.log('Nothing was deleted')
    }
  
  }
  
  function editTheTask(event: {
    target: { id: number; };
}) {
    let i = event.target.id;
    //description.style.display === 'none'
    //box.style.opacity = '0.5';
    (document.getElementById('name') as HTMLFormElement).value = list[i].name;
    (document.getElementById('description') as HTMLFormElement).value = list[i].description;
   (document.getElementById('start') as HTMLFormElement).value = list[i].start.toISOString().slice(Number('T'),10);
    (document.getElementById('end') as HTMLFormElement).value = list[i].end.toString().slice(Number('T'),10);
    let btn = document.getElementById('save') as HTMLButtonElement;
    btn.addEventListener("click", function() {
      if (i > -1) {
        let i = event.target.id;
        list[i].name = (document.getElementById('name') as HTMLFormElement).value;
        list[i].description = (document.getElementById('description') as HTMLFormElement).value
        list[i].start  = new Date((document.getElementById('start') as HTMLFormElement).value)
        list[i].end = new Date((document.getElementById('end') as HTMLFormElement).value);
        localStorage.setItem('listItem', JSON.stringify(list));
        window.location.reload();

        }     
       });

    }
         
function weekly() {
  var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  let yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1 );
  let inAweek = new Date();
  inAweek.setDate(inAweek.getDate() + 7);
  let today = new Date()
  let todayDay = today.getDay()
  
  let table = document.getElementById('table') as HTMLTableElement;
  let data = list.map(note => ({name: note.name, start: note.start, end: new Date(note.end),days:[], isDone: note.isCompleted}))
  console.log(data)
  // data = data.filter(each => each.start.getTime() > yesterday.getTime())
  // data = data.filter(each => each.start.getTime() < inAweek.getTime()) 
  // data.forEach(element => {
  //     if(element.end.getTime() > inAweek.getTime()) 
  //     {element.end = inAweek}
  //   }); 

  for (let j=0; j<7; j++){
    let th = document.createElement('th');
    th.textContent = week[todayDay]
    th.setAttribute('id',String(todayDay))
    todayDay++
    if (todayDay > 6) {
      todayDay = 0
    }
    table.appendChild(th);
  }

  data.forEach(element => {
      const dates = []
      const addDays = function (this: any, days:number) {
        const date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
      }
      while (element.start <= element.end) {
        dates.push(element.start)
        element.start = addDays.call(element.start, 1)
      }

   let arr = dates.map(day => new Date(day).getDay())
   console.log(arr)
    let tr = document.createElement('tr');
    let today = new Date()
    let todayDay = today.getDay()
    for (let m=0; m<7; m++){
    let td = document.createElement('td');
    tr.appendChild(td);
    td.setAttribute('id',String(todayDay))
    if(arr.includes(todayDay)) {
    td.setAttribute('colspan', String(arr.length));
    td.style.padding = '10px'
    td.innerHTML = element.name
    if (element.isDone) {
      td.style.backgroundColor = 'green'
      td.style.color = 'white'
    }
    else {
      td.style.backgroundColor = 'moccasin'
    }

    break;
    }

    todayDay++
    if (todayDay > 6) {
     todayDay = 0
    
    }
    }
    table.appendChild(tr);

  });


}

weekly()

// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }