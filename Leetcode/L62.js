//Dynamic Programming memoization grid travellor
var uniquePaths = function (m, n, memo = {}) {
  if ([m, n] in memo) {
    return memo[[m, n]];
  }
  if (m === 1 && n == 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[[m, n]] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
  return memo[[m, n]];
};

console.log(uniquePaths(3, 7));
