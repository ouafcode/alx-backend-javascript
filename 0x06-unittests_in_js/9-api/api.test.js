const request = require('request');
const { expect } = require('chai');

describe('Cart page', function () {
  it('should return status code 200', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return 200 when id is mbr', function (done) {
    request.get('http://localhost:7865/cart/13', function (error, response, body) {
      expect(responce.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 13');
      done();
    });
  });

  it('should return 404 when is not number', function (done) {
    request.get('http://localhost:7865/cart/hello', function (error, response, body) {
      expect(responce.statusCode).to.equal(404);
      done();
    });
  });
});
