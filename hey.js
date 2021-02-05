function firstDuplicate(a) {
  var dictionary = {};

  for (var i = 0; i < a.length; i++) {
    if (dictionary[a[i]] !== undefined) return a[i];
    else dictionary[a[i]] = i;
  }

  return -1;
}
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
