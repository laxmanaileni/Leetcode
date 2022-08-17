//https://leetcode.com/problems/largest-rectangle-in-histogram/
var largestRectangleArea = function (heights) {
  let max = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === heights[i - 1]) continue;
    k = j = i;
    while (heights[j] && heights[j] >= heights[i]) j++; //increase forward
    while (heights[k] && heights[k] >= heights[i]) k--; //decrease backward
    max = Math.max(max, heights[i] * Math.abs(k - j + 1)); //backward-forward find max value
  }
  return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
