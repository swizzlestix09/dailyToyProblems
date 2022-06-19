/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //turn binary strings to numbers
    //add numbers 
    //convert total to binary and return 
    return  ( BigInt(`0b${a}`) + BigInt(`0b${b}`) ).toString(2)
    
};