/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let i = 0;
    
    for (let i = 0; i < prefix.length; i++) {
        let compareChar = prefix[i]
        for (let j = 0; j < strs.length; j++) {
            let strsLet = strs[j]
            if (compareChar !== strsLet[i] ) {
                prefix = prefix.slice(0, i)
            }
        }
    }
        return prefix 
};
    
    
    //iterate through array 
    //if letter i is ever diffent break 
    //else set letter to prefix 