var kClosest = function (points, k) {
  let pq = new MinPriorityQueue();
  let result = [];
  for (let point of points) {
    let value = Math.sqrt(point[0] * point[0] + point[1] * point[1]); // Calculating distance from origin
    pq.enqueue(point, value);
  }
  // console.log(pq.toArray());

  for (let i = 0; i < k; i++) {
    // Output only K points into result
    result.push(pq.dequeue().element);
  }
  return result;
};
console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
