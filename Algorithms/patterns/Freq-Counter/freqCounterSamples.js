function ifSquaredFrom(arr1, arr2) {
  let freq1 = {};
  let freq2 = {};
  for (let i = 0; i < arr1.length; i++) {
    freq1[arr1[i]] = (freq1[arr1[i]] | 0) + 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    freq2[arr2[i]] = (freq2[arr2[i]] | 0) + 1;
  }
  console.log(freq1);
  console.log(freq2);

  for (let key of Object.keys(freq1)) {
    if (freq1[key] !== freq2[key ** 2]) return false;
  }
  return true;
}

console.log(ifSquaredFrom([1, 1, 3, 5, 6], [1, 2, 9, 25, 36]));
