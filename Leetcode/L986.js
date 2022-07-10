var intervalIntersection = function (firstList, secondList) {
  if (!firstList || !secondList) return [];
  let start = 0,
    end = 1,
    i = 0,
    j = 0,
    result = [];
  while (i < firstList.length && j < secondList.length) {
    arr1Overlap =
      firstList[i][start] >= secondList[j][start] &&
      firstList[i][start] <= secondList[j][end];
    arr2Overlap =
      firstList[i][start] <= secondList[j][start] &&
      secondList[j][start] <= firstList[i][end];

    if (arr1Overlap || arr2Overlap) {
      result.push([
        Math.max(firstList[i][start], secondList[j][start]),
        Math.min(firstList[i][end], secondList[j][end]),
      ]);
    }
    if (firstList[i][end] < secondList[j][end]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  )
);
