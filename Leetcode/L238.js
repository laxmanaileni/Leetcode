var productExceptSelf = function (nums) {
  let result = [],
    leftProduct = 1,
    rightProduct = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = rightProduct;
    rightProduct = rightProduct * nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] *= leftProduct;
    leftProduct = leftProduct * nums[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); //[ 24, 12, 8, 6 ]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); //[ 0, 0, 9, 0, 0 ]
