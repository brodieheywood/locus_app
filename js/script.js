

var powerButton = $("#power");

powerButton.click(function () {
  console.log("Power clicked!");
});

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
  }
  else if (coffee === true) {
    coffee = false;
  }
};

var seating_buttons = document.getElementById('seating')
seating_buttons.onclick = seating_clicked;

function seating_clicked(e) {
  e.preventDefault();
  if (comfy === false) {
    comfy = true;
  }
  else if (comfy === true) {
    comfy = false;
  }
};

var food_buttons = document.getElementById('food')
food_buttons.onclick = food_clicked;

function food_clicked(e) {
  e.preventDefault();
  if (food === false) {
    food = true;
  }
  else if (food === true) {
    food = false;
  }
};

var power_buttons = document.getElementById('power');
console.log(power_buttons);
power_buttons.onclick = power_clicked;

function power_clicked(e) {
  e.preventDefault();
  if (power === false) {
    power = true;
  }
  else if (power === true) {
    power = false;
  }
};

var washroom_buttons = document.getElementById('washrooms')
washroom_buttons.onclick = washroom_clicked;

function washroom_clicked(e) {
  e.preventDefault();
  if (washrooms === false) {
    washrooms = true;
  }
  else if (washrooms === true) {
    washrooms = false;
  }
};

var wifi_buttons = document.getElementById('wifi')
wifi_buttons.onclick = wifi_clicked;

function wifi_clicked(e) {
  e.preventDefault();
  if (wifi === false) {
    wifi = true;
  }
  else if (wifi === true) {
    wifi = false;
  }
};

var outside_buttons = document.getElementById('outside')
outside_buttons.onclick = outside_clicked;

function outside_clicked(e) {
  e.preventDefault();
  if (outside === false) {
    outside = true;
  }
  else if (outside === true) {
    outside = false;
  }
};

var isBusy_buttons = document.getElementById('notBusy')
isBusy_buttons.onclick = isBusy_clicked;

function isBusy_clicked(e) {
  e.preventDefault();
  if (isBusy === false) {
    isBusy = true;
  }
  else if (isBusy === true) {
    isBusy = false;
  }
};

var late_buttons = document.getElementById('late')
late_buttons.onclick = late_clicked;

function late_clicked(e) {
  e.preventDefault();
  if (late === false) {
    late = true;
  }
  else if (late === true) {
    late = false;
  }
};
