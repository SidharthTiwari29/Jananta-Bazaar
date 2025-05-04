// services/paymentService.js
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (amount) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,  // Convert amount to cents
      currency: 'inr',        // Currency type, 'INR' for India
      payment_method_types: ['card'],
    });
    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error('Error creating payment intent');
  }
};

module.exports = { createPaymentIntent };
