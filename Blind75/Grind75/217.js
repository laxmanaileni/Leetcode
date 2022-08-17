var containsDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 1;
    } else if (map[nums[i]] !== undefined) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
