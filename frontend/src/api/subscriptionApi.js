import API from './axios';

// Get current subscription status
export const getSubscriptionStatus = async () => {
  const res = await API.get('/subscription/status');
  return res.data;
};

// Start new subscription
export const startSubscription = async () => {
  const res = await API.post('/subscription/start');
  return res.data;
};

// Renew subscription
export const renewSubscription = async () => {
  const res = await API.post('/subscription/renew');
  return res.data;
};

