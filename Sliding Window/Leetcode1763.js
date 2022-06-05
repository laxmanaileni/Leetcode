var longestNiceSubstring = function (s) { // not solved
  let start = 0,
    deadEnd = 0;
  let map = {};
  let result = [];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    // Storing values in HashMap
    if (!map[s[i].toLowerCase()]) {
      map[s[i].toLowerCase()] = 0;
    }
    map[s[i].toLowerCase()] += 1;
    //console.log(map);
    //

    if (Object.keys(map).length > 1) {
      let leftChar = s[start];
      start += 1;
      map[leftChar.toLowerCase()] -= 1;
      if (map[leftChar.toLowerCase()] === 0) {
        delete map[leftChar.toLowerCase()];
      }
    }
    if (maxLen < i - start + 1 && i != 0) {
      deadEnd = i;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  if (s.length <= 1) {
    return "";
  }

  for (let j = maxLen - 1; j >= 0; j--) {
    result.push(s[deadEnd - j].toString());
  }

  return result.join("");
};

console.log(longestNiceSubstring("YazaAay"));
console.log(longestNiceSubstring("Bb"));
console.log(longestNiceSubstring("c"));
console.log(longestNiceSubstring("jcJ"));
