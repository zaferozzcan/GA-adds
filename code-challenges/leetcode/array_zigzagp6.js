var convert = function (s, numRows) {
  if (s.length <= numRows || numRows < 2) return s;
  var len = s.length;
  var num = 2 * (numRows - 1);
  var res = Array(numRows).fill("");
  var tmp = 0;
  for (var i = 0; i < len; i++) {
    tmp = i % num;
    console.log(tmp);
    if (tmp < numRows) {
      res[tmp] += s[i];
    } else {
      res[num - tmp] += s[i];
    }
  }
  return res.join("");
};

console.log(convert("PAYPALISHIRING", 3));
