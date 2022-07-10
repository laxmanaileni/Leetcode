class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//*Instances of Node
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");
a.next = b;
b.next = c;
c.next = d;
//* A -> B -> C -> D -> Null

const GetNodeLinkedList = (head, index) => {
  let current = head,
    count = 0;
  while (current !== null) {
    if (count === index) {
      return current.val;
    }
    current = current.next;
    count++;
  }
  return null;
};

console.log(GetNodeLinkedList(a, 2));
console.log(GetNodeLinkedList(a, 0));

//*Recursion
const GetNodeLinkedListRecursive =(head, index)=>{
if(head=== null)return null;
if(index===0) return head.val;

return GetNodeLinkedListRecursive(head.next,index-1)
}

console.log(GetNodeLinkedListRecursive(a,2))

