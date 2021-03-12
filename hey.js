function rounders(n) {
  let mod_num = 10;
  let lim = 5;
  while (lim < n) {
    if (n % mod_num > lim) {
      n = n + (10 - (n % mod_num));
    } else {
      n = n - (n % mod_num);
    }
    mod_num = mod_num * 10;
    lim = lim * 10;
  }
  return n;
}

console.log(rounders(1634));
// 