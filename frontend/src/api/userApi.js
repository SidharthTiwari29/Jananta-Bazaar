import API from './axios';

// Fetch user profile (name, email, coins, etc.)
export const fetchUserProfile = async () => {
  const res = await API.get('/user/profile');
  return res.data;
};

// Fetch wallet balance and history
export const fetchWallet = async () => {
  const res = await API.get('/user/wallet');
  return res.data;
};

// Fetch user's rewards history
export const fetchRewards = async () => {
  const res = await API.get('/user/rewards');
  return res.data;
};

// Fetch donation receipts
export const fetchDonationReceipts = async () => {
  const res = await API.get('/user/donations');
  return res.data;
};

