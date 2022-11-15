let markers = []; //The markers
var infowindow;
var map;
  
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
    title.innerHTML = new google.maps.LatLng(43,2)
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


  let button1 = document.getElementById('button1')
  button1.addEventListener('click', seeStories)

  let button2 = document.getElementById('button2')
  button2.addEventListener('click', closeStories)

    
  function seeStories() {
    let map = document.getElementById('map');
    map.style.height = '60%'
    let stories = document.getElementById('stories')
    stories.style.display= 'flex'

    
}
function closeStories() {
  let map = document.getElementById('map');
  map.style.height = '85%'
  let stories = document.getElementById('stories')
  stories.style.display= 'none'

  
}

}
window.getInit = getInit;
