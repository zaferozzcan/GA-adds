let a = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(a) {
  var s = a.filter((h) => h > 0).sort((a, b) => a - b);
  console.log(s);
  return a.map((p) => {
    if (p !== -1) {
      return s.shift();
    }

    return -1;
  });
}

var s = a.filter((a) => a > 0).sort((a, b) => a - b);

t = a.map((n) => {
  if (n != -1) {
    return s.shift();
  }
  return -1;
});
console.log(t);
