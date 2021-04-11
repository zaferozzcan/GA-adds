let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

function dirReduc(dirs) {
  let solution = [];
  let opposites = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  dirs.map((item) => {
    if (solution.length) {
      let prevItem = solution.pop();
      if (prevItem !== opposites[item]) {
        solution.push(prevItem);
        solution.push(item);
      }
    } else {
      solution.push(item);
    }
  });
  return solution;
}

console.log(dirReduc(directions));
