class Node {
  //Creation of Node
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const find_cycle_start = (head) => {
  let slow = head,
    fast = head;
  let length = 0;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      length = calculateLength(slow);
      break;
    }
  }
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
};

const calculateLength = (slow) => {
  let len = slow;
  let length = 1;
  while (len.next !== slow) {
    length++;
    len = len.next;
  }
  return length;
};

//*                      [ 1 --> 2 --> 3 --> 4 --> 5 --> 6 ]
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;
console.log(`Linked list has Cycle: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`Linked list has Cycle: ${find_cycle_start(head).value}`);

head.next.next.next.next.next.next = head;
console.log(`Linked list has Cycle: ${find_cycle_start(head).value}`);
