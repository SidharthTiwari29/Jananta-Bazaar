// src/components/common/ProductCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onBidClick }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">MRP: ₹{product.mrp}</p>
        <p className="text-sm text-green-600 mt-1">You Save: ₹{product.discount}</p>
        {onBidClick && (
          <button
            onClick={() => onBidClick(product)}
            className="mt-3 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-xl transition"
          >
            Bid Now
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
