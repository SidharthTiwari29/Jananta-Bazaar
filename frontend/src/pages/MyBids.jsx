import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const MyBids = () => {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    axios.get('/api/user/mybids')
      .then(res => setBids(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">My Bids</h1>
      <ul className="space-y-2">
        {bids.map((bid, i) => (
          <li key={i} className="border p-3 rounded shadow">
            <p>Product: {bid.productName}</p>
            <p>Status: {bid.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBids;

