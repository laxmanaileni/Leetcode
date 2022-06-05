var myAtoi = (s) => {//Not solved
  let array = [];
let count=0;
  if (s === "-" || s === "+" || s === " ") {
    return 0;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      continue;
    } else if (s[i] === "+") {
        count++
      if (array.length>= 1 || count>1) {
        return 0;
      }
      continue;
    } else if (s[i] === "-") {
        count++
      if (array.length>= 1|| count>1) {
        return 0;
      }
      array.push(s[i]);
    } else if (!isNaN(s[i])) {
      array.push(s[i]);
    } else {
      break;
    }
  }
  let number = array.join("");
  if (number === "-" || number === "+" || number === " ") {
    return 0;
  }
  if (-Math.pow(2, 31) <= number && number <= Math.pow(2, 31)-1) {
    return number;
  } else if (-Math.pow(2, 31) > number) {
    return -Math.pow(2, 31);
  } else if (Math.pow(2, 31) < number) {
    return Math.pow(2, 31)-1;
  }
};



//console.log(myAtoi("-91283472332"));
console.log(myAtoi("21474836460"));
console.log(myAtoi("00000-42a1234"));
console.log(myAtoi("- "));
console.log(myAtoi("42"));
console.log(myAtoi("-+12"));
console.log(myAtoi("+-12"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
/**
 * 
 * "00000-42a1234"
"- "
"42"
"-+12"
"+-12"
"   -42"
"4193 with words"
 */



"00000-42a1234"
"- "
"42"
"-+12"
"+-12"
"   -42"
"4193 with words"


0
0
42
-12
-12
-42
4193


0
0
42
0
0
-42
4193