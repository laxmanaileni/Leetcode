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

var reverseKGroup = function (head, k) {
  if (k <= 1 && head === null) return head;

  let count = 0,
    size = head;

  while (size !== null) {
    count++;
    size = size.next;
  }

  let prev = null,
    current = head;

  while (true) {
    let next = null,
      i = 0;

    let lastNodePrev = prev;
    let lastNodeRev = current;
    while (current !== null && i < k) {
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
    if (current === null) break;
    if (count >= k) {
      prev = lastNodeRev;
    } else {
      break;
    }
  }
  return head;
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
result = reverseKGroup(head, 3);
process.stdout.write("Reversed Linked List ");
result.print_list();

/**
 * Original Linked List 1 2 3 4 5 6 7 8
 * Reversed Linked List 3 2 1 6 5 4 7 8
 *   */
