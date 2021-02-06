picture = ["abc", "ded"];

function addBorder(picture) {
  let borderLen = picture[0].length + 2;
  let top = "*".repeat(borderLen);
  let bottom = "*".repeat(borderLen);

  return [top, ...picture.map((item) => `*${item}*`), bottom];
}
console.log(addBorder(picture));
