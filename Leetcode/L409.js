//https://leetcode.com/problems/longest-palindrome/
var longestPalindrome = function (s) {
  let map = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      count++;
      count++;
      delete map[s[i]];
    }
  }
  if (Object.keys(map).length > 0) {
    count++;
  }
  return count;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
