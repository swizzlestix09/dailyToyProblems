/*
 *       :: Example ::
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *       :: Example2 ::
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *       :: Example3 ::
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 */
/*  I - string
 *  O - array of arrays - in order from 1) count desc, 2) letters asce.
 *  E - string is empty, string has spaces, or string has symbols?
 *  C - always return an array - letters only?
 *
 * CharacterFrequency is a function that takes in a string as a parameter.
 * An object was created to hold the letters and the frequency in which the letters appear in the string.
 * Using a for loop, we iterate through the string. If the character is a space or number (using the string match method and regex to match numbers), we ignore it. Otherwise we check to see if the character is in the object, incrementing it if it is (and creating it if it isn't). After we create out object, we create an array of ararys with the key value pairs using Object.entries.
 * We return the sorted array, sorted by the sort function. We pass in a function where we compare the numberical value in each array, ordering it by ascending values primarily, then using the .localeCompare method to compare letters by decending value.
 *
 */

var characterFrequency = function (string) {

  var collection = {};

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char === " " || char.match(/([0-9])/g)) {
      continue;
    }
    collection[char] ? collection[char]++ : (collection[char] = 1);
  }
  var arrayOfLetters = Object.entries(collection);

  return arrayOfLetters.sort( (a, b) => {
    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else {
      return a[0].localeCompare(b[0])
    }
  });
};

module.exports = characterFrequency;
