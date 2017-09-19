const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

data.id = 6;
var token = jwt.sign(data,'124abc');

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
