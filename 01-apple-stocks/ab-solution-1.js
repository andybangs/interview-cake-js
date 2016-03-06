'use strict'

// 2016-03-02
// O(n^2) time and O(1) space... The naive implementation.

module.exports = function getMaxProfit(arr) {
  let maxProfit = arr[1] - arr[0]

  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let profit = arr[j] - arr[i]
      if (profit > maxProfit) maxProfit = profit
    }
  }

  return maxProfit
}
