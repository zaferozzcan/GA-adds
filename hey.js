let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateImage(a) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < i; j++) {
      a[i][j] ^= a[j][i];
      a[j][i] ^= a[i][j];
      a[i][j] ^= a[j][i];
    }
  }

  for (var i in a) {
    a[i] = a[i].reverse();
  }
  return a;
}

console.log(rotateImage(a));
