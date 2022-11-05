let color = '';
let mousedown = false;

let body = document.getElementsByTagName("body")[0];
let colors = document.getElementById("colorBar").querySelectorAll("div");
let EmptyBlocks = document.getElementsByClassName("game")[0].querySelectorAll("div");
let clear = document.getElementsByTagName("button")[0];

clear.addEventListener("click", remove);
function remove() {
    for (let blocks of EmptyBlocks) {
        blocks.style.backgroundColor = "white";

    }
}

for (let eachColor of colors) {
    eachColor.addEventListener("click", changeColor)
    function changeColor(event) {
        color = event.target.style.backgroundColor;
    }
}

body.addEventListener("mousedown", function(){
    mousedown = true;
})

body.addEventListener("mouseup", function(){
    mousedown = false;
})

for (let blocks of EmptyBlocks) {
    blocks.addEventListener("mousedown", function(event){
        event.target.style.backgroundColor = color;
    });
    blocks.addEventListener("mouseover", function(event){
        if (mousedown) event.target.style.backgroundColor = color;
    })
}


