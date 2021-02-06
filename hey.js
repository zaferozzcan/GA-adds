let a = [50, 60, 60, 45, 70];
function alternatingSums(a) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < a.length; i++) {
    i % 2 == 0 ? (first += a[i]) : (second += a[i]);
  }
  return [first, second];
}
console.log(alternatingSums(a));
