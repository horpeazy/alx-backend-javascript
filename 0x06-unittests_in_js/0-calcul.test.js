const assert = require("assert");
const calculateNumber = require("./0-calcul.js");


describe("test calculateNumber", function() {
  it("checks the sum of two integers", function() {
    assert.equal(calculateNumber(1, 5), 6);
  })

  it("checks the sum of integer and decimal", function() {
    assert.equal(calculateNumber(1, 2.7), 4);
  })

  it("checks for one round down and round up", function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  })

  it("checks for round ups", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  })

  it("checks for round down", function() {
    assert.equal(calculateNumber(2.1, 5), 7);
  })

  it("checks for round up extreme", function() {
    assert.equal(calculateNumber(3, 4.9), 8);
  })

  it("checks for round up for both", function() {
    assert.equal(calculateNumber(3.5, 2.5), 7);
  })

  it("checks for max value", function() {
    assert.equal(calculateNumber(Number.MAX_VALUE, 56), Number.MAX_VALUE);
  })

  it("checks for both max value", function() {
    assert.equal(calculateNumber(Number.MAX_VALUE, Number.MAX_VALUE), Infinity);
  })

  it("checks for zeros", function() {
    assert.equal(calculateNumber(0, 0), 0);
  })
})
