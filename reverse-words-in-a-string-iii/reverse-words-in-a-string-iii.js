/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sCopy = s.split(' ');
    let reversed = []
    sCopy.forEach(word => {
      word = word.split('').reverse().join('')
      reversed.push(word)
    });
  
    return reversed.join(' ')
  
};