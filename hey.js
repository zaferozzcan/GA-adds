function isLucky(n) {
  function adder(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }
    return sum;
  }

  let sumFirstHalf = adder(String(n).substr(0, String(n).length / 2));
  let sumSecondHalf = adder(String(n).substr(String(n).length / 2));

  return sumFirstHalf == sumSecondHalf ? true : false;
}

console.log(isLucky(1230));
