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

function findZero(arr) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) return [left, right];
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return;
}

console.log(findZero([3, 2, 1, 4, 5, 7, 9, -1, -3]));
