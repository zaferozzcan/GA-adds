function magicalWell(a, b, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a * b;
    a++;
    b++;
  }
  return sum;
}
console.log(magicalWell(1, 2, 2));
