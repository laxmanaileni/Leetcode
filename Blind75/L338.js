var countBits = function (n) {
  let res = [];
  res.push(0);
  for (let i = 1; i <= n; i++) {
    let count = 0;
    let x = i;
    while (x) {
      x = x & (x - 1);
      count++;
    }
    res.push(count);
  }
  return res;
};

console.log(countBits(2));
console.log(countBits(5));
