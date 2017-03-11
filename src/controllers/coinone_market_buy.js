var crypto = require('crypto');
var request = require('request');
var ACCESS_TOKEN = 'c7bcbbb7-1c9d-41f7-8707-f87931753b1b123123';
var SECRET_KEY = '962eb6f7-3852-47d0-bdc2-67d020c40899123123';
var price = process.argv[2]

if(!price){
  throw Error('price needs to be specified')
}

var url = 'https://api.coinone.co.kr/v2/order/market_buy/';
  var payload = {
  "access_token": ACCESS_TOKEN,
  "price": price,
  "currency": "eth",
  "nonce": Date.now()
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

request.post(options,
  function(error, response, body) {
    console.log(body);
});
