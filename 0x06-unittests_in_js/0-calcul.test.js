const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculation Number",() => {
  it("checks equality", () => {
    assert.strictEqual(calculateNumber(-1, -2.7), -4);
  });

  it("checks equality with float nbr", () => {
    assert.strictEqual(calculateNumber(1.7, 3), 5);
  });
});
