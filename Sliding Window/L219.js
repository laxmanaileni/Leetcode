var containsNearbyDuplicate = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
     // console.log(map[nums[i]], i);
      if (Math.abs(map[nums[i]] - i) <= k) {
        return true;
      }else{
        map[nums[i]] = i;
      }
    } else {
      map[nums[i]] = i;
    }
    //console.log(map)
  }
  return false;
};

 console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));
