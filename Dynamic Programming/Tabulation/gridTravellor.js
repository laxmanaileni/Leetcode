const gridTravellor = (m, n) => {
  const table = Array(m + 1)
    .fill(0)
    .map((m) => Array(n + 1).fill(0));
  table[1][1] = 1;
  //   console.log(table);
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      let current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }
  return table[m][n];
};

console.log(gridTravellor(1, 1)); //1
console.log(gridTravellor(2, 3)); //3
console.log(gridTravellor(3, 2)); //3
console.log(gridTravellor(3, 3)); //6
console.log(gridTravellor(18, 18)); //2333606220
console.log(gridTravellor(3, 7)); //28
