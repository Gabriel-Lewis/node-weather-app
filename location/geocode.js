const request = require('request');

const geocodeAddress = (address, cb) => {
  address = encodeURIComponent(address)
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
    json: true
  }, (err, resp, body) => {
    if (err) {
       cb('Error')
    } else if (body.status === 'ZERO_RESULTS') {
      cb('No results')
    } else if (body.status === 'OK') {
     cb(undefined, {
       address: body.results[0].formatted_address,
       lat: body.results[0].geometry.location.lat,
       lng: body.results[0].geometry.location.lng
     });
   }
   });
}

module.exports = {
  geocodeAddress
}
