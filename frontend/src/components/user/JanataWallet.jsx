import React, { useState, useEffect } from 'react';
import { FaCoins, FaRupeeSign, FaGift } from 'react-icons/fa';

const JantaWallet = () => {
  const [coinBalance, setCoinBalance] = useState(230);
  const [walletBalance, setWalletBalance] = useState(120);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch wallet and coin data from backend API (mocked here)
    setTransactions([
      { id: 1, type: 'Earned', coins: 50, date: '2025-05-01' },
      { id: 2, type: 'Redeemed', coins: 100, date: '2025-04-28' },
      { id: 3, type: 'Earned', coins: 80, date: '2025-04-20' },
    ]);
  }, []);

  const redeemOptions = [
    { coins: 100, value: 200 },
    { coins: 250, value: 500 },
    { coins: 500, value: 850 },
  ];

  const redeemCoins = (coins, value) => {
    if (coinBalance < coins) {
      alert('Not enough coins to redeem.');
      return;
    }
    setCoinBalance((prev) => prev - coins);
    setWalletBalance((prev) => prev + value);
    setTransactions((prev) => [
      { id: prev.length + 1, type: 'Redeemed', coins, date: new Date().toISOString().slice(0, 10) },
      ...prev,
    ]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Janata Wallet</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-orange-100 p-4 rounded flex items-center gap-3">
          <FaCoins className="text-orange-500 text-3xl" />
          <div>
            <p className="text-sm text-gray-700">Golden Coins</p>
            <p className="text-xl font-semibold">{coinBalance}</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded flex items-center gap-3">
          <FaRupeeSign className="text-green-600 text-3xl" />
          <div>
            <p className="text-sm text-gray-700">Wallet Balance</p>
            <p className="text-xl font-semibold">₹{walletBalance}</p>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-800">Redeem Coins</h3>
      <div className="flex flex-wrap gap-4 mb-6">
        {redeemOptions.map(({ coins, value }) => (
          <button
            key={coins}
            onClick={() => redeemCoins(coins, value)}
            className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded shadow text-sm font-medium"
          >
            {coins} Coins = ₹{value}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-2 text-gray-800">Transaction History</h3>
      <ul className="space-y-2 text-sm">
        {transactions.map((tx) => (
          <li key={tx.id} className="flex justify-between border-b pb-1 text-gray-700">
            <span>{tx.type}</span>
            <span>{tx.coins} coins</span>
            <span>{tx.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JantaWallet;

