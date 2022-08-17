//https://leetcode.com/problems/kth-largest-element-in-a-stream/

var KthLargest = function (k, nums) {
  this.k = k;
  this.minHeap = new MinPriorityQueue(); // We are using the Min Heap
  nums.forEach((num) => this.add(num)); //Add all nums to minHeap using add function
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.enqueue(val); //Add val to minHeap

  if (this.minHeap.size() > this.k) {
    //If the size is more than k then pop out the root
    this.minHeap.dequeue().element;
  }
  return this.minHeap.front().element; // return the kth element of the minHeap
};

/*
 
Input
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

Output
[null, 4, 5, 5, 8, 8]

 */

/* This is how it works
[
  { priority: 4, element: 4 },
  { priority: 5, element: 5 },
  { priority: 8, element: 8 }
]
[
  { priority: 4, element: 4 },
  { priority: 5, element: 5 },
  { priority: 8, element: 8 }
]
[
  { priority: 5, element: 5 },
  { priority: 5, element: 5 },
  { priority: 8, element: 8 }
]
[
  { priority: 5, element: 5 },
  { priority: 8, element: 8 },
  { priority: 10, element: 10 }
]
[
  { priority: 8, element: 8 },
  { priority: 9, element: 9 },
  { priority: 10, element: 10 }
]
[
  { priority: 8, element: 8 },
  { priority: 9, element: 9 },
  { priority: 10, element: 10 }
]
*/
