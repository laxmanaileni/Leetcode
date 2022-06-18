var sumBase = function (n, k) {
  let x = n.toString(k);

  let number = x.toString(),
    sum = 0;
  // console.log(number.length)
  for (let i = 0; i < x.length; i++) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return parseInt(sum);
};

console.log(sumBase(34, 6));
