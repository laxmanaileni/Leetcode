const LongestSubString = (String, K) => {
  let maxLength = 0,
    start = 0;
  let map = {};
  for (let i = 0; i < String.length; i++) {
    if (!map[String[i]]) {
      map[String[i]] = 0;
    }
    map[String[i]] += 1;
    while (Object.keys(map).length > K) {
      //Shrinking
      map[String[start]] -= 1;
      if (map[String[start]] === 0) {
        delete map[String[start]];
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, i - start + 1);
  }
  return maxLength;
};
console.log(LongestSubString("araaci", 2));
console.log(LongestSubString("araaci", 1));
console.log(LongestSubString("araa", 2));