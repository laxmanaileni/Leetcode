//  Dynamic Programming
var countSubstrings = function (s) {
  if (s.length <= 1) return s.length;
  let dp = Array(s.length + 1)
    .fill(0)
    .map((num) => Array(s.length + 1).fill(0));

  let lps = [];

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
    lps.push(s[i]);
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = 1;
      if (dp[i][i + 1]) {
        lps.push(s.substring(i, i + 2));
      }
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
      if (dp[i][j]) {
        lps.push(s.substring(i, j + 1));
      }
    }
  }
  console.log(lps.length);
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));
