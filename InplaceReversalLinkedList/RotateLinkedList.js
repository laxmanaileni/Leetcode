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
  
  const reverse = (head, k) => {
    if (k <= 1 || head === null) {
      return head;
    }
  
    let prev = null,
      current = head;
  
    while(true){
        
    }






    while (true) {
      const LastNodeOfFirstPart = prev;
      const LastNodeOfSubList = current;
      let i = 0;
      let next = null;
      while (current !== null && i < k) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i += 1;
      }
  
      if (LastNodeOfFirstPart !== null) {
        // connect the first part to reverse list
        LastNodeOfFirstPart.next = prev;
      } else {
        head = prev;
      }
  
      LastNodeOfSubList.next = current; //connect later part to reverse list
  
      i = 0;
      while (current !== null && i < k) {
        prev = current;
        current = current.next;
        i += 1;
      }
  
      if (current === null) {
        break;
      }
      //prev = LastNodeOfSubList;
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
  result = reverse(head, 2);
  process.stdout.write("Reversed Linked List ");
  result.print_list();
  
  /***
   * Input 1 2 3 4 5 6 7 8
   * Output 3 2 1 6 5 4 8 7
   */
  