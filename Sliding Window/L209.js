//Sliding Window method with Varaible Size // Small Sub Array
const smallSubArray = (array, S) => {
  let sum = 0,
    start = 0;
  let minLen = Infinity;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    while (sum >= S) {
      minLen = Math.min(minLen, i - start + 1);
      sum -= array[start];
      start += 1;
    }
  }
  if (minLen === Infinity) {
    return 0;
  }
  return minLen;
};

console.log(smallSubArray([2, 1, 5, 2, 3, 2], 7));
console.log(smallSubArray([2, 1, 5, 2, 8], 7));
