'use strict'

// 2016-04-26
// O(n^2) time, brute force solution

// canWatchTwo :: Number -> [Number] -> Bool
module.exports = function canWatchTwo(flightLen, movieLens) {
  for (let i = 0, len = movieLens.length; i < len; i++) {
    const movie1 = movieLens[i]
    for (let j = i + 1; j < len; j++) {
      const movie2 = movieLens[j]
      if (movie1 + movie2 === flightLen && i !== j) {
        return true
      }
    }
  }
  return false
}
