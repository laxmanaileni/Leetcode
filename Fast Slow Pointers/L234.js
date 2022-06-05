class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

var isPalindrome = function (head) {
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
  let copyHeadSecondHalf = headSecondHalf;

  while (head !== null && headSecondHalf !== null) {
    if (head.val !== headSecondHalf.val) {
      break;
    }
    head = head.next;
    headSecondHalf = headSecondHalf.next;
  }

  Reverse(copyHeadSecondHalf);
  if (head === null || headSecondHalf === null) {
    return true;
  }
  return false;
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
