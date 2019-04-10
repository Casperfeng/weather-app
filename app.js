 const request = require('request');

 const url = 'https://api.darksky.net/forecast/125df3fc227fb25bf7898d5f7982af96/37.8267,-122.4233?units=si';

 request({ url: url, json: true }, (error, response) => {
   console.log(`It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} chance of rain`);
 });

