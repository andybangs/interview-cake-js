'use strict'

const findDuplicate = require('./ab-solution-2')

/**
 * Find a duplicate, Space Edition™.
 *
 * We have an array of integers, where:
 * - The integers are in the range 1..n
 * - The array has a length of n+1
 *
 * It follows that our array has at least one integer which appears at least
 * twice. But it may have several duplicates, and each duplicate may appear more
 * than twice.
 *
 * Write a function which finds any integer that appears more than once in our
 * array.
 *
 * We're going to run this function on our new, super-hip Macbook Pro With
 * Retina Display™. Thing is, the damn thing came with the RAM soldered right to
 * the motherboard, so we can't upgrade our RAM. So we need to optimize for
 * space!
 */

const testInput1 = [1, 2, 2, 3, 3, 3]
const testInput2 = [1, 1, 1, 1, 1, 1, 5]

console.log('Input:', testInput1)
console.log('Output:', findDuplicate(testInput1))

console.log('Input:', testInput2)
console.log('Output:', findDuplicate(testInput2))
