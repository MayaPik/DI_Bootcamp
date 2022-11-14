let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
window.initMap = initMap;


function initialize() {
  var input = document.getElementById('targetLocation');
  var autocomplete = new google.maps.places.Autocomplete(input, ["cities"]);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        document.getElementById('city2').value = place.name;
        document.getElementById('cityLat').value = place.geometry.location.lat();
        document.getElementById('cityLng').value = place.geometry.location.lng();
    });
}
google.maps.event.addDomListener(window, 'load', initialize);


