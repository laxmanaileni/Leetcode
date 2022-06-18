var judgeSquareSum = function (c) {
  //Not solved due to time complexity
  let map = {},
    set = {};

  for (let i = 0; i <= c; i++) {
    map[i] = i * i;
    set[i * i] = i;
  }
  for (let i = 0; i < c; i++) {
    let x = c - map[i];
    if (set[x] !== undefined) {
      return true;
    }
  }
  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
console.log(judgeSquareSum(1));
console.log(judgeSquareSum(6));
