const largestTime = require('./LargestTime')

test(`expected [1, 2, 3, 4] to output '23:41'`, () => {
  expect(largestTime([1, 2, 3, 4])).toBe('23:41');
});


test(`expected [5, 5, 5, 5] to output ''`, () => {
  expect(largestTime([5, 5, 5, 5])).toBe('');
});

test(`expected [7, 1, 3, 5] to output '17:53'`, () => {
  expect(largestTime([7, 1, 3, 5])).toBe('17:53');
});