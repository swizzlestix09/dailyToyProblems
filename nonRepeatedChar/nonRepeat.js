/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 * The function takes in a string parameter. A object is created and we iterate through the string, adding each unique letter as a key/value pair in the object. If the letter is already in the object, increment that pair. After that operation is complete, we iterate through the object again, returning the first letter whose count equals 1 ( as they were the first character found that was not repeated).
 */

 var firstNonRepeatedCharacter = function(string) {
  const chars = {};
  for (var i in string) {
    if ( !chars[string[i]] ) {
      chars[string[i]] = 0
    }
    chars[string[i]]++
  }

  for (var letter in chars) {
    if (chars[letter] === 1) {
     return letter;
    }
  }
  return '';
};

module.exports = firstNonRepeatedCharacter;