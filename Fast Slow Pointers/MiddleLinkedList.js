class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const middle = (head) => {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//*                      [ 1 --> 2 --> 3 --> 4 --> 5 --> 6 ]
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(`Linked list has Cycle: ${middle(head).value}`);

head.next.next.next.next.next = new Node(6);
console.log(`Linked list has Cycle: ${middle(head).value}`);
head.next.next.next.next.next.next = new Node(7);
console.log(`Linked list has Cycle: ${middle(head).value}`);
