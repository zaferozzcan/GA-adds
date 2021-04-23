let set = new Set([
  1,
  2,
  3,
  4,
  4,
  3,
  2,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
]);

function countUnique(arr) {
  let left = 0;
  let right = 0;
  let len = 0;

  while (right <= arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left = right;
      len++;
    }
  }
  return len;
}

console.log(countUnique([1, 2, 3, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7]));
