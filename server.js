'use strict';

var Forecast = require('forecast.io-bluebird');
var forecast = new Forecast({
    key: process.env.FORECAST_API_KEY,
    timeout: 2500
});

var express = require('express');
var app = express();

let PORT = 3331;

app.use(express.static('app'));
app.use('/bower_components', express.static('bower_components'));
var server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
