const expect = require("chai").expect;
const getPaymentTokenFromAPI = require("./6-payment_token.js");


describe("getPaymentTokenFromAPI", function() {
  it("test async func", async function() {
    const response = await getPaymentTokenFromAPI(true);
    expect(response.data).to.be.equal('Successful response from the API');
  })
})
