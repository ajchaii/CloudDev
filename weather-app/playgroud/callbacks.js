var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Chai'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);

};

getUser(31, (userObject) => {
  console.log('Test callback');
  console.log(userObject);
});
