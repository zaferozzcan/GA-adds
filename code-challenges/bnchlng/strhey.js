let myString = "ABCDE";
let reqiurements = { bold: [0, 2], italic: [2, 4] };

function domGenerator(string, reqs) {
  let output = "";
  let converter = { bold: ["<b>", "</b>"], italic: ["<em>", "</em>"] };
  for (let key in reqs) {
    output += converter[key][0];
    output += string.substr(reqs[key][0], reqs[key][1]);
    output += converter[key][1];
  }
  return output;
}

console.log(domGenerator(myString, reqiurements));
