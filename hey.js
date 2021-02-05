function makeArrayConsecutive2(statues) {
  let freq_statues = {};
  let counter = 0;
  for (let i = 0; i < statues.length; i++) {
    freq_statues[statues[i]] = (freq_statues[statues[i]] | 0) + 1;
  }
  for (let i = Math.min(...statues); i < Math.max(...statues) + 1; i++) {
    if (freq_statues[i] === undefined) counter++;
  }
  return counter;
}
statues = [6, 2, 3, 8];

console.log(makeArrayConsecutive2(statues));
