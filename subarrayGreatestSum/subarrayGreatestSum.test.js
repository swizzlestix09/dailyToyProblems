var subarrayGreatestSum = require('./subarrayGreatestSum')

describe('Smallest Subarray with a Greater Sum (easy) - Grokk',()=>{
 var testParams = [
  [[2, 1, 5, 2, 3, 2], 7, 2],
  [ [2, 1, 5, 2, 8], 7, 1],
  [[3, 4, 1, 1, 6], 8, 3],
  [[], 8, 0],
  [[3, 4, 1, 1, 6], 25, 0],
 ];

 test.each(testParams)('Expect %j and given target %d we expect: %d', (testArray, testMin, expected)=>{
  expect(subarrayGreatestSum(testArray, testMin)).toEqual(expected);
 })
});