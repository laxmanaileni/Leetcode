var sumZero = function (n) {
  let res = [];
  if (n % 2 === 1) {
    res.push(0);
  }
  let start = 0;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    res.push(i + 1);
    res.push(start - 1);
    start--;
  }
  return res;
};

console.log(sumZero(5));
