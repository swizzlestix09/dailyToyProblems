const largestTime = require('./LargestTime')

test('expected [1, 2, 3, 4] to output 23:41', () => {
  expect(largestTime([1, 2, 3, 4])).toBe('23:41');
});
