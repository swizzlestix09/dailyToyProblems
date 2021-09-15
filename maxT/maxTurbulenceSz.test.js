const maxTurbulenceSize = require('./maxTurbulenceSz')

test('expected [1, 2, 1] to output 2', () => {
  expect(maxTurbulenceSize([1, 2, 1])).toBe(2);
});

test('expeced [] to output 0', () => {
  expect(maxTurbulenceSize([])).toBe(0);
});

test('expected [9,4,2,10,7,8,8,1,9] to output 5', ()=> {
  expect(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]).toBe(5));
});

test('expected [1, 2, 3, 4, 5] to output 0', ()=> {
  expect(maxTurbulenceSize([1, 2, 3, 4, 5]).toBe(0));
});