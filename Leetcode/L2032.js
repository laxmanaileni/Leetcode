var twoOutOfThree = function (nums1, nums2, nums3) {
  let map = {};
  let set = {},
    res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] !== undefined) {
      // map[nums[i]]=1
    } else {
      map[nums1[i]] = 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      res.push(nums2[i]);
    }
    if (set[nums2[i]] !== undefined) {
      // map[nums[i]]=1
    } else {
      set[nums2[i]] = 1;
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    if (map[nums3[i]]) {
      res.push(nums3[i]);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    if (set[nums3[i]]) {
      res.push(nums3[i]);
    }
  }
  let set1 = new Set(res);
  return [...set1];
};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(twoOutOfThree([3, 1], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
