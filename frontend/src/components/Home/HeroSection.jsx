import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const fireworkGlow = '/firework-glow.png'; // From public folder

  return (
    <section className="relative bg-orange-50 overflow-hidden">
      {/* Background Firework Glow */}
      <img
        src={fireworkGlow}
        alt="Firework Glow"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative z-10 text-center">
        <motion.h1
          className="text-4xl lg:text-6xl font-extrabold text-orange-700 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Janata Bazaar
        </motion.h1>

        <motion.p
          className="mt-4 text-lg lg:text-2xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Desi deals. Real bidding. Zero bakwaas.  
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Link
            to="/bidding"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Start Bidding
          </Link>
          <Link
            to="/lottery"
            className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-50 font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            View Lottery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
