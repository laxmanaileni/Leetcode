var Anagram = function (s1, s2) {
  let map = new Map();
  let right = 0;
  let left = 0;
  let count = s1.length;
  let result = [];

  for (let i = 0; i < s1.length; i++) {
    map.set(s1[i], (map.get(s1[i]) || 0) + 1);
  }

  while (right < s2.length) {
    if (map.get(s2[right]) > 0) count--;

    map.set(s2[right], (map.get(s2[right]) || 0) - 1);

    if (count === 0) result.push(left);

    if (right - left + 1 >= s1.length) {
      if (map.get(s2[left]) >= 0) count++;

      map.set(s2[left], (map.get(s2[left]) || 0) + 1);

      left++;
    }
    right++;
  }
  return result;
};

// console.log(Anagram("pq", "ppqp"));
// console.log(Anagram("abc", "abbcabc"));
// console.log(Anagram("abc", "cbaebabacd"));
// console.log(Anagram("ab", "abab"));

//*TODO Tough revise once again
const Anagrams = (s, p) => {
  let start = 0,
    count = p.length;
  let result = [];
  let map = {};
  for (let i = 0; i < p.length; i++) {
    if (map[p[i]] === undefined) map[p[i]] = 0;
    map[p[i]]++;
  }
  // console.log(map);

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] > 0) count--;
    if (!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]] -= 1;

    if (count === 0) result.push(start);
    if (i - start + 1 >= p.length) {
      if (map[s[start]] >= 0) count++;
      if (!map[s[start]]) {
        map[s[start]] = 0;
      }
      map[s[start]] += 1;
      start += 1;
    }
  }
  return result;
};

console.log(Anagrams("cbaebabacd", "abc"));
