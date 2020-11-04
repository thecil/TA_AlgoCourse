const gemini = require('./geminiLogic') //my gemini module
const movingAverage = require('./movingAvg') //my crypto compare module
const tools = require('./tools') //my tools snippet

//IF BTC PRICE < MA ==> BUY
//IF BTC PRICE > MA ==> SELL
var hasPosition = false
//Fill this data to start strategy
var setup = {
  _asset:'BTC',
  _pair:'USD',
  _time:4,//hours
  _amountBuy: 0.1,
  _amountSell: 0.07
}
var strategy = function(){
  console.log("   ")
  console.log("****************")
  console.log("Setting Entry")

  //MA hourly
  movingAverage.hourly(setup._asset, setup._pair, setup._time, function(_movAvg){
    //get actual price
    gemini.getTicker((setup._asset + setup._pair), function(_ticker){
      //save last ticker price
      var _price = _ticker.last
      console.log("Pair: ", setup._asset, "/" ,setup._pair)
      console.log("Hourly MA for: ", setup._time, "hours, is: ", _movAvg)
      console.log("Ticker price: ", _price)
      //Price below MA, buy
      if(_price < _movAvg && !hasPosition){
        console.log('Buy opportunity: ', 'Price below MA for: ', Math.floor(_movAvg - _price))
        //set order data for gemini
        let _orderData = tools.defaultOrder
        _orderData.amount = setup._amountBuy
        _orderData.price = _price
        _orderData.side = 'buy'
        _orderData.symbol = (setup._asset + setup._pair)
        //create a order on gemini
        gemini.newOrder(_orderData, function(_marketOrder){
          console.log('Order created')
          console.log(_marketOrder)
          hasPosition = true
          setTimeout(strategy, tools.seconds(5))
        })
      //Price above MA, sell
      }else if(_price > _movAvg && hasPosition){
        console.log('Sell opportunity: ', 'Price above MA for: ', Math.floor(_price - _movAvg))
        //set order data for gemini
        let _orderData = tools.defaultOrder
        _orderData.amount = setup._amountSell
        _orderData.price = _price
        _orderData.side = 'sell'
        _orderData.symbol = (setup._asset + setup._pair)
        //create a order on gemini
        gemini.newOrder(_orderData, function(_marketOrder){
          console.log('Order created')
          console.log(_marketOrder)
          hasPosition = false
          setTimeout(strategy, tools.seconds(5))
        })
      }else{
        console.log('HOLD')
        setTimeout(strategy, tools.seconds(5))
      }
    })
  })
}

strategy()
