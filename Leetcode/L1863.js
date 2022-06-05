var subsetXORSum = function (nums) {
  let bitOR = 0;
  for (let i = 0; i < nums.length; ++i) {
    bitOR = bitOR | nums[i];
  }
  console.log(bitOR);
  return bitOR * Math.pow(2, nums.length - 1);
};

console.log(subsetXORSum([5, 1, 6]));
 