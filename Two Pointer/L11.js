var maxArea = function (height) {
  let max = 0;
  let start = 0,
    end = height.length - 1;
  if (height.length === 2) {
    return height[0] * height[1];
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

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));//49
console.log(maxArea([4, 3, 2, 1, 4]));//16
console.log(maxArea([2, 3, 4, 5, 18, 17, 6]));//17
console.log(maxArea([1, 3, 2, 5, 25, 24, 5])); //24
