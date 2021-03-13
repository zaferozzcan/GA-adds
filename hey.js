function rounders(n) {
  n = String(n).split("");
  for (let i = n.length; i > 0; i--) {
    if (n[i] >= 5) {
      n[i] = 0;
      n[i - 1] ? n[i - 1] + 1 : n[i - 1];
    } else {
      n[i] = 0;
    }
  }
  n.pop();

  return Number(n.map((item) => String(item)).join(""));
}

console.log(rounders(1234));
