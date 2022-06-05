var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let left = 0,
      count = 0,
      right = words[i].length - 1;
    while (left <= right) {
      if (words[i][left] !== words[i][right]) {
        left++;
        right--;
        continue;
      } else {
        left++;
        right--;
        count++;
        if (words[i].length % 2 === 1) {
          let wordLen = Math.floor(words[i].length / 2);
          if (count === wordLen + 1) {
            return words[i];
          }
        } else {
          let wordLen = Math.floor(words[i].length / 2);
          if (count === wordLen) {
            return words[i];
          }
        }
      }
    }
  }
  return "";
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));
console.log(firstPalindrome(["pp"]));
