// var sortJumbled = function (mapping, nums) {
//   let map = {};
//   for (let i = 0; i < mapping.length; i++) {
//     map[i] = mapping[i];
//   }
//   let set = {};

//   for (let i = 0; i < nums.length; i++) {
//     let str = [];
//     let string = nums[i].toString();
//     for (let j = 0; j < string.length; j++) {
//       if (map[string[j]] > 0) {
//         str.push(map[string[j]]);
//       }
//     }

//     set[nums[i]] = str.join("");
//   }
//  // console.log(set)
//   return nums.sort((a,b)=>set[a]-set[b])

// };
var sortJumbled = function (mapping, nums) {
  let map = {};
  for (let i = 0; i < mapping.length; i++) {
    map[i] = mapping[i];
  }
  let set = {};

  for (let i = 0; i < nums.length; i++) {
    let str = [];
    let string = nums[i].toString();
    for (let j = 0; j < string.length; j++) {
      if (map[string[j]] > 0) {
        str.push(map[string[j]]);
      }
    }

    set[nums[i]] = str.join("");
  }
  // console.log(set)
  return nums.sort((a, b) => set[a] - set[b]);
};

const getRealValue = (mapping, value) => {
  if (value === 0) return mapping[0];
  let realValue = 0;
  let carry = 1;
  while (value > 0) {
    const digit = value % 10;
    realValue += mapping[digit] * carry;
    carry *= 10;
    value = (value / 10) >> 0;
  }
  // console.log(realValue)
  return realValue;
};
const sortJumbled = (mapping, nums) => {
  const cache = {};
  for (const num of nums) {
    cache[num] = getRealValue(mapping, num);
  }
  console.log(cache);
  return nums.sort((a, b) => cache[a] - cache[b]);
};
console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]));
//console.log(sortJumbled([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [789, 456, 123]));
