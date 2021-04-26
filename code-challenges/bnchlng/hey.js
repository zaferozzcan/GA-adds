function unGen(arr) {
  let count = 0;
  let unicodeArr = [];
  arr.map((item) => {
    let sumUniCode = 0;
    for (let i = 0; i < item.length; i++) {
      sumUniCode += item.charCodeAt(i);
    }
    unicodeArr.push(sumUniCode);
  });
  let freq = {};
  for (let i = 0; i < arr.length; i++) {
    freq[unicodeArr[i]] = (freq[unicodeArr[i]] | 0) + 1;
  }
  for (let key in freq) {
    if (freq[key] == 1) count++;
  }
  return count;
}

console.log(fromCharCode(112));
