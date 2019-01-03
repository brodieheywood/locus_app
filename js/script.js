var coffee = false;
var comfy = false;
var food = false;
var power = false;
var washrooms = false;
var wifi = false;
var outside = false;
var isBusy = false;
var late = false;

var coffee_buttons = document.getElementById('coffee')
coffee_buttons.onclick = coffee_clicked;

function coffee_clicked(e) {
  e.preventDefault();
  if (coffee === false) {
    coffee = true;
    markerArray[0].setVisible(true);
    markerArray[3].setVisible(true);
    markerArray[4].setVisible(true);
    markerArray[6].setVisible(true);
    markerArray[7].setVisible(true);
  }
  else if (coffee === true) {
    coffee = false;
    markerArray[0].setVisible(false);
    markerArray[3].setVisible(false);
    markerArray[4].setVisible(false);
    markerArray[6].setVisible(false);
    markerArray[7].setVisible(false);
  }
};

var food_buttons = document.getElementById('food')
food_buttons.onclick = food_clicked;

function food_clicked(e) {
  e.preventDefault();
  if (food === false) {
    food = true;
    markerArray[0].setVisible(true);
    markerArray[3].setVisible(true);
    markerArray[4].setVisible(true);
    markerArray[6].setVisible(true);
    markerArray[7].setVisible(true);
  }
  else if (food === true) {
    food = false;
    markerArray[0].setVisible(false);
    markerArray[3].setVisible(false);
    markerArray[4].setVisible(false);
    markerArray[6].setVisible(false);
    markerArray[7].setVisible(false);
  }
};

var power_buttons = document.getElementById('power');
power_buttons.onclick = power_clicked;

function power_clicked(e) {
  e.preventDefault();
  if (power === false) {
    power = true;
    markerArray[0].setVisible(true);
    markerArray[1].setVisible(true);
    markerArray[6].setVisible(true);
    markerArray[7].setVisible(true);
  }
  else if (power === true) {
    power = false;
    markerArray[0].setVisible(false);
    markerArray[1].setVisible(false);
    markerArray[6].setVisible(false);
    markerArray[7].setVisible(false);
  }
};

var washroom_buttons = document.getElementById('washrooms')
washroom_buttons.onclick = washroom_clicked;

function washroom_clicked(e) {
  e.preventDefault();
  if (washrooms === false) {
    washrooms = true;
    markerArray[0].setVisible(true);
    markerArray[1].setVisible(true);
    markerArray[3].setVisible(true);
    markerArray[4].setVisible(true);
    markerArray[5].setVisible(true);
    markerArray[6].setVisible(true);
    markerArray[7].setVisible(true);
  }
  else if (washrooms === true) {
    washrooms = false;
    markerArray[0].setVisible(false);
    markerArray[1].setVisible(false);
    markerArray[3].setVisible(false);
    markerArray[4].setVisible(false);
    markerArray[5].setVisible(false);
    markerArray[6].setVisible(false);
    markerArray[7].setVisible(false);
  }
};

var wifi_buttons = document.getElementById('wifi')
wifi_buttons.onclick = wifi_clicked;

function wifi_clicked(e) {
  e.preventDefault();
  if (wifi === false) {
    wifi = true;
    markerArray[0].setVisible(true);
    markerArray[1].setVisible(true);
    markerArray[4].setVisible(true);
    markerArray[6].setVisible(true);
    markerArray[7].setVisible(true);
  }
  else if (wifi === true) {
    wifi = false;
    markerArray[0].setVisible(false);
    markerArray[1].setVisible(false);
    markerArray[4].setVisible(false);
    markerArray[6].setVisible(false);
    markerArray[7].setVisible(false);
  }
};

var outside_buttons = document.getElementById('outside')
outside_buttons.onclick = outside_clicked;

function outside_clicked(e) {
  e.preventDefault();
  if (outside === false) {
    outside = true;
    markerArray[3].setVisible(true);
    markerArray[5].setVisible(true);
  }
  else if (outside === true) {
    outside = false;
    markerArray[3].setVisible(false);
    markerArray[5].setVisible(false);
  }
};

var isBusy_buttons = document.getElementById('notBusy')
isBusy_buttons.onclick = isBusy_clicked;

function isBusy_clicked(e) {
  e.preventDefault();
  if (isBusy === false) {
    isBusy = true;
    markerArray[2].setVisible(true);
    markerArray[3].setVisible(true);
    markerArray[5].setVisible(true);
  }
  else if (isBusy === true) {
    isBusy = false;
    markerArray[2].setVisible(false);
    markerArray[3].setVisible(false);
    markerArray[5].setVisible(false);
  }
};

var late_buttons = document.getElementById('late')
late_buttons.onclick = late_clicked;

function late_clicked(e) {
  e.preventDefault();
  if (late === false) {
    late = true;
    markerArray[3].setVisible(true);
    markerArray[7].setVisible(true);
  }
  else if (late === true) {
    late = false;
    markerArray[3].setVisible(false);
    markerArray[7].setVisible(false);
  }
};

$( 'button' ).click(function() {
  $( this ).toggleClass( 'clicked-button' );
});

function scrollToSection(section) {
  var elmnt = document.getElementById(section);
  elmnt.scrollIntoView();
}
