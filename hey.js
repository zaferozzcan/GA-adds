function leastFactorial(n) {
  let fCount = 1;
  let count = 1;
  while (fCount < n) {
    fCount = fCount * count++;
  }
  return fCount;
}

console.log(leastFactorial(17));
