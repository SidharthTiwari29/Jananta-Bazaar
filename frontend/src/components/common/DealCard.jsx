// src/components/common/DealCard.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Time formatting utility for HH:MM:SS
const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
};

const DealCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(product.timeLeft || 0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (timeLeft === 0) return null; // hide expired deal

  return (
    <motion.div
      className="bg-white/60 backdrop-blur-lg border border-orange-100 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 p-5 flex flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-32 object-contain mb-4 mx-auto drop-shadow-md"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h3>

      <div className="text-center mt-2 mb-1">
        <span className="text-sm text-gray-500 line-through mr-2">₹{product.mrp}</span>
        <span className="text-lg text-green-600 font-bold">₹{product.price}</span>
      </div>

      <p className="text-sm text-orange-500 font-medium text-center mb-2">
        Save {product.discount}
      </p>

      <div className="text-xs text-red-600 font-semibold bg-red-50 px-3 py-1 rounded-full text-center mx-auto w-fit">
        Ends in: {formatTime(timeLeft)}
      </div>
    </motion.div>
  );
};

export default DealCard;
