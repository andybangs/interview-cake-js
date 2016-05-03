'use strict'

const findDuplicate = require('./ab-solution-2')

/**
 * I have an array where every number in the range 1..n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 */

const testArr = [4, 8, 1, 2, 9, 7, 7, 6, 3, 5]

console.log(findDuplicate(testArr)) // 7
