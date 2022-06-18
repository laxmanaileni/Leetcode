//Method 1

var hammingWeight = function (n) {
  let x = n.toString(2),
    count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "1") {
      count++;
    }
  }
  return count;
};

//Method 2

var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    n = n & (n - 1);
    count++;
  }
  return count;
};

console.log(hammingWeight(00000000000000000000000000001011)); //3
console.log(hammingWeight(00000000000000000000000010000000)); //1
console.log(hammingWeight(11111111111111111111111111111101)); //31 gives as 32 due to out of range
