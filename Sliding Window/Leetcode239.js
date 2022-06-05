var maxSlidingWindow = function (nums, k) { //Not solved

  let result = [];
  let window = [];

  for (let i = 0; i < nums.length; i++) {
    window.push(nums[i]);
    if (i >= k - 1) {
      // console.log(window);
      result.push(Math.max(...window));
      window.shift();
    }
  }
  return result;
};

//   for (let i = 0; i < k; i++) {
//     if (maxWindowOne < nums[i]) {
//       maxWindowOne = nums[i];
//     }
//   }
//   for (let i = k - 1; i < nums.length - k; i++) {
//     if (i === k - 1) {
//       result.push(maxWindowOne);
//       maxi = maxWindowOne;
//     }
//     if (i > k - 1 && k > 1) {
//       while (start < i) {
//         if (maxi < nums[start + 1]) {
//           maxi = nums[start];
//         }
//         start += 1;
//         result.push(maxi);
//       }
//     } else if (k === 1) {
//       result.push(nums[i]);
//     }
//   }
//   return result;
// };

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([7, 2, 4], 2));
