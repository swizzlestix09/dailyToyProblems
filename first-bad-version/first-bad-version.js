/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

    return function(n) {
      let min = null; 
      let start = 1; 
      let end = n;
        
      while(start <= end ) {
          let midpt = Math.floor((start + end) / 2 )
          if (isBadVersion(midpt)) {
                  min = midpt
                  end = midpt -1
              } else {
                  start = midpt + 1
              }
          }
    return min       
 };
};

