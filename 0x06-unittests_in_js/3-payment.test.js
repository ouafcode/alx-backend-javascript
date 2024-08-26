const sinon =  require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', () => {
  it('check for the use of calculatNumber' , () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.callwith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});
