function palindromeRearranging(inputString) {
  console.log(
    inputString
      .split("")
      .sort()
      .join("")
      .replace(/(\w)\1/g, "")
  );
}
let str = "abbcabb";

// console.log(palindromeRearranging(str));
