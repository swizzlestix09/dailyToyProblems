const commonChars = require('./commonChar');

test(`expected 'acexivou', 'aegihobu' to output'aeiou'`, () => {
  expect(commonChars('acexivou', 'aegihobu')).toBe('aeiou');
});

test(`expected 'axe', 'vax', 'lox', 'tax' to output 'x'`, () => {
  expect(commonChars('axe', 'vax', 'lox', 'tax')).toBe('x');
});

test(`expected 'angely', 'erin', 'polina', 'yunqi' to output 'n'`, () => {
  expect(commonChars('angely', 'erin', 'polina', 'yunqi')).toBe('n');
});

test(`expected 'arrow', 'gun' to output ''`, () => {
  expect(commonChars('arrow', 'gun')).toBe('');
});