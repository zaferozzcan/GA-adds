// let events = [
//   ["John_0", "in"],
//   ["Mary_0", "out"],
//   ["John_0", "out"],
//   ["Mary_0", "out"],
// ];

// function shopInAndOutEvents(events) {
//   if (events.length % 2 !== 0) return false;
//   let obj = {};
//   events.forEach((item) => {
//     console.log(obj);
//     if (obj[item[0]]) {
//       if (item[1] === obj[item[0]]) {
//         return false;
//       }
//     }
//     obj[item[0]] = item[1];
//   });
// }
// console.log(shopInAndOutEvents(events));
//

const lengthOfLongestSubstring = (s) => {
  let n = s.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let len = n - i; // assume the longest sustring is [i, n - 1], length: n - 1 - i + 1 = n - i;
    let se = new Set();
    for (let j = i; j < n; j++) {
      if (se.has(s[j])) {
        len = j - i;
        break;
      } else {
        se.add(s[j]);
      }
    }
    res = Math.max(res, len);
  }
  return res;
};
//
