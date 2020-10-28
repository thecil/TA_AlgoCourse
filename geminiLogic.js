
//internal variables for values
var myOrders = []

function insertOrder(_data){
  let orderLenght = (myOrders.length)
  myOrders.push(_data)
  return(console.log(`Order saved: ${myOrders.length}, ${myOrders[orderLenght].symbol}`))
}



//GEMINI CONFIG
const GeminiAPI = require("gemini-api").default;
const key = "account-5hmfRHz791N4PLpleOmJ";
const secret = "27sn6asLRQkipgKB68XMBR6QpuTq"
const geminiClient = new GeminiAPI({key, secret, sandbox:true});


//GEMINI LOGIC
/* @dev Create new trade order
// _amount, float
// _price, int
// _side, string
// _symbol string
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
  .catch(_err => console.log(_err));
}
//newOrder(0.2, 13000, "buy", "btcusd")

//Get all trading symbols Ex: "btcusd"
function getAllSymbols(){
  geminiClient.getAllSymbols()
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get market price and data from a symbol Ex: "btcusd"
function getTicker(_symbol){
  geminiClient.getTicker({symbol:_symbol})
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//cancel an order by ID
function cancelOrder(_order_id){
  geminiClient.cancelOrder({order_id:_order_id})
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//cancel ALL my orders
function cancelAllActiveOrders(){
  geminiClient.cancelAllActiveOrders()
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get all my trading active orders
function getMyActiveOrders(_symbol){
  geminiClient.getMyActiveOrders({symbol:_symbol})
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get status from an order by ID
function getMyOrderStatus(_order_id){
  geminiClient.getMyOrderStatus({order_id:_order_id})
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}

//get Balances
function getMyAvailableBalances(_symbol){
  geminiClient.getMyAvailableBalances({symbol:_symbol})
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
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
