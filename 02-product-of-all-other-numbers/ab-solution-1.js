'use strict'

// 2016-03-03
// O(n^2) time, brute force solution

module.exports = function getProductsOfAllIntsExceptAtIndex(arr) {
  let products = []

  for (let i = 0, len = arr.length; i < len; i++) {
    let product = 1

    for (let j = 0; j < len; j++) {
      if (i !== j) product *= arr[j]
    }

    products.push(product)
  }
  
  return products
}
