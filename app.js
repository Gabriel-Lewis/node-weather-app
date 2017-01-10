const request = require('request');
const yargs = require('yargs');

const geocode = require('./location/geocode');
const weather = require('./weather/weather');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'address of consumer',
    string: true
  }
})
.help()
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    weather.weatherTemp(result.lng, result.lat, (errorMessage, result) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(result)
      }
    })
  }
});
