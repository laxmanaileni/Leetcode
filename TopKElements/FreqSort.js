//https://leetcode.com/problems/sort-characters-by-frequency/

var frequencySort = function (s) {
  let array = s.split("");
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] === undefined) map[array[i]] = 0;
    map[array[i]]++;
  }
  let maxQueue = new MaxPriorityQueue();

  for (let key of Object.keys(map)) {
    maxQueue.enqueue(key, map[key]);
  }

  let sortedString = [];

  while (maxQueue.size() > 0) {
    let list = maxQueue.dequeue();
    for (let i = 0; i < list.priority; i++) {
      sortedString.push(list.element);
    }
  }
  return sortedString.join("");
};

console.log(frequencySort("tree"));
