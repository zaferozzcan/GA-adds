// function firstDuplicate(a) {
//   var dictionary = {};

//   for (var i = 0; i < a.length; i++) {
//     console.log(dictionary[a[i]]);
//     if (dictionary[a[i]] !== undefined) return a[i];
//     else dictionary[a[i]] = i;
//   }

//   return -1;
// }
// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));

function firstDuplicate(a) {
  let freqOfNumbers = {};
  for (let i = 0; i < a.length; i++) {
    if (freqOfNumbers[a[i]] != undefined) {
      return a[i];
    } else {
      freqOfNumbers[a[i]] = (freqOfNumbers[a[i]] | 0) + 1;
    }
  }
  return -1;
}
console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
