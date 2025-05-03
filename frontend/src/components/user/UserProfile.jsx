import React from 'react';
import { BadgeCheck } from 'lucide-react';

const UserProfile = ({ user }) => {
  const { name, email, isSubscribed, coins, totalSpend } = user;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">User Profile</h2>
          {isSubscribed && (
            <div className="flex items-center text-green-600 font-semibold">
              <BadgeCheck className="mr-1 w-5 h-5" /> Subscribed User
            </div>
          )}
        </div>
        <div className="space-y-2 text-gray-700">
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Email:</span> {email}</p>
          <p><span className="font-semibold">Coins Collected:</span> {coins}</p>
          <p><span className="font-semibold">Total Spend:</span> ₹{totalSpend}</p>
        </div>

        {isSubscribed && (
          <div className="mt-6 bg-green-50 border border-green-300 p-4 rounded-xl">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Subscriber Benefits:</h3>
            <ul className="list-disc pl-6 text-sm text-green-800">
              <li>Early access to Happy Hour bidding</li>
              <li>Exclusive access to higher lottery slots</li>
              <li>Priority in coin redemption deals</li>
              <li>Dedicated customer support line</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
