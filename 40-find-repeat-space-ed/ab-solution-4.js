'use strict'

// 2016-02-29
// O(n lg n) time & O(1) space!

module.exports = function findDuplicate(arr) {
  let min = 1
  let max = arr.length - 1

  while (min < max) {
    let midpoint = Math.floor(min + ((max - min) / 2))
    let lowerMin = min;
    let lowerMax = midpoint;
    let upperMin = midpoint + 1;
    let upperMax = max;

    let lowerPossibleDistinctInts = lowerMax - lowerMin + 1

    let lowerActualDistinctInts = 0
    arr.forEach(int => {
      if (int >= lowerMin && int <= lowerMax) lowerActualDistinctInts++
    })

    if (lowerActualDistinctInts > lowerPossibleDistinctInts) {
      min = lowerMin
      max = lowerMax
    } else {
      min = upperMin
      max = upperMax
    }
  }

  return min;
}
