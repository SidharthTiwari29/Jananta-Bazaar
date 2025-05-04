// src/components/home/HeroSection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/family-shopping-illustration.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-100 to-orange-300 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Text Content */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-5 md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-5xl font-extrabold text-orange-900 font-serif">
            Janata Bazaar
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-orange-800 font-sans">
            Set Your Price. <br className="hidden md:block" />
            Build Your Dreams.
          </p>
          <Link to="/bidding">
            <button className="mt-4 px-8 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300">
              Start Bidding
            </button>
          </Link>
          <p className="text-sm text-orange-700 italic pt-2">
            “Why pay full price, when you can pay your price?”
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8 md:mt-0 md:w-1/2"
        >
          <img
            src={heroImage}
            alt="Family shopping illustration"
            className="w-full h-auto drop-shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
