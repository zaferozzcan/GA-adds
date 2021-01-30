let path = "DUDDDUUDUU";
function countingValleys(steps, path) {
  path = path.split("");
  let valley = 0;
  let elevation = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] == "D") {
      elevation--;
    } else {
      if (elevation == -1) {
        valley++;
      }
      elevation++;
    }
  }
  return valley;
}

console.log(countingValleys(path.length, path));
