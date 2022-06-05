var findMaxAverage = function (nums, k) {
  let end = nums.length - k + 1;
  // if(nums.length<=1){
  //     return nums[0]/k
  // }
  let maxAvg = -10000;
  let start = 0;
  while (end > 0) {
    let sum = 0;
    for (let i = start; i < start + k; i++) {
      sum += nums[i];
    }
    avg = sum / k;
    maxAvg = Math.max(maxAvg, avg);
    start++;
    end--;
  }
  return maxAvg;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([-1], 1));
