const expect = require("chai").expect;

expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("golden")).to.equal("Golden");
expect(titleCase("the great mouse detective")).to.equal(
  "The Great Mouse Detective"
);

function titleCase(title) {
  return title.toUpperCase();
}
