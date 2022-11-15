function getValue() {
  let marker = myForm.elements.story
  consol.log(maker)
}
let markers = []; //The markers
var infowindow;
var map;
let myForm = document.getElementById('form1')
myForm.style.display = 'none'

  
function getInit() {
  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 13,
      mapTypeId: "roadmap",
    }
  );
  infowindow = new google.maps.InfoWindow();


  var options = {
    types: ['(cities)'],
  }

  const input = document.getElementById("searchTextField");
  const searchBox = new google.maps.places.SearchBox(input, options);
  map.controls.push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });


  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    
    const bounds = new google.maps.LatLngBounds();


    places.forEach((place) => {

      google.maps.event.addListener(map, "dblclick", (event) => {
        addMarker(event.latLng, map);

      });


      function addMarker(location, map) {
        const icon = {
          url: place.icon,
          //size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
         
        };
          const infowindow = new google.maps.InfoWindow({
              content: "hello"
          });
          

        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            draggable: true,
            position: location,
          })
        );
        ;
   
      markers.forEach((marker) => {
        marker.addListener("click", () => {      
            infowindow.open({
              anchor: marker,
              map,
            });
          });
        })
        
        
        

    /* Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];*/
      }

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
  });

}

window.getInit = getInit;

