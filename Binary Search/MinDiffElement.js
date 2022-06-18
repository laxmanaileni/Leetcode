var minDiffElement = function (nums, key) {
  if (key >= nums[nums.length - 1]) return nums[nums.length - 1];
  let start = 0,
    end = nums.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (nums[mid] === key) return nums[mid];
    if (nums[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return nums[end];
};

console.log(minDiffElement([4, 6, 10], 7));
console.log(minDiffElement([4, 6, 10], 4));
console.log(minDiffElement([1, 3, 8, 10, 15], 12));
console.log(minDiffElement([4, 6, 10], 17));
