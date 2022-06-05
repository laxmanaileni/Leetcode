const LongArrayReplacement = (array, K) => {
  let start = 0,
    maxLen = 0,
    maxrepeating = 0;
  let map = {};

  for (let i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      map[array[i]] = 0;
    }
    map[array[i]] += 1;
    maxrepeating = Math.max(maxrepeating, map[array[i]]);
    while (i - start + 1 - maxrepeating > K) {
      map[array[start]] -= 1;
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
};

console.log(LongArrayReplacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
