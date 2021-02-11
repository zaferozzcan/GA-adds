function validAnagram(str1, str2) {
  let freq1 = freqMapCreator(str1);
  let freq2 = freqMapCreator(str2);
  function freqMapCreator(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
      freq[str[i]] = (freq[str[i]] | 0) + 1;
    }
    return freq;
  }
  console.log(freq1);
  console.log(freq2);
  for (let key in freq1) {
    if (freq2[key] != freq1[key]) return false;
  }
  return true;
}

console.log(validAnagram("racecar", "carrace"));
