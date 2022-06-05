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

const reverse = (head) => {
  let prev = null;
  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

process.stdout.write("Original Linked List ");
head.print_list();
process.stdout.write("Reversed Linked List ");
reverse(head).print_list();