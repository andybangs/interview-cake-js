'use strict'

module.exports = function getMaxProfit(stockPricesYesterday) {

  var minPrice = stockPricesYesterday[0];
  var maxProfit = 0;

  for (var i = 0; i < stockPricesYesterday.length; i++) {
      var currentPrice = stockPricesYesterday[i];

      // ensure min_price is the lowest price we've seen so far
      minPrice = Math.min(minPrice, currentPrice);

      // see what our profit would be if we bought at the
      // min price and sold at the current price
      var potentialProfit = currentPrice - minPrice;

      // update maxProfit if we can do better
      maxProfit = Math.max(maxProfit, potentialProfit);
  }

  return maxProfit;
}
