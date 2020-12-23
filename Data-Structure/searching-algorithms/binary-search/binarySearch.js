/*
Binary works on only a sorted array!

How it works?
We pick a middle point constantly check and pick another pick point!
Divide and Conquer pattern is employed in binary search algo!

-> Psude code!
create two variables at the end and begginning of the array
while the left pointer is smaller than left one
    - create a pointer in the middle
    -if you find the value you want return index
    -if the value is too small, move the left pointer up
    -if the value is too large, move the right pointer down
if you never find the value return -1

Binary Search Exercise!

*/

function binarySearch(arr, value) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === value) return middle;
  return -1;
}
console.log(
  binarySearch([1, 2, 3, 4, 5, 6, 6, 7, 9, 10, 13, 16, 17, 19, 21, 56], 11)
);
