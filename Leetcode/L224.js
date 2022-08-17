//https://leetcode.com/problems/basic-calculator/

var calculate = function (s) {
  let sum = 0,
    sign = 1;
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      let num = 0;
      while (s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + (s[i] - "0");
        i += 1;
      }
      sum += num * sign;
      i -= 1;
    } else if (s[i] === "+") sign = 1;
    else if (s[i] === "-") sign = -1;
    else if (s[i] === "(") {
      stack.push(sum);
      stack.push(sign);
      sum = 0;
      sign = 1;
    } else if (s[i] === ")") {
      sum = sum * stack.pop();
      sum += stack.pop();
    }
  }
  return sum;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
