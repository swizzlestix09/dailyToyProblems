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
  console.log(collection);
};

console.log(characterFrequency("yabba dabba do"));
module.exports = characterFrequency;
