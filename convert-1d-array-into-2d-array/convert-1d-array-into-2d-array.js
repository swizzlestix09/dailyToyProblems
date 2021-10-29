/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let matrix = []
    let slicer = n;
    let i = 0;
    if (original.length !== m * n ) {
        return matrix;
    }
    while (m > 0 ) {
      let row = original.slice(i, slicer);
      matrix.push([...row]);
      i+=n;
      slicer+=n;
      m--;
    }
    return matrix; 
};