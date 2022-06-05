class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  print_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
       // process.stdout.write(`${temp.value}`)
     result += temp.value + " ";
      temp = temp.next;
    }
    console.log(result);
  }
}

const reorder = (head) => {
  if (head === null || head.next === null) {
    return true;
  }

  //Find middle of the linked List
  let slow = head,
    fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let headSecondHalf = Reverse(slow);
  let headFirstHalf = head;
  while (headFirstHalf !== null && headSecondHalf !== null) {
    let temp = headFirstHalf.next;
    headFirstHalf.next=headSecondHalf;
    headFirstHalf=temp

     temp=headSecondHalf.next;
     headSecondHalf.next=headFirstHalf;
     headSecondHalf=temp;
  }
  if(headFirstHalf !==null){
      headFirstHalf.next=null;
  }
};

const Reverse = (head) => {
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
head.next.next.next.next.next = new Node(12);

reorder(head);
head.print_list();
