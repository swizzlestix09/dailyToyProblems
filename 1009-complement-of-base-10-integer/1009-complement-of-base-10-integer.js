/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    n = [...n.toString(2)]
    
    let invertedN = n.reduce( (acc, num) => {
        return num === '1' ? acc += '0' : acc += '1'
    }, '')
    
    return parseInt(invertedN, 2)
};

//convert number to binary
  //explanation has converted numbers in string form... 
//reverse numbers 
//convert reversed binary numbers to numbers 
//number is being passed in 