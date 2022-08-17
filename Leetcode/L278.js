//https://leetcode.com/problems/first-bad-version/
var solution = function (isBadVersion) {
  return function (n) {
    let left = 1,
      right = n;
    let min = null;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        min = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return min;
  };
};

console.log(solution(isBadVersion));
