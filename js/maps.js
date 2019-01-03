var map;

var userLat;
var userLon;

// async function getLoco() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      userLat = position.coords.latitude;
      userLon = position.coords.longitude;
    });
  }
// }

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: userLat, lng: userLon},
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: {lat: userLat, lng: userLon},
    map: map,
    title: 'Current Location'
  });
  var contentString = '<div><h2>This is your current location</h2></div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

var locations;
var prev_infowindow = false;
var markerArray = [];

function markers() {
  for (place in locations.locations) {
    let marker = new google.maps.Marker({
      position: {lat: locations.locations[place].lat, lng: locations.locations[place].lon},
      map: map,
      title: locations.locations[place].name
    });
    let contentString = '<div><h1>' + locations.locations[place].name + '</h1><h3>' + locations.locations[place].address + '</h3></div>';

    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      if( prev_infowindow ) {
         prev_infowindow.close();
      }

      prev_infowindow = infowindow;
      infowindow.open(map, marker);
    });
    marker.setVisible(false);
    markerArray.push(marker);
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
