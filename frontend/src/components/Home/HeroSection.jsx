// src/components/home/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/family-shopping-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-orange-200 to-orange-300 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Text */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="space-y-6 md:w-1/2 text-center md:text-left z-10"
        >
          <h1 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-900 via-amber-700 to-orange-800 bg-clip-text text-transparent font-serif drop-shadow-md">
            Janata Bazaar
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-orange-800 font-sans leading-snug">
            Set Your Price. <br className="hidden md:block" />
            Build Your Dreams.
          </p>
          <Link to="/bidding">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300"
            >
              Start Bidding
            </motion.button>
          </Link>
          <p className="text-sm text-orange-700 italic pt-2">
            “Why pay full price, when you can pay your price?”
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="mt-12 md:mt-0 md:w-1/2 relative z-0"
        >
          <img
            src={heroImage}
            alt="Family shopping illustration"
            className="w-full max-w-lg mx-auto drop-shadow-xl"
          />
        </motion.div>
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-300 rounded-full opacity-30 blur-3xl z-0"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-orange-400 rounded-full opacity-20 blur-2xl z-0"></div>
    </section>
  );
};

export default HeroSection;
