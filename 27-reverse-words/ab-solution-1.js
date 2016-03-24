'use strict'

// 2016-03-24
// O(n) time & O(n) space

module.exports = function reverseWords(str) {
  let arr = str.split('')
  reverseArr(arr, 0, arr.length - 1)

  let currentStartIndex = 0

  for (let i = 0, len = arr.length; i <= len; i++) {
    if (arr[i] === ' ' || i === len) {
      reverseArr(arr, currentStartIndex, i - 1)
      currentStartIndex = i + 1
    }
  }

  return arr.join('')
}

function reverseArr(arr, start, end) {
  while (start < end) {
      const temp = arr[start]

      arr[start] = arr[end]
      arr[end] = temp

      start++
      end--
  }
}
