var rotateRight = function (head, k) {
  if (head === null || k === 0) return head;
  let size = head,
    count = 0;
  while (size !== null) {
    count++;
    size = size.next;
  }
  let rotations = k % count;
  if (rotations === 0) return head;
  let current = head,
    firstnode = head,
    i = 0;
  while (current !== null && i < count - rotations - 1) {
    current = current.next;
    i++;
  }

  let next = current.next;
  current.next = null;
  let revNext = next;
  while (revNext.next !== null) {
    revNext = revNext.next;
  }
  revNext.next = firstnode;
  // console.log(next);
  return next;
};

console.log(rotateRight([1, 2, 3, 4, 5], 2)); //[4,5,1,2,3]
