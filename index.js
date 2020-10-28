const gemini = require('./geminiLogic') //my gemini module
const movingAverage = require('./movingAvg') //my crypto compare module

movingAverage.minutely('BTC', 'USD', 1440)
movingAverage.hourly('ETH', 'USD', 168)
movingAverage.daily('EOS', 'USD', 31)
