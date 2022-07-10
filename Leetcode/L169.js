var majorityElement = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let array = Object.entries(map).sort((a, b) => b[1] - a[1]);
  return array[0][0];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
