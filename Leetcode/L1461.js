var hasAllCodes = function (s, k) {
  let set = new Set();
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    temp.push(s[i]);
    if (temp.length > k) {
      temp.shift();
    }
    if (temp.length === k) {
      set[temp.join("")] = 1;
    }
  }
  return Object.keys(set).length === Math.pow(2, k);
};

var hasAllCodes = function (s, k) {
  let set = new Set();
  for (let i = 0; i + k - 1 < s.length; i++) {
    set.add(s.slice(i, i + k - 1 + 1));
  }
  return set.size === 2 ** k;
};

console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("0110", 1));
console.log(hasAllCodes("00110", 2));
console.log(hasAllCodes("0110", 2));
