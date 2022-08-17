//https://leetcode.com/problems/trapping-rain-water/

var trap = function (height) {
  let leftMax = -1,
    rightMax = -1,
    left = 0,
    right = height.length - 1,
    res = 0;

  while (left <= right) {
    leftMax = height[left] > leftMax ? height[left] : leftMax;
    rightMax = height[right] > rightMax ? height[right] : rightMax;
    if (leftMax > rightMax) {
      res += rightMax - height[right];
      right--;
    } else {
      res += leftMax - height[left];
      left++;
    }
  }
  return res;
};

console.log(trap([4, 2, 0, 3, 2, 5])); //9
