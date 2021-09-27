// Given a string s, find the length of the longest substring without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
// Example 4:

// Input: s = ""
// Output: 0


// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.


var lengthOfLongestSubstring = function(s) {
  if (s === ' ' || s.length === 1) {
      return 1;
  }

//create string for return
let result = 0;
//create placeholder for longest original string found during iteration
let placeholder = '';
for (let i = 0; i < s.length; i++) {
  let letter = s[i]
  if (placeholder.includes(letter)){
    console.log(placeholder)
    result = Math.max(placeholder.length, result);
    placeholder = letter;
  } else {
    placeholder += letter;
  }
}

return result < placeholder.length ? placeholder.length : result;
};

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('au'))  //2
console.log(lengthOfLongestSubstring('aab')) //2
console.log(lengthOfLongestSubstring('dvdf')) //3