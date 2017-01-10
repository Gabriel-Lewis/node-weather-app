const request = require('request');

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?zipcode=${address}`,
      json: true
    }, (err, resp, body) => {
      if (err) {
        reject(err)
      } else {
        resolve(body)
      }
    })
  }
};

geocodeAddress('94109').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}).catch((error) => {
  console.log(error);
})
