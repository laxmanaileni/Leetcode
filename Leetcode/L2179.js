var goodTriplets = function (nums1, nums2) {//Not solved 
  let resSubArrayNums1 = [],resSubArrayNums2=[];
  for (let i = 0; i < nums1.length - 2; i++) {
    let middle = i + 1;
    while (middle !== nums1.length - 1) {
      let end = middle + 1;
      while (end !== nums1.length) {
        resSubArrayNums1.push([nums1[i], nums1[middle], nums1[end]]);
        resSubArrayNums2.push([nums2[i], nums2[middle], nums2[end]]);
        end++;
      }
      middle++;
    }
  }
  let map = [];

  for (let i = 0; i < resSubArrayNums1.length; i++) {
    let x = resSubArrayNums1[i].join("");
    if (map[x] !== undefined) {
      map[x] += 1;
    } else {
      map[x] = 1;
    }
  }
  let count = 0;

  for (let i = 0; i < resSubArrayNums2.length; i++) {
    let x = resSubArrayNums2[i].join("");
    if (map[x] !== undefined) {
      count++;
    }
  }
  return count;
};

console.log(goodTriplets([2, 0, 1, 3], [0, 1, 2, 3]));
console.log(goodTriplets([4, 0, 1, 3, 2], [4, 1, 0, 2, 3]));
console.log(goodTriplets([12,2,1,10,7,6,13,9,11,4,5,3,14,15,8,0], [9,11,10,4,5,2,1,8,7,3,12,13,6,15,14,0]));
