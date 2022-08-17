//https://leetcode.com/problems/reverse-linked-list/
var reverseList = function (head) {
  let current = head;
  let prev = null;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(reverseList([1, 2, 3, 4, 5]));
