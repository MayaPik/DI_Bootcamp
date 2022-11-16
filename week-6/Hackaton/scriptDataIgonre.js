let locationo = '-33.91280332432205, 151.19508269827116'

identife(locationo);

function identife(string){
  let first = string.slice(1);
  let secnod = first.slice(0, -1)
  const latlngStr = secnod.split(",", 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: latlng })
  .then((response) => {
  if (response.results[0]) {
    map.setZoom(11);
  }
  console.log((response.results[0].formatted_address));
})
}

  
/*
        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });

        infowindow.open(map, marker);
*/