const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("test Type=SUM",() => {
  it("checks equality", () => {
    assert.strictEqual(calculateNumber('SUM', -1.7, -2), -4);
  });
});

describe("test Type=SUBTRACT",() => {
  it("checks equality", () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
});

describe("test Type=DIVIDE",() => {
  it("checks equality", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it("checks error", () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
