'use strict'

// 2016-03-08
// O(1) time for each function, and O(1) space related to input! 

module.exports = function TempTracker() {
  let numTemps = 0
  let totalTemp = 0
  let max = 0
  let min = 110

  const occurrences = Array(110).fill(0)
  let numOccurrences = 0
  let mode = null

  function insert(temp) {
    if (temp < 0 || temp > 110) throw new Error('invalid temp')

    numTemps++
    totalTemp += temp
    max = Math.max(temp, max)
    min = Math.min(temp, min)

    occurrences[temp]++

    if (occurrences[temp] > numOccurrences) {
      numOccurrences = occurrences[temp]
      mode = temp
    }
  }

  return {
    insert,
    getMax: () => numTemps ? max : new Error('no temps'),
    getMin: () => numTemps ? min : new Error('no temps'),
    getMean: () => numTemps ? totalTemp / numTemps : new Error('no temps'),
    getMode: () => numTemps ? mode : new Error('no temps'),
  }
}
