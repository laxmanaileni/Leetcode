//https://leetcode.com/problems/minimum-window-substring/

var minWindow = function (s, t) {
  let map = {},
    count = 0;
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] !== undefined) {
      map[t[i]]++;
    } else {
      map[t[i]] = 1;
      count++;
    }
  }
  let minLen = Infinity,
    start = 0,
    left = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      map[s[i]]--;
      if (map[s[i]] === 0) count--;
    }

    while (!count) {
      if (minLen > i - left + 1 || !minLen) {
        minLen = i - left + 1;
        start = left;
      }
      if (map[s[left]] !== undefined) {
        if (!map[s[left]]) count++;
        map[s[left]]++;
      }
      left++;
    }
  }
  return s.slice(start, start + minLen);
};

console.log(minWindow("ADOBECODEBANC", "ABC"));
