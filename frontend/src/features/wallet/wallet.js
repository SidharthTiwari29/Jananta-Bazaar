// Wallet.jsx

import React from 'react';
import { FaCoins, FaHeart, FaGift } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Wallet = () => {
  const userWallet = {
    coins: 320,
    donationTotal: 350,
    rewards: 150,
    isSubscribed: true,
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">Janata Wallet</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-center p-4 bg-yellow-50 rounded-xl shadow">
          <FaCoins className="text-yellow-500 text-3xl mr-4" />
          <div>
            <p className="text-lg font-semibold">Coins</p>
            <p className="text-2xl font-bold text-gray-700">{userWallet.coins}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-red-50 rounded-xl shadow">
          <FaHeart className="text-red-400 text-3xl mr-4" />
          <div>
            <p className="text-lg font-semibold">Donated</p>
            <p className="text-xl font-bold text-gray-700">₹{userWallet.donationTotal}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-green-50 rounded-xl shadow">
          <FaGift className="text-green-500 text-3xl mr-4" />
          <div>
            <p className="text-lg font-semibold">Rewards</p>
            <p className="text-xl font-bold text-gray-700">₹{userWallet.rewards}</p>
          </div>
        </div>

        <div className="flex items-center p-4 bg-blue-50 rounded-xl shadow">
          <MdSubscriptions className="text-blue-500 text-3xl mr-4" />
          <div>
            <p className="text-lg font-semibold">Subscription</p>
            <p className={`text-xl font-bold ${userWallet.isSubscribed ? 'text-green-700' : 'text-gray-500'}`}>
              {userWallet.isSubscribed ? 'Active' : 'Not Subscribed'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-4">
        <Link to="/donation-receipts" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
          View Donations
        </Link>
        <Link to="/subscription" className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Manage Subscription
        </Link>
        <Link to="/coins" className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
          Coin History
        </Link>
        <Link to="/rewards" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
          Auto Rewards
        </Link>
      </div>
    </div>
  );
};

export default Wallet;

