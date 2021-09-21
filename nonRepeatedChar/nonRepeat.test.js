const firstNonRepeatedCharacter = require('./nonRepeat.js')

test(`expected 'ABA' to output 'B'`, () => {
  expect(firstNonRepeatedCharacter('ABA')).toBe('B');
});

test(`expected 'AACBDB' to output 'C'`, () => {
  expect(firstNonRepeatedCharacter('AACBDB')).toBe('C');
});

test(`expected 'ABCDEFG' to output 'A'`, () => {
  expect(firstNonRepeatedCharacter('ABCDEFG')).toBe('A');
});

test(`expected 'AABBCC' to output ''`, () => {
  expect(firstNonRepeatedCharacter('AABBBCC')).toBe('');
});

test(`expected 'bcabcbabcabcbababcbacbabcbabcabcbabcbadacbabcabcbacbacbbacbacbabcbabcbacb' to output 'd'`, () => {
  expect(firstNonRepeatedCharacter('bcabcbabcabcbababcbacbabcbabcabcbabcbadacbabcabcbacbacbbacbacbabcbabcbacb')).toBe('d');
});