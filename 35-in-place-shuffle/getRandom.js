'use strict'

module.exports = function getRandom(floor, ceil) {
  return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
}
