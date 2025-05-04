// src/components/home/LiveBargains.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSpeakerphone } from "react-icons/hi";

const sampleBargains = [
  "Priya just grabbed Aashirvaad Atta at ₹250!",
  "Vikas won the Surf Excel bid at ₹185!",
  "Anjali got Tata Salt for just ₹20!",
  "Ravi placed the highest bid for Amul Ghee!",
  "Nisha saved ₹50 on Fortune Oil!",
  "Amit locked in Britannia Biscuits at 30% off!",
];

const LiveBargains = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate live bargain messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sampleBargains.length);
    }, 3000); // change message every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex items-center mb-4">
        <HiSpeakerphone className="text-orange-500 text-2xl mr-2" />
        <h3 className="text-xl font-semibold text-gray-800">Live Bargains</h3>
      </div>
      <div className="h-10 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-gray-700"
          >
            {sampleBargains[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiveBargains;
