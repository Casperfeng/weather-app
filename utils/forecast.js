const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/pk.eyJ1IjoiY2FzcGVyZiIsImEiOiJjanViZzl6cnYwMjRjNDRwOWhvankxZ2FyIn0.a-Tikw0Q0sgQY-xXN0Eh_Q/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '';
  request({url: url, json: true}, (error, response) => {
      if (error) {
          callback('Unable to connect forecast services!', undefined);
      } else if (response.body.error) {
          callback('Unable to find the location.', undefined);
      } else {
          callback(undefined, {
              summary: response.body.daily.data[0].summary,
              temperature: response.body.currently.temperature,
              precipProbability: response.body.currently.precipProbability
          });
      }
  })
}

module.exports = forecast;