const gemini = require('./geminiLogic') //my gemini module
const cCompare = require('./ccLogic') //my crypto compare module
//test modules
console.log(gemini)
console.log(cCompare)

/*
// 100 HOUR MA
// 1 get data from CryptoCompare
// 2 calculate MA from 100 past hours
// 3 check continuously if price is crossing 100 MA => BUY/SELL/HOLD
*/

async function test(){
  var myTest = []
  myTest = await cCompare.histoDay('BTC', 'USD')
  console.log(myTest)
}

test()
