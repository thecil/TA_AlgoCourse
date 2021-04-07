// This source code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © thecilsurf

//@version=4
strategy(title="Moving Average Crossing", overlay=true, initial_capital=2000, commission_type=strategy.commission.percent, commission_value=0.2)
//DATE & TIME
fromMonth = input(defval=1, title="From month", minval=1)
fromDay = input(defval=1, title="From day", minval=1)
fromYear = input(defval=2019, title="From year", minval=2014)
toMonth = input(defval=1, title="To month", minval=1)
toDay = input(defval=1, title="To day", minval=1)
toYear = input(defval=2025, title="To year", minval=2014)

//DEFINITIONS
shortMa = sma(close, 50)
longMa = sma(close, 200)
longCross = crossover(shortMa, longMa)
shortCross = crossover(longMa, shortMa)
max_risk = strategy.equity * 0.01
stoploss = 100
size = max_risk/stoploss

// Get RSI input
rsiSource = input(title="RSI Source", type=input.source, defval=close)
rsiLength = input(title="RSI Length", type=input.integer, defval=14)
rsiOverbought = input(title="RSI Overbought Level", type=input.integer, defval=80)
rsiOversold = input(title="RSI Oversold Level", type=input.integer, defval=20)
// Get RSI value
rsiValue = rsi(rsiSource, rsiLength)
isRsiOB = rsiValue >= rsiOverbought
isRsiOS = rsiValue <= rsiOversold

//LOGIC
timeInRange = (time > timestamp(fromYear, fromMonth, fromDay, 00, 00)) and (time < timestamp(toYear, toMonth, toDay, 23, 59))
longSignal = timeInRange and isRsiOB
shortSignal = timeInRange and isRsiOS

//CHART DRAW
plot(shortMa, color=color.orange)
plot(longMa, color=color.red)
plotshape(isRsiOB, title="Overbought", location=location.abovebar, color=color.red, transp=0, style=shape.triangledown, text="OB")
plotshape(isRsiOS, title="Oversold", location=location.belowbar, color=color.green, transp=0, style=shape.triangleup, text="OS")

//POSITIONS
strategy.entry(id="longPosition", long=true, qty=size, when=longSignal)
strategy.entry(id="shortPosition", long=false, qty=size, when=shortSignal)

strategy.exit("Exit Long", from_entry = "longPosition", loss = stoploss*100, profit = stoploss*200)
strategy.exit("Exit Short", from_entry = "shortPosition", loss = stoploss*100, profit = stoploss*200)
