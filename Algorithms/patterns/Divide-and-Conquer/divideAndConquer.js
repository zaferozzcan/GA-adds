/* 
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity
*/

function findElem(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let middleIndex = Math.floor((min + max) / 2);
    let middleELem = arr[middleIndex];
    console.log(middleELem);
  }
}

findElem([1, 3, 4, 5, 34, 56, 78, 99, 100], 99);
