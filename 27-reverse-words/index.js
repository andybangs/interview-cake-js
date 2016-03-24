'use strict'

const reverseWords = require('./ab-solution-1')

/**
 * You're working on a secret team solving coded transmissions.
 *
 * Your team is scrambling to decipher a recent message, worried it's a plot to
 * break into a major European National Cake Vault. The message has been mostly
 * deciphered, but all the words are backwards! Your colleagues have handed off
 * the last step to you.
 *
 * Write a function reverseWords() that takes a string message and reverses the
 * order of the words in-place.
 *
 * Since strings in JavaScript are immutable, first convert the string into
 * an array of characters, do the in-place reversal on that array, and re-join
 * that array into a string before returning it. This isn't technically
 * "in-place," and the array of characters will cost O(n) additional space,
 * so if you're comfortable coding in a language with mutable strings, that'd be
 * even better!
 *
 * For example:
 * var msg = 'find you will pain only go you recordings security the into if';
 *
 * reverseWords(msg);
 * // returns: 'if into the security recordings you go only pain will you find'
 *
 * When writing your function, assume the message contains only letters and
 * spaces, and all words are separated by one space.
 */

const testStr = 'find you will pain only go you recordings security the into if'

console.log(testStr)
console.log(reverseWords(testStr))
