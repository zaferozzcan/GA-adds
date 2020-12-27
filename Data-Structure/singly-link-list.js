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
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

var myList = new SinglyLinkList();

myList.push("Hello");
myList.push("Zafer");
myList.push("Ozcan");
myList.set(2, "NewOzcan");
console.log(myList);

/*

            IMPLEMENTATION


*/
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

/*
GET Method
Retrieving a node by it's position in the Linked list!
This function should accept an index
if the index less than zero or greater than or equal to the length of the list, return null
Loop through the list until you reach the index and return the node at the spesific index
*/

/*
SET Method
Changing the value of a node based on it's possition in the linked list

This function accepts a value and an index
User get function to find the spesific node
if the node is not found, return false
if the node is found, set the value of that node to be the value passed to the function and return true

*/

/*
INSERT Method
If the index is less than zero or greater  than the length, return false
If the index is the same as th length, push a new node to the end of the list
if the index i 0, unshift a new node to the start of the list
otherwise, using the GET method, access the node at the index -1
set the next property on that node to be new node
set the next property on the new node to be the previous next 
increment the length
return true

 */
