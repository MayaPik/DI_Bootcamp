let markers = []; //The markers
var infowindow;
var map;
const geocoder = new google.maps.Geocoder();

  
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
    
      var popup = document.getElementById("myPopup");
      popup.classList.add("show");
    

    places.forEach((place) => {

      google.maps.event.addListener(map, "dblclick", (event) => {
        addMarker(event.latLng, map);
        popup.innerHTML = "Click on the Marker to add your story"

      });
      


      function addMarker(location, map) {
        const icon = {
          url: place.icon,
          //size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(30, 30),

        };

         
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            icon,
            title: place.name,
            draggable: true,
            position: location,
            description: " ",
          })
        );
        ;

        const infoWindow = new google.maps.InfoWindow();



      markers.forEach((marker) => {
        
        marker.addListener("click", () => {
          if (marker.description == 0 ) {
            popup.classList.remove("show");

          marker.description = prompt('Write here your story/ Experience!',)
          } 

  let stories = document.getElementById('stories')


    let box = document.createElement('div')
    box.setAttribute('class', 'card')
    let title = document.createElement('h2')
    marker.position
    title.innerHTML = location;
    let description = document.createElement('h3')
    description.innerHTML = marker.description;
    box.appendChild(title)
    box.appendChild(description)
    stories.appendChild(box)
          infoWindow.close();
          infoWindow.open(marker.getMap(), marker);
          infoWindow.setContent(marker.description);
        });
        })
        
        
        }

    /* Clear out the old markers.
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];*/


      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

    map.fitBounds(bounds);
  });


  let button = document.getElementById('button')
  button.addEventListener('click', seeStories)

  function seeStories() {
    let map = document.getElementById('map');
    map.classList.toggle('mapSmall')
    if (map.classList.contains('mapSmall')) {
      button.innerHTML = "Close Stories"
    } 
    if (!map.classList.contains('mapSmall')) {
      button.innerHTML = "Open Stories"
    }
    
    
}

}
window.getInit = getInit;
