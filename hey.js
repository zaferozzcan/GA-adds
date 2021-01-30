// function countingValleys(steps, path) {
//   path = path.split("");
//   let valleyMap = {};
//   let enteredIndex;
//   let valleyCount = 0;
//   let newValleyMap = {};
//   let isEntered = false;
//   for (let i = 0; i < steps; i++) {
//     valleyMap[path[i]] = (valleyMap[path[i]] | 0) + 1;
//     if (valleyMap["D"] > valleyMap["U"]) {
//       if (!isEntered) {
//         isEntered = true;
//         enteredIndex = i;
//       }
//     }
//   }
//   valleyMap = {};
//   for (let i = enteredIndex; i < steps; i++) {
//     valleyMap[path[i]] = (valleyMap[path[i]] | 0) + 1;
//     console.log("vm", valleyMap);
//     if (valleyMap["D"] == valleyMap["U"]) {
//       console.log("reached valey exit");
//       valleyCount++;
//     }
//   }
//   console.log(valleyCount);
//   return valleyCount;
// }
