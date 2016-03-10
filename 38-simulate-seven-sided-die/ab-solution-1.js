'use strict'
const rand5 = require('./rand5')

// 2016-03-09
// Worst-case O(∞) time (we might keep re-rolling forever) and O(1) space.

module.exports = function rand7() {
  while (true) {
      const roll1 = rand5()
      const roll2 = rand5()
      const num = (roll1 - 1) * 5 + (roll2 - 1) + 1

      if (num > 21) continue;

      return num % 7 + 1;
  }
}
