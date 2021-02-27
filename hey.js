function countSumOfTwoRepresentations2(n, l, r) {
  var count = 0;

  for (var i = l; i <= r; i++) if (i <= n - i && n - i <= r) count++;

  return count;
}
