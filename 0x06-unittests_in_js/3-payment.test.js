const expect = require("chai").expect;
const sinon = require("sinon");
const Utils = require("./utils.js");
const sendPaymentRequestToApi = require("./3-payment");


describe("sendPaymentRequestToApi", function() {
  it("validate usage of Utils", function() {
    calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    calculateNumberSpy.restore();
  })
})
