// src/utils/gateway.js
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "https://your-api.janata-bazaar.in";

// Create a reusable axios instance
const api = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
  timeout: 10000, // 10s timeout for all requests
});

/**
 * Process payment with backend gateway
 * @param {Object} paymentData
 * @returns {Promise<Object>}
 */
export const processPayment = async (paymentData) => {
  try {
    const res = await api.post("/payment/process", paymentData);
    return res.data;
  } catch (error) {
    console.error("Payment failed:", error);
    throw error.response?.data || { error: "Payment failed. Please try again." };
  }
};

/**
 * Fetch user's subscription status
 * @param {string} userId
 * @returns {Promise<Object>}
 */
export const fetchSubscriptionStatus = async (userId) => {
  try {
    const res = await api.get(`/subscriptions/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Subscription fetch failed:", error);
    throw error.response?.data || { error: "Could not fetch subscription status." };
  }
};
