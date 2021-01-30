let steps = ["U", "D", "D", "D", "U", "D", "U", "U"];

for (let i = 0; i < steps.length; i++) {
  let valleyCount = {};
  let count = 0;
  let enterTheValley = false;
  let valleyStartIndex;
  valleyCount[steps[i]] = (valleyCount[steps[i]] | 0) + 1;
  if (valleyCount["D"] < valleyCount["U"]) {
    enterTheValley = true;
    valleyStartIndex = i;
  }
  if (valleyStartIndex) {
    break;
  }
}

console.log(valleyStartIndex);
