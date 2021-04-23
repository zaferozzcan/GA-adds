function maxSubArraySum(arr, val) {
  let maxSum = 0;
  for (let i = 0; i < val; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let i = val; i < arr.length; i++) {
    tempSum = tempSum - arr[i - val] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([1, 2, 3, 9, 4, 5, 5], 2));
