var map;

var userLat;
var userLon;

// Get user latitude and longitude
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    userLat = position.coords.latitude;
    userLon = position.coords.longitude;
  });
}

// Initializes Google Maps API map on the page and populates it initially with a point at the user's location. Adds a popup info window to the point.
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
    if( prev_infowindow ) {
       prev_infowindow.close();
    }

    prev_infowindow = infowindow;
    infowindow.open(map, marker);
  });
}

// Variable that will hold the snapshot of the database
var locations;

// Makes an ajax call to the Node.js service to get the data from the database
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

var prev_infowindow = false;
var markerArray = [];

// Creates all the markers for other locations that are in the database and adds infowindow popups to them. Hidden initially.
function markers() {
  for (place in locations.locations) {
    let marker = new google.maps.Marker({
      position: {lat: locations.locations[place].lat, lng: locations.locations[place].lon},
      map: map,
      title: locations.locations[place].name
    });
    let contentString = '<div class="headings"><h1>' + locations.locations[place].name + '</h1><img class="locoImg" src="' + locations.locations[place].img + '"/></div>' + '<h3>' + locations.locations[place].address + '</h3>';

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
