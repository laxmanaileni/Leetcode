//* Best Method   Time Complexity O(klogk+(nums.length-k)logk) == O(Nlogk)
var findKthLargest = function (nums, k) {
  let minHeap = new MinPriorityQueue(k);

  for (let num of nums) {
    if (minHeap.size() < k) {
      minHeap.enqueue(num); // Add number into the minHeap untill it reaches k size
    } else {
      if (minHeap.front().element < num) {
        // If the minHeap.peep() root is less than num
        minHeap.dequeue(); // Remove the root
        minHeap.enqueue(num); //push the num into the minHeap
      }
    }
  }
  //console.log(minHeap.toArray())
  return minHeap.dequeue().element;
};

//Method 1
var findKthLargest = function (nums, k) {
  nums = nums.sort((a, b) => b - a);
  return nums[k - 1];
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

//Method 2
var findKthLargest = function (nums, k) {
  buildHeap(nums);
  let max;
  //extract k elements from max heap
  for (let i = 0; i < k; i++) {
    max = nums[0];
    nums[0] = nums[nums.length - 1];
    nums.length--;
    heapify(nums, 0); // rebuild heap
  }
  return max;
};

function buildHeap(nums) {
  let n = nums.length;
  let indexOfFirstNonLeaf = Math.floor(n / 2) - 1;

  while (indexOfFirstNonLeaf >= 0) {
    heapify(nums, indexOfFirstNonLeaf);
    indexOfFirstNonLeaf--;
  }
}

function heapify(nums, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;

  if (left < nums.length && nums[left] > nums[largest]) {
    largest = left;
  }

  if (right < nums.length && nums[right] > nums[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(nums, i, largest);
    heapify(nums, largest);
  }
}

function swap(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}
