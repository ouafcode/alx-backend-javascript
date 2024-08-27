const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.get('/available_payments', (req, res) => {
  const available = {
    payment_methods: {
    credit_cards: true,
    paypal: false
  }
  }
  res.send(available);
});

app.post('/login)', (req, res) => {
  const user = req.body.user || req.body.userName;
  if (user) {
    res.send(`Welcome ${user}`);
  } else {
    res.status(404).send();
  }
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
