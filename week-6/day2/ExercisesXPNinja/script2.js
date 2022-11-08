let add = [ ];
let dot = "."

for (let i=0; i<4; i++) {
  add.push(dot)
  dot = dot + "."
}

let counter = 0;
let outPut = document.getElementById("change");
setInterval(changing, 300);

function changing() {
  outPut.innerHTML = add[counter];
    counter++;

    if(counter >= add.length) { 
      counter = 0;
    }
}
