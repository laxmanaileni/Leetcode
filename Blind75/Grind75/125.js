//https://leetcode.com/problems/valid-palindrome/
var isPalindrome = function (s) {
    if(s.length===0 || s.length===1)return true;
  let x = s.split(" ").join("");
  let y = x.replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < Math.floor(y.length / 2); i++) {
    if (y[i].toLowerCase() !== y[y.length - i - 1].toLowerCase()) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
