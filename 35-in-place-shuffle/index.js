'use strict'

const inPlaceShuffle = require('./ab-solution-1')

/**
 * Write a function for doing an in-place shuffle of an array.
 *
 * The shuffle must be "uniform," meaning each item in the original array must
 * have the same probability of ending up in each spot in the final array.
 *
 * Assume that you have a function getRandom(floor, ceiling) for getting a
 * random integer that is >=floor and <=ceiling.
 */

const testArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

console.log(testArr1);

inPlaceShuffle(testArr1);

console.log(testArr1);
