/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let rightVal = prices[prices.length -1];
  let profit = 0;
  
  for (let i = prices.length -2; i >= 0; i--) {
    profit = Math.max(profit, rightVal - prices[i]);
    rightVal = Math.max(rightVal, prices[i])
  }
  
  return profit
};