// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { createPaymentIntent } = require('../services/paymentService');

// Create a payment intent (Stripe)
router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  
  try {
    const clientSecret = await createPaymentIntent(amount);
    res.json({ clientSecret });
  } catch (err) {
    res.status(500).json({ message: 'Payment failed', error: err.message });
  }
});

module.exports = router;

