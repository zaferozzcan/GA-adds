//b[i] = a[i - 1] + a[i] + a[i + 1].

function mutateTheArray(n, a) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    let num =
      (a[i - 1] ? a[i - 1] : 0) + (a[i] ? a[i] : 0) + (a[i + 1] ? a[i + 1] : 0);
    newArray.push(num);
    num = 0;
  }
  return newArray;
}

console.log(mutateTheArray(5, [4, 0, 1, -2, 3]));
