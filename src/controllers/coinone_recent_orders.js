var axios = require('axios')

var url = 'https://api.coinone.co.kr/trades/';
var payload = {
  "currency": 'eth',
  "period": "hour"
}


var checkpoint_price = 0
var present_price = 0

let getPrice = function() {
  axios.get(url, {params:payload})
    .then(function (response) {

      present_price = response.data.completeOrders[response.data.completeOrders.length-1].price
      console.log(present_price)
      if(checkpoint_price == 0){
        checkpoint_price = present_price
        console.log(checkpoint_price)
      }
      if(checkpoint_price - 10 >= present_price){
        checkpoint_price = present_price
        console.log("==============================")
        console.log(checkpoint_price)
      } else if(checkpoint_price + 10 <= present_price){
        checkpoint_price = present_price
        console.log("==============================")
        console.log(checkpoint_price);
      }
    })
    .catch(function (error) {
      console.log(error);
    })
    setTimeout(getPrice, 1000 * 10)
}

getPrice()
