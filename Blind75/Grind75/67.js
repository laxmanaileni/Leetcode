//https://leetcode.com/problems/add-binary/
var addBinary = function (a, b) {
  const aBinary = `0b${a}`;
  const bBinary = `0b${b}`;
  let sum = BigInt(aBinary) + BigInt(bBinary);
  return sum.toString(2);
};

console.log(addBinary("11", "1"));
