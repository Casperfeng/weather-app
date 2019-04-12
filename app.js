const request = require('request');
const geocode = require('./utils/geocode');

geocode('Trondheim', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
});