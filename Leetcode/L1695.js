var maximumUniqueSubarray = function (nums) {
  //Find the subarray of unique elements

  let map = {},
    start = 0,
    sumArray = 0,
    maxTotal = 0;

  for (let i = 0; i < nums.length; i++) {
    while (map[nums[i]] !== undefined) {
      map[nums[start]]--;
      sumArray -= nums[start];
      if (map[nums[start]] === 0) {
        delete map[nums[start]];
      }
      start++;
    }

    if (map[nums[i]] === undefined) {
      sumArray += nums[i];
      maxTotal = Math.max(maxTotal, sumArray);
      map[nums[i]] = 1;
    }
  }
  let res = Object.keys(map),
    sum = 0;
  res.map((num) => (sum = sum + parseInt(num)));
  return maxTotal;
};

console.log(maximumUniqueSubarray([4, 2, 4, 5, 6]));
console.log(maximumUniqueSubarray([5, 2, 1, 2, 5, 2, 1, 2, 5]));
console.log(maximumUniqueSubarray([10000, 1, 10000, 1, 1, 1, 1, 1, 1]));
