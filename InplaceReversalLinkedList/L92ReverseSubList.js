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

const reverse = (head, p, q) => {
  if (p == q) {
    return head;
  }

  let prev = null,
    current = head;
  let i = 0;
  while (current !== null && i < p - 1) {// before the p just move forward
    prev = current;
    current = current.next;
    i += 1;
  }

  const LastNodeOfFirstPart = prev;
  const LastNodeOfSubList = current;
  let next = null;
  i = 0;
  while (current !== null && i < q - p + 1) { // Reverse the Linked list from p to q
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    i += 1;
  }

if(LastNodeOfFirstPart !== null){ // connect the first part to reverse list
    LastNodeOfFirstPart.next=prev
}else{
    head=prev;
}

LastNodeOfSubList.next=current; //connect later part to reverse list

  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

process.stdout.write("Original Linked List ");
head.print_list();
result=reverse(head,2,4);
process.stdout.write("Reversed Linked List ");
result.print_list();
