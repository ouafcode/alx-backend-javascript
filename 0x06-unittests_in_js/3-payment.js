const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const SUM = Utils.calculateNumber('SUM', totalAmount, totalShipping)
  console.log(console.log(`The total is: ${SUM}`);
  }

module.exports = sendPaymentRequestToApi;
