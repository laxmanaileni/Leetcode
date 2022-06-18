var findComplement = function (num) {
  let bit = Math.pow(2, num.toString(2).length) - 1;
  return num ^ bit;
};

console.log(findComplement(5));
