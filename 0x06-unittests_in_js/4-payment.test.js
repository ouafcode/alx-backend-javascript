const sinon =  require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('check for the use of calculatNumber', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').return(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.asset.calledWidth(spy, 'the total is: 10');

    stub.restore();
    spy.restore();
  });
});
