let i = 0;
let j=0;
let txt = " Hello there"
let txt2 = "My name is Maya Pik"
let speed = 50;
let about = document.getElementById('about')


about.addEventListener('click',typeWriter)


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("first").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (j < txt2.length && i >= txt.length) {
    document.getElementById("second").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter, speed+10);
  }
  if (j >= txt2.length) {
    setTimeout(scroll, 1000);
}
  buttonGet.classList.remove('light')

}

setInterval(up, 2000)
let lines = document.getElementById('lines')

function up() {
 lines.textContent = parseInt(lines.textContent) +1;
}

setInterval(down, 3500)

function down() {
 lines.textContent = parseInt(lines.textContent) -1;
}


let buttonGet = document.getElementById("getKnow")

function scroll() {
    let scrolling = document.getElementById("aboutMe")
    console.log(scrolling)
    scrolling.scrollIntoView();
    
 }

 setTimeout(light, 6000);

 function light() {
    if (j < txt2.length) {
    buttonGet.classList.add('light')
    }
 }
