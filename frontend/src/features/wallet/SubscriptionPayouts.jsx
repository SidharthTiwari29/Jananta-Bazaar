// SubscriptionPayouts.jsx

import React from 'react';

const SubscriptionPayouts = () => {
  const payouts = [
    {
      id: 1,
      title: 'Early Access Winner',
      detail: 'You won the Happy Hour deal due to early access.',
      date: '2025-05-01',
      benefit: 'Free Product',
    },
    {
      id: 2,
      title: 'Coin Multiplier Bonus',
      detail: '2x coins credited on ₹500+ purchase.',
      date: '2025-05-03',
      benefit: '+80 Coins',
    },
    {
      id: 3,
      title: 'Subscription Discount Applied',
      detail: '₹100 discount on your grocery order.',
      date: '2025-05-04',
      benefit: '₹100 Discount',
    },
  ];

  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4 text-orange-600">Subscription Payouts</h2>
      <ul className="divide-y divide-gray-200">
        {payouts.map((payout) => (
          <li key={payout.id} className="py-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{payout.title}</p>
                <p className="text-sm text-gray-500">{payout.detail}</p>
                <p className="text-xs text-gray-400">{payout.date}</p>
              </div>
              <span className="text-green-600 font-semibold">{payout.benefit}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriptionPayouts;
