// https://leetcode.com/problems/find-all-anagrams-in-a-string/
var findAnagrams = function (s, p) {
  let map = {};
  let count = p.length,
    start = 0;
  let result = [];
  for (let i = 0; i < p.length; i++) {
    if (map[p[i]] === undefined) map[p[i]] = 0;
    map[p[i]]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > 0) count--;
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]--;
    if (count === 0) result.push(start);
    if (i - start + 1 >= p.length) {
      if (map[s[start]] >= 0) count++;
      if (!map[s[start]]) map[s[start]] = 0;
      map[s[start]]++;
      start++;
    }
  }
  return result;
};

console.log(findAnagrams("cbaebabacd", "abc"));
