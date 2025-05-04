// routes/paymentRoutes.js
const express = require('express');
const { createPaymentIntent } = require('../services/paymentService');
const router = express.Router();

// Route to create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount)) {
    return res.status(400).json({ message: 'Invalid amount' });
  }

  try {
    const clientSecret = await createPaymentIntent(amount);
    res.json({ clientSecret });
  } catch (error) {
    res.status(500).json({ message: 'Payment creation failed', error: error.message });
  }
});

module.exports = router;
