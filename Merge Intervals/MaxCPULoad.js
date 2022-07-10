const maxCPU = (machine) => {//not solved
  let load = 0,
    i = 0;
  let maxLoad = -1;
  machine.sort((a, b) => a[0] - b[0]);
  console.log(machine);
  while (i < machine.length - 1) {
    if (machine[i][1] > machine[i + 1][0]) {
      load = machine[i][2] + machine[i + 1][2];
      if (load > maxLoad) {
        maxLoad = load;
      }
    }
    i++;
  }
  if (maxLoad === -1) {
    machine.sort((a, b) => b[2] - a[2]);
    maxLoad = machine[0][2];
  }
  return maxLoad;
};

console.log(
  maxCPU([
    [1, 4, 3],
    [2, 5, 4],
    [7, 9, 6],
  ])
);

console.log(
  maxCPU([
    [6, 7, 10],
    [2, 4, 11],
    [8, 12, 15],
  ])
);

console.log(
  maxCPU([
    [1, 4, 2],
    [2, 4, 1],
    [3, 6, 5],
  ])
);
