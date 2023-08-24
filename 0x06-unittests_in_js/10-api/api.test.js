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

  it("ID is a number", function(done) {
    request.get(`${url}3`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.statusMessage).to.be.equal("OK");
      expect(response.complete).to.be.true;
      expect(body).to.be.equal("Payment methods for cart 3");
      done();
    })
  })

  it("ID is not a number", function(done) {
    request.get(`${url}one`, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(404);
      expect(response.statusMessage).to.be.equal("Not Found");
      expect(response.complete).to.be.true;
      expect(body).to.include('Error');
      done();
    })
  })
})

describe("Available Payments", function() {
  const url = "http://localhost:7865/available_payments";

  it("available payments route", function(done) {
    request.get(url, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.statusMessage).to.be.equal("OK");
      expect(response.complete).to.be.true;
      expect(body).to.eql('{"payment_methods":{"credit_cards":true,"paypal":false}}');
      done();
    })
  })
})

describe("Login", function() {
  const url = "http://localhost:7865/login";
  const payload = {userName: "horpeazy"};
  const options = {
    url,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  }

  it("login route with valid payload", function(done) {
    options.body = JSON.stringify(payload)
    request(options, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.statusMessage).to.be.equal("OK");
      expect(response.complete).to.be.true;
      expect(body).to.be.equal("Welcome horpeazy");
      done();
    })
  })

  it("login route with invalid payload", function(done) {
    delete options.body;
    request(options, (error, response, body) => {
      if (error) done(error);
      expect(response.statusCode).to.be.equal(200);
      expect(response.statusMessage).to.be.equal("OK");
      expect(response.complete).to.be.true;
      expect(body).to.be.equal("Welcome undefined");
      done();
    })
  })
})
