/* 

Creating pointers or values that correspons to an index  or position and move towards the beginning, end or middle based on a certain condition

$$ Very efficient for solving problems with minimal space complexity as well $$

Example Problem: 🤠 write a function that accepts a sorted array if integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zer or undefined if a pair does not exist
See an solution below for multiple pointers
*/

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

// console.log(sumZero([-1, 0, 1, 2, 3, 4]));

/* Problem-2 Implement a function that accepts a sorted array, and count the unique value in the array, amek sure the array input has to be sorted! */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8]));
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
