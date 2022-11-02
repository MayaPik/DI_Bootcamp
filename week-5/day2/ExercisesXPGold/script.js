let table = document.body.firstElementChild;

let note = table.getElementsByTagName('td');


for (let i=0; i<note.length; i++) {
  if (note[i].innerText[0] == note[i].innerText[2]) {
    note[i].style.backgroundColor = 'red';
 }
}

