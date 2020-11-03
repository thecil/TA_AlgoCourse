const cCompare = require('./ccLogic') //my crypto compare module
/*
// @dev Calculate Minutely Moving Average
// @var _asset, string
// @var _pair, string
// @var _minutes, integer
*/
async function minutelyMovingAverage(_asset, _pair, _minutes){
  if(_minutes>1440){console.log("Only up to 1441 minutes allowed."); return}
  let _data = await cCompare.histoMinute(_asset, _pair, function(_res){
    _res.reverse()
    let _sum = 0
    for(let _i = 0; _i < _minutes; _i++){
      _sum += _res[_i].close
    }
    let _movingAverage = Math.floor(_sum/_minutes)
    console.log("Pair: ", _asset, "/", _pair)
    console.log("Minutely MA for: ", _minutes, "minutes, is: ", _movingAverage)
  })
  return _data
}
/*
// @dev Calculate Hourly Moving Average
// @var _asset, string
// @var _pair, string
// @var _hours, integer
*/
async function hourlyMovingAverage(_asset, _pair, _hours){
  if(_hours>169){console.log("Only up to 169 hours allowed."); return}
  let _data = await cCompare.histoHour(_asset, _pair, function(_res){
    _res.reverse()
    let _sum = 0
    for(let _i = 0; _i < _hours; _i++){
      _sum += _res[_i].close
    }
    let _movingAverage = Math.floor(_sum/_hours)
    console.log("Pair: ", _asset, "/" ,_pair)
    console.log("Hourly MA for: ", _hours, "hours, is: ", _movingAverage)
  })
  return _data
}
/*
// @dev Calculate Daily Moving Average
// @var _asset, string
// @var _pair, string
// @var _days, integer
*/
async function dailyMovingAverage(_asset, _pair, _days){
  if(_days>31){console.log("Only up to 31 days allowed."); return}
  let _data = await cCompare.histoDay(_asset, _pair, function(_res){
    _res.reverse()
    let _sum = 0
    for(let _i = 0; _i < _days; _i++){
      _sum += _res[_i].close
    }
    let _movingAverage = Math.floor(_sum/_days)
    console.log("Pair: ", _asset, "/", _pair)
    console.log("Daily MA for: ", _days, "days is: ", _movingAverage)
  })
  callback(_data)
}
module.exports =
{
  minutely: minutelyMovingAverage,
  hourly: hourlyMovingAverage,
  daily: dailyMovingAverage
}
