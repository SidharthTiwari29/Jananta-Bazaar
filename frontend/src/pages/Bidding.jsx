
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axiosInstance';
import ProductCard from '../components/common/ProductCard';
import Timer from '../components/common/Timer';

const Bidding = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/bidding/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold mb-4">Live Bidding Arena</h1>
      <Timer />
      {loading ? (
        <p>Loading products...</p>
      ) : products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products available for bidding right now.</p>
      )}
    </div>
  );
};

export default Bidding;
