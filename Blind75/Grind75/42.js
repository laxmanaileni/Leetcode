//https://leetcode.com/problems/trapping-rain-water/

var trap = function (height) {
  let leftMax = -1,
    rightMax = -1,
    left = 0,
    right = height.length - 1,
    res = 0;

  while (left <= right) {
    //Find Left and Right Maximum
    leftMax = height[left] > leftMax ? height[left] : leftMax;
    rightMax = height[right] > rightMax ? height[right] : rightMax;

    //If leftMax > rightMax then calculate the water stored at rightside from rightMax to current height[right]
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

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
