//https://leetcode.com/problems/climbing-stairs/

//Dynamic Programming using memoization

var climbStairs = function (targetSum, numbers = [1, 2], memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return 1;
  if (targetSum < 0) return null;
  let result = 0;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let sum = climbStairs(remainder, numbers, memo);
    if (sum !== null) result += sum;
  }
  memo[targetSum] = result;
  return result;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
