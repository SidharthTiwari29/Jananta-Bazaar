// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { createPaymentIntent } = require('../services/paymentService');

// Route to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Amount to be charged

  try {
    const clientSecret = await createPaymentIntent(amount);  // Call to paymentService
    res.json({ clientSecret });  // Send client secret to frontend for Stripe
  } catch (err) {
    res.status(500).json({ message: 'Payment failed', error: err.message });
  }
});

module.exports = router;
