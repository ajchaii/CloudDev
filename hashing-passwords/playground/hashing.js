// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

var password = '123abc!';

// // To hash password
// var salt = bcrypt.genSaltSync(10);
// console.log(salt);
// var hash = bcrypt.hashSync("bacon", salt);
// console.log(hash);

// // Load hash from your password DB. 
// var isUncrypt1 = bcrypt.compareSync("bacon", hash); // true
// console.log(isUncrypt1); 
// var isUncrypt2 = bcrypt.compareSync("not_bacon", hash); // false 
// console.log(isUncrypt2);

// // auto generate salt and hash
// var hash = bcrypt.hashSync('bacon',10);
// console.log(hash);

// 
// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

// var hashedPassword = '$2a$10$huAU4qTnQuGPifHEXfV9cOmPJ7p61oKaoXrY1WviiDAznE/rW8oLK';
var hashedPassword = '$2a$10$rTXwSUrshrodJzsNCzSNTeYaQULbqUB5nivvrlmAFvhxAXyvZ253S';

bcrypt.compare('123abc!', hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
