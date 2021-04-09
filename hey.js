function findSingle(arr) {
  let freq = {};
  for (let [index, num] of arr.entries()) {
    freq[num] = (freq[num] | 0) + 1;
  }
  for (let key of Object.keys(freq)) {
    if (freq[key] === 1) return key;
  }
}

console.log(findSingle([3, 3, 8]));
