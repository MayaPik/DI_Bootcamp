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
  let explanation = document.getElementById("explain");
  let arrow = document.getElementById("arrowid");
  explanation.classList.add("show");

  setInterval(arrowing,1000)

  function arrowing() {
    arrow.classList.add("show");
  }


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
      explanation.classList.remove("show");
      arrow.style.display = 'none';


    

    places.forEach((place) => {

      google.maps.event.addListener(map, "dblclick", (event) => {
        addMarker(event.latLng, map);
        map.setOptions({disableDoubleClickZoom: true });
        popup.innerHTML = "Now click on the Marker to add your story"
      });
      

      let dragPopup = document.getElementById('dragPopup')
      dragPopup.classList.add("show");
let i=0;
      function addMarker(location, map) {
        const icon = {
          //url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(30, 30),

        };

         
        // Create a marker for each place.
        markers.push(
          new google.maps.Marker({
            map,
            //icon,
            title: place.name,
            draggable: true,
            position: location,
            description: "",
            id: i,
          })
        );
        ;

        const infoWindow = new google.maps.InfoWindow();
        const geocoder = new google.maps.Geocoder();
        i++


        let button = document.getElementById('button')
        button.addEventListener('click', seeStories)
       

           
        if (markers.length > 0) {
          button.classList.add("light")
         }

         if (markers.length > 2 ) {
          dragPopup.classList.remove("show");
          popup.classList.remove('show')
         }

      markers.forEach((marker) => {
        
        marker.addListener("click", () => {
          if (marker.description.length == 0 ) {
          marker.description = prompt('Write here your story here',)
            if (marker.description == "") {
              marker.description = "No Story"
            }
         
           
  
        let stories = document.getElementById('stories')
        let box = document.createElement('div')
        box.setAttribute('class', 'card')
        box.setAttribute('id', marker.id)

        let title = document.createElement('h2')
        title.innerHTML = place.name;
        let description = document.createElement('h3')
        description.innerHTML = marker.description;
        let locationText = document.createElement('h5')
        locationText.innerHTML = (marker.getPosition());
        let deleting = document.createElement('button')
        deleting.innerHTML = "Delete Location";


        deleting.addEventListener('click', deleteEvent)

        function deleteEvent() {
          let deletedCard = document.getElementById(marker.id)
          stories.removeChild(deletedCard)
          marker.setMap(null);
          markers.splice(marker.id, 1);
          map.setZoom(13)

        }
        geocoder
        .geocode({ location: location })
        .then((response) => {
          if (response.results[0]) {
            title.innerHTML = response.results[6].formatted_address;
          }
          })
        
        box.appendChild(title)
        box.appendChild(description)
        box.appendChild(deleting)
        stories.appendChild(box)

        box.addEventListener('click', referToPlace)

        function referToPlace() {
          let input = locationText.innerHTML.slice(1, -1); 
          const latlngStr = input.split(",", 2);
        
          // (-33.91249740186251, 151.02463227449644)
          map.setCenter({lat: parseFloat(latlngStr[0]), lng:  parseFloat(latlngStr[1])});
          map.setZoom(13)

        }

        google.maps.event.addListener(marker, 'dragend', function(ev) {
          location = (marker.getPosition());
          locationText.innerHTML = (marker.getPosition());
          geocoder
            .geocode({ location: location })
            .then((response) => {
              if (response.results[4]) {
                map.setZoom(11);
                title.innerHTML = response.results[6].formatted_address;
              } else {
                console.log("No results found");
              }
            })
            .catch((e) => console.log("Geocoder failed due to: " + e));
        });


      }
          infoWindow.close();
          infoWindow.open(marker.getMap(), marker);
          infoWindow.setContent(marker.description);
        })
      });

        
    
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



  function seeStories() {
    button.classList.remove('light')
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
