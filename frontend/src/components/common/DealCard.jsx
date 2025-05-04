// src/components/common/DealCard.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const formatTime = (seconds) => {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs}h ${mins}m ${secs}s`;
};

const DealCard = ({ product }) => {
  const [timeLeft, setTimeLeft] = useState(product.timeLeft || 0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="bg-white rounded-2xl shadow hover:shadow-xl transition p-4 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-32 object-contain mb-4 mx-auto"
      />
      <h3 className="text-md font-semibold text-gray-800 mb-1">
        {product.name}
      </h3>
      <div className="text-sm text-gray-600 mb-1">
        <span className="line-through mr-2">₹{product.mrp}</span>
        <span className="text-green-700 font-bold">₹{product.price}</span>
      </div>
      <p className="text-xs text-orange-600 font-medium mb-2">
        Save {product.discount}
      </p>
      {timeLeft > 0 && (
        <p className="text-xs text-red-500 font-semibold">
          Ends in: {formatTime(timeLeft)}
        </p>
      )}
    </motion.div>
  );
};

export default DealCard;
