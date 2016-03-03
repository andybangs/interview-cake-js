'use strict'

const getMaxProfit = require('./ab-solution-2')

/**
 * Writing programming interview questions hasn't made me rich. Maybe trading
 * Apple stocks will.
 *
 * Suppose we could access yesterday's stock prices as an array, where:
 * - The indices are the time in minutes past trade opening time, which was
 *   9:30am local time.
 * - The values are the price in dollars of Apple stock at that time.
 *
 * So if the stock cost $500 at 10:30am, stockPricesYesterday[60] = 500.
 *
 * Write an efficient function that takes stockPricesYesterday and returns the
 * best profit I could have made from 1 purchase and 1 sale of 1 Apple stock
 * yesterday.
 *
 * Assume you already have a stack implementation and it gives O(1)O(1) time
 * push and pop.
 *
 * No "shorting"—you must buy before you sell. You may not buy and sell in the
 * same time step (at least 1 minute must pass).
 */

const testInput1 = [10, 7, 5, 8, 11, 9];
const testInput2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(testInput1, getMaxProfit(testInput1))
console.log(testInput2, getMaxProfit(testInput2))
