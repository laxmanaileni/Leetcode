//Method 1 Sliding Window Method
const avgArray = (array, K) => {
  let result = [];
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += array[i];
  }
  for (let i = 0; i < array.length - K + 1; i++) {
    result.push(sum / K);
    sum = sum - array[i] + array[i + K];
  }
  return result;
};

console.log(avgArray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

//Method 2
const avgArrays = (array, K) => {
  const result = [];
  let sum = 0,
    i = 0;
  for (let j = 0; j < array.length; j++) {
    sum += array[j];
    if (j >= K - 1) {
      result.push(sum / K);
      sum -= array[i];
      i += 1;
    }
  }
  return result;
};

console.log(avgArrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
