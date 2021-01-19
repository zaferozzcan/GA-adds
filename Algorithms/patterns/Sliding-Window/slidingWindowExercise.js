// function maxSubArraySum(arr, window) {
//   let maxSum = 0;
//   for (let i = 0; i < arr.length - window + 1; i++) {
//     let tempSum = 0;
//     for (let j = i; j < i + window; j++) {
//       tempSum = arr[j] + tempSum;
//     }
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

function maxSubArraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
