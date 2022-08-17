// Method 1 Time Complexity of O(n)

const findKthLargest = (nums, k) => {
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
  console.log(minHeap.toArray())
  return minHeap.dequeue().element;
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
