import API from './axios';

// Login user
export const loginUser = async (credentials) => {
  try {
    const res = await API.post('/auth/login', credentials);
    return res.data; // Assuming res.data contains the JWT token
  } catch (error) {
    console.error("Login error: ", error.response?.data || error.message);
    throw error; // Re-throw error for handling in components
  }
};

// Signup user
export const signupUser = async (userData) => {
  try {
    const res = await API.post('/auth/signup', userData);
    return res.data;
  } catch (error) {
    console.error("Signup error: ", error.response?.data || error.message);
    throw error;
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    const res = await API.post('/auth/logout');
    return res.data;
  } catch (error) {
    console.error("Logout error: ", error.response?.data || error.message);
    throw error;
  }
};

// Get current user profile (if JWT token exists)
export const getCurrentUser = async () => {
  try {
    const res = await API.get('/auth/me');
    return res.data;
  } catch (error) {
    console.error("Get user profile error: ", error.response?.data || error.message);
    throw error;
  }
};
