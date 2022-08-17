//https://leetcode.com/problems/basic-calculator/

var calculate = function (s) {
  let sign = 1,
    sum = 0;

  let stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] >= "0" && s[i] <= "9") {
      let num = 0;
      while (s[i] >= "0" && s[i] <= "9") {
        // building number
        num = num * 10 + (s[i] - "0");
        i += 1;
      }
      sum += num * sign; //Number * sign
      i -= 1;
    } else if (s[i] === "+") {
      sign = 1;
    } else if (s[i] === "-") {
      sign = -1;
    } else if (s[i] === "(") {
      stack.push(sum); //Storing the sign and sum in stack
      stack.push(sign);
      sum = 0; // Reset to default
      sign = 1;
    } else if (s[i] === ")") {
      sum = stack.pop() * sum;
      sum += stack.pop(); // adding the inner bracket sum with other sum here inner-sum =sum and outer-sum = stack.pop()
    }
  }
  return sum;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
