const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("test cases",() => {
  it("checks equality SUM", () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it("checks equality SUBTRACT", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it("checks equality DIVIDE", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it("checks error DIVIDE", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
