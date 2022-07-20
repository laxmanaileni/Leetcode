// Leetcode 61
class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
  print_list() {
    let temp = this;
    while (temp !== null) {
      process.stdout.write(`${temp.value}` + " ");
      temp = temp.next;
    }
    //return result;
  }
}

const rotate = (head, k) => {
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
  console.log(next);
  return next;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

process.stdout.write("Original Linked List ");
head.print_list();
result = rotate(head, 17);
process.stdout.write("Rotated Linked List ");
result.print_list();

/***
 * Input 1 2 3 4 5 6 7 8
 * Output  8 1 2 3 4 5 6 7
 */
