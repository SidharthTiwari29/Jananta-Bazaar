// src/components/payments/SubscriptionPayment.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const SubscriptionPayment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate successful payment
    setTimeout(() => {
      localStorage.setItem('isSubscribed', true);
      navigate('/profile');
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Janata Bazaar Premium</h2>
      <p className="mb-6">Get early access to lotteries, bonus coins, exclusive deals, and much more!</p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Subscription Plan</h3>
        <p className="mb-4">Monthly Fee: ₹199</p>
        <Button onClick={handlePayment} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full">
          Proceed to Pay
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionPayment;
