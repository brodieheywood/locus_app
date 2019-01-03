var firebase = require("firebase");
const express = require("express");
const app = express();
const fs = require("fs");
const { JSDOM } = require('jsdom');
const PORT = process.env.PORT || 5000


var firebase = require("firebase");
firebase.initializeApp({
 "serviceAccount": "./node-client-app/spaces-service-account.json",
 "databaseURL": "https://spaces-1546453763645.firebaseio.com/"
});

app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
app.use("/imgs", express.static("imgs"));

app.get("/", function (req, res) {
  let doc = fs.readFileSync("index.html");
  let dom = new JSDOM(doc);
  res.send(dom.serialize());
});

var ref = firebase.app().database().ref();

app.get("/getLocations", function(req, res) {
  ref.once("value").then(function (snap) {
    // console.log("snap.val()", snap.val());
    res.send(snap.val());
 });
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});
