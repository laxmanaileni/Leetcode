var coinChange = function (coins, amount) { //not solved
  let res = [];
  coins.sort((a, b) => b - a);
  let start = 0;

  while (amount > 0 && start <= coins.length) {
    if (amount >= coins[start]) {
      // console.log(coins,amount);
      amount -= coins[start];
      res.push(coins[start]);
    } else {
      start += 1;
    }
  }
  if (amount !== 0) {
    return -1;
  }
  return res.length;
};

// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([1], 0));
// console.log(coinChange([2], 3));
console.log(coinChange([186, 419, 83, 408], 6249));
