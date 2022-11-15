function initialize() {
  map = new google.maps.Map(
    document.getElementById("map_canvas"), {
      center: new google.maps.LatLng(37.4419, -122.1419),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  infowindow = new google.maps.InfoWindow();
  var place = {
    geometry: {
      location: map.getCenter()
    },
    name: "Fred"
  };
  createMarker(place);
  var place2 = {
    geometry: {
      location: {
        lat: 37.4529598,
        lng: -122.1817252
      }
    },
    name: "Frank"
  };
  createMarker(place2);
}
google.maps.event.addDomListener(window, "load", initialize);

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });
  markers.push(marker);

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent("<div>" + place.name + "<br><input type='submit' id='butSubmit' value='Procurar' onclick='BarFind()'><div id='bar'></div></div>");
    infowindow.open(map, this);
  });
}

function BarFind() {
  document.getElementById('bar').innerHTML = "called BarFind()";
}*/