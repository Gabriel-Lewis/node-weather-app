const request = require('request');
const API = require('../api_keys');

const weatherTemp = (lng, lat, cb) => {
  console.log(lng,lat);
  request({
    url: `https://api.darksky.net/forecast/${API.weatherAPI}/${lat},${lng}`,
    json: true
  }, (err, resp, body) => {
    if (!err && resp.statusCode === 200) {
      return cb(undefined, body.currently.temperature)
    } else {
      return cb('error')
    }
  })

}

module.exports = {
  weatherTemp
}
