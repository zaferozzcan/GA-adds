function rangeBitCount(a, b) {
  let count = 0;
  for (let i = a; i < b + 1; i++) {
    var binaryRep = Number(i).toString(2).split("");
    for (let j = 0; j < binaryRep.length; j++) {
      if (binaryRep[j] == "1") count++;
    }
  }
  return count;
}
console.log(rangeBitCount(2, 7));
