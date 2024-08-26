const expect = require('chai').expect;
const calculateNumber = require("./2-calcul_chai.js");

describe("test cases",() => {
  it("checks equality SUM", () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it("checks equality SUBTRACT", () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it("checks equality DIVIDE", () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it("checks error DIVIDE", () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
