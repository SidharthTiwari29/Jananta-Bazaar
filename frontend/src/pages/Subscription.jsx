// src/pages/Subscription.jsx
import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axios'; // Updated import path

const Subscription = () => {
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance.get('/user/subscription')
      .then(res => setSubscription(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const handleSubscribe = async () => {
    try {
      const res = await axiosInstance.post('/payment/subscribe');
      window.location.href = res.data.paymentUrl; // Redirect to payment gateway
    } catch (err) {
      alert('Subscription failed. Try again.');
    }
  };

  if (loading) return <div className="p-6">Loading subscription info...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Subscription Plan</h1>
      {subscription?.active ? (
        <div className="space-y-2">
          <p className="text-green-600 font-semibold">Active Plan: ₹99/month</p>
          <p>Expiry: {new Date(subscription.expiresAt).toLocaleDateString()}</p>
          <button 
            onClick={handleSubscribe}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Renew Plan
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-red-500">You are not subscribed.</p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Early lottery access</li>
            <li>Shopping prioritization</li>
            <li>Earn extra reward coins</li>
          </ul>
          <button 
            onClick={handleSubscribe}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Subscribe for ₹99/month
          </button>
        </div>
      )}
    </div>
  );
};

export default Subscription;  // Add this line to fix the export issue
