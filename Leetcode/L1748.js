var sumOfUnique = function (nums) {
  let map = {},
    sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  for (let i = 0; i < Object.keys(map).length; i++) {
    if (Object.values(map)[i] === 1) {
      sum += parseInt(Object.keys(map)[i]);
    }
  }
  return sum;
};
