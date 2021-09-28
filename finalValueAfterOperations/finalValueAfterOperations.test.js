var finalValue = require('./finalValueAfterOperations');

test(`expected ["--X","X++","X++"] to output 1`, () => {
  expect(finalValue(["--X","X++","X++"])).toBe(1);
});

test(`expected ["++X","++X","X++"] to output 3`, () => {
  expect(finalValue(["++X","++X","X++"])).toBe(3);
});

test(`expected ["++X","++X","X++","++X","++X","X++","++X","++X","X++","++X","++X","X++"] to output 12`, () => {
  expect(finalValue(["++X","++X","X++","++X","++X","X++","++X","++X","X++","++X","++X","X++"] )).toBe(12);
});

test(`expected ["++X","++A","X++","++X"] to output 3`, () => {
  expect(finalValue(["++X","++A","X++","++X"])).toBe(3);
});

test(`expected ["--X","X--","--X"] to output -3`, () => {
  expect(finalValue(["--X","X--","--X"])).toBe(-3);
});
