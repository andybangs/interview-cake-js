'use strict'

const getProductsOfAllIntsExceptAtIndex = require('./ab-solution-3')

/**
 * You have an array of integers, and for each index you want to find the
 * product of every integer except the integer at that index.
 *
 * Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of
 * integers and returns an array of the products.
 *
 * For example, given:
 * [1, 7, 3, 4]
 *
 * your function would return:
 * [84, 12, 28, 21]
 *
 * by calculating:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * Do not use division in your solution.
 */

const testInput1 = [1, 7, 3, 4]
const testInput2 = [-10, 0, 5, -2]
const testInput3 = [4]
const testInput4 = []

console.log(`Input: ${testInput1} Output: ${getProductsOfAllIntsExceptAtIndex(testInput1)}`)
console.log(`Input: ${testInput2} Output: ${getProductsOfAllIntsExceptAtIndex(testInput2)}`)
console.log(`Input: ${testInput3} Output: ${getProductsOfAllIntsExceptAtIndex(testInput3)}`)
console.log(`Input: ${testInput4} Output: ${getProductsOfAllIntsExceptAtIndex(testInput4)}`)
