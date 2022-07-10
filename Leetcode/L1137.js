// Dynamic Programming using Memoization

var tribonacci = function (n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  return memo[n];
};

console.log(tribonacci(5));

//Dynamic Programming using Tabulation

var tribonacciRecursive = function (n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  let dp = {};
  (dp[0] = 0), (dp[1] = 1);
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n];
};

console.log(tribonacciRecursive(5));
