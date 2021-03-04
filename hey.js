function mutateTheArray(n, a) {
  let b = [];
  for (let i = 0; i < n; i++) {
    b[i] =
      (a[i - 1] ? a[i - 1] : 0) + (a[i] ? a[i] : 0) + (a[i + 1] ? a[i + 1] : 0);
  }
  return b;
}

console.log(mutateTheArray(5, [4, 0, 1, -2, 3]));
