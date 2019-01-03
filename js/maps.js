var map;

var userLat;
var userLon;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    userLat = position.coords.latitude;
    userLon = position.coords.longitude;
    console.log(userLat);
  });
}

// } else {
//   console.log("Geolocation is not supported by this browser.");
// }

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: userLat, lng: userLon},
    zoom: 18
  });
  var marker = new google.maps.Marker({
    position: {lat: userLat, lng: userLon},
    map: map,
    title: 'Current Location'
  });
}

var locations;

function markers() {
  // console.log(locations);
  // console.log(locations[locations]);
  // console.log(locations.locations);
  for (place in locations.locations) {
    console.log(locations.locations[place].lat);
    console.log(locations.locations[place].lon);
    var marker = new google.maps.Marker({
      position: {lat: locations.locations[place].lat, lng: locations.locations[place].lon},
      map: map,
      title: "test"
    });
  }
}

function retrieveLocations() {
  $.ajax({
    url: "/getLocations",
    type: "GET",
    datatype: "json",
    success: function(data) {
      locations = data;
      markers();
    },
    error: function(error) {
      console.log(error);
    }
  });
}

retrieveLocations();
