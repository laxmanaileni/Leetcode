var detectCycle = function (head) {
  let slow = head,
    fast = head;
  let cycle = false;
  let length = 0;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      cycle = true;
      length = calculateLength(slow);
      break;
    }
  }
  if (cycle) {
    let pointer1 = head,
      pointer2 = head;
    while (length > 0) {
      pointer2 = pointer2.next;
      length--;
    }
    while (true) {
      if (pointer1 === pointer2) {
        return pointer1;
      }
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }
  }
  return null;
};

const calculateLength = (slow) => {
  let lenPointer = slow;
  let length = 1;
  while (lenPointer.next !== slow) {
    length++;
    lenPointer = lenPointer.next;
  }
  return length;
};

console.log(detectCycle([3, 2, 0, -4]));
