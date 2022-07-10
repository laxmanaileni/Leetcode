const longest = (String, K) => {
  let maxLen = 0,
    maxRepeating = 0,
    start = 0;
  let map = {};
  for (let i = 0; i < String.length; i++) {
    if (!map[String[i]]) {
      map[String[i]] = 0;
    }
    map[String[i]] += 1;
    maxRepeating = Math.max(maxRepeating, map[String[i]]); // To remove the repeated letters
    if (i - start + 1 - maxRepeating > K) {
      map[String[start]] -= 1;
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(longest("aabccbb", 2));
console.log(longest("abbcb", 1));
console.log(longest("abccde", 1));
