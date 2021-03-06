// Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

// A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

// More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

// For i <= k < j:
// arr[k] > arr[k + 1] when k is odd, and
// arr[k] < arr[k + 1] when k is even.
// Or, for i <= k < j:
// arr[k] > arr[k + 1] when k is even, and
// arr[k] < arr[k + 1] when k is odd.
//https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3976/

// Example 1:

// Input: arr = [9,4,2,10,7,8,8,1,9]
// Output: 5
// Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
// Example 2:

// Input: arr = [4,8,12,16]
// Output: 2
// Example 3:

// Input: arr = [100]
// Output: 1


// Constraints:

// 1 <= arr.length <= 4 * 104
// 0 <= arr[i] <= 109



// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
var maxTurbulenceSize = function(arr) {
    var correctCompare = '';
    var max = 0;
    var counter = 0;

    for (var i = 0; i < arr.length; i++) {
        console.log('cc ', correctCompare,'ct ', counter, 'index', arr[i], arr[i+1], 'mx ', max)
        if (correctCompare === '>') {
            if (arr[i] < arr[i+1]) {
                correctCompare ='<'
                counter+=1;
            } else if (arr[i] > arr[i+1]) {
                if (max < counter) {
                    max = counter;
                    counter = 0;
                }
            } else {
                correctCompare = '';
                counter = 0;
            }
        } else if (correctCompare === '<') {
              if (arr[i] > arr[i+1]) {
                correctCompare ='>'
                counter+=1;
            } else if (arr[i] < arr[i+1]) {
                if (max < counter) {
                    max = counter;
                    counter = 0;
                }
            }
                counter = 0;

        }
        if (correctCompare === '') {
             if (arr[i] < arr[i+1]) {
                correctCompare ='<'
                 counter+=1;
            } else if (arr[i] > arr[i+1]) {
                correctCompare ='>'
                counter+=1;
            } else {
                if (max > counter) {
                    max = counter;
                }
                counter = 0;
            }
        }
    }
    return max;
};

module.exports = maxTurbulenceSize;