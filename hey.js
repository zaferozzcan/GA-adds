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

function countUnique2(arr) {
  let i = 0;
  for (let j = 1; j <= arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i;
}

console.log(countUnique2([1, 2, 3, 4]));
