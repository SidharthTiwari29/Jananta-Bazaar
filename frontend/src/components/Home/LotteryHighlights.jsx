import React from 'react';

const dummyWinners = [
  { name: 'Ravi Kumar', reward: '50% Cashback Coupon' },
  { name: 'Anjali Singh', reward: '30% Shopping Credit' },
  { name: 'Tushar Patel', reward: 'Free Janata Subscription' },
];

const LotteryHighlights = () => {
  return (
    <section className="bg-yellow-50 py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6">
        Lottery Highlights
      </h2>

      <div className="max-w-3xl mx-auto">
        <ul className="divide-y divide-yellow-200 rounded-lg shadow-md bg-white">
          {dummyWinners.map((winner, index) => (
            <li key={index} className="flex items-center justify-between px-6 py-4">
              <div className="text-lg font-medium text-gray-800">
                {winner.name}
              </div>
              <div className="text-green-600 font-semibold text-sm">
                {winner.reward}
              </div>
            </li>
          ))}
        </ul>

        <p className="text-center text-sm text-gray-600 mt-6 italic">
          Only the top 10% of profitable bidders are eligible for lottery rewards. 
          Push your bids higher, and you could be next!
        </p>
      </div>
    </section>
  );
};

export default LotteryHighlights;

