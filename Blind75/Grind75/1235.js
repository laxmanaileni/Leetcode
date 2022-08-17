//https://leetcode.com/problems/maximum-profit-in-job-scheduling/

var jobScheduling = function (startTime, endTime, profit) {
  let jobs = [];

  const dp = Array(startTime.length + 1).fill(0);

  //jobs as array with [startTime, endTime, profit]
  for (let i = 0; i < startTime.length; i++) {
    //Store all the start end and profits separately
    jobs[i] = [startTime[i], endTime[i], profit[i]];
  }
  jobs.sort((a, b) => a[0] - b[0]); //Sort acc to start time
  //[ [ 1, 3, 50 ], [ 2, 4, 10 ], [ 3, 5, 40 ], [ 3, 6, 70 ] ]
  console.log(jobs);

  const binarySearch = (index) => {
    //Binary Search
    let low = index + 1,
      high = jobs.length;

    while (low < high) {
      let mid = Math.floor((low + high) / 2);

      if (jobs[mid][0] >= jobs[index][1]) high = mid;
      else low = mid + 1;
    }
    return low;
  };

  for (let i = jobs.length - 1; i >= 0; i--) {
    const next = binarySearch(i);
    console.log(next);
    dp[i] = Math.max(dp[i + 1], jobs[i][2] + dp[next]);
  }
  console.log(dp);
  return dp[0];
};

console.log(jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70]));
