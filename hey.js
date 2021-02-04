function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i + 1] == undefined) break;
    max = Math.max(max, inputArray[i] * inputArray[i + 1]);
  }
  return max;
}
console.log(adjacentElementsProduct([-23, 4, -3, 8, -12]));
