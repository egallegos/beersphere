var beerApi = require('./modules/beer.js');
var userApi = require('./modules/user.js');
var express = require('express');
var app = express();

beerApi.start(app);
userApi.start(app);
app.listen(process.env.PORT);
console.log('Server started on port: ' + process.env.PORT)