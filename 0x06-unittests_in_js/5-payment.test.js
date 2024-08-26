const sinon =  require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', () => {
  let Zspy;

  beforeEach(function() {
    Zspy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    Zspy.restore();
  });

  it('check for the console logging is 120', () => {
    sendPaymentRequestToAPI(100, 20);
    sinon.assert.calledOnceWithExactly(Zspy, 'The total is: 120');
  });

  it('check for the console logging is 20', () => {
    sendPaymentRequestToAPI(10, 10);
    sinon.assert.calledOnceWithExactly(Zspy, 'The total is: 20');
  }); 
});
