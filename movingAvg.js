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
    callback(_movingAverage)
  })
}
/*
// @dev Calculate Hourly Moving Average
// @var _asset, string
// @var _pair, string
// @var _hours, integer
*/
async function hourlyMovingAverage(_asset, _pair, _hours, callback){
  if(_hours>169){console.log("Only up to 169 hours allowed."); return}
  let _data = await cCompare.histoHour(_asset, _pair, function(_res){
    _res.reverse()
    let _sum = 0
    for(let _i = 0; _i < _hours; _i++){
      _sum += _res[_i].close
    }
    let _movingAverage = Math.floor(_sum/_hours)
    callback(_movingAverage)
  })

}
/*
// @dev Calculate Daily Moving Average
// @var _asset, string
// @var _pair, string
// @var _days, integer
*/
async function dailyMovingAverage(_asset, _pair, _days, callback){
  if(_days>31){console.log("Only up to 31 days allowed."); return}
  let _data = await cCompare.histoDay(_asset, _pair, function(_res){
    _res.reverse()
    let _sum = 0
    for(let _i = 0; _i < _days; _i++){
      _sum += _res[_i].close
    }
    let _movingAverage = Math.floor(_sum/_days)
    callback(_movingAverage)
  })
}
module.exports =
{
  minutely: minutelyMovingAverage,
  hourly: hourlyMovingAverage,
  daily: dailyMovingAverage
}
