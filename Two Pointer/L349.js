var intersection = function (nums1, nums2) {
  let map = {};
  let set = {};
  let array = [];
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      map[nums2[i]]++;
    } else {
      map[nums2[i]] = 1;
    }
  }
  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]] && !set[nums1[i]]) {
      array.push(nums1[i]);
      set[nums1[i]] = 1;
    }
  }
  return array;
};

console.log(intersection([1, 2, 2, 1], [2, 2])); //[ 2 ]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); //[ 4, 9 ]
