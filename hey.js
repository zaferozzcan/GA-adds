let path = ["U", "D", "D", "D", "U", "D", "U", "U"];

function countingValleys(steps, path) {
  let valleyMap = {};
  for (let i = 0; i < steps; i++) {
    valleyMap[path[i]] = (valleyMap[path[i]] | 0) + 1;
    if (valleyMap["D"] > valleyMap["U"]) {
      console.log("entered the valley");
      return;
    }
  }
}

countingValleys(path.length, path);
