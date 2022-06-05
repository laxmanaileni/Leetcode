var findMin = function (nums) {
  let start = 0,
    end = nums.length - 1;
  if (nums[start] < nums[end]) {
    return nums[start];
  } else {
    while (true) {
      if (nums[end] > nums[end - 1]) {
        end -= 1;
      } else {
        return nums[end];
      }
    }
  }
};

console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
console.log(findMin([]));
