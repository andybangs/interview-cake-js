'use strict'

const canWatchTwo = require('./ab-solution-2')

/**
 * You've built an in-flight entertainment system with on-demand movie
 * streaming.
 *
 * Users on longer flights like to start a second movie right when their first
 * one ends, but they complain that the plane usually lands before they can see
 * the ending. So you're building a feature for choosing two movies whose total
 * runtimes will equal the exact flight length.
 *
 * Write a function that takes an integer flightLength (in minutes) and an array
 * of integers movieLengths (in minutes) and returns a boolean indicating
 * whether there are two numbers in movieLengths whose sum equals flightLength.
 *
 * When building your function:
 * - Assume your users will watch exactly two movies
 * - Don't make your users watch the same movie twice
 * - Optimize for runtime over memory
 */

const flightLength1 = 180
const movieLengths1 = [200, 95, 120, 85, 105]

const flightLength2 = 100
const movieLengths2 = [65, 45, 120, 90, 99]

const flightLength3 = 100
const movieLengths3 = [50, 120, 90, 99]

console.log(canWatchTwo(flightLength1, movieLengths1))    // true
console.log(canWatchTwo(flightLength2, movieLengths2))    // false
console.log(canWatchTwo(flightLength3, movieLengths3))    // false
