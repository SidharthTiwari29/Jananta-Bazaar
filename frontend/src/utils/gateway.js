// utils/gateway.js
import axios from "axios";

// Base URL (set this to your backend endpoint)
const API_BASE = import.meta.env.VITE_API_URL || "https://your-api.janata-bazaar.in";

// Real payment processing
export const processPayment = async (paymentData) => {
  try {
    const res = await axios.post(`${API_BASE}/payment/process`, paymentData, {
      withCredentials: true, // if using cookies for JWT
    });
    return res.data;
  } catch (error) {
    console.error("Payment failed:", error);
    throw error.response?.data || { error: "Payment failed" };
  }
};

// Real subscription status fetch
export const fetchSubscriptionStatus = async (userId) => {
  try {
    const res = await axios.get(`${API_BASE}/subscriptions/${userId}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("Subscription fetch failed:", error);
    throw error.response?.data || { error: "Subscription fetch failed" };
  }
};

