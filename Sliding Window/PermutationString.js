const PermutationString = (String, Pattern) => {
  //*TODO Tough check it once again
  let windowSize = Pattern.length,
    map = {},
    start = 0,
    count = 0;
  for (let i = 0; i < windowSize; i++) {
    if (map[Pattern[i]] === undefined) map[Pattern[i]] = 0;
    map[Pattern[i]] += 1;
  }

  for (let i = 0; i < String.length; i++) {
    if (map[String[i]] !== undefined) {
      map[String[i]] -= 1;
      if (map[String[i]] === 0) {
        count++;
      }
    }
    if (count === Object.keys(map).length) return true;
    //Shrink the window
    if (i >= windowSize - 1) {
      if (map[String[start]] !== undefined) {
        if (map[String[start]] === 0) {
          count--;
        }
        map[String[start]] += 1;
      }
      start += 1;
    }
  }
  return false;
};

console.log(PermutationString("oidbcaf", "abc")); // true
console.log(PermutationString("odicf", "dc")); //false
