
/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

 var commonCharacters = function(string1, string2) {
  //declare an object
  var chars = {};
  var commonChars= '';
  //capture all params in an array
  var howManyStrs = arguments.length;
  //seperate first word in array from rest of array

  var firstWd = arguments[0];
  var words =[...arguments];
  var restOfWds = words.slice(1)

  //iterate throughfirst word populating object
  for (var i = 0; i < firstWd.length; i++) {
    if (!chars[firstWd[i]]) {
      chars[firstWd[i]] = 1;
    }
  }

  //then iterate through rest of the array comparing letters
  restOfWds.forEach(word => {
    for (var i = 0; i < word.length; i++) {
      if (chars[word[i]]) {
        chars[word[i]]++
      }
    }
  })
  //iterate through array - then iterate through each word
  //if letter not in object set it as key = letter, value = 1

  //declare empty string, declare var that holds length of array
  //iterate through object, if value > 1 push into string
  for (var char in chars) {
    if (chars[char] === howManyStrs) {
      commonChars += char
    }
  }
  // return string
  return commonChars;
};

//  var commonCharacters = function(string1, string2) {
//   //declare an object
//   var chars = {};
//   var commonChars= '';
//   //capture all params in an array
//   var howManyStrs = arguments.length;
//   var words =[...arguments];
//   //iterate through array - then iterate through each word
//   words.forEach( word => {
//     //if letter not in object set it as key = letter, value = 1
//     for(var i = 0; i < word.length; i++) {
//       console.log(word.includes(word[i]))
//       chars[word[i]] ? chars[word[i]]++ : chars[word[i]] = 1;
//     }
//   })

//   //declare empty string, declare var that holds length of array
//   //iterate through object, if value > 1 push into string
//   for (var char in chars) {
//     if (chars[char] === howManyStrs) {
//       commonChars += char
//     }
//   }
//   // return string
//   return commonChars;
// };
//18 minutes
console.log(commonCharacters('acexivou', 'aegihobu'))
module.exports = commonCharacters;