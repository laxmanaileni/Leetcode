var digitCount = function (num) { //TODO
  let map = {};

  for (let i = 0; i < num.length; i++) {
    map[i] = num[i];
//console.log(num[i])
    // if (map[num[i]] !== undefined) {
    //   map[num[i]]++;
    // } else {
    //     // console.log(num[i],i)
    //   map[i] = num[i];
    // }
  }
  console.log(map);
  for (let i = 0; i < num.length; i++) {
    if (map[i] !== num[i]) {
        return false
    }
  }
  return true
};

console.log(digitCount("1210"));
console.log(digitCount("030"));
