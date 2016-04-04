'use strict'

const findCombos = require('./ab-solution-1')

/**
 * Imagine you landed a new job as a cashier...
 *
 * Your quirky boss found out that you're a programmer and has a weird request
 * about something they've been wondering for a long time.
 *
 * Write a function that, given:
 *  1. an amount of money
 *  2. an array of coin denominations
 * computes the number of ways to make amount of money with coins of the
 * available denominations.
 *
 * Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your
 * program would output 4—the number of ways to make 4¢ with those
 * denominations:
 *
 * 1¢, 1¢, 1¢, 1¢
 * 1¢, 1¢, 2¢
 * 1¢, 3¢
 * 2¢, 2¢
 */

const amount = 4
const denominations = [2, 3, 4]

console.log(`Input: ${amount}, ${denominations}`)
console.log(`Output: ${findCombos(amount, denominations)}`) // 4
