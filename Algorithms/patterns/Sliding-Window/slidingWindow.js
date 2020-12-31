/*  This pattern involves creating a window which can either be an array or number from one position to another
    Depending on a certain condition, the window either increase or closes(and a new window is created)

    Very useful for keeping track of a subset of data in an array/string etc
*/

/* Example to this pattern:Write a function that accepts an array of integers and number called and n. the function should calculate the max sum of n consecutive elements in the array.

 */

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

// console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function myMax(arr, num) {
  var maxSum = 0;
  var tempSum = 0;
  if (arr.length < num) return undefined;
  for (var i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  maxSum += arr[i];
  for (var i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log("tempsums", tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(myMax([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
