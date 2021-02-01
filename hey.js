function theSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (var num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (var num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log("the same", theSame([1, 2, 3, 4], [1, 4, 9, 16]));

function same(arr1, arr2) {
  freq1 = {};
  freq2 = {};

  function freq_counter(ar, counter) {
    for (let i = 0; i < ar.length; i++) {
      counter[ar[i]] = (counter[ar[i]] | 0) + 1;
    }
    return counter;
  }
  freq1 = freq_counter(arr1, freq1);
  freq2 = freq_counter(arr2, freq2);

  for (let key in freq1) {
    if (Object.keys(freq1) != Object.keys(freq2)) return false;
    if (freq2[key ** 2] != freq1[key]) return false;
  }
  return true;
}
console.log(same([1, 2, 3, 4], [1, 4, 9, 8, 16]));
