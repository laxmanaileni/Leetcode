class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start},${this.end}]`);
  }
}

const insert = (intervals, new_interval) => {
  //intervals.sort((a, b) => a.start - b.start);

  //let start=intervals[0].start,end=intervals[0].end;

  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    if (
      interval.end >= new_interval.start ||
      interval.start >= new_interval.start
    ) {
      //Overlaping
      new_interval.start = Math.min(interval.start, new_interval.start);
      new_interval.end = Math.max(interval.end, new_interval.end);
    }
  }
  merged.push(new_interval);

  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }
  return merged;
};

process.stdout.write("Inserted intervals: ");
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}

process.stdout.write("Inserted intervals: ");
result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 10)
);
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}

process.stdout.write("Inserted intervals: ");
result = insert([new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4));
for (let i = 0; i < result.length; i++) {
  result[i].print_interval();
}
