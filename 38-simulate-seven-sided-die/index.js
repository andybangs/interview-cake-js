'use strict'

const rand7 = require('./ab-solution-1')

/**
 * You have a function rand5() that generates a random integer from 1 to 5. Use
 * it to write a function rand7() that generates a random integer from 1 to 7.
 *
 * rand5() returns each integer with equal probability. rand7() must also return
 * each integer with equal probability.
 */

for (let i = 0; i < 10; i++) {
  console.log(rand7())
}
