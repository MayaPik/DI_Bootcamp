function birthdayCakeCandles(candles) {
    let tallest =  candles.sort()[candles.length-1];
    return candles.filter(candle => candle ===tallest).length
}

let arr = [2,4,4,1]
birthdayCakeCandles(arr)