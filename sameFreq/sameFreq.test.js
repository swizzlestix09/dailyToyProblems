const sameFrequency = require('./sameFreq');

  test(`expected 182, 281 to output true`, () => {
    expect(sameFrequency(182, 218)).toBe(true);
  });

  test(`expected 34, 14 to output false`, () => {
    expect(sameFrequency(34, 14)).toBe(false);
  });

  test(`expected 31, 27 to output false`, () => {
    expect(sameFrequency(31, 27)).toBe(false);
  });

  test(`expected 3589578, 5879385 to output true`, () => {
    expect(sameFrequency(3589578, 5879385)).toBe(true);
  });

  test(`expected 22, 222 to output false`, () => {
    expect(sameFrequency(22, 222)).toBe(false);
  });