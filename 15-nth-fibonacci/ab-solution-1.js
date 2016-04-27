'use strict'

// 2016-04-26
// O(2^n) runtime. Yikes!

// fib :: Int -> Int
module.exports = function fib(n) {
  if (n === 0 || n === 1) return n
  return fib(n - 1) + fib(n - 2)
}
