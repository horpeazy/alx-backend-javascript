const expect = require("chai").expect;
const request = require("request");


describe("Index page test", function() {
  const url = "http://localhost:7865";

  it("Correct status code", function(done) {
    request.get(url, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.statusMessage).to.be.equal("OK");
      expect(response.complete).to.be.true;
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  })
})

describe("Cart page test", function() {
  const url = "http://localhost:7865/cart/";

  it("ID is a number", function() {
    request.get(`${url}3`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.statusMessage).to.be.equal("OK");
      expect(response.complete).to.be.true;
      expect(body).to.be.equal("Payment methods for cart 3");
    })
  })

  it("ID is not a number", function() {
    request.get(`${url}one`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(404);
    })
  })
})
