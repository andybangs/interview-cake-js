'use strict'

const TempTracker = require('./ab-solution-1')

/**
 * You decide to test if your oddly-mathematical heating company is fulfilling
 * its All-Time Max, Min, Mean and Mode Temperature Guarantee™.
 *
 * Write a class TempTracker with these methods:
 *
 * 1. insert()—records a new temperature
 * 2. getMax()—returns the highest temp we've seen so far
 * 3. getMin()—returns the lowest temp we've seen so far
 * 4. getMean()—returns the mean ↴ of all temps we've seen so far
 * 5. getMode()—returns the mode ↴ of all temps we've seen so far
 * 6. Optimize for space and time. Favor speeding up the getter functions
 *  (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert()
 *  function.
 *
 * getMean() should return a float, but the rest of the getter functions can
 * return integers. Temperatures will all be inserted as integers. We'll record
 * our temperatures in Fahrenheit, so we can assume they'll all be in the range
 * 0..110.
 *
 * If there is more than one mode, return any of the modes.
 */

const testInput1 = [1, 5, 3, 2, 4]
const testInput2 = [-3, 2, 4, 5, -100]

const tempTracker = new TempTracker()
tempTracker.insert(70)
tempTracker.insert(75)
tempTracker.insert(81)
tempTracker.insert(69)
tempTracker.insert(69)


console.log(`Max: ${tempTracker.getMax()}`)     // 81
console.log(`Min: ${tempTracker.getMin()}`)     // 69
console.log(`Mean: ${tempTracker.getMean()}`)   // 72.8
console.log(`Mode: ${tempTracker.getMode()}`)   // 69
