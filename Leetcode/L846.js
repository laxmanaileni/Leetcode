var isNStraightHand = function (hand, groupSize) {
  (nums = hand), (k = groupSize);
  if (nums.length % k) return false;
  let map = {},
    set = new Set(nums);
  nums.forEach((x) => (map[x] ? map[x]++ : (map[x] = 1)));
  let count = nums.length / k;
  while (count--) {
    let min = Math.min(...set);
    for (let i = min; i < min + k; i++) {
      if (!map[i]) return false;
      if (--map[i] == 0) set.delete(i);
    }
  }
  return true;
};

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
console.log(isNStraightHand([1, 2, 3, 4, 5], 4));
