//Dynamic Programming
var climbStairs = function (n) {
  return climbStairsDP(n, [1, 2], (memo = {}));
};

const climbStairsDP = (targetSum, numbers, memo) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return 1;
  if (targetSum < 0) return null;
  let result = 0;
  for (let num of numbers) {
    let remainder = targetSum - num;
    let sum = climbStairsDP(remainder, numbers, memo);
    if (sum !== null) {
      result += sum;
    }
  }
  memo[targetSum] = result;
  return result;
};

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(70));
