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

function convert(s, numRow) {
  if (numRow > s.length) return s;
  if (numRow < 2) return s;

  let num = 2 * (numRow - 1);
  let temp = 0;
  let res = Array(3).fill("");
  for (let i = 0; i < s.length; i++) {
    temp = i % num;
    if (temp < numRow) {
      res[temp] += s[i];
    } else {
      res[num - temp] += s[i];
    }
  }
  return res.join("");
}

console.log(convert("PAYPALISHIRING", 3));
