const maxSumSubArraySzK = require('./maxSumSubarraySizeK');

describe( 'Maximum Sum Subarray of Size K (easy)', () => {
 var testValues = [
 [ [2, 1, 5, 1, 3, 2], 3 , 9],
 [ [1, 2, 4, 7, 8, 9, 9, 7, 5, 3, 2], 2 , 18],
 [ [1], 2 , 0]
 ]
test.each(testValues)( 'The function takes Array %j and K %d and produces result %d', (array, k, expected) => {
  expect(maxSumSubArraySzK(array, k)).toBe(expected)
})

})

