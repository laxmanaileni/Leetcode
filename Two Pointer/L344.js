var reverseString = function (s) {
  for (let i = 0; i < s.length; i++) {
    let temp = "",
      right = s.length - i - 1;
    if (i < right) {
      temp = s[i];
      s[i] = s[right];
      s[right] = temp;
    }
  }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"])); //["o","l","l","e","h"]
console.log(reverseString(["H", "a", "n", "n", "a", "h"])); //["h","a","n","n","a","H"]
