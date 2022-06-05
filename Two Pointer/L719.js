//   KthSmallDistance

// var smallestDistancePair = function (nums, k) {

//   let array = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       array.push(Math.abs(nums[i] - nums[j]));
//     }
//   }
//   console.log(array);
//   array = array.sort((a, b) => a - b);
//   return array[k - 1];
// };

const cntPairsOfDistanceUnderN = (nums, n) => {
    let lt = 0;
    let rt = 1;
    let cnt = 0;
    while (lt <= rt) {
      if (lt === rt) {
        rt++;
      }
      if (rt === nums.length) {
        cnt = cnt + ((rt - lt - 1) * (rt - lt)) / 2;
        break;
      }
      if (Math.abs(nums[rt] - nums[lt]) < n) {
        rt++;
      } else {
        cnt = cnt + (rt - lt - 1);
        lt++;
      }
    }
    return cnt;
  };
  
  const smallestDistancePair = (nums, k) => {
    nums.sort((a, b) => a - b);
    let lt = 0;
    let rt = 1000000;
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      const a = cntPairsOfDistanceUnderN(nums, mid);
      const b = cntPairsOfDistanceUnderN(nums, mid + 1);
      if (a < k && b >= k) {
        return mid;
      } else if (b < k) {
        lt = mid + 1;
      } else {
        rt = mid - 1;
      }
    }
  };

console.log(smallestDistancePair([1, 3, 1], 1));
console.log(smallestDistancePair([1, 1, 1], 2));
console.log(smallestDistancePair([1, 6, 1], 3));
console.log(smallestDistancePair([62, 100, 4], 2)); //58
