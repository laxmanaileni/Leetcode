var topKFrequent = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let res = [...Object.entries(map).sort((a, b) => b[1] - a[1])];
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(parseInt(res[i][0]));
  }
  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
