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
