const request = require('request');
const { expect } = require('chai');

describe('Cart page', function () {
  it('tests the server', function (done) {
    request.get('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should return status code 200 when id is a number', function (done) {
    request.get('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return status code 404 when id is not a number', function (done) {
    request.get('http://localhost:7865/cart/hello', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('tests the server with wrong cart id', function (done) {
    request.get('http://localhost:7865/cart/wrong', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe("Available_payments page", function() {
    it("check correct status for correct url", function() {
    request.get("http://localhost:7865/available_payments", (err, res, body) => {
        if (err) {
        expect(res.statusCode).to.not.equal(200);
        } else {
        expect(res.statusCode).to.equal(200);
        }
    });
    });
    it("check correct body content for correct url", function() {
    const option = {json: true};
    const payLoad = {
        payment_methods: {
        credit_cards: true,
        paypal: false
        }
    }
    request.get("http://localhost:7865/available_payments", option, (err, res, body) => {
        if (err) {
        expect(res.statusCode).to.not.equal(200);
        } else {
        expect(body).to.deep.equal(payLoad);
        }
    });
    });
});

describe("Login", function() {
    it("check correct status code for request that's sent properly", function(done) {
    const opt = {
        url: "http://localhost:7865/login",
        json: true,
	    body: {
        user: 'JOE'
        }
    };
    request.post(opt, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
    });
    it("check correct content for request that's sent properly", function(done) {
    const opts = {
        url: "http://localhost:7865/login",
        json: true,
        body: {
        user: 'JOE'
        }
    };
    request.post(opts, function(err, res, body) {
        if (err) {
        expect(res.statusCode).to.not.equal(200);
        } else {
        expect(body).to.contain('Welcome JOE');
        }
        done();
    });
    });
    it("check correct status code for request that's not sent properly", function(done) {
    const op = {
        url: "http://localhost:7865/login",
        json: true,
        body: {
        usr: 'JOE'
        }
    };
    request.post(op, function(err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
    });
    });
});
