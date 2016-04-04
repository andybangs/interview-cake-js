'use strict'

// 2016-04-04
// O(n*m) time and O(n) additional space, where n is the amount of money and m
// is the number of potential denominations.

// findCombos :: Number -> Array Number -> Number
module.exports = function findCombos(amount, denominations) {
  const waysOfDoingNcents = Array(amount + 1).fill(0)
  waysOfDoingNcents[0] = 1

  for (let i = 0, len = denominations.length; i < len; i++) {
    const coin = denominations[i]
    for (let higherAmt = coin; higherAmt <= amount; higherAmt++) {
      const higherAmtRem = higherAmt - coin
      waysOfDoingNcents[higherAmt] += waysOfDoingNcents[higherAmtRem]
    }
  }

  return waysOfDoingNcents[amount]
}
