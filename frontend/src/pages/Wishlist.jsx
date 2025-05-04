import React, { useEffect, useState } from 'react';
import axios from '../utils/axiosInstance';

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    axios.get('/api/user/wishlist')
      .then(res => setWishlist(res.data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      <ul className="space-y-2">
        {wishlist.map((item, index) => (
          <li key={index} className="p-3 border rounded shadow">{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;

