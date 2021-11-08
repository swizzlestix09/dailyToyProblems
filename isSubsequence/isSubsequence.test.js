const isSubsequence = require('./isSubsequence')

test(`expected 'Hello', 'Hello world' to output true`, () => {
  expect(isSubsequence('Hello', 'Hello world')).toBe(true);
});

test(`expected 'sing', 'sting' to output true`, () => {
  expect(isSubsequence('sing', 'sting')).toBe(true);
});

test(`expected 'abc', 'abracadabra' to output true`, () => {
  expect(isSubsequence('abc', 'abracadabra')).toBe(true);
});

test(`expected 'abc', 'acb' to output false`, () => {
  expect(isSubsequence('abc', 'acb')).toBe(false);
});

test(`expected 'nab', 'banana' to output false`, () => {
  expect(isSubsequence('nab', 'banana' )).toBe(false);
});