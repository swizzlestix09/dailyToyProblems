/* find longest substring Colt Steele - DS & A course
 * accepts a string and returns the length of the longest substring * with all distinct characters.

*/

const findLongestSubSt = (string) => {
  let start = 0;
  let temp = 0;
  let maxLeng = -Infinity;
  let end = string.length;
  let word = '';

  while(start < end) {
    let char = string[temp];
    if (temp >= string.length) {
      break;
    }else if (!word.includes(char)) {
      word += char;
      temp++;
      maxLeng = Math.max(maxLeng, word.length);
    } else {
      start++;
      temp = start;
      maxLeng = Math.max(maxLeng, word.length);
      word = '';
    }
    console.log(word, maxLeng)
  }
  return maxLeng;
};

console.log(findLongestSubSt('thisisawesome')); //6
console.log(findLongestSubSt('longestsubstring')); //8
module.exports = findLongestSubSt;