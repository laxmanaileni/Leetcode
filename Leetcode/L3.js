var lengthOfLongestSubstring = function (s) {//Sliding Window
  let start = 0,
    map = {},
    maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
    while (i - start + 1 > Object.keys(map).length) {
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
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring('aabcccd'));
