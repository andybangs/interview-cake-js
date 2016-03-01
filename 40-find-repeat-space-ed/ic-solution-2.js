'use strict'

// O(n^2) time & O(1) space... Too slow!

module.exports = function findRepeatBruteForce(numbers) {
  for (var needle = 1; needle < numbers.length; needle++) {
      var hasBeenSeen = false;
      for (var i = 0; i < numbers.length; i++) {
          var number = numbers[i];
          if (number === needle) {
              if (hasBeenSeen) {
                  return number;
              } else {
                  hasBeenSeen = true;
              }
          }
      }
  }

  // whoops--no duplicate
  throw new Error('no duplicate!');
}
