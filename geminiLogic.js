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
function newOrder(_data, callback){
  geminiClient.newOrder({amount:_data.amount,
    price:_data.price,
    side:_data.side,
    symbol:_data.symbol,
    options:_data.options})
    .then(_res => {
      callback(_res)
    })
  .catch(console.error);
}
/*
//Get all trading symbols Ex: "btcusd"
*/
function getAllSymbols(callback){
  geminiClient.getAllSymbols()
  .then(_res => {
    callback(_res)
  })
  .catch(console.error);
}
/*
//get market price and data from a symbol Ex: "btcusd"
// @var _symbol string
*/
function getTicker(_symbol, callback){
  geminiClient.getTicker(_symbol)
  .then(_res => {
    callback(_res)
  })
  .catch(console.error);
}
/*
//cancel an order by ID
// @var _order_id, integer
*/
function cancelOrder(_order_id, callback){
  geminiClient.cancelOrder({order_id:_order_id})
  .then(_res => {
    callback(_res)
  })
  .catch(console.error);
}
/*
//cancel ALL my orders
*/
function cancelAllActiveOrders(callback){
  geminiClient.cancelAllActiveOrders()
  .then(_res => {
    callback(_res)
  })
  .catch(console.error);
}
/*
//get all my trading active orders
// @var _symbol string
*/
function getMyActiveOrders(_symbol, callback){
  geminiClient.getMyActiveOrders({symbol:_symbol})
  .then(_res => {
    callback(_res)
  })
  .catch(console.error);
}
/*
//get status from an order by ID
// @var _order_id, integer
*/
function getMyOrderStatus(_order_id, callback){
  geminiClient.getMyOrderStatus({order_id:_order_id})
  .then(_res => {
    callback(_res)
  })
  .catch(console.error);
}
/*
//get Balances
// @var _symbol string
*/
function getMyAvailableBalances(_symbol, callback){
  geminiClient.getMyAvailableBalances({symbol:_symbol})
  .then(_res => {
    callback(_res)
  })
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
