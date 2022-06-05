class Node {
  //Creation of Node
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
//Time complexity is O(N)  & Space complexity is O(1)
const has_cycle = function (head) {
  // head.value=1 in the example

  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true; // Found the cycle.
    }
  }
  return false;
};

//*                      [ 1 --> 2 --> 3 --> 4 --> 5 --> 6 ]
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(`Linked list has Cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next;

console.log(`Linked list has Cycle: ${has_cycle(head)}`);

head.next.next.next.next.next.next = head.next.next.next;

console.log(`Linked list has Cycle: ${has_cycle(head)}`);
