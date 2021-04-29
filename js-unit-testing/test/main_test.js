const expect = require("chai").expect;

//  test suite
//  test suite is a block of unit test that is closely related because they test the same function

describe("Mocha", () => {
  // Add individual unit testing(it is called as Spec)
  // it descrobes the individual unit test, a spec
  it("should run our tests using npm", () => {
    expect(true).to.be.ok;
  });
});
