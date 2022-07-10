class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  print_interval() {
    process.stdout.write(`[${this.start},${this.end}]`);
  }
}
//* Method 1
/**
 * const merge = (intervals) => {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a.start - b.start);//* Sort the intervals

  const mergeIntervals = [];
  let start = intervals[0].start,
    end = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];
    if (interval.start <= end) { //*  Overlapping the intervals
      end = Math.max(end, interval.end);
    } else {
      mergeIntervals.push(new Interval(start, end));  //* Not overlapping interval
      start = interval.start;
      end = interval.end;
    }
  }
  mergeIntervals.push(new Interval(start, end)); //* add the last interval
  return mergeIntervals;
};

 */

process.stdout.write("Merged intervals: ");
let result = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
]);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}

process.stdout.write("Merged intervals: ");
result = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}

process.stdout.write("Merged intervals: ");
result = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}

//* Method 2
/*
const merge = (intervals) => {
  if (!intervals) return [];
  if (intervals.length < 2) return intervals;
  let start = 0,
    end = 1;
  intervals.sort((a, b) => a[start] - b[start]); //*Sort by start time
  let prev = intervals[0];
  let mergeIntervals = [prev];

  for (let current of intervals) {
    if (current[start] <= prev[end]) { //* Overlap
      prev[end] = Math.max(prev[end], current[end]);
    } else { //* No Overlap
      mergeIntervals.push(current);
      prev = current;
    }
  }
  return mergeIntervals;
};
*/
