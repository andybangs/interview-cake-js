'use strict'

// 2016-03-02
// O(n) time and O(1) space! The greedy approach.

module.exports = function getMaxProfit(arr) {
  let minPrice = arr[0]
  let maxProfit = arr[1] - arr[0]

  for (let i = 1, len = arr.length; i < len; i++) {
    let currentPrice = arr[i]
    let currentProfit = currentPrice - minPrice
    if (currentProfit > maxProfit) maxProfit = currentProfit
    if (currentPrice < minPrice) minPrice = currentPrice
  }

  return maxProfit
}
