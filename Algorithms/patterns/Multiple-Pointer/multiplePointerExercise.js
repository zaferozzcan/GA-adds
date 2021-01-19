let mySortedList = [-10, -8, -3, 0, 1, 2, 7, 8, 11];

let left = 0;
let right = mySortedList.length - 1;
while (left < right) {
  let tempSum = mySortedList[left] + mySortedList[right];
  if (tempSum == 0) console.log(left, right);
  if (tempSum > 0) {
    right--;
  } else {
    left++;
  }
}
