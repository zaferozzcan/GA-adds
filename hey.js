function rounders(n) {
  function rounders(value) {
    var r = 0;
    while (value > 10) {
      value = Math.round(value / 10);
      r++;
    }
    return value * Math.pow(10, r);
  }
}

console.log(rounders(1445));
