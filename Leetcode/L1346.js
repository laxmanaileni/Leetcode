var checkIfExist = function (arr) {
  arr.sort((a, b) => a - b);
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }
  console.log(map);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (map[arr[i]] > 1) {
        return true;
      }
    }
    if (map[2 * arr[i]] !== undefined && arr[i] !== 0) {
      return true;
    }
  }
  return false;
};

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
console.log(checkIfExist([0, 0]));
