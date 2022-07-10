//DP using Memoization
var coinChangeDP = function (coins, amount, memo = {}) {
  let min = Infinity,
    count;
  if (amount in memo) return memo[amount];
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  for (let coin of coins) {
    let remainder = amount - coin;
    count = coinChangeDP(coins, remainder, memo);
    if (count != -1) {
      min = Math.min(min, count + 1);
    }
  }

  return min === Infinity ? (memo[amount] = -1) : (memo[amount] = min);
};

console.log(coinChangeDP([5, 2, 1], 11)); //3
console.log(coinChangeDP([2], 3)); //1
console.log(coinChangeDP([1], 0)); //0
console.log(coinChangeDP([1, 2, 5], 100)); //20
console.log(coinChangeDP([2, 5, 10, 1], 27)); //4
console.log(coinChangeDP([186, 419, 83, 408], 6249)); //20
