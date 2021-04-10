let arr = [2, 1, 3, 5, 3, 2];

function firstDuplicate(arr) {
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === undefined) {
      freq[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }
  return -1;
}

console.log(firstDuplicate(arr));
