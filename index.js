const admin = require('firebase-admin');
const express = require("express");
const app = express();
const fs = require("fs");
const { JSDOM } = require('jsdom');
const PORT = process.env.PORT || 5000
const serviceAccount = require("./node-client-app/spaces-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://spaces-1546453763645.firebaseio.com/"
});

var ref = admin.app().database().ref().child("locations");

app.get("/", function (req, res) {
  let doc = fs.readFileSync("index.html");
  let dom = new JSDOM(doc);
  res.send(dom.serialize());
});

app.get("/getLocations", function(req, res) {
  ref.once("value", function(snap) {
    res.send(snap.val());
  });
});

app.listen(PORT, function() {
  console.log("App listening on port " + PORT);
});