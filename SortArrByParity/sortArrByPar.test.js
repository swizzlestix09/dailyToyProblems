const sortArrayByParityII = require('./sortArrByPar');

test('Expected [4,2,5,7] to equal [5, 4, 7, 2]} ', ()=>{
  expect(sortArrayByParityII([4,2,5,7])).toStrictEqual([4,5,2,7]);
})


test('Expected [] to equal []} ', ()=>{
  expect(sortArrayByParityII([])).toStrictEqual([]);
})

test('Expected [2, 3] to equal [2, 3]} ', ()=>{
  expect(sortArrayByParityII([2, 3])).toStrictEqual([2, 3]);
})