/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //cut x into half - lo, hi, mid
    let lo = 1
    let hi = Math.floor(x / 2) + 1
    let mid
    //while lo is less or equal to hi 
    while (lo <= hi) {
        mid = Math.floor( (lo + hi) / 2)
        //calculate mid 

        if (mid * mid > x) {
            hi = mid - 1
        } else if ( mid * mid < x ) {
            lo = mid + 1 
        } else {
            return mid
        }
        
    }
  return hi 
};

