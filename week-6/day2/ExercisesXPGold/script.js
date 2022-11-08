//Create multiple squares/boxes with letters inside. There should be 26 squares/boxes for all the letters (A to Z) next to each other.
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let container = document.getElementById("container")
let result = document.getElementById("result")

container.style.display = 'flex';
result.style.display = 'flex';

for (let i=0; i<26; i++) {
  let div= document.createElement('div')
  let emptyDiv = document.createElement('div')
  div.innerText = alphabet[i];
  div.style.backgroundColor = 'pink'
  div.style.width = '40px'
  div.style.height = '40px'
  div.style.marginTop = Math.random()*500 + 'px';
  div.style.marginLeft = Math.random()*(250-i*30)+ 30 + 'px';
  div.style.textAlign = 'center'
  emptyDiv.style.background = 'blue'
  emptyDiv.style.display = 'flex'
  emptyDiv.style.border = '1px solid black'
  emptyDiv.style.padding = '10px'
  emptyDiv.style.width = '40px'
  emptyDiv.style.height = '40px'

  //Make all the squares draggable.
  div.setAttribute('draggable', 'true');
  div.setAttribute('id', alphabet[i]);
  emptyDiv.setAttribute('id', i);


  container.appendChild(div)

  result.appendChild(emptyDiv)

}

let divs = container.getElementsByTagName('div');

for (let div of divs) {

  div.addEventListener('dragstart', dragStart);
  function dragStart(event) {
    console.log(event.target)
    event.dataTransfer.setData("text", event.target.id);
}

}


let emptyDivs = result.getElementsByTagName('div');

for (let emptyDiv of emptyDivs) {
  emptyDiv.addEventListener('dragover', allowDrop);
  function allowDrop(event) {
    event.preventDefault(); // Necessary. Allows us to drop.
  }

  emptyDiv.addEventListener('drop', dragDrop);
  function dragDrop(event) {
    event.preventDefault();
      let data = event.dataTransfer.getData("text"); //letter
          let indexOfLetter = alphabet.indexOf(data); //number
      if (parseInt(event.target.id) === indexOfLetter ) { 
        let box = document.getElementById(data)
        event.target.appendChild(box);
        box.style.marginTop = '10px'
        box.style.marginLeft = '10px'
    }
  }
}


//You should be able to drag and drop the letters depending on their coordinates x and y.