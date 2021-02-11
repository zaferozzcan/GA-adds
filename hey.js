function maxSubArraySum(arr, n) {
  let min = 0;
  let max = arr.length - 1;
  while (min < max) {
    let middle = Math.floor((min + max) / 2);
    let middleElement = arr[middle];
    if (middleElement < n) {
      min = middle + 1;
    } else if (middleElement > n) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(maxSubArraySum([1, 2, 2, 3, 5, 6, 6, 8, 9], 8));
