// frontend/src/features/subscription/Subscription.jsx

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/store/userStore';

const perks = [
  'Early access to daily lottery',
  'Priority in bidding windows',
  'Higher Janata Coin returns',
  'Exclusive festive deals',
  'Support Needy with each Subscription',
];

const Subscription = () => {
  const navigate = useNavigate();
  const { isSubscribed, subscribeUser } = useUserStore();
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      // Navigate to mock payment page or integrate payment gateway
      navigate('/payment/subscription');
    } catch (error) {
      console.error('Subscription Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <Card className="shadow-xl bg-gradient-to-r from-orange-50 to-green-50">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-600">
              {isSubscribed ? 'You are a Premium Member' : 'Become a Janata Premium Member'}
            </h2>
            <p className="text-gray-700 mt-2">
              {isSubscribed
                ? 'Enjoy all the benefits as a premium user!'
                : 'Earn early benefits, exclusive entries, and boost your savings!'}
            </p>
          </div>

          <ul className="space-y-2">
            {perks.map((perk, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-gray-800">
                <CheckCircle2 className="text-green-600" size={20} />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          {!isSubscribed && (
            <div className="text-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-md px-6 py-2 rounded-lg"
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Subscribe Now – ₹99/month'}
              </Button>
              <p className="text-sm text-gray-600 mt-2">Cancel anytime. Auto-renewal available.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default Subscription;
