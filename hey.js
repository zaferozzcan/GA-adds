function centuryFromYear(year) {
  let reminder = year % 100;
  let century = Math.floor(year / 100);
  return reminder > 0 ? century + 1 : century;
}

console.log(centuryFromYear(1906));
