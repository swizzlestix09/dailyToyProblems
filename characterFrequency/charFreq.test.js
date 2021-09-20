const characterFrequency = require('./charFreq');

test(`expected 'mississippi' to output' [ ['i', 4], ['s', 4], ['p', 2], ['m', 1] ]'`, () => {
  expect(commonChars('mississippi')).toBe( [ ['i', 4], ['s', 4], ['p', 2], ['m', 1] ]);
});


test(`expected 'miaaiaaippi' to output' [ ['a', 4], ['i', 4], ['p', 2], ['m', 1] ]'`, () => {
  expect(commonChars('miaaiaaippi')).toBe( [ ['a', 4], ['i', 4], ['p', 2], ['m', 1] ]);
});

test(`expected 'mmmaaaiiibbb' to output' [ ['a', 3], ['b', 3], ['i', 3], ['m', 3] ]'`, () => {
  expect(commonChars('mmmaaaiiibbb')).toBe( [ ['a', 3], ['b', 3], ['i', 3], ['m', 3] ]);
});