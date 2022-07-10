// const maxSum = (array, k) => {
//   let maxi = 0;
//   let sum = 0;
//   let j = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     if (sum > maxi) {
//       maxi = sum;
//     }
//     if (i >= k - 1) {
//       //maxi=Math.max(maxi,sum)
//       sum -= array[j];
//       j += 1;
//     }
//   }
//   return maxi;
// };
//Practice
const maxSum = (array, k) => {
  let start = 0;
  let sum = 0,
    max = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= array[start];
      start = start + 1;
    }
  }
  return max;
};

console.log(maxSum([2, 1, 5, 1, 3, 2], 3));
console.log(maxSum([2, 3, 4, 1, 5], 2));
