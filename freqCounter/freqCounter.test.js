const duplicates = require('./freqCounter');

test(`expected 1, 2, 3 to output false`, () => {
  expect(duplicates(1, 2, 3)).toBe(false);
});

test(`expected 1, 2, 2 to output false`, () => {
  expect(duplicates(1, 2, 2)).toBe(true);
});

test(`expected 'a', 'b', 'c', 'a' to output true`, () => {
  expect(duplicates('a', 'b', 'c', 'a' )).toBe(true);
});