# BCIT Computer Systems Technology Januaryr 2019 Co-Op Hackathon - Locus


By Calvin Cheung, Emily DeLisle, Brodie Heywood, Kevin Park, & Tyler Tsui


This app was created over a period of 27 hours for the BCIT CST January Co-op Hackathon. The app was made entirely, from conception to finish, with this short amount of time.


Locus aims to provide users (mainly students) with a visual way of finding relaxing spaces in their local area. They can select from several criteria what they are looking for in a space. This could be wifi access, somewhere that serves food, or outside, to name a few. They can also combine these to further filter the results that appear on the page.


There is a form below the fold that allows users to add their own relaxing spaces to the database.


The app uses Google Maps API To display a local map, and the front end was designed using HTML, CSS, and Javascript. It uses CSS Grid for layouts and some jQuery for interactivity.


The database runs on Firebase Realtime Database. The app is served up by a Node.js web service with Express which communicates betweeen the Firebase database and the client.


Lastly, the app is deployed to Heroku.


Some additional features or assets that were outside of the scope and timeframe of the hackathon are:

  - Allowing users to rate the locations
  - Currently the form to add new locations is nonfunctional, so with that feature up and running, an additional service to review user entries would be needed
  - Allow users to restrict/resize/change their search area
  - Currently there is only some initial data populating the database for the purposes of the demo, but ideally there would be many more entries in the database to draw upon