// src/components/user/UserProfile.jsx
import React from 'react';
import { useUser } from '../../context/UserContext';
import SubscriptionBadge from '../subscription/SubscriptionBadge';
import LogoutButton from './LogoutButton';  // Corrected import path

const UserProfile = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div className="text-center py-10 text-orange-600">Loading profile...</div>;
  }

  if (!user) {
    return (
      <div className="text-center py-10 text-gray-600">
        Please <a href="/login" className="text-orange-600 font-semibold">log in</a> to view your profile.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-orange-600">User Profile</h2>

      <div className="space-y-3 text-sm text-gray-700">
        <div><strong>Name:</strong> {user.name}</div>
        <div><strong>Email:</strong> {user.email}</div>
        {user.phone && <div><strong>Phone:</strong> {user.phone}</div>}
        <div><strong>Status:</strong> {user.isSubscribed ? 'Subscribed User' : 'Free User'}</div>
      </div>

      {user.isSubscribed && (
        <div className="mt-4">
          <SubscriptionBadge />
          <div className="mt-2 text-green-700 text-sm">
            You enjoy early lottery entry, bonus coins, and exclusive deals.
          </div>
        </div>
      )}

      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserProfile;
