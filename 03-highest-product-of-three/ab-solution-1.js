'use strict'

// 2016-03-05
// O(n) time and O(1) additional space.

module.exports = function findHighestProductOfThree(arr) {
  if (arr.length < 3) throw new Error('Input arr must contain 3 or more ints')

  let highest = Math.max(arr[0], arr[1])
  let lowest = Math.min(arr[0], arr[1])
  let highestProductOfTwo = arr[0] * arr[1]
  let lowestProductOfTwo = arr[0] * arr[1]
  let highestProductOfThree = arr[0] * arr[1] * arr[2]

  for (let i = 2; i < arr.length; i++) {
    let current = arr[i]

    highestProductOfThree = Math.max(
      highestProductOfThree,
      current * highestProductOfTwo,
      current * lowestProductOfTwo
    )

    highestProductOfTwo = Math.max(
      highestProductOfTwo,
      current * highest,
      current * lowest
    )

    lowestProductOfTwo = Math.min(
      lowestProductOfTwo,
      current * highest,
      current * lowest
    )

    highest = Math.max(highest, current)

    lowest = Math.min(lowest, current)
  }

  return highestProductOfThree
}
