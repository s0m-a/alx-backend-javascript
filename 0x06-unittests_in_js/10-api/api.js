const express = require('express');

const app = express();
app.use(express.json());

const PORT = 7865;

// Endpoint for /available_payments
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// Endpoint for /login
app.post('/login', (req, res) => {
  const { userName } = req.body;
  res.status(200).send(`Welcome ${userName}`);
});

// Default endpoint for /
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
