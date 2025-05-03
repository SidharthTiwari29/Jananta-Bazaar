import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/common/ProductCard';
import BiddingClock from '../../components/home/BiddingClock';
import BidEncouragementModal from '../../components/modals/BidEncouragementModal';

const mockProducts = [
  {
    id: 1,
    name: 'Tata Tea Gold 1kg',
    image: '/images/products/tata-tea.png',
    basePrice: 420,
    currentTopBid: 390,
    description: 'Rich taste and irresistible aroma',
  },
  {
    id: 2,
    name: 'Saffola Oil 1L',
    image: '/images/products/saffola-oil.png',
    basePrice: 170,
    currentTopBid: 150,
    description: 'Light on your heart, rich in taste',
  },
];

const BiddingPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showBidModal, setShowBidModal] = useState(false);

  useEffect(() => {
    // Mock API call
    setProducts(mockProducts);
  }, []);

  const handleBidClick = (product) => {
    setSelectedProduct(product);
    setShowBidModal(true);
  };

  return (
    <div className="min-h-screen bg-white py-6 px-4 md:px-8">
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-1">Bidding Zone</h1>
        <p className="text-gray-600">Place your bids & win at your price!</p>
        <BiddingClock />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onBid={() => handleBidClick(product)}
            showBidButton
          />
        ))}
      </div>

      {showBidModal && selectedProduct && (
        <BidEncouragementModal
          product={selectedProduct}
          onClose={() => setShowBidModal(false)}
        />
      )}
    </div>
  );
};

export default BiddingPage;

