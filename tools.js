module.exports = {
  seconds: function(_data){
    return(_data*1000)
  },
  minute: function(_data){
    let _minute = seconds(60); //60 seconds
    return(_data*_minute)
  },
  hour: function(_data){
    let _hour = minute(60);
    return(_data*_hour)
  },
  defBuyOrder: {
    amount: 1,
    price: 13675,
    side: "buy",
    symbol: "BTCUSD",
    options:["immediate-or-cancel"]
  },
  defSellOrder: {
    amount: 10,
    price: 13500,
    side: "sell",
    symbol: "BTCUSD",
    options:["immediate-or-cancel"]
  }
}
