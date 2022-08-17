// https://leetcode.com/problems/word-break/
//Dynamic Programming using memoization
var wordBreak = function (s, wordDict, memo = {}) {
  if (s in memo) return memo[s];
  if (s === "") return true;

  for (let word of wordDict) {
    // indexOf is used to find the index of word in the sentence
    if (s.indexOf(word) === 0) {
      let slicedTarget = s.slice(word.length);
      if (wordBreak(slicedTarget, wordDict, memo) === true) {
        memo[s] = true;
        return true;
      }
    }
  }
  memo[s] = false;
  return false;
};

console.log(wordBreak("leetcode", ["leet", "code"]));
