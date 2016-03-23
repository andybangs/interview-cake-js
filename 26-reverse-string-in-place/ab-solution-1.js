'use strict'

// 2016-03-23

module.exports = function reverseString(str) {
  const arr = str.split('')

  for (let i = 0, halfLen = Math.floor(arr.length / 2); i < halfLen; i++) {
    const temp = arr[i]
    const swapIndex = arr.length - 1 - i
    arr[i] = arr[swapIndex]
    arr[swapIndex] = temp
  }

  return arr.join('')
}
