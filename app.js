const request = require('request');

const getUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2FzcGVyZiIsImEiOiJjanViZzl6cnYwMjRjNDRwOWhvankxZ2FyIn0.a-Tikw0Q0sgQY-xXN0Eh_Q&limit=1';

const geocode = (adress, callback) => {
  const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiY2FzcGVyZiIsImEiOiJjanViZzl6cnYwMjRjNDRwOWhvankxZ2FyIn0.a-Tikw0Q0sgQY-xXN0Eh_Q&limit=1';

  request( {url: url, json: true}, (error, response) => {
    if (error) {
      callback('Unable to connect to location services', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to  find location. Try another search', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
      });
    }
  })
};

geocode('Trondheim', (error, data) => {
    console.log(data);
});