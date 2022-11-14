let lat_prov = -34.397;
let lng_prov = 150.644;

let map;

var geocoder;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -35.397, lng: 152.644},
    zoom: 8,
  });
  
}

window.initMap = initMap();


function center() {
    lat_prov = parseFloat(document.getElementById('cityLat').value);
    lng_prov = parseFloat(document.getElementById('cityLng').value);
    map.setCenter({lat:lat_prov, lng:lng_prov});
}

