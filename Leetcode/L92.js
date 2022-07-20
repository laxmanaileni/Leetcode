var reverseBetween = function (head, left, right) {
  if (left == right) return head;

  let prev = null,
    current = head,
    i = 0;
  while (i < left - 1 && current !== null) {
    prev = current;
    current = current.next;
    i += 1;
  }

  let lastNodeOfPrev = prev;
  let lastNodeOfRevList = current;
  let next = null;
  i = 0;
  while (i < right - left + 1 && current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i += 1;
  }

  if (lastNodeOfPrev !== null) {
    lastNodeOfPrev.next = prev;
  } else {
    head = prev;
  }
  lastNodeOfRevList.next = current;

  return head;
};

console.log(reverseBetween([1, 2, 3, 4, 5], 2, 4));
