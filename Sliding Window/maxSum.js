const maxSum = (array, k) => {
  let maxi = 0;
  let sum = 0;
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum > maxi) {
      maxi = sum;
    }
    if (i >= k - 1) {
      //maxi=Math.max(maxi,sum)
      sum -= array[j];
      j += 1;
    }
  }
  return maxi;
};

console.log(maxSum([2, 1, 5, 1, 3, 2], 3));
