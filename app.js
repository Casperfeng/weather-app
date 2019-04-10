 const request = require('request');

 const url = 'https://api.darksky.net/forecast/125df3fc227fb25bf7898d5f7982af96/37.8267,-122.4233';

 request({ url: url }, (error, response) => {
   const data = JSON.parse(response.body);
   console.log(data.currently);
 });