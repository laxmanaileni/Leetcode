var insert = function (intervals, newInterval) {
  let result = [],
    start = 0,
    end = 1;
  let i = 0;
  while (i < intervals.length && intervals[i][end] < newInterval[start]) {
    result.push(intervals[i]);
    i += 1;
  }

  while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
    newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
    newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
    i += 1;
  }
  result.push(newInterval);
  while (i < intervals.length) {
    result.push(intervals[i]);
    i += 1;
  }
  return result;
};

console.log(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
console.log(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
);
