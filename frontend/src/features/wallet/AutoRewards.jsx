// AutoRewards.jsx

import React from 'react';

const AutoRewards = () => {
  const rewards = [
    {
      id: 1,
      reason: 'High Bid Bonus',
      date: '2025-05-01',
      coins: 50,
    },
    {
      id: 2,
      reason: 'Referral Reward',
      date: '2025-05-02',
      coins: 100,
    },
    {
      id: 3,
      reason: 'Milestone Achievement: 500 Coins',
      date: '2025-05-03',
      coins: 150,
    },
  ];

  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4 text-green-600">Auto Rewards Summary</h2>
      <ul className="divide-y divide-gray-200">
        {rewards.map((reward) => (
          <li key={reward.id} className="py-3">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">{reward.reason}</p>
                <p className="text-sm text-gray-500">{reward.date}</p>
              </div>
              <div className="text-yellow-600 font-bold">{reward.coins} Coins</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoRewards;
