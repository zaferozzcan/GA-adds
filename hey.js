function sumZero(arr) {
  // set the first/ beggining /left pointer
  let left = 0;
  // set the last/ ending pointer
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function findElem(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let middleIndex = Math.floor((min + max) / 2);
    let middleELem = arr[middleIndex];
    if (middleELem > num) {
      max = middleIndex - 1;
    } else if (middleELem < num) {
      min = middleIndex + 1;
    } else {
      return middleIndex;
    }
  }
}
console.log(findElem([1, 3, 4, 5, 34, 56, 78, 99, 100], 99));
