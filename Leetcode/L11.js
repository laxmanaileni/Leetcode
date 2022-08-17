var maxArea = function (height) {
  let max = 0;
  let start = 0,
    end = height.length - 1;
  if (height.length === 2) {
    return 1 * Math.min(height[0], height[1]);
  }
  for (let i = 0; i < height.length; i++) {
    if (start < end) {
      if (max < (end - start) * Math.min(height[start], height[end])) {
        max = Math.max(
          max,
          (end - start) * Math.min(height[start], height[end])
        );
      }
      if (height[start] < height[end]) {
        start += 1;
      } else if (height[start] >= height[end]) {
        end -= 1;
      }
    }
  }
  return max;
};

//Method 2

var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let Area = 0;

  while (left <= right) {
    Area = Math.max(
      Area,
      (right - left) * Math.min(height[right], height[left])
    );
    if (height[left] <= height[right]) left++;
    else if (height[right] < height[left]) right--;
  }
  return Area;
};
