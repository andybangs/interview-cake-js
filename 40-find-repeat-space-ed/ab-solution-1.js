'use strict'

// 2016-02-29
// O(n) time & O(n) space... Not good enough!

// Read the instructions carefully!
// This func returns ALL ints that appear more than once as an array.

module.exports = function findDuplicate(arr) {
  let seenInts = {}
  let returnArr = []

  for (let i = 0, len = arr.length; i < len; i++) {
    let entry = arr[i]

    if (!seenInts[entry]) {
      seenInts[entry] = 1
    } else {
      if (seenInts[entry] === 1) returnArr.push(entry)
      seenInts[entry]++
    }
  }

  return returnArr
}
