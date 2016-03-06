'use strict'

const findHighestProductOfThree = require('./ab-solution-1')

/**
 * Given an arrayOfInts, find the highestProduct you can get from three of the
 * integers.
 *
 * The input arrayOfInts will always have at least three integers.
 */

const testInput1 = [1, 5, 3, 2, 4]
const testInput2 = [-3, 2, 4, 5, -100]


console.log(`Input: ${testInput1} Output: ${findHighestProductOfThree(testInput1)}`)
console.log(`Input: ${testInput2} Output: ${findHighestProductOfThree(testInput2)}`)
