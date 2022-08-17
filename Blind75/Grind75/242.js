//https://leetcode.com/problems/valid-anagram/
var isAnagram = function (s, t) {
  let map = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i] ]=== undefined) map[s[i]] = 0
    map[s[i]]++
  }
  for (let i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      return false;
    } else  {
      map[t[i]]--;
      if (map[t[i]] === 0) delete map[t[i]];
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));