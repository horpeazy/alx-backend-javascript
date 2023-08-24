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

  it("checks that strings are cast to int", function() {
    assert.equal(calculateNumber("2", 5), 7);
  })

  it("checks that NaN returns NaN", function() {
    assert.equal(calculateNumber(3, NaN), NaN);
  })
})
