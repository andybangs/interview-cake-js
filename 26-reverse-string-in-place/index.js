'use strict'

const reverseString = require('./ab-solution-1')

/**
 * Write a function to reverse a string in-place.
 *
 * Since strings in JavaScript are immutable, first convert the string into
 * an array of characters, do the in-place reversal on that array, and re-join
 * that array into a string before returning it. This isn't technically
 * "in-place," and the array of characters will cost O(n) additional space,
 * so if you're comfortable coding in a language with mutable strings, that'd be
 * even better!
 */

let testStr1 = "Google opens access to its speech recognition API"

console.log(testStr1)
console.log(reverseString(testStr1))
