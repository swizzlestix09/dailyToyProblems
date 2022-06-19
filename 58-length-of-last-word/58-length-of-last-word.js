/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(' ')

    for (let i = sArr.length - 1; i >= 0; i--) {
        if (sArr[i].length > 0) {
            return sArr[i].length
        }
    }
};

/*
I - string 
O - length of last word of string
C - only letters and spaces, will at least have one word 
E - if end starts with spaces 
*/


//feel like if i split string by spaces i should get last word easily and return it 