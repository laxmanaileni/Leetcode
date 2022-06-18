var getSum = function (a, b) {
  //* sum=a^b carry= (a&b)<<1
  let carry;
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};

console.log(getSum(1, 2));
console.log(getSum(2, 3));
