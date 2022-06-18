var removePalindromeSub = function (s) {
  if (!s.length) {
    return 0;
  }
  let start = 0,
    end = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    if (s[start] !== s[end]) {
      return 2;
    }
    start++;
    end--;
  }
  return 1;
};

console.log(removePalindromeSub("ababa"));
