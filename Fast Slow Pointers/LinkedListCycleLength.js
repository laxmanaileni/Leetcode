class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const has_length = (head) => {
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      //calculate length
      let length = calculateLength(slow);
      return length;
    }
  }
  return "No cycle found";
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

console.log(`Linked list has Length of Cycle: ${has_length(head)}`);

head.next.next.next.next.next.next = head.next.next;

console.log(`Linked list has Length of Cycle: ${has_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;

console.log(`Linked list has Length of Cycle: ${has_length(head)}`);
