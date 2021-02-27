function equalPairOfBits(n, m) {
  return 2 ** (n ^ m).toString(2).match(/1*$/)[0].length;
}
