// function uniqueGen(arr) {
//   let hashMap = {};
//   let count = 0;
//   let makeFreqGenObj = (gen) => {
//     let freq = {};
//     for (let i = 0; i < arr.length; i++) {
//       freq[gen[i]] = (freq[gen[i]] | 0) + 1;
//     }
//     return freq;
//   };
//   for (let i = 0; i < arr.length; i++) {
//     let currentFreq = makeFreqGenObj(arr[i]);
//     for (let j = i + 1; j < arr.length; j++) {

//     }
//   }
// }

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

console.log(unGen(genArr));
