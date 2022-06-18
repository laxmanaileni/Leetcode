const searchCeiling = (nums, key) => {
  if (key > nums[nums.length - 1]) {
    return -1;
  }
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === key) return mid;
    if (nums[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
};
console.log(searchCeiling([4, 6, 10], 6));
console.log(searchCeiling([1, 3, 8, 10, 15], 12));
console.log(searchCeiling([4, 6, 10], 17));
console.log(searchCeiling([4, 6, 10], -1));

const searchFloor = (nums, key) => {
  if (key < nums[0]) return -1;
  if (key > nums[nums.length - 1]) {
    return nums.length - 1;
  }
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === key) return mid;
    if (nums[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
};

console.log(searchFloor([4, 6, 10], 6));
console.log(searchFloor([1, 3, 8, 10, 15], 12));
console.log(searchFloor([4, 6, 10], 17));
console.log(searchFloor([4, 6, 10], -1));
