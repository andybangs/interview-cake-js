'use strict'

// O(n) time & O(n) space... Not good enough!

module.exports = function findRepeat(numbers) {
  var numbersSeen = new Set();
  for (var i = 0; i < numbers.length; i++) {
      var number = numbers[i];
      if (numbersSeen.has(number)) {
          return number;
      } else {
          numbersSeen.add(number);
      }
  }

  // whoops--no duplicate
  throw new Error('no duplicate!');
}
