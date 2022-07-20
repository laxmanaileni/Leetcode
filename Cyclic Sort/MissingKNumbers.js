var findKthPositive = function (arr, k) {
  let i = 0,
    n = arr.length;

  while (i < n) {
    let j = arr[i] - 1;
    if (arr[i] > 0 && arr[i] <= n && arr[i] !== arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }
  //console.log(arr);
  let res = [];
  let map = {};
  for (let i = 0; i < n; i++) {
    if (res.length < k) {
      if (arr[i] !== i + 1) {
        res.push(i + 1);
        map[arr[i]] = 1;
      }
    }
  }

  i = 1;
  while (res.length < k) {
    const can = i + k;
    if (!map[can]) {
      res.push(can);
    }
    i += 1;
  }
  return res;
};

console.log(findKthPositive([3, -1, 4, 5, 5], 3));

console.log(findKthPositive([2, 3, 4], 3));

console.log(findKthPositive([-2, -3, 4], 2));


