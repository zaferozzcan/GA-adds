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
  const parts = n.toString().split("").reverse();
  let state = false;
  for (let part of parts) {
    if (part !== "0") state = true;
    else if (state && part === "0") {
      return true;
    }
  }
  return false;
}

console.log(increaseNumberRoundness(888));
