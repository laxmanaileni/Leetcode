//https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let x = s[i];
    switch (x) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (x != stack.pop()) {
          return false;
        }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
