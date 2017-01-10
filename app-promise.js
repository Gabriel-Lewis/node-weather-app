const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

const API = require('./api_keys')
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

let endcodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${endcodedAddress}`

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find address')
  }
  let lat = response.data.results[0].geometry.location.lat;
  let lng = response.data.results[0].geometry.location.lng;
  let address = response.data.results[0].formatted_address;
  let weatherUrl = `https://api.darksky.net/forecast/${API.weatherAPI}/${lat},${lng}`
  console.log(address)
  return axios.get(weatherUrl);
}).then((response) => {
  let temp = response.data.currently.temperature;
  let feelsLikeTemp = response.data.currently.apparentTemperature;
  console.log(`Currently it's ${temp}. It feels like ${feelsLikeTemp}`);
}).catch((err) => {
  if (err.code === 'ENOTFOUND') {
    console.log('unable to connect to api endpoint');
  } else {
    console.log(err);
  }
})
