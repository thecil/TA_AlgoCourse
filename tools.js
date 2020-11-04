module.exports = {
  //time usage
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
  //default structure of a gemini order
  defaultOrder: {
    amount: '',
    price: '',
    side: '',
    symbol: '',
    options:["immediate-or-cancel"]
  }
}
