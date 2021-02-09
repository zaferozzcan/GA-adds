let a = [
  [3, 3, 4, 2],
  [4, 4],
  [4, 0, 3, 3],
  [2, 3],
  [3, 3, 3],
];

function meanGroups(a) {
  let meanFreq = {};

  function mn(arr) {
    let sum = 0;
    arr.map((item) => (sum += item));
    return sum / arr.length;
  }

  for (let i = 0; i < a.length; i++) {
    let mean = mn(a[i]);
    meanFreq[mean] ? meanFreq[mean].push(i) : (meanFreq[mean] = [i]);
  }
  let final_array = [];
  for (let key in meanFreq) {
    final_array.push(meanFreq[key]);
  }

  return final_array;
}

console.log(meanGroups(a));
