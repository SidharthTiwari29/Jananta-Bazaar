import React, { useState, useEffect } from 'react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    // Sample data — replace with API call or global state
    const sampleItems = [
      {
        id: 1,
        name: 'Fortune Oil 1L',
        price: 150,
        image: '/images/products/oil.jpg',
      },
      {
        id: 2,
        name: 'Colgate Toothpaste 100g',
        price: 60,
        image: '/images/products/toothpaste.jpg',
      },
    ];
    setWishlistItems(sampleItems);
  }, []);

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToCart = (item) => {
    // Simulated action — replace with actual add-to-cart logic
    console.log('Moved to cart:', item);
    removeFromWishlist(item.id);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-green-600 mb-4">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-3"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={() => moveToCart(item)}
                  className="px-4 py-1 text-white bg-orange-500 rounded hover:bg-orange-600"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

