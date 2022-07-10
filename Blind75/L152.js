var maxProduct = function (nums) {
  // Solved using Prefix Product Pattern
  if (nums.length === 1) return nums[0];
  let firstNegative = 1,
    currentPrefix = 1,
    maxProduct = 0;
  for (let i = 0; i < nums.length; i++) {
    currentPrefix *= nums[i];
    maxProduct = Math.max(maxProduct, currentPrefix);
    if (currentPrefix < 0) {
      maxProduct = Math.max(maxProduct, currentPrefix / firstNegative);
      firstNegative = firstNegative === 1 ? currentPrefix : firstNegative;
    } else if (currentPrefix === 0) {
      firstNegative = 1;
      currentPrefix = 1;
    }
  }
  return maxProduct;
};

console.log(maxProduct([2, 3, -2, 4])); //6
console.log(maxProduct([-2, 3, -4])); //24
console.log(maxProduct([-2, 0, -1])); //0
