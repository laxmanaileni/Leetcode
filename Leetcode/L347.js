//* Method 1

var topKFrequent = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) map[nums[i]] = 0;
    map[nums[i]]++;
  } // Forming HashMap with key and value with repeating count
  let maxHeap = new MaxPriorityQueue();
  for (let key of Object.keys(map)) {
    // Using MaxHeap we can get Max Repeatition to min repeat numbers
    maxHeap.enqueue(key, map[key]);
  }
  let result = [];
  for (let i = 0; i < k; i++) {
    // Output top K max repeat numbers
    result.push(maxHeap.dequeue().element);
  }
  return result;
};

//* Method 2
/*
var topKFrequent = function (nums, k) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] !== undefined) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }
  }
  let res = [...Object.entries(map).sort((a, b) => b[1] - a[1])];
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(parseInt(res[i][0]));
  }
  return result;
};
*/
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
