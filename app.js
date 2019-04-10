 const request = require('request');

//Print celsius
const url = 'https://api.darksky.net/forecast/125df3fc227fb25bf7898d5f7982af96/37.8267,-122.4233?units=si';

//Get request to mapbox
const getUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FzcGVyZiIsImEiOiJjanViZzl6cnYwMjRjNDRwOWhvankxZ2FyIn0.a-Tikw0Q0sgQY-xXN0Eh_Q&limit=1';

 request({ url: url, json: true }, (error, response) => {
   console.log(`It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain`);
 });

// Geocoding
// Adress -> Lat/Long -> Weather
request.get({url: getUrl, json: true}, (error, response) => {
  console.log(response.body.features[0].center);
})
