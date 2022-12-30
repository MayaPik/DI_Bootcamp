class Item {
    name:string;
    description:string;
    start:Date;
    end:Date;
    isCompleted:boolean;
     constructor(name:string, description:string, start:Date, end:Date, isCompleted:boolean) {
        this.name = name;
        this.description = description;
        this.start = start;
        this.end = end;
        this.isCompleted = isCompleted;
    }
  }
  
  let list = getFromLocal();
  
  function getFromLocal() {
    return JSON.parse(localStorage.getItem("listItem") || "") 

  }
  
  let form = document.getElementById('form') as HTMLFormElement; 
  
  form.addEventListener('submit', savedata)
  
  function savedata() {
    let name = (document.getElementById('name') as HTMLFormElement).value ;
    let description = (document.getElementById('description') as HTMLFormElement).value;
    let start = new Date((document.getElementById('start') as HTMLFormElement).value);
    let end = new Date((document.getElementById('end') as HTMLFormElement).value);
    list.push(new Item(name, description, start, end, false));
    localStorage.setItem('listItem', JSON.stringify(list))
    //createNotes(list)
  }

  
  // createList(list)
  
  // function createNotes(arr) {
  //     root.innerHTML = arr.map(note => "<br>" + note)
  // }