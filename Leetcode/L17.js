// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function (digits) {
  let map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let result = [];
  if (digits.length === 0 || digits == null) return result;
  const go = (i, s) => {
    if (i === digits.length) {
      result.push(s);
      return;
    }
    for (let c of map[digits[i]]) {
      go(i + 1, s + c);
    }
  };
  go(0, "");
  return result;
};

console.log(letterCombinations("23"));
