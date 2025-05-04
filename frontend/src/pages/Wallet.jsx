import React, { useEffect, useState, useContext } from 'react';
import axios from '../utils/axiosInstance';
import { AuthContext } from '../context/AuthContext';
import SubscriptionBadge from '../components/user/SubscriptionBadge';

const Wallet = () => {
  const { user } = useContext(AuthContext);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    axios.get('/api/user/wallet')
      .then(res => setWallet(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Wallet</h1>
      {wallet ? (
        <div className="space-y-2">
          <p>Coins: {wallet.coins}</p>
          <p>Rewards: ₹{wallet.rewards}</p>
          <p>Balance: ₹{wallet.balance}</p>
          <SubscriptionBadge level={wallet.subscription} />
        </div>
      ) : <p>Loading wallet data...</p>}
    </div>
  );
};

export default Wallet;

