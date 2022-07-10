// Using Bruteforce Recursion

var wordBreak = function (s, wordDict) {
  if (s === "") return true;

  for (let word of wordDict) {
    if (s.indexOf(word) === 0) {
      slicedTarget = s.slice(word.length);
      if (wordBreak(slicedTarget, wordDict) === true) {
        return true;
      }
    }
  }
  return false;
};

// console.log(wordBreak("leetcode", ["leet", "code"])); //true
// console.log(wordBreak("applepenapple",["apple","pen"]))//true
// console.log(wordBreak("catsandog",["cats","dog","sand","and","cat"]))//false

//Dynamic programming using Memoization method

var wordBreakDP = function (s, wordDict, memo = {}) {
  if (s in memo) return memo[s];
  if (s === "") return true;

  for (let word of wordDict) {
    if (s.indexOf(word) === 0) {
      slicedTarget = s.slice(word.length);
      if (wordBreakDP(slicedTarget, wordDict, memo) === true) {
        memo[s] = true;
        return true;
      }
    }
  }
  memo[s] = false;
  return false;
};

console.log(wordBreakDP("leetcode", ["leet", "code"])); //true
console.log(wordBreakDP("applepenapple", ["apple", "pen"])); //true
console.log(wordBreakDP("catsandog", ["cats", "dog", "sand", "and", "cat"])); //false
