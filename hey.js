function swapAdjacentBits(n) {
  return !n ? 0 : (n & 1) * 2 + (n & 2) / 2 + 4 * swapAdjacentBits(n >> 2);
}
