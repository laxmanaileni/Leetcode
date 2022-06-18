var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let tar = target - nums[i];
    if (map[tar] !== undefined) {
      return [map[tar], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
