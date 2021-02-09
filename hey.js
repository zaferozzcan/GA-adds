function heck(a, b, c) {
  return [..."+-*/"].some((op) => eval(`${a} ${op} ${b}`) == c);
}

console.log(heck(2, 3, 5));
