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

var fillCups = function (amount) {

  fillrecursive(amount[0],amount[1])+fillrecursive(amount[0])
};

console.log(fillCups([1, 4, 2]));
