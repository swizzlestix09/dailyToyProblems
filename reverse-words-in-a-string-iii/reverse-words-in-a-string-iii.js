/**
 * @param {string} s
 * @return {string}
 */

const reverseWord = (word) => {
  let reversed = '';
  for (let i = word.length - 1; i >= 0 ; i--) {
    reversed += word[i]
  }
  return reversed;
}

var reverseWords = function(s) {
    let sCopy = s.split(' ');
    let reversed = []
    sCopy.forEach(word => {
      reversed.push(reverseWord(word))
    });
  
    return reversed.join(' ')
  
};