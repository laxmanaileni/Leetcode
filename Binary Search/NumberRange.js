const range = (nums, key) => {
  let result = [-1, -1];
  if (key < nums[0] || key > nums[nums.length - 1]) return result;
  result[0] = find_range(nums, key, true);
  if (result[0] !== -1) {
    result[1] = find_range(nums, key, false);
  }
  return result;
};

const find_range = (nums, key, findMaxIndex) => {
  let start = 0,
    end = nums.length - 1;
  let keyIndex = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] > key) {
      end = mid - 1;
    } else if (nums[mid] < key) {
      start = mid + 1;
    } else {
      keyIndex = mid;
      if (findMaxIndex) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return keyIndex;
};

console.log(range([1, 3, 8, 10, 15], 10));
console.log(range([1, 3, 8, 10, 15], 12));
