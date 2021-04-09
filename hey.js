function reverseStr(str) {
  let retStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    retStr += str[i];
  }
  return retStr;
}
console.log(reverseStr("zafer"));
