const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculation Number",() => {
  it("checks equality", () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it("checks equality with float nbr", () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
});
