/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
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

firstNonRepeatedCharacter('ABA')

module.exports = firstNonRepeatedCharacter;