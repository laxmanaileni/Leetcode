//Method 1
var isValid = function (s) {
  let stack = [];
  if (s.length === 1) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    } else {
      if (s[i] === ")" && stack.pop() === "(") {
        continue;
      }
      if (s[i] === "}" && stack.pop() === "{") {
        continue;
      }
      if (s[i] === "]" && stack.pop() === "[") {
        continue;
      }
      return false;
    }
  }
  if (!stack.length) {
    return true;
  } else {
    return false;
  }
};

//Method 2
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
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
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
