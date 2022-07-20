/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are structurally identical, and the nodes have the same value
 */

var isSameTree = function (p, q) {
  let queue = [p, q]; //store 2 trees

  while (queue.length) {
    let first = queue.shift(); //first tree
    let second = queue.shift(); //second tree

    if (!first && !second) continue; // both does not exists
    if (!first || !second || first.val !== second.val) return false; //False condition
    queue.push(first.left);
    queue.push(second.left);
    queue.push(first.right);
    queue.push(second.right);
  }
  return true;
};

console.log(isSameTree([1, 2, 3], [1, 2, 3])); //true
console.log(isSameTree([1, 2, 3], [1, 2, 3])); //false
