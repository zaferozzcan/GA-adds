function countTinyPairs(a, b, k) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    console.log(eval(`${a[i]}` + `${b[a.length - 1 - i]}`));
    if (eval(`${a[i]}` + `${b[a.length - 1 - i]}`) < k) {
      count++;
    }
  }
  return count;
}

console.log(countTinyPairs([16, 1, 4, 2, 14], [7, 11, 2, 0, 15], 743));
