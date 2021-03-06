// function appleBoxes(k) {
//   let even_sum = 0;
//   let odd_sum = 0;
//   for (let i = 1; i < k + 1; i++) {
//     if (i % 2 == 0) {
//       even_sum += i * i;
//     } else {
//       odd_sum += i * i;
//     }
//   }
//   return even_sum - odd_sum;
// }

// console.log(appleBoxes(5));

function increaseNumberRoundness(n) {
  n = String(n);
  let sliced = "";
  function findZero(m) {
    var ind = 0;
    for (let i = 0; i < m; i++) {
      if (n[i] == "0") {
        ind = i;
        break;
      }
      return false;
    }
    return ind;
  }
  sliced = n.substr(findZero(n));
  for (let i = 0; i < sliced.length; i++) {
    if (sliced[i] !== "0") return true;
  }
  return false;
}

console.log(increaseNumberRoundness(888));
