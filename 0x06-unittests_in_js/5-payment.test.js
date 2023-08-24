const expect = require("chai").expect;
const sinon = require("sinon");
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./4-payment");


describe("sendPaymentRequestToApi", function() {
  let consoleSpy;

  beforeEach("create a spy", function() {
    consoleSpy = sinon.spy(console, "log");
  })

  afterEach("destroys the spy", function() {
    consoleSpy.restore();
  })

  it("calls the api with 100 and 20", function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleSpy, "The total is: 120");
    expect(console.log.calledOnce).to.be.true;
  })

  it("calls the api with 10 and 10", function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleSpy, "The total is: 20");
    expect(console.log.calledOnce).to.be.true;
  })
})
