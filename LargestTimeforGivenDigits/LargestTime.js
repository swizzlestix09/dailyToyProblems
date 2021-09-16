// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.



// Example 1:

// Input: arr = [1,2,3,4]
// Output: "23:41"
// Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.
// Example 2:

// Input: arr = [5,5,5,5]
// Output: ""
// Explanation: There are no valid 24-hour times as "55:55" is not valid.

var largestTimeFromDigits = function(arr) {

  let hrs = [], mins = [];
  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
      if(num <= 2) {
          hrs[0] = num
          if (hrs[0] < num) {
              hrs[0] = num
          }
      }
  }

  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
         if(num < 4) {
          hrs[1] = num
          if (hrs[1] < num) {
              hrs[1] = num
          }
      }

  }

  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
      if(num <= 5 && !(hrs.includes(num)) ) {
          mins[0] = num
          if (mins[0] < num) {
              mins[0] = num
          }
      }
  }

  for (let i = 0; i < arr.length; i++) {
      let num = arr[i]
          if (mins[0] && !(hrs.includes(num)) ) {
              mins[0] > num ? mins.push(num) : mins.unshift(num)
          }
         if(num <= 9 && !(hrs.includes(num)) ) {
          mins[0] = num
      }

  }


  return `${hrs.join('')}:${mins.join('')}`

};

module.exports = largestTime;


