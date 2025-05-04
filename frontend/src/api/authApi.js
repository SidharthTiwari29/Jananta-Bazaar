import API from './axios';

// Login user
export const loginUser = async (credentials) => {
  const res = await API.post('/auth/login', credentials);
  return res.data;
};

// Signup user
export const signupUser = async (userData) => {
  const res = await API.post('/auth/signup', userData);
  return res.data;
};

// Logout user
export const logoutUser = async () => {
  const res = await API.post('/auth/logout');
  return res.data;
};

// Get current user profile (if JWT token exists)
export const getCurrentUser = async () => {
  const res = await API.get('/auth/me');
  return res.data;
};

