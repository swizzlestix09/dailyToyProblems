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

/**
 * The function written below takes a undetermined amount of strings [arguments] and returns
 * a string containing letters that appear in all the words - ignoring spaces & dupicates
 * We first create an empty object, an empty string ( to return the result), as well as collecting
 * the amount of arguments provided. We seperate the first word from the array of words passed in.
 * Using the first word as a template, we populate our object with unique letters that equal the value 1
 * (since this is the first instance of them being found). We then iterate through the array of words,
 * iterating on each letter in each word - incrementing any match found and ignoring spaces.
 * Once finished, we then iterate over the object, comparing the number values to the amount of words
 * passed in. If the amount of letters is equal or greater than the amount of words, we add it to the string,
 * returning it. Because I'm using a HOF with a for loop inside, this solution's time complexity  is O(n^2).
 * I've written an additional test for a hole in my logic that I just discovered - 'row', 'arrow', 'wow'
 * will output 'row' but the answer is 'ow'. Leads me to believe that only using objects might be best
 * considering its non-duplicate nature. Perhaps sets? Googling...
 * Using a set definitely helped with ensuring values are unique, ensuring duplicates don't mess with final result.
 * Considering there is still a nested for loop - this is still a time complexity of O(n^2).
 */

var commonCharacters = function (str1, str2) {
  var uniqueLetters = {};
  var arrayOfSets = [];
  var words = [...arguments];
  var totalWds = words.length;
  var uniqLets = "";

  for (var i = 0; i < words.length; i++) {
    var eachWd = words[i];
    var uniqueChars = new Set();
    for (var j = 0; j < eachWd.length; j++) {
      var char = eachWd[j];
      if (char !== " ") {
        uniqueChars.add(char);
      }
    }
    arrayOfSets.push(uniqueChars);
  }

  for (var i = 0; i < arrayOfSets.length; i++) {
    for (var char of arrayOfSets[i]) {
      uniqueLetters[char] ? uniqueLetters[char]++ : (uniqueLetters[char] = 1);
    }
  }

  for (var letter in uniqueLetters) {
    if (uniqueLetters[letter] === totalWds) {
      uniqLets += letter;
    }
  }
  return uniqLets;
};

//console.log(commonCharacters('row', 'arrow', 'wow'))
// PREVIOUS WORK BELOW:

//duplicate letters don't work effectively
//  var commonCharacters = function(string1, string2) {

//   var chars = {};
//   var commonChars= '';
//   var howManyStrs = arguments.length;
//   var firstWd = arguments[0];
//   var words =[...arguments].slice(1);

//   for (var i = 0; i < firstWd.length; i++) {
//     if (!chars[firstWd[i]] && firstWd[i] !== ' ') {
//       chars[firstWd[i]] = 1;
//     }
//   }

//   words.forEach(word => {
//     for (var i = 0; i < word.length; i++) {
//       if (chars[word[i]] && word[i] !== ' ') {
//         chars[word[i]]++
//       }
//     }
//   });

//   for (var char in chars) {
//     if (chars[char] >= howManyStrs) {
//       commonChars += char
//     }
//   }

//   return commonChars;
// };

// second attempt, accounting for spaces & duplicate letters
// var commonCharacters = function(string1, string2) {
//   //declare an object & empty string
//   var chars = {};
//   var commonChars= '';
//   //capture args length in variable
//   var howManyStrs = arguments.length;
//   //seperate first word in array from rest of array
//   var firstWd = arguments[0];
//   //capture all words, seperating the first
//   var words =[...arguments].slice(1);

//   //iterate through first word populating object
//   for (var i = 0; i < firstWd.length; i++) {
//     if (!chars[firstWd[i]] && firstWd[i] !== ' ') {
//       chars[firstWd[i]] = 1;
//     }
//   }

//   //then iterate through rest of the array comparing letters
//   words.forEach(word => {
//     for (var i = 0; i < word.length; i++) {
//       if (chars[word[i]] && word[i] !== ' ') {
//         chars[word[i]]++
//       }
//     }
//   });

//   //iterate through object, if value > 1 push into string
//   for (var char in chars) {
//     if (chars[char] >= howManyStrs) {
//       commonChars += char
//     }
//   }
//   // return string
//   return commonChars;
// };

//First attempt = basic answer, not accounting for repeated letters in one word or spaces
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

module.exports = commonCharacters;
