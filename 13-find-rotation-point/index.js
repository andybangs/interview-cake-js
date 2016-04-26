'use strict'

const findRotationPoint = require('./ab-solution-2')

/**
 * I want to learn some big words so people think I'm smart.
 * I opened up a dictionary to a page in the middle and started flipping
 * through, looking for words I didn't know. I put each word I didn't know at
 * increasing indices in a huge array I created in memory. When I reached the
 * end of the dictionary, I started from the beginning and did the same thing
 * until I reached the page I started at.
 *
 * Now I have an array of words that are mostly alphabetical, except they start  * somewhere in the middle of the alphabet, reach the end, and then start from
 * the beginning of the alphabet. In other words, this is an alphabetically
 * ordered array that has been "rotated." For example:
 *
 * var words = [
 *   'ptolemaic',
 *   'retrograde',
 *   'supplant',
 *   'undulate',
 *   'xenoepist',
 *   'asymptote', // <-- rotates here!
 *   'babka',
 *   'banoffee',
 *   'engender',
 *   'karpatka',
 *   'othellolagkage',
 * ];
 *
 * Write a function for finding the index of the "rotation point," which is
 * where I started working from the beginning of the dictionary. This array is
 * huge (there are lots of words I don't know) so we want to be efficient here.
 */

const words1 = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
]

const words2 = [
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'solecism',
  'tarweed',
  'triste',
]

const words3 = [
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'solecism',
  'tarweed',
  'triste',
  'undulate',
  'xenoepist',
]

console.log(findRotationPoint(words1))    // 5
console.log(findRotationPoint(words2))    // 2
console.log(findRotationPoint(words3))    // 1
