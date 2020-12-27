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
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail === null;
    }
    return currentHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

var myList = new SinglyLinkList();

myList.push("Hello");
myList.push("Zafer");
myList.push("Ozcan");
// console.log("before", myList.tail.val);
// myList.pop();
// console.log("1after", myList.tail.val);
// myList.pop();
// console.log("2after", myList.tail.val);

myList.unshift("Hi");
console.log("head", myList.head);

// myList.push("Ozcan");

/*
adding PUSH method to singly data structure
This function should accept a value
create new node using the value passed to the function 
if there is no head in the property on the list, set the head and tail to be the newly created node
otherwise set the newly created property on the tail to be the new node and set the tail property on the list to be newly created node
increment length by one

implementation
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
*/

/*
POP METHOD of the linked list
Removing a node from the end of the list
-pseudo
if there are no nodes in the list, return undefined
loop through the list until you reach the tail
set the next property of the second to last node to be null
devrement the lenghth of the list by 1
return the value of the node removed

 pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
*/

/*
  SHIFTING the node at the begining of the list
  if there is no node return undefined 
  sthore the current head property in a variable 
  set the head property to be the current head's next
  property
  decrement the length by 1
  return the value of the node removed
 */

/*
 Unshift
 Adding a new node to the beggining of the Linked List!
 this function should accept a value
 create a nee node 
 if there is no head property on the list, set the head and tail to be the newly created node. 
 otherwise set the newly created nod's next property to be  the current head propert on the list 
 set the head property on the list to be that newly created node 
 increment the length of the list by 1 
 return the linked list
 */
