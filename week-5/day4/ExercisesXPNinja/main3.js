let x = document.getElementById("latitude");
let y = document.getElementById("longitude");
let loading = document.getElementById("loading");


let button = document.getElementsByTagName('button')[0];
button.addEventListener("click", getLocation)

function getLocation() {
    loading.innerText = "Loading...."
    loading.className = "typed-out";

    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    loading.style.display = "none"
  x.innerText = "Latitude: " + position.coords.latitude;
  y.innerHTML = "Longitude: " + position.coords.longitude;
}
