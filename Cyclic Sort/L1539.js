var findKthPositive = function (arr, k) {
  let i = 0,
    n = arr.length;

  while (i < n) {
    let j = arr[i] - 1;
    if ( arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }
  console.log(arr);
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i + 1) {
      if (!k) {
        return i;
      } else {
        k--;
      }
    }
  }
  return n + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); //9
console.log(findKthPositive([2, 3, 4], 3)); //6
 console.log(findKthPositive([1, 2, 3, 4], 2));//6
