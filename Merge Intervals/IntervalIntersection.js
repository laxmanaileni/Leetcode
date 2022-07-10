const intervalIntersection = (arr1, arr2) => {
  let result = [],
    i = 0,
    j = 0,
    start = 0,
    end = 1;

  while (i < arr1.length && j < arr2.length) {
    aOverlapb =
      arr1[i][start] >= arr2[j][start] && arr1[i][start] <= arr2[j][end]; // If arr1 overlap over arr2
    bOverlapa =
      arr1[i][start] <= arr2[j][start] && arr2[j][start] <= arr1[i][end]; // If arr2 overlap over arr1

    if (aOverlapb || bOverlapa) {
      // If overlap happens push the overlapped area to result
      result.push([
        Math.max(arr1[i][start], arr2[j][start]),
        Math.min(arr1[i][end], arr2[j][end]),
      ]);
    }

    if (arr1[i][end] < arr2[j][end]) {
      // If not go to next interval which finishes first
      i += 1;
    } else {
      j += 1;
    }
  }
  return result;
};

console.log(
  intervalIntersection(
    [
      [1, 3],
      [5, 6],
      [7, 9],
    ],
    [
      [2, 3],
      [5, 7],
    ]
  )
);
console.log(
  intervalIntersection(
    [
      [1, 3],
      [5, 7],
      [9, 12],
    ],
    [[5, 10]]
  )
);
