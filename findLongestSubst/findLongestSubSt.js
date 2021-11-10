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

  }
  return maxLeng;
};

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

console.log(findLongestSubSt('thisisawesome')); //6
console.log(findLongestSubSt('longestsubstring')); //8
module.exports = findLongestSubSt;