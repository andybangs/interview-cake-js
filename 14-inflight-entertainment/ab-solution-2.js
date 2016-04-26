'use strict'

// 2016-04-26
// O(n) time and O(n) space

// canWatchTwo :: Number -> [Number] -> Bool
module.exports = function canWatchTwo(flightLen, movieLens) {
  const desired = {}
  for (let i = 0, len = movieLens.length; i < len; i++) {
    const movieLen = movieLens[i]

    if (desired[movieLen]) return true

    const desiredLen = flightLen - movieLen
    desired[desiredLen] = true
  }
  return false
}
