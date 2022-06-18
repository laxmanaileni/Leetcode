// const connectRopes = (nums) => {
//   nums.sort((a, b) => a - b);
//   let result = nums[0] + nums[1],
//     start = 2,
//     sum = 0;
//   let res = [];
//   res.push(result);
//   while (true) {
//     if (
//       result < nums[start] ||
//       (result > nums[start] && result < nums[start + 1])
//     ) {
//       result = result + nums[start];
//       res.push(result);
//     }
//     if (nums.length === start) {
//       res.map((r) => (sum += r));
//       return sum;
//     }
//     start++;
//   }
// };

// console.log(connectRopes([1, 3, 11, 5]));
// console.log(connectRopes([3, 4, 5, 6]));

const merge = (L1, L2, L3) => {
  let start = 0,
    middle = 0,
    end = 0;
  let length = L1.length + L2.length + L3.length,
    res = [];
    console.log(length)
  for (let i = 0; i < length; i++) {
    if (L1[start] < L2[middle] && L1[start] < L3[end]) {
      res.push(L1[start]);
      start++;
    }else if (L1[start] > L2[middle] && L2[middle] < L3[end]) {
      res.push(L2[middle]);
      middle++;
    }else if (L1[start] > L3[end] && L2[middle] > L3[end]) {
      res.push(L3[end]);
      end++;
    }

  }
  console.log(res)
};

console.log(merge([2, 6, 8], [3, 6, 7], [1, 3, 4]));
