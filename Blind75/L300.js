//  Initialize an array with nums length and fill with 1. here compare left index of array to right index if greater then check the same index in initialised array if less than or equal then apply the condition

var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;
  let array = Array(nums.length).fill(1);
  let max = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && array[i] <= array[j]) {
        array[i] = 1 + array[j];
        if (max < array[i]) {
          max = array[i];
        }
      }
    }
  }
  return max;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
