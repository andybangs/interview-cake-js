'use strict'
const getRandom = require('./getRandom')

// 2016-03-09
// O(n) time and O(1) space.
// Fisher-Yates shuffle (Knuth shuffle).

module.exports = function inPlaceShuffle(arr) {
  if (arr.length <= 1) return arr

  const lastIndex = arr.length - 1

  return arr.forEach((el, i) => {
    let randomIndex = getRandom(i, lastIndex)
    let tempVal = arr[i]
    arr[i] = arr[randomIndex]
    arr[randomIndex] = tempVal
  })
}
