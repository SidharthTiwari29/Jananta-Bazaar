import API from './axios';

// Initiate a payment (e.g., for subscription, coins purchase)
export const initiatePayment = async (amount, purpose) => {
  const res = await API.post('/payment/initiate', { amount, purpose });
  return res.data;
};

// Confirm payment after gateway redirect (used with real payment gateway)
export const confirmPayment = async (paymentId, gatewayResponse) => {
  const res = await API.post('/payment/confirm', { paymentId, gatewayResponse });
  return res.data;
};

// Fetch user's past payments
export const getPaymentHistory = async () => {
  const res = await API.get('/payment/history');
  return res.data;
};

// Refund request (if supported)
export const requestRefund = async (paymentId) => {
  const res = await API.post('/payment/refund', { paymentId });
  return res.data;
};

