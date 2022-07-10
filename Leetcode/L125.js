var isPalindrome = function (s) {
  if (s.length === 0) return true;
  let x = s.split(" ").join("");
  let y = x.replace(/[^a-zA-Z0-9]/g, "");
  console.log(y);
  let left = 0,
    right = y.length - 1;
  while (left < right) {
    if (y[left].toLowerCase() !== y[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("0P"));
console.log(isPalindrome(".,"));
console.log(isPalindrome(" "));
