'use strict'

module.exports = function getMaxProfit(stockPricesYesterday) {

  var maxProfit = 0;

  // go through every price and time
  for (var earlierTime = 0; earlierTime < stockPricesYesterday.length; earlierTime++) {
      var earlierPrice = stockPricesYesterday[earlierTime];

      // and go through all the LATER prices
      for (var laterTime = earlierTime + 1; laterTime < stockPricesYesterday.length; laterTime++) {
          var laterPrice = stockPricesYesterday[laterTime];

          // see what our profit would be if we bought at the
          // min price and sold at the current price
          var potentialProfit = laterPrice - earlierPrice;

          // update maxProfit if we can do better
          maxProfit = Math.max(maxProfit, potentialProfit);
      }
  }

  return maxProfit;
}
