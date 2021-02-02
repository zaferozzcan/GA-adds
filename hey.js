function directionReduction(directions) {
  let clear_path = [];
  //   helper
  function findOpposite(direction) {
    if (direction == "NORTH") return "SOUTH";
    if (direction == "SOUTH") return "NORTH";
    if (direction == "WEST") return "EAST";
    if (direction == "EAST") return "WEST";
  }

  for (let i = 0; i < directions.length; i++) {
    let current = directions[i];
    let next = directions[i + 1];

    if (findOpposite(current) == next) {
      directions.splice(i, 1);
      directions.splice(i, 1);
      console.log(directions);
      //recursion

      directionReduction(directions);
    } else {
      clear_path.push(directions[i]);
    }
  }
  return clear_path;
}

console.log(
  directionReduction([
    "NORTH",
    "EAST",
    "WEST",
    "SOUTH",
    "WEST",
    "SOUTH",
    "NORTH",
    "WEST",
  ])
);
