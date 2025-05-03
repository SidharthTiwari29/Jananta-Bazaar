// frontend/src/features/lottery/Lottery.jsx

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mockLotteryData = [
  {
    date: 'May 2, 2025',
    slots: [
      {
        slot: 'Slot A',
        winners: [
          { name: 'Ravi K.', rewardPercent: 50 },
          { name: 'Meena P.', rewardPercent: 30 }
        ]
      },
      {
        slot: 'Slot B',
        winners: [
          { name: 'Sahil V.', rewardPercent: 50 },
          { name: 'Renu S.', rewardPercent: 30 }
        ]
      }
    ]
  },
  {
    date: 'May 1, 2025',
    slots: [
      {
        slot: 'Slot C',
        winners: [
          { name: 'Arjun N.', rewardPercent: 50 },
          { name: 'Sneha T.', rewardPercent: 30 }
        ]
      }
    ]
  }
];

const Lottery = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-green-800">Daily Lottery Winners</h2>

      {mockLotteryData.map((day, index) => (
        <Card key={index} className="bg-green-50 shadow-sm">
          <CardContent className="space-y-3 py-4">
            <h3 className="text-lg font-semibold text-green-700">{day.date}</h3>
            {day.slots.map((slot, idx) => (
              <div key={idx} className="ml-4">
                <div className="text-md font-medium">{slot.slot}</div>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {slot.winners.map((winner, i) => (
                    <li key={i}>
                      {winner.name} - <Badge variant="outline">{winner.rewardPercent}% reward</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}

      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 text-sm text-yellow-900 rounded-md">
        Tip: Low bidders can win surprise 20% lottery tickets when they break the bid barrier! Keep trying daily.
      </div>
    </div>
  );
};

export default Lottery;

