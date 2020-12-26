/*
It is a data structure contains a head, tail and length property.

Link lists consost of nodes, and each node has a value a nd pointer to another node or null.


to do list for making link list
    -


*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      // IF THE HEAD IS EMPTY
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

var myList = new SinglyLinkList();
console.log(myList);
myList.push("Hello");
console.log("after push", myList);
myList.push("Zafer");
console.log("after  2nd push", myList);

// adding push method to singly data structure
/*
This function should accept a value
create new node using the value passed to the function 
if there is no head in the property on the list, set the head and tail to be the newly created node
otherwise set the newly created property on the tail to be the new node and set the tail property on the list to be newly created node
increment length by one
*/
