var characterReplacement = function (s, k) {
  // Sliding Window
  let map = {},
    start = 0,
    maxLen = 0,
    maxRepeating = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }

    maxRepeating = Math.max(maxRepeating, map[s[i]]);

    while (i - start + 1 - maxRepeating > k) {
      map[s[start]]--;
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};

console.log(characterReplacement("ABAB", 2)); //4
console.log(characterReplacement("AABABBA", 1)); //4
console.log(characterReplacement("AABCBBAB", 1)); //4
