//Check whether there is overlap of intervals or not
const conflict = (intervals) => {
  if (!intervals || intervals.length === 1) return false;

  let start = 0,
    end = 1,
    i = 0;
  intervals.sort((a, b) => a[start] - b[start]);

  while (i < intervals.length - 1) {
    if (intervals[i][end] > intervals[i + 1][start]) {
      return false;
    }
    i++;
  }
  return true;
};

console.log(
  conflict([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);
console.log(
  conflict([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
);
console.log(
  conflict([
    [4, 5],
    [2, 3],
    [3, 6],
  ])
);
/**false
true
false */

const conflictNames = (intervals) => {
  if (!intervals || intervals.length === 1) return false;

  let start = 0,
    end = 1,
    i = 0,
    result = [];
  intervals.sort((a, b) => a[start] - b[start]);

  while (i < intervals.length - 1) {
    if (intervals[i][end] > intervals[i + 1][start]) {
      result.push(intervals[i]);
      result.push(intervals[i + 1]);
    }
    i++;
  }
  return result;
};

console.log(
  conflictNames([
    [1, 4],
    [2, 5],
    [7, 9],
  ])
);
console.log(
  conflictNames([
    [6, 7],
    [2, 4],
    [8, 12],
  ])
);
console.log(
  conflictNames([
    [4, 5],
    [2, 3],
    [3, 6],
  ])
);

console.log(
  conflictNames([
    [4, 5],
    [2, 3],
    [3, 6],
    [5, 7],
    [7, 8],
  ])
);
