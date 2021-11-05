const countUniqueValues = require('./countUniqValues');

test(`expected [] to output 0`, () => {
    expect(countUniqueValues([]]).toBe(0);
  });

test(`expected [1, 1, 1, 1, 2] to output 2`, () => {
  expect(countUniqueValues([1, 1, 1, 1, 2])).toBe(2);
});

test(`expected [-2, -1, -1, 0, 1] to output 4`, () => {
    expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4);
  });

test(`expected [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] to output 7`, () => {
    expect(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).toBe(7);
  });
