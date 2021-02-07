function palindromeRearranging(inputString) {
  let freq = {};
  for (let i = 0; i < inputString.length; i++) {
    freq[inputString[i]] = (freq[inputString[i]] | 0) + 1;
  }
  var count = 0;
  for (let key in freq) {
    if (freq[key] % 2 != 0) {
      count++;
    }
    if (count > 1) return false;
  }
}
let str = "abbcabb";

console.log(palindromeRearranging(str));
