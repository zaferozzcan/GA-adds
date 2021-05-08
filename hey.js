// var convert = function (s, numRows) {
//   if (s.length <= numRows || numRows < 2) return s;
//   var len = s.length;
//   var num = 2 * (numRows - 1);
//   var res = Array(numRows).fill("");
//   var tmp = 0;
//   for (var i = 0; i < len; i++) {
//     tmp = i % num;
//     if (tmp < numRows) {
//       res[tmp] += s[i];
//     } else {
//       res[num - tmp] += s[i];
//     }
//   }
//   return res.join("");
// };

// function convert(s, numRows) {
//   if (numRows > s.length) return s;
//   if (numRows < 2) return s;

//   let num = 2 * (numRows - 1);
//   let temp = 0;
//   let res = Array(3).fill("");
//   for (let i = 0; i < s.length; i++) {
//     temp = i % num;
//     if (temp < numRows) {
//       res[temp] += s[i];
//     } else {
//       res[num - temp] += s[i];
//     }
//   }

//   return res.join("");
// }

// function convert(s, numRow) {
//   if (numRow > s.length) return s;
//   if (numRow < 2) return s;

//   let num = 2 * (numRow - 1);
//   let temp = 0;
//   let res = Array(3).fill("");
//   for (let i = 0; i < s.length; i++) {
//     temp = i % num;
//     if (temp < numRow) {
//       res[temp] += s[i];
//     } else {
//       res[num - temp] += s[i];
//     }
//   }
//   return res.join("");
// }

// console.log(convert("PAYPALISHIRING", 3));

// let A = ["amazon", "apple", "facebook", "google", "leetcode"];
// let B = ["e", "o"];
// var wordSubsets = function (A, B) {
//   let Bfreq = new Int8Array(26),
//     cmax = 0,
//     check = new Int8Array(26),
//     ans = [];
//   for (let i = 0; i < B.length; i++, check.fill()) {
//     let word = B[i];
//     for (let j = 0; j < word.length; j++) check[word.charCodeAt(j) - 97]++;
//     for (let j = 0; j < 26; j++) {
//       let diff = check[j] - Bfreq[j];
//       if (diff > 0) (cmax += diff), (Bfreq[j] += diff);
//       if (cmax > 10) return [];
//     }
//   }
//   for (let i = 0; i < A.length; i++, check.fill()) {
//     let word = A[i],
//       j;
//     if (word.length < cmax) continue;
//     for (j = 0; j < word.length; j++) check[word.charCodeAt(j) - 97]++;
//     for (j = 0; j < 26; j++) if (check[j] < Bfreq[j]) break;
//     if (j === 26) ans.push(word);
//   }
//   return ans;
// };

// let A = ["amazon", "apple", "facebook", "google", "leetcode"];
// let B = ["e", "o"];

// var wordSubsets = function (A, B) {
//   let wordFreqA = {};
//   let wordFreqB = {};

//   A.map((word) => {
//     wordFreqA[word] = freqCounter(word);
//   });
//   B.map((item) => {
//     wordFreqB[item] = freqCounter(item);
//   });

//   console.log(wordFreqB);
//   function freqCounter(str) {
//     let freq = {};
//     for (let i = 0; i < str.length; i++) {
//       freq[str[i]] = (freq[str[i]] | 0) + 1;
//     }
//     return freq;
//   }
// };

// console.log(wordSubsets(A, B));

const getMaxWaterContainer = (arr) => {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
