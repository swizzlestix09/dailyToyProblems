/**
 * @param {number[]} prices
 * @return {number}
 */

    //start and end variables, 0 and array.length - 1
    //if start is smaller than end calculate difference
    // if difference is larger than what is stored, replace 
    //decremement end 
    //if end === start 
    //start ++ 
    //while start !== array.length -1


var maxProfit = function(prices) {
  let minPrice = Infinity; 
  let maxProfit = 0;
    prices.forEach( price => {
        if (price < minPrice) {
            minPrice = price
        } else if ( price - minPrice > maxProfit) {
            maxProfit = price - minPrice
        }
    })
    return maxProfit;
};