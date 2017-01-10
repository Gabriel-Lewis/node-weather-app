var getUser = (id, cb) => {
  var user = {
    name: 'Gabriel',
    id
  }
  cb(user)
};

getUser(2, (user) => {
  console.log(user);
});
