function secondRightmostZeroBit(n) {
  return Math.pow(2,n.toString(2).split('').reverse().join("").split("0", 2).join("0").length);
}