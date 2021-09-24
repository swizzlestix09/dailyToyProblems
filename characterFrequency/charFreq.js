/*
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 *
 *
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 */
/* I - string
 *  O - array of arrays - in order from 1) count desc, 2) letters asce.
 *  E - string is empty, string has spaces, or string has symbols?
 *  C - always return an array - letters only?
 */

var characterFrequency = function (string) {
  //first step  - getting letters and how many letters there are
  //create object
  //iterate through  word - counting letters and adding count to object
  var collection = {};

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char === " ") {
      continue;
    }
    collection[char] ? collection[char]++ : (collection[char] = 1);
  }
  var arrayOfLetters = Object.entries(collection);
  //console.log(arrayOfLetters);
  //sort in order of numbers, then letters.

  return arrayOfLetters.sort( (a, b) => {
    console.log('a', a, 'b', b)
    return a - b;
  });
};

console.log(characterFrequency("yabba dabba do")); //[ [ 'a', 4 ], [ 'b', 4 ], [ 'd', 2 ], [ 'o', 1 ], [ 'y', 1 ] ]
console.log(characterFrequency('aime')) //[ ['a', 1], ['e', 1], ['i', 1], ['m', 1] ]
console.log(characterFrequency('tabby')) //[ ['b', 2], ['a', 1], ['t', 1], ['y', 1] ]

module.exports = characterFrequency;
