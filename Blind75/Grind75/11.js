// https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let Area = 0;

  while (left <= right) {
    Area = Math.max(
      Area,
      (right - left) * Math.min(height[right], height[left])
    );
    if (height[left] <= height[right]) left++
    else if (height[right] < height[left]) right--;
  }
  return Area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
