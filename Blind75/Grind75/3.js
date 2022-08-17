// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
  let map = {};
  let start = 0,
    maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) map[s[i]] = 0;
    map[s[i]]++;
    while (Object.keys(map).length < i - start + 1) {
      map[s[start]]--;
      if (map[s[start]] === 0) delete map[s[start]];
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
