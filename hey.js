let events = [
  ["John_0", "in"],
  ["Mary_0", "out"],
  ["John_0", "out"],
  ["Mary_0", "out"],
];

function shopInAndOutEvents(events) {
  if (events.length % 2 !== 0) return false;
  let freqMap = {};
  events.forEach((item) => {
    if (freqMap[item[0]] === (freqMap[item[0]] == "out" ? "in" : "out")) {
      return false;
    }
    freqMap[item[0]] = item[1];
    console.log(freqMap);
  });

  return true;
}
console.log(shopInAndOutEvents(events));
