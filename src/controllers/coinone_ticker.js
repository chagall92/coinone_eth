var crypto = require('crypto');
var request = require('request');

var ACCESS_TOKEN = 'c7bcbbb7-1c9d-41f7-8707-f87931753b1b';
var SECRET_KEY = '962eb6f7-3852-47d0-bdc2-67d020c40899';
var url = 'https://api.coinone.co.kr/ticker/';
var payload = {
  "access_token": ACCESS_TOKEN,
  "currency": "eth"
};

payload = new Buffer(JSON.stringify(payload)).toString('base64');

var signature = crypto
  .createHmac("sha512", SECRET_KEY.toUpperCase())
  .update(payload)
  .digest('hex');

var headers = {
  'content-type':'application/json',
  'X-COINONE-PAYLOAD': payload,
  'X-COINONE-SIGNATURE': signature
};

var options = {
  url: url,
  headers: headers,
  body: payload
};

request.get(options,
  function(error, response, body) {
    console.log(body);
});
