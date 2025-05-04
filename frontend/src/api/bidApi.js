import API from './axios';

// Place a new bid
export const placeBid = async (productId, bidValue) => {
  const res = await API.post('/bids/place', { productId, bidValue });
  return res.data;
};

// Get all bids by user
export const getMyBids = async () => {
  const res = await API.get('/bids/my');
  return res.data;
};

// Validate a bid (client-side validation happens in utils, this hits backend)
export const validateBid = async (productId, bidValue) => {
  const res = await API.post('/bids/validate', { productId, bidValue });
  return res.data;
};

// Get live bid data for a product
export const getProductBidStatus = async (productId) => {
  const res = await API.get(`/bids/status/${productId}`);
  return res.data;
};

