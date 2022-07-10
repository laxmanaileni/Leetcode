class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//*Instances of Node
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
a.next = b;
b.next = c;
c.next = d;
/* Method 1
var reorderList = function (head) {
let stack=[],current=head;
if(!current)return

while(current !==null){
stack.push(current);
current=current.next;
}

let length=stack.length;
current=head;

for(let i=0;i<length;i++){
    if(i%2===0){
        current.next=stack.shift();
    }else{
        current.next=stack.pop();
    }
    current=current.next;
}
current.next=null
return head
};
*/

var reorderList = function (head) {
  if (!head) return;
  let current = head;
  let middle = MiddleLinkedList(head); //Middle of Linked List
  let rev = reverseList(middle.next); //Reverse of Linked List

  while (rev) {
    let next = current.next;
    current.next = rev;
    rev = rev.next;
    current.next.next = next;
    current = next;
  }
  middle.next = null;
  return head;
};

const MiddleLinkedList = (head) => {
  // Find the Middle element of the LinkedList
  if (!head) return;
  let middle = head;
  while (head && head.next) {
    head = head.next.next;
    middle = middle.next;
  }
  return middle;
};

const reverseList = (head) => {
  //Reverse the LinkedList
  let prev = null;
  let current = head;
  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

console.log(reorderList(a));
