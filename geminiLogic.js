
//internal variables for values


function insertOrder(_data){
  var myOrders = []
  let orderLenght = (myOrders.length)
  myOrders.push(_data)
  return(console.log(`Order saved: ${myOrders.length}, ${myOrders[orderLenght].symbol}`))
  return myOrders
}
function getData(_data){
  let _res = []
  let _resLength = _res.length
  _res.push(_data)
  return _res
}


//GEMINI CONFIG
const GeminiAPI = require("gemini-api").default;
const key = "account-5hmfRHz791N4PLpleOmJ";
const secret = "27sn6asLRQkipgKB68XMBR6QpuTq"
const geminiClient = new GeminiAPI({key, secret, sandbox:true});


//GEMINI LOGIC
/*
// @dev Create new trade order
// @var _amount, float
// @var _price, int
// @var _side, string
// @var _symbol string
*/
function newOrder(_amount, _price, _side, _symbol){
  geminiClient.newOrder({amount:_amount, price:_price, side:_side, symbol:_symbol})
  .then(function(_res){
    let _orderData = {
      id:_res.id,
      symbol:_res.symbol,
      side:_res.side,
      time:_res.timestamp,
      price:_res.price,
      amount:_res.original_amount
    }
    console.log(_res)
    insertOrder(_orderData)
  })
  .catch(console.error);
}
/*
//Get all trading symbols Ex: "btcusd"
*/
function getAllSymbols(){
  geminiClient.getAllSymbols()
  .then(_res => console.log(_res))
  .catch(console.error);
}
/*
//get market price and data from a symbol Ex: "btcusd"
// @var _symbol string
*/
function getTicker(_symbol){
  geminiClient.getTicker({symbol:_symbol})
  .then(_res => console.log(_res))
  .catch(console.error);
}
/*
//cancel an order by ID
// @var _order_id, integer
*/
function cancelOrder(_order_id){
  geminiClient.cancelOrder({order_id:_order_id})
  .then(_res => console.log(_res))
  .catch(console.error);
}
/*
//cancel ALL my orders
*/

function cancelAllActiveOrders(){
  geminiClient.cancelAllActiveOrders()
  .then(_res => console.log(_res))
  .catch(console.error);
}
/*
//get all my trading active orders
// @var _symbol string
*/
function getMyActiveOrders(_symbol){
  geminiClient.getMyActiveOrders({symbol:_symbol})
  .then(_res => console.log(_res))
  .catch(console.error);
}
/*
//get status from an order by ID
// @var _order_id, integer
*/
function getMyOrderStatus(_order_id){
  geminiClient.getMyOrderStatus({order_id:_order_id})
  .then(_res => console.log(_res))
  .catch(console.error);
}
/*
//get Balances
// @var _symbol string
*/
function getMyAvailableBalances(_symbol){
  geminiClient.getMyAvailableBalances({symbol:_symbol})
  .then(_res => console.log(_res))
  .catch(console.error);
}

module.exports =
{
  newOrder,
  getAllSymbols,
  getTicker,
  cancelOrder,
  cancelAllActiveOrders,
  getMyActiveOrders,
  getMyOrderStatus,
  getMyAvailableBalances
}
