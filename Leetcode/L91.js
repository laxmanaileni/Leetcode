/** Method 1
Solution Processs:--
Case 1: number of i and i-1 between 10 and 26 
        ways[i]=ways[i-1]+ways[i-2]
Case 2: number of i and i-1 larger than 26
        ways[i]=ways[i-1]
Case 3: number of i==0 and i-1 == 1 or i-1 == 2
        ways[i]=ways[i-2]
Case 4: number of i==0 and i-1>2
        Stop and return 0
 */
/*
var numDecodings = function (s) {
  return helper(s.length - 1, s, (memo = {}));
};

const helper = (curr, s, memo) => {
  if (curr === 0) {
    if (s[curr] === "0") {
      memo[curr] = 0;
      return 0;
    } else {
      memo[curr] = 1;
      return 1;
    }
  }

  if (curr === -1) return 1;

  if (memo[curr] !== undefined) {
    return memo[curr];
  }

  if (s[curr] === 0 && (s[curr - 1] === "1" || s[curr - 1] === "2")) {
    memo[curr] = helper(curr - 2, s, memo);
    return memo[curr];
  } else if (s[curr] === "0" && s[curr - 1] > "7") {
    memo[curr] = 0;
    return 0;
  }

  ways = 0;
  if ((s[curr - 1] === "1" || s[curr - 1] === "2") && s[curr] < 7) {
    ways = helper(curr - 1, s, memo) + helper(curr - 2, s, memo);
  } else if (s[curr - 1] > 26 && s[curr] > 26) {
    ways = helper(curr - 1, s, memo);
  }
  memo[curr] = ways;
  return ways;
};
*/
//Method 2

var numDecodings = function (s, index = 0, memo = {}) {
  if (s.length < 1) return 0; // If string is less than 1 return 0
  let result = 0;
  if (index == s.length) return 1; // base case 1: reach the end = correct path
  if (memo[index] != null) return memo[index]; // base case 2: if we already have the information on this index, return it
  if (s[index] > 0) {
    // as long as its bigger than 0, we can at least  use it as a single digit
    result += numDecodings(s, index + 1, memo); // move forward by 1
  }

  // as long as 1. we are not starting with 0 etc. `04`
  //            2. our next digit isn't null
  //            3. we can form a two digit number thats smaller than 27
  if (s[index] != 0 && s[index + 1] != null && s[index] + s[index + 1] < 27) {
    // lets make this two digit together and move forward by 2
    result += numDecodings(s, index + 2, memo);
  }

  memo[index] = result; // given the current index, store how many different ways we can decode
  return result;
};

console.log(numDecodings("12")); //2
console.log(numDecodings("226")); //3
console.log(numDecodings("06")); //0
console.log(numDecodings("10")); //2
console.log(numDecodings("101")); //0
console.log(numDecodings("1011")); //2
