picture = ["abc", "ded"];

function addBorder(picture) {
  let borderLen = picture[0].length + 2;
  let top = "";
  let bottom = "";

  for (let i = 0; i < borderLen; i++) {
    bottom += "*";
    top += "*";
  }

  let new_a = picture.map((item) => {
    let a = item.split("");
    a.push("*");
    a.unshift("*");
    return a.join("");
  });
  new_a.push(bottom);
  new_a.unshift(top);
  return new_a;
}
console.log(addBorder(picture));
