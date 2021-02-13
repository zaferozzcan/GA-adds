let events = [
  ["John_0", "in"],
  ["Mary_0", "out"],
  ["John_0", "out"],
  ["Mary_0", "out"],
];

function shopInAndOutEvents(events) {
  if (events.length % 2 !== 0) return false;
  let obj = {};
  events.forEach((item) => {
    if (!obj[item[0]]) {
      return;
    }
  });
}
console.log(shopInAndOutEvents(events));
