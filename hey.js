var xorOperation = function (n, start) {
  let arr = [];
  let output = 0;
  for (let i = 0; i < n; i++) {
    arr[i] = start + 2 * i;
  }

  for (let i = 0; i < arr.length; i++) {
    output ^= arr[i];
  }
  return output;
};

console.log(xorOperation(5, 0));
