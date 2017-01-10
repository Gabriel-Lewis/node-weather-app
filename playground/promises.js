const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && (typeof a === 'number') {
        resolve(a + b)
      } else {
        reject('Arguments must be numbers')
      }
    }, 1500)
  })
}

ayncAdd(5,7).then((res) => {
  console.log('Result: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log(res);
}).catch((errorMessage) => {
  console.log(errorMessage);
});


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hey. it worked')
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('success', message);
// }, (errorMessage) => {
//   console.log('Error: ', errorMessage);
// })
