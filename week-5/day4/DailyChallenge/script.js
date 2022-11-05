let form = document.getElementById('libform');

//let button = document.getElementById(lib-button);
form.addEventListener("submit", getStory)

function getStory(event) {
let fullStory = document.getElementById('story');
let nounI = document.getElementById('noun').value;
let adI = document.getElementById('adjective').value;
let personI = document.getElementById('person').value;
let verbI = document.getElementById('verb').value;
let placeI = document.getElementById('place').value;

if (nounI != "" && adI != "" && personI != "" && verbI != "" && placeI !="") {
fullStory.innerText = "Hello Everyone I a like to sit on " + nounI + " but only if it is " + adI + ". I really like it when " + personI + " comes to visit because when we " +
verbI + " together is so much fun. Anyhow, when we meet we like to visit " + placeI;
}
event.preventDefault()

}
