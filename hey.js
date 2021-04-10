// dvide and conquer
function findElem(arr, target) {
  let min = 0;
  let max = arr.length - 1;
  // loop
  while (min < max) {
    let middleIndex = Math.floor((min + max) / 2);
    let middleNumber = arr[middleIndex];
    if (middleNumber > target) {
      max = middleIndex - 1;
    } else if (middleNumber < target) {
      min = middleIndex + 1;
    } else return middleIndex;
  }
}

console.log(findElem([1, 3, 4, 5, 34, 56, 78, 99, 100], 99));
