const characterFrequency = require('./charFreq');

test(`expected 'mississippi' to output [ ['i', 4], ['s', 4], ['p', 2], ['m', 1] ] `, () => {
  expect(characterFrequency('mississippi')).toBe( [ ['i', 4], ['s', 4], ['p', 2], ['m', 1] ]);
});


test(`expected 'miaaiaaippi' to output [ ['a', 4], ['i', 4], ['p', 2], ['m', 1] ]`, () => {
  expect(characterFrequency('miaaiaaippi')).toBe( [ ['a', 4], ['i', 4], ['p', 2], ['m', 1] ]);
});

test(`expected 'mmmaaaiiibbb' to output [ ['a', 3], ['b', 3], ['i', 3], ['m', 3] ]`, () => {
  expect(characterFrequency('mmmaaaiiibbb')).toBe( [ ['a', 3], ['b', 3], ['i', 3], ['m', 3] ]);
});

test(`expected 'aime' to output [ ['a', 1], ['e', 1], ['i', 1], ['m', 1] ]`, () => {
  expect(characterFrequency('aime')).toBe( [ ['a', 1], ['e', 1], ['i', 1], ['m', 1] ]);
});

test(`expected 'tabby' to output [ ['b', 2], ['a', 1], ['t', 1], ['y', 1] ]`, () => {
  expect(characterFrequency('tabby')).toBe([ ['b', 2], ['a', 1], ['t', 1], ['y', 1] ]);
});