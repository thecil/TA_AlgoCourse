const GeminiAPI = require("gemini-api").default;

const key = "account-5hmfRHz791N4PLpleOmJ";
const secret = "27sn6asLRQkipgKB68XMBR6QpuTq"

const restClient = new GeminiAPI({key, secret, sandbox:true});
/* @dev Create new trade order
// _amount, float
// _price, int
// _side, string
// _symbol string
*/
function newOrder(_amount, _price, _side, _symbol){
  restClient.newOrder({amount:_amount, price:_price, side:_side, symbol:_symbol})
  .then(function(_res){
    console.log(_res)
  })
  .catch(_err => console.log(_err));
}
newOrder(0.1, 13000, "buy", "btcusd")

//Get all trading symbols Ex: "btcusd"
function getAllSymbols(){
  restClient.getAllSymbols()
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get market price and data from a symbol Ex: "btcusd"
function getTicker(_symbol){
  restClient.getTicker(_symbol)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//cancel an order by ID
function cancelOrder(_order_id){
  restClient.cancelOrder({ _order_id })
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get all my trading active orders
function getMyActiveOrders(_symbol){
  restClient.getMyActiveOrders(_symbol)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get status from an order by ID
function getMyOrderStatus(_order_id){
  restClient.getMyOrderStatus(_order_id)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get Balances
function getMyAvailableBalances(_symbol){
  restClient.getMyAvailableBalances(_symbol)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
