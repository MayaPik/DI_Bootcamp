let cities = [];
let form = document.forms[0];
let place = document.getElementById('place');
let space = document.getElementById('space');
changeF = document.getElementById('toF');
changeC = document.getElementById('toC');

navigator.geolocation.getCurrentPosition(getLatLon); //to get the card of your location
function getLatLon(position) {
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`, true);

xhr.onload = function(){
  if(xhr.status != 200){
    console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
  }
  else {
    let info = JSON.parse(xhr.response)
    cities.push(info)
    letInfo(info)
  }
}
    xhr.send()
}

form.addEventListener('submit', createCard)
function createCard(e) {
  e.preventDefault()
  let location = place.value
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`, true);

  xhr.onload = function(){
    if(xhr.status != 200){
      console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
    }
    else  {
      let locationInfo = JSON.parse(xhr.response)[0]
            try {
              console.log(locationInfo.lat);
            }
            catch(err) {
            alert("Sorry, the searched city could not be found.");
            place.value = ""
            }
      
      let lat = locationInfo.lat;
      let lon = locationInfo.lon;
      xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`, true);

            xhr.onload = function(){
              if(xhr.status != 200){
                console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
              }
              else {
                place.value = ""
                let info = JSON.parse(xhr.response)
                cities.push(info)
                letInfo(info)
              }
            }
            xhr.send()
        
    }
  }
  xhr.send()
}

  function letInfo(info) {
    let weatherDiv = document.createElement('div');
    weatherDiv.classList.add('card')

    let weatherName = document.createElement('h2');
    weatherName.innerHTML = info.name + ", " + info.sys.country
    let weatherC = document.createElement('h1');
    let celsius = Math.round(info.main.temp - 273.15);
    let fahrenheit = convertToF(celsius) +  "°F";
    weatherC.innerHTML = celsius + "°C";
    changeF.addEventListener('click', function() {weatherC.innerHTML = fahrenheit })
    changeC.addEventListener('click', function() {weatherC.innerHTML = celsius + "°C" })
    let weatherLogo = document.createElement('img');
    weatherLogo.style.height = '70px'
    weatherLogo.style.width = '70px'

    weatherLogo.src = `http://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`
    let weatherDescription = document.createElement('p');
    weatherDescription.innerHTML= info.weather[0].description;
    weatherDescription.style.textTransform = "uppercase"
    let weatherWind = document.createElement('p');
    weatherWind.innerHTML= "Wind Speed:" + info.wind.speed

    let weatherSun = document.createElement('p');
    weatherSun.innerHTML= "Sunrise: " + convertTime(info.sys.sunrise) + "&nbsp; &nbsp; Sunset: " +convertTime(info.sys.sunset)


    let cardDelete = document.createElement('button');
    cardDelete.classList.add('cardDelete')
    cardDelete.innerText = "X"
    cardDelete.addEventListener('click', function(){space.removeChild(weatherDiv)})

    weatherDiv.appendChild(cardDelete)
    weatherDiv.appendChild(weatherName)
    weatherDiv.appendChild(weatherC)
    weatherDiv.appendChild(weatherLogo)
    weatherDiv.appendChild(weatherDescription)
    weatherDiv.appendChild(weatherWind)
    weatherDiv.appendChild(weatherSun)

    space.appendChild(weatherDiv)

  }

  function convertToF(celsius) {
    let fahrenheit = celsius * 9/5 + 32
    return fahrenheit;
  }

  function convertTime(timestamp) {
    let dateObj = new Date(timestamp * 1000); 
    let hours = dateObj.getHours().toString().padStart(2,0);
    let minutes = dateObj.getMinutes().toString().padStart(2,0);
    return `${hours}:${minutes}`;
  };