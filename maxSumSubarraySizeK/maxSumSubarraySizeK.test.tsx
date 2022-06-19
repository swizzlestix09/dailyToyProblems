import { maxSumSubArraySzK } from './maxSumSubarraySizeK';

describe( 'Maximum Sum Subarray of Size K (easy)', () => {
 var testValues = [
 [ [2, 1, 5, 1, 3, 2], 3 , 9]
 ]
test.each(testValues)( `The function takes Array %i and K %i and produces result %i `, (array, k, expected) => {
  expect(maxSumSubArraySzK(array, k)).toBe(expected)
})

})

