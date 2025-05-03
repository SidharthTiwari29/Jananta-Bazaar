// frontend/src/features/subscription/Subscription.jsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const perks = [
  'Early access to daily lottery',
  'Priority in bidding windows',
  'Higher Janata Coin returns',
  'Exclusive festive deals',
  'Support Needy with each Subscription',
];

const Subscription = () => {
  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <Card className="shadow-xl bg-gradient-to-r from-orange-50 to-green-50">
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-orange-600">Become a Janata Premium Member</h2>
            <p className="text-gray-700 mt-2">Earn early benefits, exclusive entries, and boost your savings!</p>
          </div>

          <ul className="space-y-2">
            {perks.map((perk, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-gray-800">
                <CheckCircle2 className="text-green-600" size={20} />
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-md px-6 py-2 rounded-lg">
              Subscribe Now – ₹99/month
            </Button>
            <p className="text-sm text-gray-600 mt-2">Cancel anytime. Auto-renewal available.</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Subscription;

