//Dynamic Programming using Memoization

// var fib = function(n,memo={}) {
//     if(n in memo) return memo[n];
//     if(n===0)return 0;
//     if( n===1) return 1;
//     memo[n]=fib(n-1,memo)+fib(n-2,memo);
//     return memo[n]

// };

//Dynamic Programming using Tabulation

var fib = function (n) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};
