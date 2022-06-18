var missingNumber = function (nums) {
  let length = nums.length + 1;
  let x1 = 1;
  for (let i = 2; i < length; i++) {
    x1 = x1 ^ i;
  }
  let x2 = nums[0];
  for (let i = 1; i < length - 1; i++) {
    x2 = x2 ^ nums[i];
  }
  return x1 ^ x2;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
