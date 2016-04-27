'use strict'

// 2016-04-26
// O(n) time and O(1) space

// fib :: Int -> Int
module.exports = function fib(n) {
  if (n === 0 || n === 1) return n

  let prev = 0
  let prevprev = 1
  let current = 0

  for (let i = 0; i < n; i++) {
    current = prev + prevprev
    prevprev = prev
    prev = current
  }

  return current
}
