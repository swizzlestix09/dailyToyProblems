/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const sArray = s.split('');
    const stack = [];

    for (let i = 0; i < sArray.length; i++) {
      if ( sArray[i] === '(') {
        stack.push(i)
      } else if (sArray[i] === ')' && stack.length) {
        stack.pop()
      } else if (sArray[i] === ')') {
        sArray[i] = ''
      }
    }

    for (let i = 0; i < stack.length; i++) {
        sArray[stack[i]] = ''
    }

    return sArray.join('')
};

//using a stack
//iterate over s 
  //  turn s into sArray by slicing 
  //if you bump into a '(' 
    // push index into stack 
  // if you bump into a ')' and stack size is greater than 1
    //pop off stack
    //if you bump into a ')' and stack size is 0, remove
  //loop through stack 
    //converting each index to ''
  //return sArray by joining 
