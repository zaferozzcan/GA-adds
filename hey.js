// function mergeStrings(s1, s2) {
//   let hasMultipleOccurance = false;
//   var final_string = "";

//   function findCharFreq(arr) {
//     let freq = {};
//     for (let i = 0; i < arr.length; i++) {
//       freq[arr[i]] = (freq[arr[i]] | 0) + 1;
//     }
//     return freq;
//   }

//   function multiOcccurChek(freqObj) {
//     for (let key in freqObj) {
//       if (freqObj[key] > 1) {
//         hasMultipleOccurance = true;
//       }
//     }
//   }

//   if (multiOcccurChek(findCharFreq(s1)) || multiOcccurChek(findCharFreq(s2))) {
//     return s1 + s2;
//   } else {
//     let limit = Math.min(s1.length, s2.length);
//     let first = 0;
//     let second = 0;
//     for (let i = 0; i < limit; i++) {
//       let char_taken = [s1[first], s2[second]].sort()[0];
//       if (s1[first] == char_taken) {
//         first++;
//       } else {
//         second++;
//       }
//       final_string += char_taken;
//     }
//     return final_string + s1.length > s2.length
//       ? s1.slice(limit)
//       : s2.slice(limit);
//   }
// }

function mergeStrings(s1, s2) {
  let final_string = "";
  let first = 0;
  let second = 0;
  let freq1 = {};
  let freq2 = {};

  while (s1[first] != undefined && s2[second] != undefined) {
    console.log(freq1);
    console.log(freq2);
    console.log(s1[first], s2[second]);
    freq1[s1[first]] = (freq1[s1[first]] | 0) + 1;
    freq2[s2[second]] = (freq2[s2[second]] | 0) + 1;
    if (freq1[s1[first]] > 1 && freq2[s2[second]] > 1) {
      return s1 + s2;
    }
    let charTaken = [s1[first], s2[second]].sort()[0];
    if (s1[first] == charTaken) {
      first++;
      final_string += charTaken;
    } else {
      second++;
      final_string[charTaken];
    }

    if (s1.length > s2.length) {
      for (let i = first; i < s1.length; i++) {
        if (freq1[s1[i]] > 1) {
          return s1 + s2;
        } else {
          final_string += s1[i];
        }
      }
    }
    if (s2.length > s1.length) {
      for (let i = second; i < s1.length; i++) {
        if (freq2[s1[i]] > 1) {
          return s1 + s2;
        } else {
          final_string += s2[i];
        }
      }
    }
  }
  return final_string;
}
