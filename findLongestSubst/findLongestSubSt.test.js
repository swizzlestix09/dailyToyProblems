var findLongestSubSt = require( './findLongestSubSt');

test(`expected 'thisisawesome' to output 6`, () => {
  expect(findLongestSubSt('thisisawesome')).toBe(6);
});

test(`expected 'longestsubstring' to output 8`, () => {
  expect(findLongestSubSt('longestsubstring')).toBe(8);
});

test(`expected '' to output 0`, () => {
  expect(findLongestSubSt('')).toBe(0);
});

test(`expected 'rithmschool' to output 7`, () => {
  expect(findLongestSubSt('longestsubstring')).toBe(7);
});

test(`expected 'thecatinthehat' to output 7`, () => {
  expect(findLongestSubSt('thecatinthehat')).toBe(7);
});

test(`expected 'bbbbbb' to output 1`, () => {
  expect(findLongestSubSt('bbbbbb')).toBe(1);
});

test(`expected 'thisishowwedoit' to output 6`, () => {
  expect(findLongestSubSt('thisishowwedoit')).toBe(6);
});

expect(findLongestSubSt('thisishowwedoit')).toBeInstanceOf('number')