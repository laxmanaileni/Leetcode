var countPoints = function (rings) {
  let map = {},
    count = 0;
  for (let i = 1; i < rings.length; i = i + 2) {
    if (map[rings[i]] !== undefined) {
      map[rings[i]].push(rings[i - 1]);
    } else {
      map[rings[i]] = [rings[i - 1]];
    }
  }
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    let arr = Object.values(map[keys[i]]);
    let setValues = [...new Set(arr)];
    if (setValues.length === 3) {
      count++;
    }
  }
  return count;
};

console.log(countPoints("B0B6G0R6R0R6G9"));
