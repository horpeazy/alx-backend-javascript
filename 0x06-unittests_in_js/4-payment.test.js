const expect = require("chai").expect;
const sinon = require("sinon");
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./4-payment");


describe("sendPaymentRequestToApi", function() {
  it("validates calculateNumber behaviour", function() {
    const calcStub = sinon.stub(Utils, "calculateNumber").returns(10);
    const consoleSpy = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calcStub, "SUM", 100, 20);
    sinon.assert.calledWith(consoleSpy, "The total is: 10");
  })
})
