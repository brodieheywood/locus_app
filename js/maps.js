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
