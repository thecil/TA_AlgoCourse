//CRYPTO COMPARE CONFIG
global.fetch = require("node-fetch") //required library for cryptoCompare
const cryptoCAPIKey = "3603e1f71280705d1a7986d91b65e988d1ebe675dd9ddd7c82dd76413a2c9e4b"
const CryptoCompareAPI = require("cryptocompare")
CryptoCompareAPI.setApiKey(cryptoCAPIKey)

//CRYPTO COMPARE LOGIC
/*
// @dev Get the current list of all cryptocurrencies
// and the following information about each coin.
*/
function coinList(){
  CryptoCompareAPI.coinList()
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// @dev get price of coin, or multiple prices
// @Example: price('BTC', 'USD')
// @Example2: price('BTC', ['USD', 'EUR'])
// @var fsym (String) From Symbol
// @var tsyms (Array of Strings | String) To Symbol(s)
*/
function price(_fsym, _tsyms){
  CryptoCompareAPI.price(_fsym, _tsyms)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// @dev Works like price(),
// except it allows you to specify a matrix of From Symbols.
// @Example: priceMulti(['BTC', 'ETH'], ['USD', 'EUR'])
// @var fsyms (String) From Symbol(s)
// @var tsyms (Array of Strings | String) To Symbol(s)
*/
function priceMulti(_fsyms, _tsyms){
  CryptoCompareAPI.priceMulti(_fsyms, _tsyms)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get all the current trading info (price, vol, open, high, low, etc.)
// of any list of cryptocurrencies in any other currency.
// @Example: priceFull(['BTC', 'ETH'], ['USD', 'EUR'])
// @var fsyms (String) From Symbol(s)
// @var tsyms (Array of Strings | String) To Symbol(s)
*/
function priceFull(_fsyms, _tsyms){
  CryptoCompareAPI.priceFull(_fsyms, _tsyms)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get the price of any cryptocurrency in any other currency at a given timestamp.
// The price comes from the daily info - so it would be the price
// at the end of the day GMT based on the requested timestamp.
// @Example: priceHistorical('BTC', ['USD', 'EUR'], new Date('2017-01-01'))
// @var fsyms (String) From Symbol(s)
// @var tsyms (Array of Strings | String) To Symbol(s)
// @var time (Date) Date in history that you want price data for
*/
function priceHistorical(_fsym, _tsyms, _time){
  CryptoCompareAPI.priceFull(_fsym, _tsyms, _time)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Compute the current trading info (price, vol, open, high, low etc)
// of the requested pair as a volume weighted average based on the markets requested..
// @Example: generateAvg('BTC', 'USD', ['Coinbase', 'Kraken', 'Bitstamp', 'Bitfinex'])
// @var fsyms (String) From Symbol(s)
// @var tsyms (Array of Strings | String) To Symbol(s)
// @var markets (Array) Array of markets to base the average on.
*/
function generateAvg(_fsym, _tsym, _markets){
  CryptoCompareAPI.generateAvg(_fsym, _tsym, _markets)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get top pairs by volume for a currency.
// @Example: topPairs('BTC', 2)
// @var fsym (String) From Symbol
// @var limit (Number) Limit the number of pairs you receive (default 5).
*/
function topPairs(_fsym, _limit){
  CryptoCompareAPI.topPairs(_fsym, _limit)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get top exchanges by volume for a currency pair.
// @Example: topExchanges('BTC', 'USD', 2)
// @var fsym (String) From Symbol
// @var tsym (String) To Symbol
// @var limit (Number) Limit the number of exchanges you receive (default 5).
*/
function topExchanges(_fsym, _tsym, _limit){
  CryptoCompareAPI.topExchanges(_fsyms, _tsym, _limit)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get full data on top exchanges by volume for a currency pair.
// @Example: topExchangesFull('BTC', 'USD', 2)
// @var fsym (String) From Symbol
// @var tsym (String) To Symbol
// @var limit (Number) Limit the number of exchanges you receive (default 5).
*/
function topExchangesFull(_fsym, _tsym, _limit){
  CryptoCompareAPI.topExchangesFull(_fsym, _tsym, _limit)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get open, high, low, close, volumefrom and volumeto from the
// daily historical data.
// The values are based on 00:00 GMT time.
// @Example: histoDay('BTC', 'USD')
// @var fsym (String) From Symbol
// @var tsym (String) To Symbol
*/
function histoDay(_fsym, _tsym){
  CryptoCompareAPI.histoDay(_fsym, _tsym)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get open, high, low, close, volumefrom and volumeto from the
// hourly historical data.
// @Example: histoHour('BTC', 'USD')
// @var fsym (String) From Symbol
// @var tsym (String) To Symbol
*/
function histoHour(_fsym, _tsym){
  CryptoCompareAPI.histoHour(_fsym, _tsym)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
/*
// Get open, high, low, close, volumefrom and volumeto from the
// minute-by-minute historical data.
// @Example: histoMinute('BTC', 'USD')
// @var fsym (String) From Symbol
// @var tsym (String) To Symbol
*/
function histoMinute(_fsym, _tsym){
  CryptoCompareAPI.histoHour(_fsym, _tsym)
  .then(_res => console.log(_res))
  .catch(_err => console.log(_err));
}
module.exports =
{
  coinList,
  price,
  priceMulti,
  priceFull,
  priceHistorical,
  generateAvg,
  topPairs,
  topExchanges,
  topExchangesFull,
  histoDay,
  histoHour,
  histoMinute
}
