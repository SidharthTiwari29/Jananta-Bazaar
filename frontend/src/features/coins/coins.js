// frontend/src/features/coins/Coins.jsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { formatDistanceToNow } from 'date-fns';

const redemptionMilestones = [
  { coins: 100, reward: 200 },
  { coins: 250, reward: 500 },
  { coins: 500, reward: 850 },
];

const Coins = ({ coins = 145, expiryDate = '2025-07-20' }) => {
  const getNextMilestone = () => {
    return redemptionMilestones.find(m => coins < m.coins) || redemptionMilestones[redemptionMilestones.length - 1];
  };

  const { coins: nextCoins, reward } = getNextMilestone();
  const progress = Math.min((coins / nextCoins) * 100, 100);
  const expiryIn = formatDistanceToNow(new Date(expiryDate), { addSuffix: true });

  return (
    <Card className="bg-yellow-50 shadow-md p-4">
      <CardContent className="space-y-4">
        <div className="text-xl font-bold text-yellow-800">Your Janata Coins</div>
        <div className="text-4xl font-extrabold text-yellow-600">{coins} Coins</div>

        <div className="text-sm text-gray-600">Coins expire {expiryIn}</div>

        <Progress value={progress} className="h-3 bg-yellow-200" />

        <div className="text-sm text-gray-800 mt-1">
          {coins < nextCoins
            ? `Earn ${nextCoins - coins} more coins to redeem ₹${reward} off.`
            : `You're eligible to redeem ₹${reward} off your next order!`}
        </div>

        <div className="text-xs text-gray-500 mt-2">
          Earn 1 coin for every ₹10 spent. Coins can be redeemed for instant savings at checkout.
        </div>
      </CardContent>
    </Card>
  );
};

export default Coins;

