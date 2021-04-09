function missingNumber(arr) {
  let freq = {};
  let current = Math.min(...arr) > 1 ? 1 : 1;
  let max = arr.length;
  let missing = [];
  for (let num of arr) {
    freq[num] = (freq[num] | 0) + 1;
  }

  for (let i = 1; i <= arr.length; i++) {
    if (freq[i] === undefined) missing.push(i);
  }
  return missing;
}

console.log(missingNumber([1, 1]));
