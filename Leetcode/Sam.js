// Leetcode Contest
/*
var decodeMessage = function (key, message) {
  let s = key.split("").filter((x) => x !== " ");
  let string = "abcdefghijklmnopqrstuvwxyz",
    map = {};
  let start = 0;
  for (let i = 0; start < 26; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = string[start];
      start++;
    }
  }
  let msg = message.split("");
  let result = [];
  for (let i = 0; i < msg.length; i++) {
    if (map[msg[i]] !== undefined) {
      result.push(map[msg[i]]);
    } else {
      result.push(" ");
    }
  }
  return result.join("");
  //console.log(result.join(''));
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);

console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
*/
/*
function isPossible(a, b, c, d) {
  // Write your code here
  let isPossible = "No";
  let A, B;
  // X way
  let resultX = a + b;
  let resultY = b;
  while (resultX <= c) {
    if (resultX === c && resultY === d) {
      isPossible = "Yes";
    } else {
      A = resultX;
      resultX = A + b;
    }
  }
  // Y way
  resultX = A;
  resultY = A + b;
  while (resultY <= d) {
    if (resultX === c && resultY === d) {
      isPossible = "Yes";
    } else {
      B = resultY;
      resultY = a + B;
    }
  }
  return isPossible;
}

console.log(isPossible(1, 4, 5, 9));
*/
//Goldman Sachs
function isPossible(a, b, c, d, memo = {}) {
  if (memo[[a, b, c, d]] !== undefined) {
    return memo[[a, b, c, d]];
  }
  if (a === c && b === d) return "Yes";
  if (a > c || b > d) return "No";
  memo[(a, b, c, d)] = isPossible(a + b, b, c, d, memo);
  var result1 = memo[(a, b, c, d)];
  memo[(a, b, c, d)] = isPossible(a, b + a, c, d, memo);
  var result2 = memo[(a, b, c, d)];
  
  if (result1 === "Yes" || result2 === "Yes") {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(isPossible(1, 4, 5, 9)); // yes
console.log(isPossible(1, 2, 3, 6)); // no
console.log(isPossible(1, 4, 5, 9)); // Yes
console.log(isPossible(1, 4, 5, 9)); // Yes
