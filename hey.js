function reverseInParentheses(inputString) {
  var s = inputString;

  while (s.indexOf(")", 0) != -1) {
    var c = s.indexOf(")", 0);
    var a = s.lastIndexOf("(", c);
    var b = s
      .slice(a + 1, c)
      .split("")
      .reverse()
      .join("");
    s = s.slice(0, a) + b + s.slice(c + 1);

    console.log(c, a, b, s);
  }
  return s;
}

let s = "bar(buzz)bar";

let open = s.indexOf("(");
let close = s.indexOf(")");
console.log(open, close);

let par = s
  .slice(open + 1, close)
  .split("")
  .reverse()
  .join("");

let final = s.slice(0, open) + par + s.slice(close + 1, s.length);

console.log(final);
