var moveZeroes = function (nums) {
  let counter = 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[start] = nums[i];
      start++;
    } else {
      counter++;
    }
  }
  for (let i = nums.length - counter; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); //[ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0])); //[ 0 ]
