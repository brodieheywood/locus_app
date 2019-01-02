var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.283423, lng: -123.11530708},
    zoom: 18
  });
  var marker = new google.maps.Marker({
    position: {lat: 49.283423, lng: -123.11530708},
    map: map,
    title: 'Hello World!'
  });
}

var locations;

function retrieveLocations() {
  $.ajax({
    url: "/getLocations",
    type: "GET",
    datatype: "json",
    success: function(data) {
      locations = data;
    },
    error: function(error) {
      console.log(error);
    }
  });
}

retrieveLocations();