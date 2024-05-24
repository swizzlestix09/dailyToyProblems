/**
 * @param {number[]} heights
 * @return {number}
 */
    //create variable to store non matching indicies count
    //sort items in array first
    //cross reference passed in argument with sorted array a

    var heightChecker = function(heights) {
      let count = 0;
      const sortedHeights = [...heights]
      sortedHeights.sort((a, b) => a - b)

      for (let i = 0; i < heights.length; i++){
          if (sortedHeights[i] !== heights[i]) {
              count++;
          }
      }

      return count
  };

  /**
   *
   * A few things to remember:
   * Pass by reference for arrays/objects
   * https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c
   * Use const for non-changing variables
   * sort util doesn't work for numbers - converts everything to string and then compares by unicode
   **/