var reverseKGroup = function (head, k) {
  if (k <= 1 || head == null) return head;
  let size = head,
    count = 0;
  while (size !== null) {
    count++;
    size = size.next;
  }

  let prev = null,
    current = head;

  while (true) {
    const lastNodePrev = prev;
    const lastNodeRev = current;
    let i = 0,
      next = null;
    while (i < k && current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
      i += 1;
      count--;
    }

    if (lastNodePrev !== null) {
      lastNodePrev.next = prev;
    } else {
      head = prev;
    }
    lastNodeRev.next = current;
    if (current === null) {
      break;
    }
    if (count >= k) {
      prev = lastNodeRev;
    } else {
      break;
    }
  }
  return head;
};

console.log(reverseKGroup([1, 2, 3, 4, 5], 2));
