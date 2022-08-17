//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
var maxProfit = function (prices) {
  let max = -Infinity;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      max = Math.max(max, prices[i] - buy);
    }
  }
  if (max === -Infinity) return 0;
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
