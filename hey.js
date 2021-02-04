// function directionReduction(directions) {
//   let clear_path = [];
//   //   helper
//   function findOpposite(direction) {
//     if (direction == "NORTH") return "SOUTH";
//     if (direction == "SOUTH") return "NORTH";
//     if (direction == "WEST") return "EAST";
//     if (direction == "EAST") return "WEST";
//   }

//   for (let i = 0; i < directions.length; i++) {
//     let current = directions[i];
//     let next = directions[i + 1];

//     if (findOpposite(current) == next) {
//       directions.splice(i, 1);
//       directions.splice(i, 1);
//       console.log(directions);
//       //recursion

//       directionReduction(directions);
//     } else {
//       clear_path.push(directions[i]);
//     }
//   }
//   return clear_path;
// }

// console.log(
//   directionReduction([
//     "NORTH",
//     "EAST",
//     "WEST",
//     "SOUTH",
//     "WEST",
//     "SOUTH",
//     "NORTH",
//     "WEST",
//   ])
// );

// function mutateTheArray(n, a) {
//   let new_array = [];
//   for (let i = 0; i < a.length; i++) {
//     new_array[i] = (a[i - 1] ? a[i - 1] : 0) + a[i] + (a[i + 1] ? a[i + 1] : 0);
//   }
//   return new_array;
// }

// console.log(mutateTheArray(5, [4, 0, 1, -2, 3]));

// let a = [1, 2, 3];
// let b = [1, 2, 3];

// function countTinyPairs(a, b, k) {
//   let tiny_count = 0;
//   let concat_array = [...a, ...b];
//   let left = 0;
//   let right = concat_array.length - 1;
//   for (let i = 0; i < a.length; i++) {
//     let left_number = concat_array[left];
//     let right_number = concat_array[right];
//     let concated_numbers = Number(String(left_number) + String(right_number));
//     left++;
//     right--;
//     if (concated_numbers < k) {
//       tiny_count++;
//     }
//   }
//   return tiny_count;
// }
// console.log(countTinyPairs(a, b, 31));

// let s1 = "dce";
// let s2 = "cccbd";

// function mergeStrings(s1, s2) {
//   let freqS1 = {};
//   let freqS2 = {};

//   function freqChecker(str) {
//     let freq = {};
//     for (let i = 0; i < str.length; i++) {
//       freq[str[i]] = (freq[str[i]] | 0) + 1;
//     }
//     return freq;
//   }
//   freqS1 = freqChecker(s1);
//   freqS2 = freqChecker(s2);

//   function decider(freqS1, freqS2) {
//     for (let key in freqS1) {
//       console.log(freqS1[key]);
//       if (freqS1[key] > 1) return false;
//     }
//     for (let key in freqS2) {
//       if (freqS2[key] > 1) return false;
//     }
//     return true;
//   }

//   function v1(s1, s2) {
//     let final_string = "";
//     let temp_array = [];
//     let loop_max_limit = Math.min(s1.length, s2.length);
//     for (let i = 0; i < loop_max_limit; i++) {
//       temp_array.push(s1[i]);
//       temp_array.push(s2[i]);
//       final_string += temp_array.sort()[0];
//       temp_array = [];
//     }
//     let remaining_chars =
//       s2.length > s1.length
//         ? s2.substr(s1.length, s2.length)
//         : s1.substr(s2.length, s1.length);

//     return final_string + remaining_chars;
//   }

//   function v2(s1, s2) {
//     return s1 + s2;
//   }

//   if (decider) {
//     return v2(s1, s2);
//   } else {
//     v1(s1, s2);
//   }
// }
// // console.log(mergeStrings(s1, s2));

// console.log("a b c".replace(" ", ""));

// for (let i = 0; i < arr.length; i++) {}

// function concatenationsSum(a) {
//   let mySum = 0;
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//       mySum = mySum + Number(String(a[i]) + String(a[j]));
//     }
//   }
//   return mySum;
// }

// console.log(concatenationsSum([10, 2]));

let wordlist = ["APPLE", "PLEAS", "PLEASE"];
let keypads = ["AELQXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBKSY"];

function numKeypadSolutions(wordlist, keypads) {
  let final_array = [];
  function freq_counter(str) {
    let freq = {};
    for (let i = 0; i < str.length; i++) {
      freq[str[i]] = (freq[str[i]] | 0) + 1;
    }
    return freq;
  }

  function words_validator(wl, kp) {
    let freq1 = {};
    let freq2 = {};
    freqWl = freq_counter(wl);
    freqKp = freq_counter(kp);
    if (!wl.includes(kp[0])) false;
    for (let key in freqWl) {
      if (freqKp[key] == undefined) false;
    }
    return true;
  }

  let counter = 0;
  for (let i = 0; i < keypads.length; i++) {
    for (let j = 0; j < wordlist.length; j++) {
      if (words_validator(keypads[i], wordlist[j])) {
        counter++;
      }
    }
    final_array.push(counter);
    counter = 0;
  }
  return final_array;
}

console.log(numKeypadSolutions(wordlist, keypads));
