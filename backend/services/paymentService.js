// services/paymentService.js
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount) => {
  try {
    // Convert amount to cents (Stripe expects amounts in the smallest currency unit)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'inr',
      payment_method_types: ['card'], // Can include other payment methods
    });
    
    return paymentIntent.client_secret;  // Return the client secret for frontend
  } catch (err) {
    throw new Error('Error creating payment intent');
  }
};

module.exports = { createPaymentIntent };
