var countWords = function (words1, words2) {
  let map = {},
    set = {},
    count = 0;

  for (let i = 0; i < words1.length; i++) {
    if (map[words1[i]] !== undefined) {
      map[words1[i]]++;
    } else {
      map[words1[i]] = 1;
    }
  }
  for (let i = 0; i < words2.length; i++) {
    if (set[words2[i]] !== undefined) {
      set[words2[i]]++;
    } else {
      set[words2[i]] = 1;
    }
  }
  for (let i = 0; i < words2.length; i++) {
    if (map[words2[i]] === 1 && set[words2[i]] === 1) {
      count++;
    }
  }
  return count;
};

console.log(
  countWords(
    ["leetcode", "is", "amazing", "as", "is"],
    ["amazing", "leetcode", "is"]
  )
);
