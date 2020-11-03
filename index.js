const gemini = require('./geminiLogic') //my gemini module
const movingAverage = require('./movingAvg') //my crypto compare module
const tools = require('./tools') //my tools snippet

/*
movingAverage.minutely('BTC', 'USD', 1440)
movingAverage.hourly('ETH', 'USD', 168)
movingAverage.daily('EOS', 'USD', 31)

async function testo(){
  let res = await gemini.getAllSymbols()
  return res
}
*/

//IF BTC PRICE < MA ==> BUY
//IF BTC PRICE > MA ==> SELL

var strategy = function(){
    console.log("   ")
    console.log("****************")
    console.log("Setting Entry")
    setTimeout(strategy, tools.seconds(5))
    movingAverage.hourly('BTC', 'USD', 4)
    gemini.getTicker('btcusd')
    //gemini.newOrder(tools.defBuyOrder)
  }


strategy()
